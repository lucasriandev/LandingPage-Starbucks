# ☕ Starbucks Landing Page

Uma landing page moderna, responsiva e elegante inspirada na marca Starbucks. Este projeto simula a página inicial de uma cafeteria, destacando produtos em alta, novidades e a história da empresa com um design atraente.

## 🚀 Demonstração
Acesse o projeto online aqui: **[Landing Page - Starbucks](https://lucasriandev.github.io/LandingPage-Starbucks/)**

![Preview do Projeto](https://github.com/user-attachments/assets/ca535898-239c-4aea-9de6-6747bd3eabe0)

## 📋 Sobre o Projeto
Desenvolvido com o objetivo de aprimorar habilidades em construção de interfaces web, estruturação semântica e design responsivo. O layout foi pensado para garantir uma ótima experiência do usuário (UX) tanto em dispositivos móveis quanto em desktops.

### 🛠️ Tecnologias Utilizadas
* **HTML5**: Estruturação semântica do conteúdo, dividida em seções claras como `Home`, `Trending`, `About` e `Products`.
* **CSS3**: 
  * Estilização completa com uso de variáveis (`:root`) para padronização da paleta de cores.
  * Layout flexível com `Flexbox` para alinhamento dos cards e seções.
  * Media Queries para responsividade, adaptando o layout para telas maiores a partir de `768px`.
* **JavaScript**: 
  * Lógica para o menu Mobile (Hamburger Menu), permitindo abrir e fechar a navegação de forma interativa.
  * Efeito dinâmico no cabeçalho (`navbar`), adicionando sombra automaticamente quando o usuário rola a página.

## ✨ Funcionalidades e Destaques
* **Design Responsivo**: O site se adapta perfeitamente a telas de celulares, tablets e monitores desktop, incluindo imagens de fundo diferentes para mobile e desktop.
* **Menu Interativo**: Navegação mobile suave com troca dinâmica do ícone do botão hamburger (graças ao FontAwesome).
* **Efeitos Visuais**: Sombras elegantes (`box-shadow`) em elementos flutuantes, como os cards de produtos, e botões interativos (`hover` effects).
* **Organização CSS**: Separação inteligente dos arquivos de estilo, com a barra de navegação possuindo seu próprio arquivo `navbar.css` importado globalmente.

## 📂 Estrutura de Pastas
```text
├── js/
│   └── script.js          # Lógica do menu e efeitos de scroll
├── src/
│   ├── css/
│   │   ├── img/           # Imagens principais (backgrounds, logo, destaque)
│   │   ├── imgproducts/   # Imagens dos cards e novidades
│   │   └── styles.css     # Estilização global do layout
│   └── navbar.css         # Estilização modularizada do cabeçalho
└── index.html             # Estrutura principal da página
