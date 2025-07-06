# 🚀 Guia de Início Rápido

## ⚡ Execução Imediata

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd permutador-com-condicoes

# Instale e execute
npm install && npm start
```

**Pronto!** O projeto abrirá automaticamente no navegador em `http://localhost:8000`.

## 🎯 Primeiro Uso

### 1. Definir Variáveis de Entrada

``` text
Usuario: admin; user; guest
Senha: 123; password; vazio
```

### 2. Definir Variáveis de Saída

``` text
Resultado: sucesso; falha
Status: logado; bloqueado
```

### 3. Gerar Tabela

Clique em **"Permutar"** para gerar todas as combinações.

### 4. Usar Templates

- **Template Padrão (CT)**: Formato tradicional
- **Template Padrão (Gherkin)**: Formato BDD
- **Template Personalizado**: Crie seu próprio

### 5. Exportar Resultados

- **CSV/JSON**: Para a tabela de permutações
- **TXT**: Para os templates populados

## 🔧 Opções de Servidor

### Opção 1: Live Server (Recomendado)

```bash
npm start
```

- Recarregamento automático
- Porta 8000
- Abre navegador automaticamente

### Opção 2: Servidor Node.js Nativo

```bash
npm run server
```

- Servidor HTTP nativo
- Porta 3000
- Sem recarregamento automático

### Opção 3: Arquivo Local

Abra `index.html` diretamente no seu navegador.

## 📋 Próximos Passos

1. **Explore os Exemplos**: Teste com diferentes tipos de dados
2. **Personalize Templates**: Crie templates específicos para seu projeto
3. **Leia a Documentação**: Consulte `README.md` para funcionalidades avançadas
4. **Para Desenvolvedores**: Veja `DEVELOPMENT.md` para detalhes técnicos

## 🆘 Problemas Comuns

**Erro de dependências:**

```bash
npm install
```

**Porta em uso:**

```bash
npx live-server --port=8081
```

**Arquivos não carregam:**

- Verifique se está executando um servidor
- Confirme que todos os arquivos estão presentes

---

💡 **Dica**: Para melhor experiência, use o comando `npm start` que configura tudo automaticamente!
