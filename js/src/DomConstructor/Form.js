const eltsForm = [
    {
        label: 'Prénom',
        name: 'prenom',
        type: 'text',
    },
    {
        label: 'Nom',
        name: 'nom',
        type: 'text',
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
    },
    {
        label: 'Votre message',
        name: 'message',
        type: 'textarea',
    },
]

function createInput(params) {
    const formElt = document.createElement('div')
    formElt.classList.add('form__elt')
    const labelElt = document.createElement('label')
    labelElt.classList.add('form__label')
    labelElt.textContent = params.label
    labelElt.for = params.name
    let input

    if (params.type === 'textarea') {
        input = document.createElement('textarea')
        input.classList.add('form__textarea')
    } else {
        input = document.createElement('input')
        input.type = params.type
    }
    input.name = params.name
    input.classList.add('form__input')

    formElt.append(labelElt)
    formElt.append(input)

    return formElt
}
export default function Form(name) {
    const form = document.createElement('div')
    form.classList.add('form')
    form.id = 'contact'

    const content = document.createElement('div')
    content.classList.add('form__content')

    const close = document.createElement('div')
    close.classList.add('form__close', 'fas', 'fa-times')

    const title = document.createElement('div')
    title.classList.add('form__title')
    title.innerHTML = `Contactez-moi <br> ${name}`

    content.append(title)
    content.append(close)

    eltsForm.forEach((elt) => {
        const eltDom = createInput(elt)
        content.append(eltDom)
    })

    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.textContent = 'Envoyer'
    btn.classList.add('form__submit', 'btn')
    content.append(btn)
    form.append(content)

    return form
}
