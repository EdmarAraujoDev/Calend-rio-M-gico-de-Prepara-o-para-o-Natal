# 🎄 Calendário Mágico de Preparação para o Natal

> Uma experiência interativa e emocionante para viver a magia do Natal em família — 25 dias de missões, reflexões e atividades especiais.

![Preview](https://img.shields.io/badge/Status-Concluído-brightgreen?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## ✨ Sobre o Projeto

O **Calendário Mágico de Preparação para o Natal** é um site interativo que transforma a contagem regressiva para o Natal em uma jornada de conexão familiar. Inspirado nos tradicionais calendários do advento, cada um dos 25 dias revela uma missão única com:

- 🕯️ **Reflexão** — Uma mensagem inspiradora sobre o espírito natalino
- 🎯 **Atividade Prática** — Uma tarefa para realizar em família
- 💬 **Pergunta para a Família** — Uma conversa significativa para conectar os entes queridos

---

## 🖥️ Demonstração

Basta abrir o arquivo `index.html` diretamente no navegador — nenhuma instalação necessária.

```
Calendário magico/
└── index.html   ← Abra esse arquivo para começar
```

---

## 🚀 Funcionalidades

| Recurso                | Descrição                                                             |
| ---------------------- | --------------------------------------------------------------------- |
| 📅 Grade de 25 dias    | Cartões elegantes para cada dia de dezembro                           |
| 🔒 Bloqueio por data   | Dias futuros ficam bloqueados automaticamente em dezembro             |
| 🖱️ Modal interativo    | Abre ao clicar no dia com reflexão, atividade e pergunta              |
| 🔔 Efeito sonoro       | Sino suave ao abrir cada dia (Web Audio API)                          |
| ❄️ Neve animada        | Flocos de neve caindo em canvas ao fundo                              |
| ✨ Partículas douradas | Animação especial exclusiva para o Dia 25                             |
| 💾 Memória local       | Dias visitados são lembrados via `localStorage`                       |
| 📱 Responsivo          | Layout adaptado para celulares, tablets e desktops                    |
| ♿ Acessível           | Respeita `prefers-reduced-motion` para usuários sensíveis a animações |

---

## 🗂️ Estrutura de Arquivos

```
Calendario magico/
├── index.html      # Estrutura HTML da página
├── style.css       # Estilos premium — tema natalino escuro e dourado
├── script.js       # Dados dos 25 dias, lógica de interação e efeitos
└── README.md       # Documentação do projeto
```

---

## 🎨 Design

O projeto utiliza um **tema natalino premium** com:

- **Fundo escuro** (`#0a0c14`) com gradiente sutil em tons quentes
- **Paleta dourada** (`#d4a843`, `#f0d27a`, `#ffd700`) para elementos de destaque
- **Tipografia sofisticada**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (títulos) + [Lato](https://fonts.google.com/specimen/Lato) (textos)
- **Glassmorphism** nos modais com backdrop blur
- **Micro-animações**: shimmer no título, twinkle nos ornamentos, fadeIn nos cartões
- **Borda brilhante dourada** nos cartões ao passar o mouse

---

## ⚙️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica com SEO básico
- **CSS3** — Variáveis CSS, Grid Layout, animações `@keyframes`, media queries
- **JavaScript (ES6+)** — DOM puro, Canvas API, Web Audio API, `localStorage`
- **Google Fonts** — Playfair Display & Lato

> ⚠️ **Sem dependências externas.** Nenhum framework, biblioteca ou bundler necessário.

---

## 📅 Lógica de Datas

| Situação               | Comportamento                                        |
| ---------------------- | ---------------------------------------------------- |
| **Em dezembro**        | Libera apenas os dias até a data atual               |
| **Fora de dezembro**   | Todos os 25 dias ficam liberados (modo demonstração) |
| **Dia futuro clicado** | Exibe tooltip: _"Disponível em X de dezembro"_       |

---

## 🎵 Efeitos Sonoros

Os sons são gerados em tempo real via **Web Audio API** — sem arquivos de áudio externos:

- **Dias 1–24** → Dois tons de sino suave (G#5 + D#6)
- **Dia 25** → Acorde majestoso de 5 notas (C5–E5–G5–C6–E6)

---

## 📱 Responsividade

| Tela              | Layout da grade                      |
| ----------------- | ------------------------------------ |
| Desktop (> 768px) | `auto-fill`, mínimo 160px por coluna |
| Tablet (≤ 768px)  | `auto-fill`, mínimo 130px por coluna |
| Celular (≤ 480px) | 3 colunas fixas                      |

---

## 🔧 Como Personalizar

### Alterar o conteúdo dos dias

Edite o array `DAYS_DATA` em `script.js`. Cada objeto segue esta estrutura:

```js
{
    day: 1,
    icon: "🕯️",
    title: "Título da Missão",
    reflection: "Texto da reflexão...",
    activity: "Descrição da atividade...",
    question: "Pergunta para a família?"
}
```

### Alterar cores

Edite as variáveis CSS no `:root` em `style.css`:

```css
:root {
  --gold-primary: #d4a843; /* Dourado principal */
  --bg-dark: #0a0c14; /* Cor de fundo */
  --red-christmas: #b91c1c; /* Vermelho natalino */
}
```

### Desativar a neve

Remova ou comente a linha `snow.init();` ao final de `script.js`.

---

## 📄 Licença

Este projeto foi criado com ❤️ para uso pessoal e familiar.  
Sinta-se à vontade para adaptar e compartilhar com quem você ama.

---

<div align="center">

✨ _Feito com amor para celebrar o espírito natalino_ ✨
