/* ============================================
   Calendário Mágico de Preparação para o Natal
   Script Principal — Interações e Dados
   ============================================ */

// ============================================
// 1. DADOS DOS 25 DIAS
// Cada dia contém: título, reflexão, atividade e pergunta
// ============================================
const DAYS_DATA = [
  {
    day: 1,
    icon: "🕯️",
    title: "Acendendo a Primeira Luz",
    reflection:
      "O Natal começa com uma luz pequena, mas cheia de esperança. Assim como uma vela ilumina a escuridão, cada gesto de amor ilumina o coração de alguém. Hoje, permita-se ser essa luz.",
    activity:
      "Acenda uma vela (real ou simbólica) em sua casa e faça um momento de silêncio em família, agradecendo pelas bênçãos do ano.",
    question:
      "O que significa a palavra 'esperança' para cada membro da nossa família?",
  },
  {
    day: 2,
    icon: "💌",
    title: "Palavras que Aquecem",
    reflection:
      "Uma palavra gentil pode transformar o dia de alguém. No corre-corre da vida, esquecemos de dizer o quanto as pessoas ao nosso redor são importantes.",
    activity:
      "Escreva uma carta ou bilhete de carinho para alguém da família que você não costuma elogiar. Entregue pessoalmente.",
    question: "Qual foi a frase mais bonita que alguém já disse para você?",
  },
  {
    day: 3,
    icon: "🤝",
    title: "A Força da Generosidade",
    reflection:
      "Dar não é apenas sobre coisas materiais. Um sorriso, um abraço, um momento de atenção — tudo isso é um presente valioso.",
    activity:
      "Separe roupas, brinquedos ou alimentos que possam ser doados. Se possível, entreguem juntos a quem precisa.",
    question:
      "Se pudéssemos ajudar uma pessoa no mundo inteiro, quem cada um escolheria e por quê?",
  },
  {
    day: 4,
    icon: "🎵",
    title: "A Melodia do Natal",
    reflection:
      "A música tem o poder de nos transportar para momentos especiais. Canções natalinas nos conectam com memórias, tradições e sentimentos profundos.",
    activity:
      "Escolham juntos uma música natalina e cantem em família. Se alguém tocar um instrumento, melhor ainda!",
    question:
      "Qual é a música de Natal favorita de cada um e qual lembrança ela traz?",
  },
  {
    day: 5,
    icon: "🌟",
    title: "Estrelas de Gratidão",
    reflection:
      "A gratidão transforma tudo o que temos em suficiente. Quando olhamos para o que já possuímos com olhos de agradecimento, descobrimos uma riqueza inimaginável.",
    activity:
      "Recortem estrelas de papel e escrevam nelas coisas pelas quais são gratos. Pendurem em um galho seco como uma árvore de gratidão.",
    question: "Quais são as três coisas mais simples que nos fazem felizes?",
  },
  {
    day: 6,
    icon: "📖",
    title: "Histórias ao Pé da Árvore",
    reflection:
      "As histórias nos conectam com o passado e nos inspiram para o futuro. Cada família carrega tradições únicas que merecem ser lembradas.",
    activity:
      "Reúnam-se e contem histórias de Natais passados. Lembrem de momentos engraçados, emocionantes ou marcantes.",
    question: "Qual foi o Natal mais inesquecível que já passamos juntos?",
  },
  {
    day: 7,
    icon: "🍪",
    title: "Sabores de Amor",
    reflection:
      "Cozinhar junto é um ato de amor. Cada receita de família carrega memórias, aromas e sabores que ficam eternizados no coração.",
    activity:
      "Preparem juntos uma receita especial de Natal — pode ser biscoitos, um bolo ou qualquer prato que tenha significado para a família.",
    question:
      "Se pudéssemos criar uma receita nova que representasse nossa família, quais ingredientes usaríamos e qual nome daríamos?",
  },
  {
    day: 8,
    icon: "🎨",
    title: "A Arte do Natal",
    reflection:
      "A criatividade é um presente que todos receberam. Criar algo com as próprias mãos é uma forma de expressar o amor que sentimos.",
    activity:
      "Criem juntos uma decoração natalina artesanal: uma guirlanda, enfeites de papel, pintura ou qualquer outra arte.",
    question: "Se o Natal fosse uma cor, qual cor seria para cada um de nós?",
  },
  {
    day: 9,
    icon: "🌍",
    title: "Natal ao Redor do Mundo",
    reflection:
      "O Natal é celebrado de formas diferentes em cada canto do planeta, mas o sentimento é o mesmo: união, amor e paz.",
    activity:
      "Pesquisem juntos como o Natal é celebrado em outro país e experimentem incorporar um elemento dessa tradição ao dia de hoje.",
    question:
      "Se pudéssemos passar o Natal em qualquer lugar do mundo, onde seria e por quê?",
  },
  {
    day: 10,
    icon: "💝",
    title: "O Presente do Perdão",
    reflection:
      "O verdadeiro espírito natalino começa quando deixamos ir mágoas e ressentimentos. Perdoar é se libertar para amar plenamente.",
    activity:
      "Reserve um momento para pensar se há alguém a quem precisa pedir desculpas ou perdoar. Se sentir vontade, dê o primeiro passo hoje.",
    question:
      "O que podemos fazer como família para ser mais pacientes e compreensivos uns com os outros?",
  },
  {
    day: 11,
    icon: "🌲",
    title: "A Magia da Natureza",
    reflection:
      "O Natal nos convida a olhar para a natureza com admiração. Cada árvore, cada floco de neve, cada estrela no céu nos lembra da grandeza da vida.",
    activity:
      "Façam uma caminhada ao ar livre juntos. Observem a natureza e coletem elementos naturais para criar uma decoração especial.",
    question:
      "Qual é o seu lugar favorito na natureza e o que ele faz você sentir?",
  },
  {
    day: 12,
    icon: "✉️",
    title: "Mensageiros de Carinho",
    reflection:
      "Em tempos digitais, uma mensagem escrita à mão carrega um valor inestimável. É um pedaço de nós que entregamos ao outro.",
    activity:
      "Escrevam cartões de Natal feitos à mão para parentes, vizinhos ou amigos que moram longe. Enviem pelo correio ou entreguem pessoalmente.",
    question:
      "Quem é aquela pessoa que não vemos há muito tempo e que gostaríamos de reencontrar neste Natal?",
  },
  {
    day: 13,
    icon: "🎭",
    title: "O Teatro do Natal",
    reflection:
      "Brincar e se divertir em família fortalece os laços de amor. A risada compartilhada é um dos melhores presentes que podemos dar uns aos outros.",
    activity:
      "Encenem uma pequena peça natalina em casa! Pode ser a história do Natal, uma cena inventada ou até uma paródia engraçada.",
    question:
      "Se cada um de nós fosse um personagem de uma história de Natal, qual seria?",
  },
  {
    day: 14,
    icon: "🕊️",
    title: "Sementes de Paz",
    reflection:
      "A paz começa dentro de nós e se espalha ao nosso redor. O Natal nos lembra que somos agentes de paz no mundo.",
    activity:
      "Pratiquem um ato de paz hoje: resolvam um conflito, façam as pazes com alguém ou simplesmente espalhem gentileza por onde passarem.",
    question:
      "O que cada um de nós pode fazer todos os dias para tornar o mundo um lugar mais pacífico?",
  },
  {
    day: 15,
    icon: "🎁",
    title: "O Verdadeiro Presente",
    reflection:
      "Os presentes mais valiosos não vêm embrulhados em papel. O tempo que dedicamos, a atenção que oferecemos e o amor que sentimos são os maiores presentes.",
    activity:
      "Dê a alguém um 'presente de tempo' — dedique pelo menos 30 minutos de atenção plena a uma pessoa querida, sem distrações.",
    question: "Qual presente não-material mais significativo já recebemos?",
  },
  {
    day: 16,
    icon: "📷",
    title: "Memórias Eternizadas",
    reflection:
      "As fotografias congelam momentos que seriam efêmeros. Cada imagem conta uma história e nos reconecta com quem fomos e quem amamos.",
    activity:
      "Revisem juntos fotos de Natais anteriores. Escolham as favoritas e criem um pequeno mural de memórias natalinas.",
    question: "Qual momento em família gostaríamos de poder reviver?",
  },
  {
    day: 17,
    icon: "🧸",
    title: "O Natal da Criança Interior",
    reflection:
      "Dentro de cada adulto mora uma criança que acredita na magia. O Natal é a época perfeita para resgatar essa inocência e esse encantamento.",
    activity:
      "Façam uma atividade 'de criança' juntos: montem um quebra-cabeça, brinquem de um jogo de tabuleiro ou assistam a um filme natalino clássico com pipoca.",
    question:
      "Qual era a tradição de Natal mais especial quando éramos crianças?",
  },
  {
    day: 18,
    icon: "🏠",
    title: "Nosso Lar, Nosso Refúgio",
    reflection:
      "O lar é onde o coração descansa. Não importa o tamanho ou a aparência — é o amor dentro dele que o torna especial.",
    activity:
      "Dediquem um tempo para cuidar da casa juntos: arrumem, decorem um cantinho especial para o Natal. Façam isso com carinho e alegria.",
    question: "O que faz da nossa casa um lar especial para cada um de nós?",
  },
  {
    day: 19,
    icon: "🌙",
    title: "Sonhos de Natal",
    reflection:
      "Sonhar é o primeiro passo para transformar o futuro. O Natal nos convida a sonhar com um mundo melhor e a acreditar que ele é possível.",
    activity:
      "Cada membro da família escreva um sonho para o próximo ano em um papel. Guardem juntos em uma caixa para abrir no próximo Natal.",
    question:
      "Se pudéssemos realizar um sonho coletivo da família, qual seria?",
  },
  {
    day: 20,
    icon: "🤗",
    title: "O Poder do Abraço",
    reflection:
      "Um abraço sincero transmite mais do que mil palavras. É a linguagem universal do amor, do conforto e da conexão humana.",
    activity:
      "Deem um abraço demorado (de pelo menos 20 segundos) em cada membro da família hoje. Sintam o calor e a presença um do outro.",
    question:
      "Quando foi a última vez que demos um abraço realmente demorado em alguém?",
  },
  {
    day: 21,
    icon: "⭐",
    title: "Luzes que Guiam",
    reflection:
      "Assim como a estrela guiou os reis magos, cada um de nós pode ser uma luz guia para alguém que está perdido ou desanimado.",
    activity:
      "Identifiquem alguém que esteja passando por um momento difícil e enviem uma mensagem de apoio, carinho e encorajamento.",
    question:
      "Quem são as 'estrelas-guia' da nossa família — as pessoas que mais nos inspiram?",
  },
  {
    day: 22,
    icon: "🎶",
    title: "Noite de Harmonia",
    reflection:
      "A harmonia familiar não significa ausência de diferenças, mas a capacidade de conviver com amor, respeito e aceitação.",
    activity:
      "Organizem uma noite especial em família: jantar à luz de velas, música suave e uma conversa verdadeira sobre o que cada um sente.",
    question:
      "O que podemos fazer para que nossas diferenças nos fortaleçam em vez de nos separarem?",
  },
  {
    day: 23,
    icon: "🎄",
    title: "A Árvore dos Desejos",
    reflection:
      "A árvore de Natal simboliza vida, renovação e esperança. Cada enfeite pode representar um desejo, uma lembrança ou um agradecimento.",
    activity:
      "Escrevam desejos em pequenos papéis coloridos e pendurem na árvore de Natal (ou em um galho decorado). Leiam todos em voz alta.",
    question:
      "Se nossa árvore de Natal pudesse falar, o que ela diria sobre nossa família?",
  },
  {
    day: 24,
    icon: "🔔",
    title: "A Véspera da Magia",
    reflection:
      "A véspera de Natal carrega uma energia única — é a noite em que o mundo inteiro parece respirar mais devagar, esperando pela magia acontecer.",
    activity:
      "Reúnam-se antes da ceia e leiam juntos todos os papéis e bilhetes que escreveram durante os 24 dias. Celebrem o caminho percorrido.",
    question:
      "O que mudou em nós e na nossa família ao longo desses 24 dias de preparação?",
  },
  {
    day: 25,
    icon: "🌟",
    title: "Feliz Natal — O Maior Presente é o Amor",
    reflection:
      "Chegou o dia mais esperado! Mas o verdadeiro Natal não está nos presentes sob a árvore — está nos sorrisos, nos abraços e no amor que compartilhamos. O amor é o presente que nunca se gasta, nunca se perde e sempre se multiplica. Que este dia seja a celebração de tudo o que vivemos juntos.",
    activity:
      "Antes de trocar presentes, em roda, cada membro da família diga em voz alta o que mais admira e ama em cada um dos presentes. Esse é o verdadeiro presente de Natal.",
    question:
      "O que aprendemos juntos neste mês que queremos levar para sempre em nossos corações?",
  },
];

// ============================================
// 2. ÍCONES DECORATIVOS PARA CADA DIA
// ============================================
const DAY_ICONS = [
  "🕯️",
  "💌",
  "🤝",
  "🎵",
  "🌟",
  "📖",
  "🍪",
  "🎨",
  "🌍",
  "💝",
  "🌲",
  "✉️",
  "🎭",
  "🕊️",
  "🎁",
  "📷",
  "🧸",
  "🏠",
  "🌙",
  "🤗",
  "⭐",
  "🎶",
  "🎄",
  "🔔",
  "🌟",
];

// ============================================
// 3. REFERÊNCIAS DO DOM
// ============================================
const calendarGrid = document.getElementById("calendarGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalDayNumber = document.getElementById("modalDayNumber");
const modalTitle = document.getElementById("modalTitle");
const modalReflection = document.getElementById("modalReflection");
const modalActivity = document.getElementById("modalActivity");
const modalQuestion = document.getElementById("modalQuestion");
const snowCanvas = document.getElementById("snowCanvas");
const goldenCanvas = document.getElementById("goldenCanvas");

// ============================================
// 4. ESTADO DA APLICAÇÃO
// ============================================
let openedDays = JSON.parse(localStorage.getItem("openedDays") || "[]");
let tooltipElement = null;

// ============================================
// 5. UTILIDADES DE DATA
// Verifica se o dia está liberado com base na data do sistema
// ============================================

/**
 * Verifica se um dia do calendário está desbloqueado.
 * O calendário funciona de 1 a 25 de dezembro.
 * Fora de dezembro, todos os dias são liberados para demonstração.
 */
function isDayUnlocked(day) {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0-11 (11 = dezembro)
  const currentDay = now.getDate();

  // Se estamos em dezembro, liberar apenas até o dia atual
  if (currentMonth === 11) {
    return day <= currentDay;
  }

  // Fora de dezembro: liberar todos para demonstração
  return true;
}

// ============================================
// 6. GERAÇÃO DA GRADE DO CALENDÁRIO
// ============================================

/**
 * Cria os 25 cartões do calendário e os adiciona ao DOM
 */
function generateCalendar() {
  DAYS_DATA.forEach((dayData, index) => {
    const card = document.createElement("div");
    card.classList.add("day-card");
    card.style.setProperty("--delay", index);

    const isUnlocked = isDayUnlocked(dayData.day);
    const isOpened = openedDays.includes(dayData.day);
    const isDay25 = dayData.day === 25;

    // Adiciona classes de estado
    if (!isUnlocked) card.classList.add("locked");
    if (isOpened) card.classList.add("opened");
    if (isDay25) card.classList.add("day-25");

    // Conteúdo do cartão
    card.innerHTML = `
            ${!isUnlocked ? '<span class="lock-icon">🔒</span>' : ""}
            <span class="day-number">${dayData.day}</span>
            <span class="day-icon">${dayData.icon}</span>
            <span class="day-label">Dezembro ${dayData.day}</span>
            ${isDay25 ? '<span class="day-25-label">Natal</span>' : ""}
        `;

    // Evento de clique
    card.addEventListener("click", (e) => {
      if (!isUnlocked) {
        showLockedTooltip(e, dayData.day);
        return;
      }
      openDay(dayData);
      // Marca como aberto
      if (!openedDays.includes(dayData.day)) {
        openedDays.push(dayData.day);
        localStorage.setItem("openedDays", JSON.stringify(openedDays));
        card.classList.add("opened");
      }
    });

    calendarGrid.appendChild(card);
  });
}

// ============================================
// 7. TOOLTIP PARA DIAS BLOQUEADOS
// ============================================

/**
 * Mostra uma mensagem flutuante quando o usuário tenta abrir um dia futuro
 */
function showLockedTooltip(event, day) {
  // Remove tooltip anterior se existir
  if (tooltipElement) {
    tooltipElement.remove();
  }

  tooltipElement = document.createElement("div");
  tooltipElement.classList.add("tooltip");
  tooltipElement.textContent = `🔒 Disponível em ${day} de dezembro`;
  document.body.appendChild(tooltipElement);

  // Posiciona perto do clique
  const x = event.clientX;
  const y = event.clientY - 50;
  tooltipElement.style.left = `${Math.min(x, window.innerWidth - 200)}px`;
  tooltipElement.style.top = `${Math.max(y, 10)}px`;

  // Exibe e remove
  requestAnimationFrame(() => {
    tooltipElement.classList.add("show");
  });

  setTimeout(() => {
    if (tooltipElement) {
      tooltipElement.classList.remove("show");
      setTimeout(() => {
        if (tooltipElement) {
          tooltipElement.remove();
          tooltipElement = null;
        }
      }, 200);
    }
  }, 2000);
}

// ============================================
// 8. MODAL — ABERTURA E FECHAMENTO
// ============================================

/**
 * Abre o modal com os dados do dia selecionado
 */
function openDay(dayData) {
  // Preenche o conteúdo do modal
  modalDayNumber.textContent = `Dia ${dayData.day} de Dezembro`;
  modalTitle.textContent = dayData.title;
  modalReflection.textContent = dayData.reflection;
  modalActivity.textContent = dayData.activity;
  modalQuestion.textContent = `"${dayData.question}"`;

  // Estilo especial para o dia 25
  if (dayData.day === 25) {
    modal.classList.add("modal-day25");
    activateGoldenParticles();
  } else {
    modal.classList.remove("modal-day25");
    deactivateGoldenParticles();
  }

  // Abre o modal com animação
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Toca o efeito sonoro
  playChimeSound(dayData.day === 25);
}

/**
 * Fecha o modal
 */
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  deactivateGoldenParticles();
}

// Fechar ao clicar no botão X
modalClose.addEventListener("click", closeModal);

// Fechar ao clicar fora do modal
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Fechar com tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// ============================================
// 9. EFEITO SONORO — Web Audio API
// Sem necessidade de arquivos externos
// ============================================

/**
 * Toca um som de sino/chime suave usando Web Audio API
 * @param {boolean} isSpecial - Som especial para o dia 25
 */
function playChimeSound(isSpecial = false) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    if (isSpecial) {
      // Som especial para o dia 25 — acorde majestoso
      playNote(audioCtx, 523.25, 0, 1.5); // C5
      playNote(audioCtx, 659.25, 0.1, 1.4); // E5
      playNote(audioCtx, 783.99, 0.2, 1.3); // G5
      playNote(audioCtx, 1046.5, 0.3, 1.2); // C6
      playNote(audioCtx, 1318.5, 0.5, 1.5); // E6
    } else {
      // Som normal — sino suave
      playNote(audioCtx, 830.61, 0, 0.8); // G#5
      playNote(audioCtx, 1244.51, 0.05, 0.6); // D#6
    }
  } catch (e) {
    // Silenciosamente falha se o áudio não estiver disponível
    console.log("Áudio não disponível:", e.message);
  }
}

/**
 * Toca uma nota individual
 */
function playNote(audioCtx, frequency, startTime, duration) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(
    frequency,
    audioCtx.currentTime + startTime,
  );

  // Envelope: ataque suave, decaimento natural
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime + startTime);
  gainNode.gain.linearRampToValueAtTime(
    0.12,
    audioCtx.currentTime + startTime + 0.05,
  );
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioCtx.currentTime + startTime + duration,
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start(audioCtx.currentTime + startTime);
  oscillator.stop(audioCtx.currentTime + startTime + duration);
}

// ============================================
// 10. EFEITO DE NEVE CAINDO
// Canvas animado com flocos de neve
// ============================================

/**
 * Sistema de partículas de neve
 */
const snow = {
  ctx: null,
  particles: [],
  maxParticles: 120,
  animationId: null,

  /**
   * Inicializa o canvas de neve
   */
  init() {
    this.ctx = snowCanvas.getContext("2d");
    this.resize();
    this.createParticles();
    this.animate();

    window.addEventListener("resize", () => this.resize());
  },

  /**
   * Ajusta o canvas ao tamanho da janela
   */
  resize() {
    snowCanvas.width = window.innerWidth;
    snowCanvas.height = window.innerHeight;
  },

  /**
   * Cria os flocos de neve iniciais
   */
  createParticles() {
    this.particles = [];
    // Menos partículas em telas menores para performance
    const count = window.innerWidth < 768 ? 60 : this.maxParticles;

    for (let i = 0; i < count; i++) {
      this.particles.push(this.createSnowflake());
    }
  },

  /**
   * Cria um floco de neve individual com propriedades aleatórias
   */
  createSnowflake() {
    return {
      x: Math.random() * snowCanvas.width,
      y: Math.random() * snowCanvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.3,
      wind: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.6 + 0.2,
      swing: Math.random() * Math.PI * 2, // Oscilação lateral
      swingSpeed: Math.random() * 0.02 + 0.005,
    };
  },

  /**
   * Loop de animação da neve
   */
  animate() {
    this.ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);

    this.particles.forEach((p) => {
      // Atualiza posição
      p.y += p.speed;
      p.swing += p.swingSpeed;
      p.x += Math.sin(p.swing) * 0.5 + p.wind;

      // Reinicia ao sair da tela
      if (p.y > snowCanvas.height + 10) {
        p.y = -10;
        p.x = Math.random() * snowCanvas.width;
      }
      if (p.x > snowCanvas.width + 10) p.x = -10;
      if (p.x < -10) p.x = snowCanvas.width + 10;

      // Desenha o floco
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  },
};

// ============================================
// 11. PARTÍCULAS DOURADAS — DIA 25
// Efeito especial para o Natal
// ============================================

const goldenParticles = {
  ctx: null,
  particles: [],
  active: false,
  animationId: null,

  /**
   * Inicializa o canvas de partículas douradas
   */
  init() {
    this.ctx = goldenCanvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
  },

  resize() {
    goldenCanvas.width = window.innerWidth;
    goldenCanvas.height = window.innerHeight;
  },

  /**
   * Ativa as partículas douradas
   */
  activate() {
    this.active = true;
    this.particles = [];
    goldenCanvas.classList.add("active");

    // Cria partículas douradas
    for (let i = 0; i < 80; i++) {
      this.particles.push({
        x: Math.random() * goldenCanvas.width,
        y: Math.random() * goldenCanvas.height,
        radius: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2 - 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50,
        maxLife: 150,
        hue: Math.random() * 30 + 35, // Variação dourada
      });
    }

    this.animate();
  },

  /**
   * Desativa as partículas douradas
   */
  deactivate() {
    this.active = false;
    goldenCanvas.classList.remove("active");
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },

  /**
   * Loop de animação das partículas douradas
   */
  animate() {
    if (!this.active) return;

    this.ctx.clearRect(0, 0, goldenCanvas.width, goldenCanvas.height);

    this.particles.forEach((p, index) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;

      // Renovar partículas que morrem
      if (p.life <= 0) {
        p.x = Math.random() * goldenCanvas.width;
        p.y = Math.random() * goldenCanvas.height;
        p.life = p.maxLife;
      }

      // Fade baseado na vida restante
      const fadeFactor = p.life / p.maxLife;
      const currentOpacity = p.opacity * fadeFactor;

      // Desenha partícula com brilho
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      // Gradiente radial para brilho
      const gradient = this.ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        p.radius * 2,
      );
      gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${currentOpacity})`);
      gradient.addColorStop(1, `hsla(${p.hue}, 80%, 60%, 0)`);

      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      // Ponto brilhante central
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 200, ${currentOpacity})`;
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  },
};

/**
 * Funções de ativação/desativação expostas
 */
function activateGoldenParticles() {
  goldenParticles.activate();
}

function deactivateGoldenParticles() {
  goldenParticles.deactivate();
}

// ============================================
// 12. INICIALIZAÇÃO
// ============================================

/**
 * Inicializa toda a aplicação quando o DOM estiver pronto
 */
document.addEventListener("DOMContentLoaded", () => {
  // Gera os cartões do calendário
  generateCalendar();

  // Inicializa o efeito de neve
  snow.init();

  // Inicializa o canvas de partículas douradas
  goldenParticles.init();
});
