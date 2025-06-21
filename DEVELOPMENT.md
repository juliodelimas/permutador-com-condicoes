# 🛠️ Guia de Desenvolvimento

Este documento contém informações técnicas para desenvolvedores que desejam contribuir ou entender melhor o projeto.

## 📁 Arquitetura do Projeto

### Estrutura de Arquivos

``` text
permutador-com-condicoes/
├── index.html              # Interface principal
├── css/
│   └── styles.css          # Estilos customizados
├── js/
│   ├── app.js              # Classe principal da aplicação
│   └── utils.js            # Funções utilitárias
├── server.js               # Servidor Node.js nativo
├── package.json            # Configurações do projeto
├── README.md               # Documentação principal
├── DEVELOPMENT.md          # Este arquivo
└── START.md                # Guia de início rápido
```

### Padrões Arquiteturais

- **Separação de Responsabilidades**: HTML, CSS e JavaScript separados
- **Orientação a Objetos**: Classe `PermutadorApp` gerencia estado
- **Funções Utilitárias**: Lógica reutilizável em `utils.js`
- **Interface Responsiva**: Design adaptável

## 🔧 Componentes Principais

### 1. PermutadorApp (`js/app.js`)

Classe principal que gerencia toda a aplicação:

```javascript
class PermutadorApp {
    constructor() {
        this.initializeEventListeners();
    }
    
    // Métodos principais
    generateTable()         // Gera tabela de permutações
    setDefaultTemplate()    // Define templates padrão
    populateTemplate()      // Popula templates com dados
    downloadResults()       // Gerencia downloads
}
```

### 2. Funções Utilitárias (`js/utils.js`)

Funções puras para processamento de dados:

```javascript
// Parsing de entrada
parseInput(input) → { variables, partitions }

// Geração de permutações
permute(arrays) → Array<Array>

// Substituição de placeholders
populateTemplate(template, data) → String

// Downloads
downloadFile(content, filename, type)
```

## 🎨 Interface e Estilos

### Framework CSS

- **Bulma**: Framework CSS responsivo
- **Font Awesome**: Ícones vetoriais
- **Custom CSS**: Estilos específicos em `styles.css`

## 🔄 Fluxo de Dados

### 1. Entrada de Dados

``` text
Input do usuário → parseInput() → Estrutura validada
```

### 2. Processamento

``` text
Partições → permute() → Combinações → Tabela HTML
```

### 3. Templates

``` text
Template + Dados → populateTemplate() → Resultado formatado
```

### 4. Export

``` text
Dados → downloadFile() → Arquivo baixado
```

## 🚀 Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js 16+ (LTS recomendado)
- npm ou yarn
- Navegador moderno

### Configuração Inicial

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd permutador-com-condicoes

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Live server com reload automático
npm run server         # Servidor Node.js nativo

# Validação
npm run validate       # Validar HTML (se configurado)
npm run lint          # Verificar JavaScript (se configurado)
```

## 📝 Padrões de Código

### JavaScript

- **ES6+**: Use arrow functions, const/let, destructuring
- **Modularidade**: Funções pequenas e específicas
- **Nomenclatura**: camelCase para variáveis e funções
- **Comentários**: JSDoc para funções públicas

```javascript
/**
 * Gera permutações de arrays
 * @param {Array<Array>} arrays - Arrays para permutar
 * @returns {Array<Array>} Permutações geradas
 */
function permute(arrays) {
    // implementação...
}
```

### CSS

- **Bulma**: Use classes do framework quando possível
- **Responsivo**: Mobile-first
- **Variáveis CSS**: Para cores e espaçamentos

### HTML

- **Semântico**: Use tags apropriadas
- **Acessível**: Labels, alt texts, ARIA quando necessário
- **Validado**: HTML5 válido

## 🔧 Adicionando Funcionalidades

### 1. Nova Função Utilitária

1. Adicione em `js/utils.js`
2. Documente com JSDoc
3. Exporte a função
4. Importe em `app.js` se necessário

### 2. Novo Template

1. Crie botão na interface
2. Implemente método na classe `PermutadorApp`
3. Teste com diferentes dados

### 3. Novo Formato de Export

1. Adicione função em `utils.js`
2. Adicione botão na interface
3. Conecte evento na classe principal
4. Teste com diferentes navegadores

## 🐛 Debug e Troubleshooting

### Console do Navegador

- Use `console.log()` para debug
- Verifique erros no console
- Use breakpoints no DevTools

### Problemas Comuns

**Função não encontrada:**

- Verifique imports/exports
- Confirme que arquivo está carregado

**Estilo não aplicado:**

- Verifique seletor CSS
- Confirme especificidade
- Use DevTools para inspecionar

**Dados não processados:**

- Verifique formato de entrada
- Confirme validação
- Use console.log para debug

## 📊 Performance

### Otimizações Implementadas

- Lazy loading de recursos
- Debounce em inputs (se necessário)
- Processamento assíncrono para grandes volumes

### Limites Atuais

- Máximo 10 variáveis
- Máximo 20 partições por variável

## 🔄 Melhorias Futuras

### Prioridade Alta

- [ ] Histórico de sessões (localStorage)
- [ ] Importação de arquivos CSV/JSON
- [ ] Validação avançada de entrada

### Prioridade Média

- [ ] Temas personalizáveis
- [ ] Mais formatos de export (Excel, PDF)
- [ ] API REST para integração

### Prioridade Baixa

- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Plugins para extensibilidade

## 🤝 Contribuindo

### Processo de Contribuição

1. **Fork** o repositório
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
4. **Desenvolva** seguindo os padrões
5. **Teste** localmente
6. **Commit** com mensagens claras
7. **Push** para seu fork
8. **Abra** um Pull Request

### Padrões de Commit

```bash
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: ajustes de estilo/formatação
refactor: refatoração de código
perf: melhoria de performance
```

### Checklist para PRs

- [ ] Código segue padrões estabelecidos
- [ ] Funcionalidade testada manualmente
- [ ] Documentação atualizada se necessário
- [ ] Sem console.log em produção
- [ ] Interface responsiva mantida

## 📚 Recursos Úteis

### Documentação

- [MDN Web Docs](https://developer.mozilla.org/)
- [Bulma CSS](https://bulma.io/documentation/)
- [Font Awesome](https://fontawesome.com/icons)

### Ferramentas

- [VS Code](https://code.visualstudio.com/) - Editor recomendado
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Can I Use](https://caniuse.com/) - Compatibilidade de browsers

### Extensões VS Code Recomendadas

- Live Server
- Prettier
- Auto Rename Tag
- Bracket Pair Colorizer

---

💡 **Dica**: Mantenha este documento atualizado conforme o projeto evolui!
MIT License - Veja o arquivo LICENSE para detalhes.
