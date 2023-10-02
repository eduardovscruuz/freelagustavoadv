const form = document.getElementById('email-form');
const sendMessage = document.querySelector('#sendMessage');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  console.log('Enviando....');

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        console.log('Email enviado com sucesso!');
        form.reset();

        sendMessage.innerHTML = 'Email enviado com sucesso!';
        sendMessage.style.opacity = 1;
        sendMessage.style.transform = 'translateY(8px)';
        setTimeout(() => {
          sendMessage.style.opacity = 0;
          sendMessage.style.transform = 'translateY(0)';
        }, 2400);
      } else {
        console.error('Erro ao enviar email');
        alert('Erro ao enviar email!');
      }
    })
    .catch(error => {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar email!');
    });
});


const intersectObserver = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting){intersectObserver.unobserve(entry.target)}
        })
    },
    {
        threshold:0
    }
)

const elements = document.querySelectorAll(".animate")

elements.forEach(element => intersectObserver.observe(element))

const showInfoButtons = document.querySelectorAll('.info-btn');
        const infoOverlay = document.querySelector('.info-overlay');
        const infoPopup = document.querySelector('.info-popup');

        showInfoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonClasses = button.classList;
                let content = '';
                let titleContent = '';
                let image = '';

                if (buttonClasses.contains('consultoria')) {
                    image = '<img src="./assets/consultoria.png" alt="consultoria jurídica">'
                    titleContent = 'CONSULTORIA JURÍDICA'
                    content = 'Em um cenário tributário cada vez mais complexo, a consultoria jurídica torna-se um elemento vital para pessoas físicas e jurídicas, que buscam evitar cobranças de tributos inesperados pelo Fisco. Em razão de constantes mudanças legislativas, é essencial que você ou sua empresa estejam de acordo com as leis e regimes tributários, agindo de forma preventiva diante dos conflitos inerentes às relações tributárias.';
                } else if (buttonClasses.contains('fiscal')) {
                    image = '<img src="./assets/fiscal.png" alt="execução fiscal">'
                    titleContent = 'EXECUÇÃO FISCAL'
                    content = 'As execuções fiscais correspondem a mais da metade do número de excuções realizadas em nosso ordenamento jurídico, gerando inúmeras CDAs, que podem atrapalhar a continuidade da sua empresa, ou, até mesmo, penhorar seu bem imóvel. Com uma defesa técnica avançada, você pode obter soluções para anular a CDA, buscando alguma nulidade ou até mesmo alegar a sua prescrição.';
                } else if (buttonClasses.contains('irpf')) {
                    image = '<img src="./assets/irpf.png" alt="isenção irpf" />'
                    titleContent = 'ISENÇÃO IRPF'
                    content = 'Todos os aposentados ou pensionistas que têm (ou tiveram) alguma dessas doenças, nos termos da Lei n° 7.713/88, têm direito à isenção do imposto de renda. tuberculose ativa; alienação mental; esclerose múltipla; neoplasia maligna (câncer) - mesmo que curado; cegueira (mesmo que monocular); hanseníase; paralisia irreversível e incapacitante; cardiopatia grave; doença de Parkinson; espondiloartrose anquilosante; nefropatia grave; hepatopatia grave; estados avançados da doença de Paget (osteíte deformante); contaminação por radiação; síndrome da imunodeficiência adquirida (HIV/AIDS).';
                } else if (buttonClasses.contains('nacional')) {
                    image = '<img src="./assets/nacional.png" alt="simples nacional" />'
                    titleContent = 'SIMPLES NACIONAL'
                    content = 'As empresas optantes pelo Simples Nacional, que comercializam produtos sujeitos ao regime de tributação monofásica do PIS e da Cofins e ao ICMS ST (substituição tributária), podem deduzir os valores referentes às vendas do cálculo do Simples Nacional. Essa possibilidade surgiu com o advento da Lei Complementar 147/2014. Estes tributos já foram pagos na origem, pela indústria ou pelo distribuidor. E quando sua empresa paga o DAS do Simples Nacional, está recolhendo em duplicidade. Os principais setores beneficiados são: perfumarias, vestuário, comércio de autopeças, comércio de cosméticos, drogarias e farmácias (exceto manipulação), material de construção, supermercados, bares, restaurantes e lojas de conveniências.';
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
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');

    document.body.style.overflow = 'hidden'
  if(infoOverlay.style.display === 'flex'){
    infoOverlay.style.display = 'none'
    document.body.style.overflow = 'auto'

  }
  else if(infoOverlay.style.display = 'none'){
    infoOverlay.style.display = 'flex'

  }
  infoOverlay.style.opacity = '1'
  infoOverlay.style.zIndex = '0'
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
