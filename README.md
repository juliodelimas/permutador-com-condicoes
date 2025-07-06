# 🔄 Permutador com Condições

Este projeto oferece uma ferramenta simples para ajudar testadores da comunidade de testes a gerar permutações de dados utilizando a técnica de partição de equivalência. Além disso, permite adicionar condicionais (variáveis de entrada e saída) e baixar as tabelas geradas em formato CSV/JSON para uso em testes de software. Agora, também é possível criar e baixar templates personalizados com base nas tabelas geradas.

## 📋 Descrição

A ferramenta permite que o usuário insira variáveis de entrada e saída com suas respectivas partições e, a partir disso, gera uma tabela de permutações com a possibilidade de seleção de resultados (como uma Tabela de Decisão) com todas as possíveis combinações (permutação) entre as variáveis de entrada. A tabela pode incluir campos de seleção para as variáveis de saída, permitindo que o testador customize as opções de saída para cada cenário de teste. Além disso, o usuário pode criar templates personalizados para renderizar os dados da tabela conforme suas necessidades e exportar os resultados em formato TXT.

**Resumo**

- **Entrada de Variáveis**: Permite inserir variáveis de entrada com suas respectivas partições.
- **Saída de Variáveis**: Permite inserir variáveis de saída com suas respectivas partições.
- **Geração de Permutações**: Gera automaticamente todas as permutações possíveis entre as partições de entrada.
- **Tabela de Permutação com Condições**: Exibe as permutações em uma tabela organizada, com campos para seleção das variáveis de saída.
- **Template Personalizado**: Permite criar templates customizados para exibir os dados da tabela gerada e exportá-los em formato TXT.
  - **Template Padrão (CT)**: Formato tradicional de caso de teste
  - **Template Padrão (Gherkin)**: Formato Gherkin (Dado que/Quando/Então)
  - **Template Personalizado**: Criar seu próprio formato
- **Download em CSV/JSON/TXT**: Permite baixar a tabela de permutação com condições gerada em formato CSV/JSON e os templates populados em formato TXT para uso posterior.

## 🚀 Como Usar

1. **Variáveis de Entrada**: No campo de **Variáveis de Entrada**, insira o nome das variáveis seguidas das partições separadas por vírgula. Por exemplo:

    ``` text
    Variável de Entrada 1: Partição 1; Partição 2; Partição N
    Variável de Entrada 2: Partição 1; Partição 2; Partição N
    ```

2. **Variáveis de Saída**: No campo de **Variáveis de Saída**, insira o nome das variáveis de saída seguidas das suas respectivas partições. Por exemplo:

    ``` text
    Variável de Saída 1: Partição 1; Partição 2; Partição N
    Variável de Saída 2: Partição 1; Partição 2; Partição N
    ```

3. **Gerar Tabela**: Após inserir as variáveis, clique no botão **[Permutar]** para gerar a tabela de decisão.

4. **Template Personalizado**:
   - No campo **Template Personalizado**, insira o modelo de template que deseja usar para renderizar os dados da tabela. Utilize os nomes das variáveis entre `{{}}` para indicar onde os valores devem ser inseridos. 
   Exemplo:

    ``` text
     Nome: {{Variável de Entrada 1}}
     Status: {{Variável de Entrada 2}}
     ```

   - Clique no botão **[Popular Template]** para gerar os resultados com base no template informado. Você também tem as opções de **[Template Padrão (CT)]** e **[Template Padrão (Gherkin)]** que geram um modelo para você e depois pode clicar em **[Popular Template]** para gerar os resultados.
   - Os resultados populados aparecerão em uma área de texto abaixo. Você também poderá baixá-los em formato TXT clicando no botão **Baixar Resultados (TXT)**.

### Exemplo de Uso

#### Variáveis de Entrada

``` text
Valor: < R$ 5000; >= R$ 5000
Tipo: Simples; Interna; Externa
Cliente: Comum; VIP
```

#### Variáveis de Saída

``` text
Resultado: Sucesso; Falha
Status: Positivo; Negativo
```

#### Template Personalizado

``` text
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

#### Resultado

A ferramenta irá gerar uma tabela com todas as combinações possíveis de **Variáveis de Entrada** e **Variáveis de Saída**, e os dados poderão ser renderizados no template fornecido, com resultados exportáveis em formato TXT, além de CSV/JSON.

## 📁 Estrutura do Projeto

``` text
permutador-com-condicoes/
├── index.html              # Interface principal
├── css/
│   └── styles.css          # Estilos customizados
├── js/
│   ├── app.js              # Lógica principal da aplicação
│   └── utils.js            # Funções utilitárias
├── server.js               # Servidor Node.js nativo
├── package.json            # Configurações do projeto
├── README.md               # Esta documentação
├── DEVELOPMENT.md          # Guia para desenvolvedores
└── START.md                # Guia de início rápido
```

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Node.js (servidor opcional)
- **Blob API**: Para permitir o download da tabela e dos templates populados em formato CSV/JSON/TXT.

## 🚀 Executando o Projeto

### Opção 1: Servidor Live (Recomendado)

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

### Opção 2: Servidor Node.js Nativo

```bash
# Iniciar servidor nativo
npm run server

# Ou diretamente
node server.js
```

### Opção 3: Arquivo Local

Abra `index.html` diretamente no navegador.

## 📖 Exemplos de Uso

### Exemplo 1: Teste de Login

``` text
Usuario: admin; user; guest
Senha: 123456; password; empty
Navegador: Chrome; Firefox; Safari
```

**Resultado**: 27 combinações de teste

### Exemplo 2: Validação de Formulário

``` text
Nome: válido; vazio; muito_longo
Email: válido; inválido; vazio
Idade: menor_18; entre_18_65; maior_65
```

**Resultado**: 27 casos de teste

## 🎯 Templates Disponíveis

### Template CT (Caso de Teste)

``` text
Caso de teste: #{{Caso de Teste ID}}
Variáveis de entrada:
- {{Variable 1}}
- {{Variable 2}}
Resultado esperado:
- {{Output Variable 1}}
- {{Output Variable 2}}
```

### Template Sintaxe Gherkin

``` text
Cenário: {{Scenario Name}}
Dado que {{Given Context}}
Quando {{When Action}}
Então {{Then Expected Result}}
```

## 🔧 Configuração

### Personalizações Disponíveis

- Ajustar estilos em `css/styles.css`
- Configurar comportamentos em `js/app.js`

## 📚 Funcionalidades

### ✅ Principais

- [x] Parser de entrada de dados
- [x] Geração de permutações
- [x] Templates personalizáveis
- [x] Export para CSV/TXT
- [x] Interface responsiva
- [x] Templates padrão (CT e Gherkin)
- [x] Validação de entrada
- [x] Tratamento de erros

### 🔄 Melhorias Futuras

- Crie a issue

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia servidor live
npm run server         # Inicia servidor Node.js nativo
```

## 🔍 Troubleshooting

### Problemas Comuns

**Erro: "live-server não encontrado"**

```bash
npm install
```

**Porta já em uso**

```bash
# Mudar porta no package.json ou usar:
npx live-server --port=8081
```

**Arquivo não carrega**

- Verifique se todos os arquivos estão na estrutura correta
- Certifique-se de que o servidor está rodando
- Verifique o console do navegador para erros

## 📄 Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Contribuições são bem-vindas! Se você encontrar algum erro ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma *issue* ou fazer um *pull request*.

---

### 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório do projeto.
