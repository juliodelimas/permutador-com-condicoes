/**
 * Aplicação Principal - Permutador com Condições
 */
class PermutadorApp {
  constructor() {
    this.initializeEventListeners();
  }

  /**
   * Inicializa todos os event listeners da aplicação
   */
  initializeEventListeners() {
    // Event listener para gerar tabela
    document.getElementById("generateTable").addEventListener("click", () => {
      this.generateTable();
    });

    // Event listeners para downloads
    document.getElementById("downloadCSV").addEventListener("click", () => {
      this.downloadCSV();
    });

    document.getElementById("downloadJSON").addEventListener("click", () => {
      this.downloadJSON();
    });

    // Event listeners para templates
    document
      .getElementById("generateTemplates")
      .addEventListener("click", () => {
        this.generateTemplates();
      });

    document
      .getElementById("downloadTemplates")
      .addEventListener("click", () => {
        this.downloadTemplates();
      });

    // Event listeners para templates padrão
    document
      .getElementById("setDefaultTemplate")
      .addEventListener("click", () => {
        this.setDefaultTemplate();
      });

    document
      .getElementById("setGherkinTemplate")
      .addEventListener("click", () => {
        this.setGherkinTemplate();
      });
  }

  /**
   * Gera a tabela de permutações
   */
  generateTable() {
    const inputText = document.getElementById("inputVariables").value.trim();
    const outputText = document.getElementById("outputVariables").value.trim();

    // Validação de entrada
    if (!inputText) {
      this.showError(
        "🥹 Por favor, preencha o campo de 'Variáveis de Entrada'."
      );
      return;
    }

    if (!outputText) {
      this.showError("🥹 Por favor, preencha o campo de 'Variáveis de Saída'.");
      return;
    }

    try {
      const partitionsInput = parseInput(inputText).partitions;
      const partitionsOutput = parseInput(outputText).partitions;

      // Validação das partições
      if (partitionsInput.some((p) => p.length === 0)) {
        this.showError(
          "Algumas variáveis de entrada não possuem partições válidas."
        );
        return;
      }

      if (partitionsOutput.some((p) => p.length === 0)) {
        this.showError(
          "Algumas variáveis de saída não possuem partições válidas."
        );
        return;
      }

      const permutations = permute(partitionsInput);
      const headersInput = parseInput(inputText).variables;
      const headersOutput = parseInput(outputText).variables;

      const resultTable = generateTableHTML(
        permutations,
        partitionsOutput,
        headersInput,
        headersOutput
      );

      // Atualiza a interface
      this.showResults();
      document.getElementById("resultTable").innerHTML = resultTable;

      // Mostra mensagem de sucesso
      const totalPermutations = permutations.length;
      this.showSuccess(
        `✅ Permutação realizada com sucesso! ${totalPermutations} combinaç${
          totalPermutations > 1 ? "ões" : "ão"
        } gerada${totalPermutations > 1 ? "s" : ""}.`
      );

      // Limpa erros anteriores
      this.clearError();
    } catch (error) {
      this.showError(
        "Erro ao processar os dados. Verifique o formato das entradas."
      );
      console.error("Erro:", error);
    }
  }

  /**
   * Mostra a seção de resultados
   */
  showResults() {
    document.getElementById("resultado-divisor").style.display = "block";
    document.getElementById("resultado-title").style.display = "block";
    document.getElementById("downloadCSV").style.display = "inline-block";
    document.getElementById("downloadJSON").style.display = "inline-block";
    document.getElementById("template").classList.remove("hidden");
    document.getElementById("setDefaultTemplate").style.display =
      "inline-block";
    document.getElementById("setGherkinTemplate").style.display =
      "inline-block";
  }

  /**
   * Download da tabela em formato CSV
   */
  downloadCSV() {
    const csvContent = generateCSV();
    if (csvContent) {
      downloadFile(
        csvContent,
        `tabela_permutacao_com_condicoes_${
          new Date().toISOString().split("T")[0]
        }.csv`,
        "text/csv"
      );
      this.showSuccess("📊 Tabela CSV gerada com sucesso!");
    } else {
      this.showError("Nenhuma tabela csv foi gerada para download.");
    }
  }

  /**
   * Download da tabela em formato JSON
   */
  downloadJSON() {
    const jsonContent = generateJSON();
    if (jsonContent !== "[]") {
      downloadFile(
        jsonContent,
        `tabela_permutacao_com_condicoes_${
          new Date().toISOString().split("T")[0]
        }.json`,
        "application/json"
      );
      this.showSuccess("📋 Tabela JSON gerada com sucesso!");
    } else {
      this.showError("Nenhuma tabela json foi gerada para download.");
    }
  }

  /**
   * Gera templates populados
   */
  generateTemplates() {
    const templateText = document.getElementById("customTemplate").value.trim();

    if (!templateText) {
      this.showError("Por favor, preencha o template personalizado.");
      return;
    }

    const table = document.querySelector("#resultTable table");
    if (!table) {
      this.showError("Gere a tabela primeiro antes de criar templates.");
      return;
    }

    try {
      const rows = table.querySelectorAll("tbody tr");
      const headers = Array.from(table.querySelectorAll("th")).map(
        (th) => th.innerText
      );
      const populatedTemplates = [];

      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const rowData = {};

        cells.forEach((cell, index) => {
          const header = headers[index];
          const select = cell.querySelector("select");
          if (select) {
            rowData[header] = select.value;
          } else {
            rowData[header] = cell.innerText;
          }
        });

        const populatedTemplate = populateTemplate(templateText, rowData);
        populatedTemplates.push(populatedTemplate);
      });

      const outputTextarea = document.getElementById("populatedTemplates");
      outputTextarea.value = populatedTemplates.join("\n\n---\n\n");
      outputTextarea.style.display = "block";

      document.getElementById("downloadTemplates").style.display =
        "inline-block";

      // Mostra mensagem de sucesso
      this.showSuccess(
        `🎯 Templates populados com sucesso! ${
          populatedTemplates.length
        } template${populatedTemplates.length > 1 ? "s" : ""} gerado${
          populatedTemplates.length > 1 ? "s" : ""
        }.`
      );

      // Limpa erros anteriores
      this.clearError();
    } catch (error) {
      this.showError(
        "Erro ao gerar templates. Verifique o formato do template."
      );
      console.error("Erro na generateTemplates:", error);
    }
  }

  /**
   * Download dos templates populados
   */
  downloadTemplates() {
    const content = document.getElementById("populatedTemplates").value;
    if (content.trim()) {
      downloadFile(
        content,
        `resultados_template_${new Date().toISOString().split("T")[0]}.txt`,
        "text/plain"
      );
      this.showSuccess("📄 Templates gerados com sucesso!");
    } else {
      this.showError("Nenhum template foi gerado para download.");
    }
  }

  /**
   * Define template padrão baseado na tabela gerada
   */
  setDefaultTemplate() {
    const table = document.querySelector("#resultTable table");
    if (!table) {
      this.showError("Gere a tabela primeiro antes de usar o Template Padrão.");
      return;
    }

    try {
      const headers = Array.from(table.querySelectorAll("th")).map(
        (th) => th.innerText
      );

      // O primeiro header é sempre "Caso de Teste ID"
      // Depois vêm as variáveis de entrada, seguidas pelas de saída
      // Vamos identificar isso baseado nos dados originais
      const inputText = document.getElementById("inputVariables").value.trim();
      const outputText = document
        .getElementById("outputVariables")
        .value.trim();

      const inputVariables = parseInput(inputText).variables;
      const outputVariables = parseInput(outputText).variables;

      // Extrai apenas os nomes das variáveis (antes do ":")
      const inputNames = inputVariables.map((v) => v.split(":")[0].trim());
      const outputNames = outputVariables.map((v) => v.split(":")[0].trim());

      // Gera o template padrão
      let template = `Caso de teste: #{{${headers[0]}}}

Variáveis de entrada:`;

      inputNames.forEach((name) => {
        template += `\n- {{${name}}}`;
      });

      template += `\n\nResultado esperado:`;

      outputNames.forEach((name) => {
        template += `\n- {{${name}}}`;
      });

      // Define o template no textarea
      document.getElementById("customTemplate").value = template;

      // Mostra mensagem de sucesso
      this.showSuccess("📝 Template padrão (CT) aplicado com sucesso!");

      // Limpa erros anteriores
      this.clearError();
    } catch (error) {
      this.showError(
        "Erro ao gerar template padrão. Verifique se a tabela foi gerada corretamente."
      );
      console.error("Erro na setDefaultTemplate:", error);
    }
  }

  /**
   * Define template Gherkin baseado na tabela gerada
   */
  setGherkinTemplate() {
    const table = document.querySelector("#resultTable table");
    if (!table) {
      this.showError(
        "Gere a tabela primeiro antes de usar o Template Gherkin."
      );
      return;
    }

    try {
      const headers = Array.from(table.querySelectorAll("th")).map(
        (th) => th.innerText
      );

      // O primeiro header é sempre "Caso de Teste ID"
      // Depois vêm as variáveis de entrada, seguidas pelas de saída
      const inputText = document.getElementById("inputVariables").value.trim();
      const outputText = document
        .getElementById("outputVariables")
        .value.trim();

      const inputVariables = parseInput(inputText).variables;
      const outputVariables = parseInput(outputText).variables;

      // Extrai apenas os nomes das variáveis (antes do ":")
      const inputNames = inputVariables.map((v) => v.split(":")[0].trim());
      const outputNames = outputVariables.map((v) => v.split(":")[0].trim());

      // Gera o template Gherkin
      let template = `Cenário: Caso de teste #{{${headers[0]}}}

Dado que:`;

      inputNames.forEach((name) => {
        template += `\n  - ${name} é "{{${name}}}"`;
      });

      template += `\n\nQuando eu executo a ação\n\nEntão:`;

      outputNames.forEach((name) => {
        template += `\n  - ${name} deve ser "{{${name}}}"`;
      });

      // Define o template no textarea
      document.getElementById("customTemplate").value = template;

      // Mostra mensagem de sucesso
      this.showSuccess("🥒 Template Gherkin aplicado com sucesso!");

      // Limpa erros anteriores
      this.clearError();
    } catch (error) {
      this.showError(
        "Erro ao gerar template Gherkin. Verifique se a tabela foi gerada corretamente."
      );
      console.error("Erro na setGherkinTemplate:", error);
    }
  }

  /**
   * Mostra notificação flutuante de erro
   * @param {string} message - Mensagem de erro
   */
  showError(message) {
    this.showToast(message, "danger", 6000);
  }

  /**
   * Mostra notificação flutuante de sucesso
   * @param {string} message - Mensagem de sucesso
   */
  showSuccess(message) {
    this.showToast(message, "success", 4000);
  }

  /**
   * Mostra notificação flutuante
   * @param {string} message - Mensagem da notificação
   * @param {string} type - Tipo da notificação (success, danger, warning, info)
   * @param {number} duration - Duração em milissegundos
   */
  showToast(message, type = "info", duration = 4000) {
    const container = document.getElementById("toast-container");

    // Cria o elemento da notificação
    const toast = document.createElement("div");
    toast.className = `notification is-${type} toast-notification`;
    toast.innerHTML = `
            <button class="delete" onclick="this.parentElement.remove()"></button>
            <div style="padding-right: 2rem;">
                ${message}
            </div>
        `;

    // Adiciona a notificação ao container
    container.appendChild(toast);

    // Remove automaticamente após a duração especificada
    setTimeout(() => {
      this.removeToast(toast);
    }, duration);

    // Limita o número máximo de notificações (máximo 5)
    const notifications = container.querySelectorAll(".toast-notification");
    if (notifications.length > 5) {
      this.removeToast(notifications[0]);
    }
  }

  /**
   * Remove uma notificação com animação
   * @param {HTMLElement} toast - Elemento da notificação a ser removida
   */
  removeToast(toast) {
    if (toast && toast.parentNode) {
      toast.classList.add("removing");
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300); // Tempo da animação de saída
    }
  }

  /**
   * Remove mensagens de erro (compatibilidade)
   */
  clearError() {
    // Mantido para compatibilidade, mas não faz nada
    // As notificações flutuantes se removem automaticamente
  }

  /**
   * Remove mensagens de sucesso (compatibilidade)
   */
  clearSuccess() {
    // Mantido para compatibilidade, mas não faz nada
    // As notificações flutuantes se removem automaticamente
  }
}

// Inicializa a aplicação quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  new PermutadorApp();
});

module.exports = PermutadorApp;
