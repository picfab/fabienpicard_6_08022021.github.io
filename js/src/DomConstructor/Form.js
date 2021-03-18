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

function createInput(params, i) {
    const formElt = document.createElement('div')
    formElt.classList.add('form__elt')
    const labelElt = document.createElement('label')
    labelElt.classList.add('form__label')
    labelElt.textContent = params.label
    labelElt.for = params.name
    labelElt.id = params.name
    let input

    if (params.type === 'textarea') {
        input = document.createElement('textarea')
        input.classList.add('form__textarea')
    } else {
        input = document.createElement('input')
        input.type = params.type
    }
    input.name = params.name
    input.ariaLabelledby = params.name
    input.classList.add('form__input')
    input.tabIndex = i

    formElt.append(labelElt)
    formElt.append(input)

    return formElt
}

export default function Form(name, formObject) {
    const form = document.createElement('div')
    form.ariaLabel = `Contactez-moi ${name}`
    form.ariaLabelledby = 'formTitle'
    form.role = 'dialog'

    form.classList.add('form')
    form.id = 'contact'

    const content = document.createElement('div')
    content.classList.add('form__content')

    const close = document.createElement('div')
    close.classList.add('form__close', 'fas', 'fa-times')
    close.ariaLabel = 'Close Contact form'

    const title = document.createElement('h1')
    title.id = 'formTitle'
    title.classList.add('form__title')
    title.innerHTML = `Contactez-moi <br> ${name}`

    content.append(title)
    content.append(close)

    let i = 50
    eltsForm.forEach((elt) => {
        const eltDom = createInput(elt, i)
        content.append(eltDom)
        i = i + 1
    })

    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.tabIndex = i
    close.tabIndex = i + 1
    btn.textContent = 'Envoyer'
    btn.ariaLabel = 'Envoyer'
    btn.classList.add('form__submit', 'btn')
    content.append(btn)
    form.append(content)

    btn.onclick = () => {
        const inputs = form.getElementsByClassName('form__input')
        Array.from(inputs).forEach((input) => {
            console.log(`${input.name} : ${input.value}`)
        })
    }

    return form
}
