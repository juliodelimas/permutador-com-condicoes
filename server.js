/**
 * Servidor HTTP simples para o Permutador com Condições
 * Alternativa ao live-server usando apenas Node.js nativo
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "localhost";

// MIME types para diferentes arquivos
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

// Servidor HTTP
const server = http.createServer((req, res) => {
  let filePath = "." + req.url;

  // Se é a raiz, serve o index.html
  if (filePath === "./") {
    filePath = "./index.html";
  }

  // Verifica a extensão do arquivo
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || "application/octet-stream";

  // Lê o arquivo
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        // Arquivo não encontrado
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
                    <h1>404 - Arquivo não encontrado</h1>
                    <p>O arquivo <code>${req.url}</code> não foi encontrado.</p>
                    <a href="/">Voltar ao início</a>
                `);
      } else {
        // Erro interno do servidor
        res.writeHead(500);
        res.end(`Erro interno do servidor: ${error.code}`);
      }
    } else {
      // Sucesso - serve o arquivo
      res.writeHead(200, {
        "Content-Type": mimeType,
        "Cache-Control": "no-cache",
      });
      res.end(content, "utf-8");
    }
  });
});

// Inicia o servidor
server.listen(PORT, HOST, () => {
  const url = `http://${HOST}:${PORT}`;
  console.log(`🚀 Servidor rodando em ${url}`);
  console.log(`📁 Servindo arquivos de: ${__dirname}`);
  console.log(`⏹️  Pressione Ctrl+C para parar o servidor`);

  // Tenta abrir o navegador automaticamente
  const openCommand =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
      ? "start"
      : "xdg-open";

  exec(`${openCommand} ${url}`, (error) => {
    if (error) {
      console.log(`🌐 Abra manualmente: ${url}`);
    } else {
      console.log(`🌐 Navegador aberto automaticamente`);
    }
  });
});

// Tratamento de erro do servidor
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`❌ Erro: Porta ${PORT} já está em uso!`);
    console.log(`💡 Tente: PORT=3000 node server.js`);
  } else {
    console.error("❌ Erro no servidor:", error);
  }
  process.exit(1);
});

// Tratamento de sinais para finalizar graciosamente
process.on("SIGINT", () => {
  console.log("\n👋 Finalizando servidor...");
  server.close(() => {
    console.log("✅ Servidor finalizado.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("\n👋 Finalizando servidor...");
  server.close(() => {
    console.log("✅ Servidor finalizado.");
    process.exit(0);
  });
});
