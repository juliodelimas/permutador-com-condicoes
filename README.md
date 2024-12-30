# Permutador com Condições

Este projeto oferece uma ferramenta simples para ajudar testadores da comunidade de testes a gerar permutações de dados utilizando a técnica de partição de equivalência. Além disso, permite adicionar condicionais (variáveis de entrada e saída) e baixar as tabelas geradas em formato CSV/JSON para uso em testes de software. Agora, também é possível criar e baixar templates personalizados com base nas tabelas geradas.

## Descrição

A ferramenta permite que o usuário insira variáveis de entrada e saída com suas respectivas partições e, a partir disso, gera uma tabela de permutações com a possibilidade de seleção de resultados (como uma Tabela de Decisão) com todas as possíveis combinações (permutação) entre as variáveis de entrada. A tabela pode incluir campos de seleção para as variáveis de saída, permitindo que o testador customize as opções de saída para cada cenário de teste. Além disso, o usuário pode criar templates personalizados para renderizar os dados da tabela conforme suas necessidades e exportar os resultados em formato TXT.

### Funcionalidades

- **Entrada de Variáveis**: Permite inserir variáveis de entrada com suas respectivas partições.
- **Saída de Variáveis**: Permite inserir variáveis de saída com suas respectivas partições.
- **Geração de Permutações**: Gera automaticamente todas as permutações possíveis entre as partições de entrada.
- **Tabela de Permutação com Condições**: Exibe as permutações em uma tabela organizada, com campos para seleção das variáveis de saída.
- **Template Personalizado**: Permite criar templates customizados para exibir os dados da tabela gerada e exportá-los em formato TXT.
- **Download em CSV/JSON/TXT**: Permite baixar a tabela de permutação com condições gerada em formato CSV/JSON e os templates populados em formato TXT para uso posterior.

## Como Usar

1. **Variáveis de Entrada**: No campo de **Variáveis de Entrada**, insira o nome das variáveis seguidas das partições separadas por vírgula. Por exemplo:
    ```
    Variável de Entrada 1: Partição 1; Partição 2; Partição N
    Variável de Entrada 2: Partição 1; Partição 2; Partição N
    ```

2. **Variáveis de Saída**: No campo de **Variáveis de Saída**, insira o nome das variáveis de saída seguidas das suas respectivas partições. Por exemplo:
    ```
    Variável de Saída 1: Partição 1; Partição 2; Partição N
    Variável de Saída 2: Partição 1; Partição 2; Partição N
    ```

3. **Gerar Tabela**: Após inserir as variáveis, clique no botão **Permutar** para gerar a tabela de decisão.

4. **Template Personalizado**: 
   - No campo **Template Personalizado**, insira o modelo de template que deseja usar para renderizar os dados da tabela. Utilize os nomes das variáveis entre `{{}}` para indicar onde os valores devem ser inseridos. Exemplo:
     ```
     Nome: {{Variável de Entrada 1}}
     Status: {{Variável de Entrada 2}}
     ```
   - Clique no botão **Popular Template** para gerar os resultados com base no template informado.
   - Os resultados populados aparecerão em uma área de texto abaixo. Você também poderá baixá-los em formato TXT clicando no botão **Baixar Resultados (TXT)**.

5. **Baixar Resultados**: 
   - Para a tabela gerada, clique em **Baixar Tabela (CSV)** ou **Baixar Tabela (JSON)**.
   - Para os resultados populados no template, clique em **Baixar Resultados (TXT)**.

## Exemplo de Uso

### Variáveis de Entrada
```
Valor: < R$ 5000; >= R$ 5000
Tipo: Simples; Interna; Externa
Cliente: Comum; VIP
```

### Variáveis de Saída
```
Resultado: Sucesso; Falha
Status: Positivo; Negativo
```

### Template Personalizado
```
Caso de Teste: #{{Caso de Teste ID}}
Título: Transferência {{Tipo}} de {{Valor}} com cliente {{Cliente}}

Pré-Condições:
- Ter navegado até a tela de Transferências

Passos:
1. Informar {{Cliente}} no campo Tipo de Cliente
2. Informar {{Valor}} no campo Valor
3. Informar {{Tipo}} no campo Tipo de Transferência

Resultado esperado:
- A transferência resultará em {{Resultado}}

Pós-condições:
- A transferência passará a ter seu status marcado como {{Status}}
```

### Resultado
A ferramenta irá gerar uma tabela com todas as combinações possíveis de **Variáveis de Entrada** e **Variáveis de Saída**, e os dados poderão ser renderizados no template fornecido, com resultados exportáveis em formato TXT, além de CSV/JSON.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo da página.
- **JavaScript**: Para a lógica de permutação de dados, manipulação do DOM e geração de templates.
- **Blob API**: Para permitir o download da tabela e dos templates populados em formato CSV/JSON/TXT.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum erro ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma *issue* ou fazer um *pull request*.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
