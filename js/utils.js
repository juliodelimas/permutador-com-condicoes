/**
 * Utilitários para o Permutador com Condições
 */

/**
 * Faz o parsing da entrada de texto em variáveis e partições
 * @param {string} text - Texto de entrada
 * @returns {Object} Objeto com variáveis e partições
 */
function parseInput(text) {
  const variables = text.split("\n").filter((line) => line.trim() !== "");
  const partitions = variables.map((line) => {
    const [variable, parts] = line.split(":");
    return parts ? parts.split(";").map((part) => part.trim()) : [];
  });
  return { variables, partitions };
}

/**
 * Gera permutações de arrays
 * @param {Array} arrays - Array de arrays para permutar
 * @returns {Array} Array com todas as permutações
 */
function permute(arrays) {
  if (arrays.length === 0) return [[]];
  const [first, ...rest] = arrays;
  const restPermuted = permute(rest);
  return first.flatMap((item) => restPermuted.map((perm) => [item, ...perm]));
}

/**
 * Gera HTML da tabela de resultados
 * @param {Array} inputData - Dados de entrada
 * @param {Array} outputData - Dados de saída
 * @param {Array} headersInput - Cabeçalhos de entrada
 * @param {Array} headersOutput - Cabeçalhos de saída
 * @returns {string} HTML da tabela
 */
function generateTableHTML(inputData, outputData, headersInput, headersOutput) {
  let html =
    '<div class="table-container"><table class="table is-fullwidth is-striped is-vcentered">';
  html +=
    "<thead><tr><th>Caso de Teste ID</th>" +
    headersInput.map((h) => `<th>${h.split(":")[0]}</th>`).join("") +
    headersOutput.map((h) => `<th>${h.split(":")[0]}</th>`).join("") +
    "</tr></thead><tbody>";

  inputData.forEach((row, index) => {
    html += `<tr><td>${index + 1}</td>`;
    html += row.map((cell) => `<td>${cell}</td>`).join("");
    html += headersOutput
      .map((_, idx) => {
        const options = outputData[idx] || [];
        const optionsHTML = options
          .map((opt) => `<option value="${opt}">${opt}</option>`)
          .join("");
        return `<td><div class="select is-primary is-small"><select>${optionsHTML}</select></div></td>`;
      })
      .join("");
    html += "</tr>";
  });

  html += "</tbody></table></div>";
  return html;
}

/**
 * Gera conteúdo CSV da tabela
 * @returns {string} Conteúdo CSV
 */
function generateCSV() {
  const table = document.querySelector("#resultTable table");
  if (!table) return "";

  const rows = table.querySelectorAll("tbody tr");
  const headers = Array.from(table.querySelectorAll("th")).map(
    (th) => th.innerText
  );
  const csvData = [];

  csvData.push(headers.join(";"));

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const rowData = [];

    cells.forEach((cell) => {
      const select = cell.querySelector("select");
      if (select) {
        rowData.push(select.value);
      } else {
        rowData.push(cell.innerText);
      }
    });

    if (rowData.length > 0) {
      csvData.push(rowData.join(";"));
    }
  });

  return csvData.join("\n");
}

/**
 * Gera conteúdo JSON da tabela
 * @returns {string} Conteúdo JSON
 */
function generateJSON() {
  const table = document.querySelector("#resultTable table");
  if (!table) return "[]";

  const rows = table.querySelectorAll("tbody tr");
  const headers = Array.from(table.querySelectorAll("th")).map(
    (th) => th.innerText
  );
  const jsonData = [];

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

    if (Object.keys(rowData).length > 0) {
      jsonData.push(rowData);
    }
  });

  return JSON.stringify(jsonData, null, 2);
}

/**
 * Realiza download de arquivo
 * @param {string} content - Conteúdo do arquivo
 * @param {string} filename - Nome do arquivo
 * @param {string} mimeType - Tipo MIME do arquivo
 */
function downloadFile(content, filename, mimeType = "text/plain") {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Popula template com dados da linha
 * @param {string} template - Template a ser populado
 * @param {Object} rowData - Dados da linha
 * @returns {string} Template populado
 */
function populateTemplate(template, rowData) {
  let result = template;
  for (const [key, value] of Object.entries(rowData)) {
    const placeholder = `{{${key}}}`;
    result = result.replaceAll(placeholder, value);
  }
  return result;
}
