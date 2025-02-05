let seção = document.querySelector("#sobre_mim")
let seção2 = document.querySelector("#sobre_mim2") 
let seção3 = document.querySelector("#projetos") 

function setupAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion__header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });
}

fetch("./assets/dados.json").then((response) => {
    response.json().then((dados) => {
        dados.itens.map((dado) => {
            seção.innerHTML += `<img class="about__photo" src="${dado.sobre.foto}" alt="">
        <div class="about__description">
          <h2>${dado.sobre.titulo}</h2>
          <p>${dado.sobre.descricao}</p>  
          <div class="about__icons">
            <i class="bi bi-translate"></i>
            <span>${dado.sobre.idiomas[0].idioma}: ${dado.sobre.idiomas[0].nivel} | ${dado.sobre.idiomas[1].idioma}: ${dado.sobre.idiomas[1].nivel}</span>
          </div>
          <div class="description__buttons">
            <a href="https://www.linkedin.com/in/matheusgnann/" target="_blank">
              <button class="btn btn--primary">
                <span>Conecte-se Comigo</span>
                <i class="bi bi-arrow-up-right"></i>
              </button> 
            </a>
            <a href="">
              <button class="btn">
                <span>Currículo</span>
              </button>
            </a>
          </div>
        </div>`

        seção2.innerHTML += `<div class="col1">
          <div class="row1">
            <h3>Formação</h3>
            <h4>${dado.formacao[0].curso}</h4>
            <span>${dado.formacao[0].periodo}</span>
            <div class="about__icons">
              <i class="bi bi-bank"></i>
              <span>${dado.formacao[0].instituicao}</span>
            </div>
            <div class="about__icons">
              <i class="bi bi-mortarboard"></i>
              <span>${dado.formacao[0].tipo}</span>
            </div>
          </div>
          <div class="row2">
            <h3>Experiências</h3>
            <h4>${dado.experiencia[0].cargo}</h4>
            <span>${dado.experiencia[0].empresa} | ${dado.experiencia[0].periodo}</span>
            <span>${dado.experiencia[0].descricao}</span>
            <ul class="about__list">
              <li class="about__item">${dado.experiencia[0].atividades[0]}</li>
              <li class="about__item">${dado.experiencia[0].atividades[1]}</li>
              <li class="about__item">${dado.experiencia[0].atividades[2]}</li>
            </ul>
          </div>
        </div>
        <div class="col2">
          <h3>Cursos</h3>
          <div id="accordion">
            <div class="accordion__item active">
              <button class="accordion__header start">
                <span>${dado.cursos[0].nome}</span>
                <i class="bi bi-caret-down-fill"></i>
              </button>
              <div class="accordion__body">
                <p>
                ${dado.cursos[0].instituicao} | ${dado.cursos[0].periodo}
                </p>
                <p>
                ${dado.cursos[0].descricao}
                </p>
              </div>
            </div>
            <div class="accordion__item">
              <button class="accordion__header">
                <span>${dado.cursos[1].nome}</span>
                <i class="bi bi-caret-down-fill"></i>
              </button>
              <div class="accordion__body">
                <p>
                ${dado.cursos[1].instituicao} | ${dado.cursos[1].periodo}
                </p>
                <p>
                ${dado.cursos[1].descricao}
                </p>
              </div>
            </div>
            <div class="accordion__item">
              <button class="accordion__header end">
                <span>${dado.cursos[2].nome}</span>
                <i class="bi bi-caret-down-fill"></i>
              </button>
              <div class="accordion__body end">
                <p>
                ${dado.cursos[2].instituicao} | ${dado.cursos[2].periodo}
                </p>
                <p>
                ${dado.cursos[2].descricao}
                </p>
              </div>
            </div>`
            setupAccordion();

            seção3.innerHTML += `
            <h2>${dado.projetos.titulo}</h2>
            <div class="projects__container">
                <div class="projects__card">
                <img class="card__cover" src="${dado.projetos.itens[0].imagens.capa}" alt="Capa Website Multiverso">
                <div class="card__body">
                    <h3 class="card__title">${dado.projetos.itens[0].titulo}</h3>
                    <p class="card__description">${dado.projetos.itens[0].descricao}</p>
                    <ul class="card__list">
                    <li class="card__item">${dado.projetos.itens[0].funcionalidades[0]};</li>
                    <li class="card__item">${dado.projetos.itens[0].funcionalidades[1]};</li>
                    <li class="card__item">${dado.projetos.itens[0].funcionalidades[2]}.</li>
                    </ul>
                    <ul class="technologies__list">
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[0].technologias[0]}" alt="Logo Javascript">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[0].technologias[1]}" alt="Logo Nodejs">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[0].technologias[2]}" alt="Logo React">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[0].technologias[3]}" alt="Logo Git">
                        </li>
                    </ul>
                    <div class="card__buttons">
                    <button class="btn btn--primary">
                        <a href="${dado.projetos.itens[0].botoes[0].link}" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
                            <span>Prévia</span>
                            <i class="bi bi-arrow-up-right" style="margin-left: 8px;"></i>
                        </a>
                    </button>
  
                    <button class="btn">
                        <a href="${dado.projetos.itens[0].botoes[1].link}">
                        <span>Repositório</span>
                        </a>
                    </button>  
                    </div>
                </div>
                </div>
                <div class="projects__card card--reverse">
                <img class="card__cover" src="${dado.projetos.itens[1].imagens.capa}" alt="Capa Jokenpo Yu-Gi-Oh">
                <div class="card__body">
                    <h3 class="card__title">${dado.projetos.itens[1].titulo}</h3>
                    <p class="card__description">${dado.projetos.itens[1].descricao}</p>
                    <ul class="card__list">
                    <li class="card__item">${dado.projetos.itens[1].funcionalidades[0]};</li>
                    <li class="card__item">${dado.projetos.itens[1].funcionalidades[1]};</li>
                    <li class="card__item">${dado.projetos.itens[1].funcionalidades[2]}.</li>
                    </ul>
                    <ul class="technologies__list">
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[1].technologias[0]}" alt="Logo Javascript">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[1].technologias[1]}" alt="Logo Nodejs">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[1].technologias[2]}" alt="Logo React">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[1].technologias[3]}" alt="Logo Git">
                        </li>
                    </ul>
                    <div class="card__buttons">
                    <button class="btn btn--primary">
                        <a href="${dado.projetos.itens[1].botoes[0].link}" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
                            <span>Prévia</span>
                            <i class="bi bi-arrow-up-right" style="margin-left: 8px;"></i>
                        </a>
                    </button>
  
                    <button class="btn">
                        <a href="${dado.projetos.itens[1].botoes[1].link}">
                        <span>Repositório</span>
                        </a>
                    </button>  
                    </div>
                </div>
                </div>
                <div class="projects__card">
                <img class="card__cover" src="${dado.projetos.itens[2].imagens.capa}" alt="Capa Games Store">
                <div class="card__body">
                    <h3 class="card__title">${dado.projetos.itens[2].titulo}</h3>
                    <p class="card__description">${dado.projetos.itens[2].descricao}</p>
                    <ul class="card__list">
                    <li class="card__item">${dado.projetos.itens[2].funcionalidades[0]};</li>
                    <li class="card__item">${dado.projetos.itens[2].funcionalidades[1]};</li>
                    <li class="card__item">${dado.projetos.itens[2].funcionalidades[2]}.</li>
                    </ul>
                    <ul class="technologies__list">
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[2].technologias[0]}" alt="Logo Javascript">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[2].technologias[1]}" alt="Logo Nodejs">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[2].technologias[2]}" alt="Logo React">
                        </li>
                        <li class="technologies__item">
                        <img class="technologies__logo" src="${dado.projetos.itens[2].technologias[3]}" alt="Logo Git">
                        </li>
                    </ul>
                    <div class="card__buttons">
                    <button class="btn btn--primary">
                        <a href="${dado.projetos.itens[2].botoes[0].link}" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
                            <span>Prévia</span>
                            <i class="bi bi-arrow-up-right" style="margin-left: 8px;"></i>
                        </a>
                    </button>
  
                    <button class="btn">
                        <a href="${dado.projetos.itens[2].botoes[1].link}">
                        <span>Repositório</span>
                        </a>
                    </button>  
                    </div>
                </div>
                </div>
                <a href="https://github.com/mmagc">
                <button class="btn btn--primary">
                    <span>Ver Todos os Projetos</span>
                    <i class="bi bi-arrow-up-right"></i>
                </button>  
                </a>
            </div>`

        })

    })
})