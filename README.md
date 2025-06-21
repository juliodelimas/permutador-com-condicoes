# 🔄 Permutador com Condições

Uma ferramenta web para gerar permutações de dados usando a técnica de **Particionamento por Equivalência** para testes de software.

## 📋 Descrição

Esta ferramenta permite:

- ✅ Definir variáveis e suas partições de equivalência
- ✅ Gerar automaticamente todas as combinações possíveis
- ✅ Aplicar templates personalizados para casos de teste
- ✅ Exportar resultados em diferentes formatos
- ✅ Suporte a templates padrão (CT e Gherkin)

## 🚀 Como Usar

### 1. Definir Variáveis

``` text
Nome da Variável: valor1; valor2; valor3
Outra Variável: opcaoA; opcaoB
```

### 2. Escolher Template

- **Template Padrão (CT)**: Formato tradicional de caso de teste
- **Template Padrão (Gherkin)**: Formato Gherkin (Dado que/Quando/Então)
- **Template Personalizado**: Criar seu próprio formato

### 3. Gerar Permutações

A ferramenta criará automaticamente todas as combinações possíveis.

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
- **Dependências**: live-server para desenvolvimento
- **Arquitetura**: SPA (Single Page Application)

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

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para facilitar a criação de casos de teste usando particionamento por equivalência.

---

### 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório do projeto.
