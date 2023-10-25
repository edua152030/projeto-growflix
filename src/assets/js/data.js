//episodios
const cardsepisodios = [
    {
        capa: 'https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg',
        url: 'https://www.youtube.com/embed/aJ-HZuLcKeA',
        titulo: 'Growcast #00 - conheça a Growdev'
    },
    {
        capa: 'https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg',
        url: 'https://www.youtube.com/embed/7OWT3lfHYvE',
        titulo: 'Growcast #01 - As profissões do futuro'
    },
    {
        capa: 'https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg',
        url: 'https://www.youtube.com/embed/ci1eQGPK89o',
        titulo: 'Growcast #02 - Como seguir a carreira internacional'
    },
    {
        capa: 'https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg',
        url: 'https://www.youtube.com/embed/WM7pGG7OicQ',
        titulo: 'Growcast #03 - Superando os desafios da carreira dev'
    },
    {
        capa: 'https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg',
        url: 'https://www.youtube.com/embed/2c8VOBZ160Y',
        titulo: 'Growcast #04 - Agile master a profissão do futuro'
    },
    {
        capa: 'https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg',
        url: 'https://www.youtube.com/embed/mxnEm03cYPc',
        titulo: 'Growcast #05 - Como iniciar na carreira em desenvolvimento de software'
    },
    {
        capa: 'https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg',
        url: 'https://www.youtube.com/embed/m7DyR07KrOE',
        titulo: 'Growcast #06 - Mulheres e inclusão na tecnologia'
    },
    {
        capa: 'https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg',
        url: 'https://www.youtube.com/embed/vW8G9KPwRL0',
        titulo: 'Growcast #07 - Desenvolvendo profissionais na area de TI'
    },
    {
        capa: 'https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg',
        url: 'https://www.youtube.com/embed/_Ut2KqAqPyk',
        titulo: 'Growcast #08 - A solução esta transformando o mercado de TI no Brasil'
    },
    {
        capa: 'https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg',
        url: 'https://www.youtube.com/embed/dfDgs0Ive2Q',
        titulo: 'Growcast #09 - Acompanhe com quem realmente entende tudo sobre o mercado de trabalho no mundo da TI'
    }
]

const capaepisodios = document.querySelector('.card-episodios')

const cardContainerEp = document.createElement('div')
cardContainerEp.classList.add('d-flex') 
cardContainerEp.classList.add('flex-wrap')

capaepisodios.appendChild(cardContainerEp)

cardsepisodios.forEach((cardEp) => {
    const cardElementEp = document.createElement('div')

    cardElementEp.innerHTML = `
        <div class="container card-container">
            <div class="row">
                <div class="card-content">
                    <img class="card-capa" src="${cardEp.capa}">
                    <h4 class="text-light card-hiden">${cardEp.titulo}</h4>
                    <button class="btn btn-primary card-hiden " data-bs-toggle="modal" data-bs-target="#modal-episodio">assistir</button>
                </div>
            </div>
        </div>
             
        <div class="modal full-fullscreen" id="modal-episodio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <iframe width="100%" height="100vh" src="${cardEp.url}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
`;



    cardContainerEp.appendChild(cardElementEp)
})
//fim episodios

//webnar
const cardwebnar = [
    {
        capa: 'https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg',
        url: 'https://www.youtube.com/embed/WKbLXuP9S-c',
        titulo: 'Webnar - reciando interface do linkedin com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg',
        url: 'https://www.youtube.com/embed/dJ6y1zMjVXU',
        titulo: 'Webnar recriando a interface do instagran com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg',
        url: 'https://www.youtube.com/embed/8rdJsqUjsGg',
        titulo: 'Webnar - recriando a interface do ifood com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg',
        url: 'https://www.youtube.com/embed/C4p_7qBsECw',
        titulo: 'Webnar -  recriando a interface do picpay com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg',
        url: 'https://www.youtube.com/embed/L1pKoMC6hWk',
        titulo: 'Webnar - recriando a interface do whatsapp com fluter'
    }
]

const capawebnar = document.querySelector('.card-webnar')

const cardContainerWeb = document.createElement('div')
cardContainerWeb.classList.add('d-flex')
cardContainerWeb.classList.add('flex-wrap')

cardwebnar.forEach((cardWeb, index) => {
    const cardElementWeb = document.createElement('div')
    const modalId = `modal-webnar-${index}`

    cardElementWeb.innerHTML = `
        <div class="container card-container">
            <div class="row">
                <div class="card-content">
                    <img class="card-capa" src="${cardWeb.capa}">
                    <h4 class="text-light card-hiden">${cardWeb.titulo}</h4>
                    <button class="btn btn-primary card-hiden" data-bs-toggle="modal" data-bs-target="#${modalId}">assistir</button>
                </div>
            </div>
        </div>
             
        <div class="modal" id="${modalId}" tabindex="3" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <iframe width="100%" height="100vh" src="${cardWeb.url}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
`
    capawebnar.appendChild(cardContainerWeb)
    cardContainerWeb.appendChild(cardElementWeb)
})
//fim webnar


//inicio da jornada
const jornada = [
        {
            capa: 'https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg',
            url: 'https://www.youtube.com/embed/FiZMowbaiJA',
            titulo: 'Webnar - reciando interface do linkedin com fluter'
        },
        {
            capa: 'https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg',
            url: 'https://www.youtube.com/embed/cwqDu0ZzbYE',
            titulo: 'Webnar recriando a interface do instagran com fluter'
        },
        {
            capa: 'https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg',
            url: 'https://www.youtube.com/embed/ZMZjQ9aRuIY',
            titulo: 'Webnar - recriando a interface do ifood com fluter'
        },
        {
            capa: 'https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg',
            url: 'https://www.youtube.com/embed/8sd3wuKTZMA',
            titulo: 'Webnar -  recriando a interface do picpay com fluter'
        },
        {
            capa: 'https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg',
            url: 'https://www.youtube.com/embed/-26aqPtgoEY',
            titulo: 'Webnar - recriando a interface do whatsapp com fluter'
        } 
]

const capajornada = document.querySelector('.UXUI')

const cardJornadaEp = document.createElement('div')

cardJornadaEp.classList.add('d-flex')
cardJornadaEp.classList.add('flex-wrap')

capajornada.appendChild(cardJornadaEp)

jornada.forEach((jornada, index) => {
    const modalId = `modal-jornada-${index}`
    const cardElementJornada = document.createElement('div')
    cardElementJornada.classList.add('container', 'card-container')
    cardElementJornada.innerHTML = `
        <div class="row">
            <div class="card-content">
                <img class="card-capa" src="${jornada.capa}">
                <h4 class="text-light card-hiden">${jornada.titulo}</h4>
                <button class="btn btn-primary card-hiden" data-bs-toggle="modal" data-bs-target="#${modalId}">assistir</button>
            </div>
        </div>
        
        <div class="modal" id="${modalId}" tabindex="3" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Adiciona um iframe incorporado ao vídeo do episódio no corpo do modal -->
                        <iframe width="100%" height="100vh" src="${jornada.url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    `

    cardJornadaEp.appendChild(cardElementJornada);
});
// fim da jornada


//inicio do diversos
const diversos = [
    {
        capa: 'https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg',
        url: 'https://www.youtube.com/embed/QsuhYgsSYQo',
        titulo: 'Webnar - reciando interface do linkedin com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg',
        url: 'https://www.youtube.com/embed/ouDn8z3PSqs',
        titulo: 'Webnar recriando a interface do instagran com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg',
        url: 'https://www.youtube.com/embed/cQDQNX6NXYo',
        titulo: 'Webnar - recriando a interface do ifood com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg',
        url: 'https://www.youtube.com/embed/nKGbolkirBM',
        titulo: 'Webnar -  recriando a interface do picpay com fluter'
    },
    {
        capa: 'https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg',
        url: 'https://www.youtube.com/embed/6sZPsqNjeek',
        titulo: 'Webnar - recriando a interface do whatsapp com fluter'
    } 
]

const capaDiversos = document.querySelector('.diversos')

const cardDiversosEp = document.createElement('div')
cardDiversosEp.classList.add('d-flex', 'flex-wrap')
capaDiversos.appendChild(cardDiversosEp)

diversos.forEach((diversos, index) => {
    const modalId = `modal-diversos${index}`
    const cardElementeDiversos = document.createElement('div')
    cardElementeDiversos.classList.add('container', 'card-container')
    cardElementeDiversos.innerHTML = `
    <div class="row">
            <div class="card-content">
                <img class="card-capa" src="${diversos.capa}">
                <h4 class="text-light card-hiden">${diversos.titulo}</h4>
                <button class="btn btn-primary card-hiden" data-bs-toggle="modal" data-bs-target="#${modalId}">assistir</button>
            </div>
        </div>
        
        <div class="modal" id="${modalId}" tabindex="3" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <iframe width="100%" height="100vh" src="${diversos.url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    `
    cardDiversosEp.appendChild(cardElementeDiversos)
})
//fim do diversos