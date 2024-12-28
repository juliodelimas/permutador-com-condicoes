
# Gerador de Tabelas de Decisão

Este projeto oferece uma ferramenta simples para ajudar testadores da comunidade de testes a gerar permutações de dados utilizando a técnica de partição de equivalência. Além disso, permite adicionar condicionais (variáveis de entrada e saída) e baixar as tabelas geradas em formato CSV para uso em testes de software.

## Descrição

A ferramenta permite que o usuário insira variáveis de entrada e saída com suas respectivas partições e, a partir disso, gera uma tabela de decisão com todas as possíveis combinações (permutação) entre as variáveis de entrada. A tabela pode incluir campos de seleção para as variáveis de saída, permitindo que o testador customize as opções de saída para cada cenário de teste.

### Funcionalidades

- **Entrada de Variáveis**: Permite inserir variáveis de entrada com suas respectivas partições.
- **Saída de Variáveis**: Permite inserir variáveis de saída com suas respectivas partições.
- **Geração de Permutações**: Gera automaticamente todas as permutações possíveis entre as partições de entrada.
- **Tabela de Decisão**: Exibe as permutações em uma tabela organizada, com campos para seleção das variáveis de saída.
- **Download em CSV**: Permite baixar a tabela de decisão gerada em formato CSV para uso posterior.

## Como Usar

1. **Variáveis de Entrada**: No campo de **Variáveis de Entrada**, insira o nome das variáveis seguidas das partições separadas por vírgula. Por exemplo:
    ```
    Variável de Entrada 1: Partição 1, Partição 2, Partição 3
    Variável de Entrada 2: Partição A, Partição B
    ```

2. **Variáveis de Saída**: No campo de **Variáveis de Saída**, insira o nome das variáveis de saída seguidas das suas respectivas partições. Por exemplo:
    ```
    Variável de Saída 1: Partição X, Partição Y
    Variável de Saída 2: Partição Alpha, Partição Beta
    ```

3. **Gerar Tabela**: Após inserir as variáveis, clique no botão **Permutar** para gerar a tabela de decisão.

4. **Baixar CSV**: Quando a tabela for gerada, você poderá fazer o download da tabela em formato CSV clicando no botão **Baixar Tabela (CSV)**.

## Exemplo de Uso

### Variáveis de Entrada
```
Variável de Entrada 1: Partição 1, Partição 2, Partição 3
Variável de Entrada 2: Partição A, Partição B
```

### Variáveis de Saída
```
Variável de Saída 1: Partição X, Partição Y
Variável de Saída 2: Partição Alpha, Partição Beta
```

### Resultado
A ferramenta irá gerar uma tabela com todas as combinações possíveis de **Variáveis de Entrada** e **Variáveis de Saída**, que poderá ser exportada em formato CSV.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo da página.
- **JavaScript**: Para a lógica de permutação de dados e manipulação do DOM.
- **Blob API**: Para permitir o download da tabela gerada em formato CSV.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum erro ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma *issue* ou fazer um *pull request*.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
