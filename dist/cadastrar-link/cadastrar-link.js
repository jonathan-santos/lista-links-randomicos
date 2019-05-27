const form = document.querySelector('form')
const formStatus = document.querySelector('form .status')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const dados = form.getElementsByClassName('dado')
    const link = {
        url: dados[0].value,
        description: dados[1].value
    }

    fetch('/api/links', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(link)
    }).then((res) => {
        if(res.ok) {
            formStatus.innerHTML = "STATUS: Link criado com sucesso!"
            formStatus.className = "status-sucesso"
        } else {
            formStatus.innerHTML = "STATUS: Erro, link não foi criado"
            formStatus.className = "status-erro"
        }
    })
    .catch(erro => console.log("Ocorreu um erro na chamada"))
})