const intersectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) {
        intersectObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
  }
);

const elements = document.querySelectorAll('.animate');

elements.forEach((element) => intersectObserver.observe(element));

const showInfoButtons = document.querySelectorAll('.info-btn');
const infoOverlay = document.querySelector('.info-overlay');
const infoPopup = document.querySelector('.info-popup');

showInfoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonClasses = button.classList;
    let content = '';
    let titleContent = '';
    let image = '<img src="./assets/criminal-icon.png" />';

    if (buttonClasses.contains('info1')) {
      titleContent = 'FLAGRANTE';
      content =
        'Atuação imediata no caso de prisão em flagrante, com o objetivo de garantir os direitos da pessoa presa. O advogado acompanha o procedimento policial, verificando a legalidade dos atos na delegacia, elabora estratégias de liberdade, além garantir a integridade física do cliente.';
    } else if (buttonClasses.contains('info2')) {
      titleContent = 'DEFESA EM LAVAGEM DE DINHEIRO';
      content =
        'Atuação especializada na defesa de acusados de lavagem de capitais, desde o inquérito policial até a sentença judicial. É realizada uma análise minuciosa das provas, comprovando a origem lícita das transações financeiras, participação no delito, comprovação de inocência. Além de buscar garantir a liberdade, a legalidade das provas, o advogado atua de forma estratégica que visa a restituição de bens ou valores, assim como desbloqueio das contas bancárias, utilizando de meios técnicos que garantem soluções eficientes.';
    } else if (buttonClasses.contains('info3')) {
      titleContent = 'CUSTÓDIA';
      content =
        'No momento da audiência de custódia, o advogado verifica a legalidade da prisão, busca garantir a liberdade do cliente, formula pedidos de soltura, garante os direitos do cliente.';
    } else if (buttonClasses.contains('info4')) {
      titleContent = 'DEFESA EM ORGANIZAÇÃO CRIMINOSA';
      content =
        'A defesa de acusados em integrar organização criminosa envolve a análise profunda de provas, como escutas telefônicas, relatórios de inteligência, meios de obtenção de provas, para identificar eventuais excessos cometidos pela acusação. O advogado busca garantir uma defesa técnica e justa.';
    } else if (buttonClasses.contains('info5')) {
      titleContent = 'INQUÉRITO POLICIAL';
      content =
        'No inquérito policial, a atuação do advogado garante que a investigação seja conduzida de maneira lícita, orientando o cliente, analisando a produção de prova juntada em sede policial. Essa atuação visa evitar ilegalidades, preparar uma defesa técnica, desenvolver estratégias eficazes caso a denúncia seja formalizada.';
    } else if (buttonClasses.contains('info6')) {
      titleContent = 'HABEAS CORPUS';
      content =
        'Habeas Corpus é um importante instrumento de defesa para assegurar a liberdade do cliente. O Habeas Corpus precisa ser estratégico, objetivo, técnico, para alcançar a liberdade. A Atuação do advogado especialista vai desde a decisão do juiz de 1° grau até os Tribunais Superiores.';
    } else if (buttonClasses.contains('info7')) {
      titleContent = 'PROCESSO CRIMINAL';
      content =
        'A atuação do advogado no processo criminal envolve a análise detalhada do caso, a elaboração de estratégias de defesa, teses consolidadas, soluções eficientes para cada caso. Acompanhamento em todas as fases do processo até a sentença.';
    } else if (buttonClasses.contains('info8')) {
      titleContent = 'DEFESA NA LEI DAS DROGAS';
      content =
        'Em crimes relacionados à lei de drogas, a atuação inicia desde a abordagem, quantidade apreendida, provas juntadas, testemunhas, até a sentença. O advogado atua elaborando teses defensivas eficientes, estratégias consolidadas, afim de garantir os direitos individuais e a liberdade do acusado.';
    }

    infoPopup.innerHTML = `
                  <button class="close-info-button custom-close"> ⬅ Voltar</button>
                  <h2>${image}${titleContent}</h2>
                  <p>${content}</p>
              `;

    infoOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Adicione um pequeno atraso antes de aplicar a classe "active"
    setTimeout(() => {
      infoOverlay.classList.add('active');
      infoPopup.classList.add('active');
    }, 10);

    const customCloseButton = document.querySelector('.custom-close');
    customCloseButton.addEventListener('click', () => {
      infoOverlay.style.display = 'none';
      infoOverlay.classList.remove('active');
      infoPopup.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
});

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');

  document.body.style.overflow = 'hidden';
  if (infoOverlay.style.display === 'flex') {
    infoOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else infoOverlay.style.display = 'none';
  {
    infoOverlay.style.display = 'flex';
  }
  infoOverlay.style.opacity = '1';
  infoOverlay.style.zIndex = '0';
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
