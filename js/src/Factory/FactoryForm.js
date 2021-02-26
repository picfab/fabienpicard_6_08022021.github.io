import Form from '../DomConstructor/Form'

/**
 * Factory pour creer les objets Media
 */
export default function FactoryForm() {
    this.CreateElement = function (nameAuthor) {
        const element = {}

        /**
         * création du rendu html
         */
        element.html = new Form(nameAuthor)

        /**
         * Methode pour ouvrir le formulaire
         */
        element.open = function () {
            const close = this.html.querySelector('.form__close')
            close.onclick = () => this.close()
            const body = document.querySelector('body')
            body.append(this.html)
            this.html.querySelector('[name="prenom"]').focus()
        }

        /**
         * Methode pour fermer le formulaire
         */
        element.close = function () {
            const form = document.getElementById('contact')
            form.remove()
            document.querySelector('html').removeAttribute('style')
            document.querySelector('.author__btn').focus()
        }

        // event
        const btnClose = element.html.querySelector('.form__close')
        const firstInput = element.html.querySelector('.form__input')
        btnClose.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                element.close()
            }
            if (!e.shiftKey && e.key === 'Tab') {
                e.preventDefault()
                firstInput.focus()
            }
        }

        return element
    }
}
