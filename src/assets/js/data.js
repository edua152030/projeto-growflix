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
});

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
    const modalId = `modal-webnar-${index}`; // Novo ID único

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
`;

    cardContainerWeb.appendChild(cardElementWeb)
})

capawebnar.appendChild(cardContainerWeb)
