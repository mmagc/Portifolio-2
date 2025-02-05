let seção = document.querySelector("#sobre_mim")
let seção2 = document.querySelector("#sobre_mim2") 

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
        })

    })
})