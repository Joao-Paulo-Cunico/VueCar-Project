# 🚗 EvoCar — A Evolução dos Automóveis

Uma aplicação web interativa que explora a história e a evolução dos automóveis através de três categorias: carros clássicos, esportivos e de luxo. Desenvolvido como projeto acadêmico com Vue 3, Vite e Vue Router.

---

## 📌 O que é este projeto?

**EvoCar** é uma Single Page Application (SPA) que permite navegar entre diferentes categorias de automóveis. Cada categoria possui uma galeria de carros, descrições detalhadas e um formulário de contato. O projeto foi desenvolvido para demonstrar boas práticas de desenvolvimento front-end, como:

- Componentização e reutilização de código
- Roteamento SPA com Vue Router (sem reloads)
- Formulários reativos com validação
- Organização eficiente de assets (CSS, imagens)
- Código limpo e bem comentado

---

## 🛠️ Tecnologias utilizadas

- **Vue 3** — framework JavaScript reativo
- **Vite** — bundler moderno com reload rápido em desenvolvimento
- **Vue Router** — roteamento para SPA (navegação sem recarregar a página)
- **CSS3** — estilos organizados por seção/autor
- **JavaScript (ES6+)** — validação de formulários e interatividade

---

## 🚀 Como rodar o projeto (rápido e fácil)

### Pré-requisitos
- Node.js e npm instalados

### Passo a passo

1. **Clone ou abra o projeto no seu computador**

   cd "caminho/para/VueCar"

2. **Instale as dependências**

   npm install

3. **Rode o servidor de desenvolvimento**
   npm run dev

4. **Abra no navegador**
   - Clique no link que aparecer no terminal, normalmente:

   http://localhost:5174/


5. **Explore o site!**
   - Clique nos links de navegação (Início, Clássicos, Esportivos, Luxo)
   - Teste a busca na galeria
   - Preencha e envie o formulário de contato

---

## 📁 Estrutura do projeto (entenda a organização)

```
VueCar/
├── src/
│   ├── main.js                      # Arquivo de inicialização (importa CSS global)
│   ├── App.vue                      # Componente raiz (renderiza as rotas)
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── header.vue               # Barra de navegação
│   │   ├── footer.vue               # Rodapé com links
│   │   └── Gallery.vue              # Galeria com busca/filtro (reutilizável)
│   ├── views/                       # Páginas da aplicação
│   │   ├── home.vue                 # Página inicial
│   │   ├── Classicos.vue            # Página de carros clássicos
│   │   ├── esportivos.vue           # Página de carros esportivos
│   │   └── Luxo.vue                 # Página de carros de luxo
│   ├── Router/
│   │   └── index.js                 # Definição das rotas
│   └── assets/
│       ├── css/                     # Arquivos de estilo
│       │   ├── style.css            # CSS global
│       │   ├── leo.css              # Estilos de Clássicos
│       │   ├── luis.css             # Estilos de Esportivos
│       │   └── joao.css             # Estilos de Luxo
│       └── img*/                    # Imagens organizadas por seção
├── index.html                       # Arquivo HTML principal
├── package.json                     # Dependências do projeto
├── vite.config.js                   # Configuração do Vite
└── README.md                        # Este arquivo!
```

---

## 🎯 Como funciona a aplicação

### Navegação (SPA - Single Page Application)
- Ao clicar em um link, a página **não recarrega**. Em vez disso, Vue Router troca dinamicamente o conteúdo.
- Isso é mais rápido e oferece uma experiência melhor ao usuário (sem piscar de tela).

### Componentes reutilizáveis
- **Header** e **Footer**: usados em todas as páginas para manter consistência visual.
- **Gallery**: recebe uma lista de carros e exibe automaticamente com opção de busca.

### Formulários reativos
- Os campos do formulário são conectados a dados Vue com `v-model`.
- A validação acontece no navegador (cliente) sem recarregar a página.
- Ao enviar, mostra uma mensagem de sucesso temporária.

### Organização de CSS e imagens
- Cada página tem seu CSS próprio (joao.css, leo.css, luis.css).
- CSS global em `style.css` unifica estilos compartilhados.
- Imagens referenciadas com caminhos relativos para funcionarem em produção.

---

## 💡 Conceitos importantes (aprenda com este projeto)

### Single Page Application (SPA)
Uma aplicação que carrega uma única página HTML e depois atualiza dinamicamente o conteúdo sem recarregar. Melhor para performance e experiência do usuário.

### Vue Router
Permite criar "páginas" dentro de uma SPA. Cada rota (/, /classicos, /esportivos, /luxo) renderiza um componente diferente.

### Componentes Vue
Blocos reutilizáveis de HTML, CSS e JavaScript. Componentes bem projetados tornam o código mais limpo e manutenível.

### v-model (Two-way binding)
Conecta automaticamente um campo de entrada (`<input>`) a uma variável de dados. Quando o usuário digita, a variável atualiza (e vice-versa).

### Props
Forma de passar dados de um componente pai para um componente filho. Por exemplo, `Gallery` recebe uma lista de carros via `props`.

---

## 👥 Autores

- **João** — Seção de Carros de Luxo
- **Léo** — Seção de Carros Clássicos
- **Ligeiro** — Seção de Carros Esportivos

**Projeto Acadêmico** — 3º Período de Engenharia de Software

---

**Aproveite a exploração! 🚗✨**
