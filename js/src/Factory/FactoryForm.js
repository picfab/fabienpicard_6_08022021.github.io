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
        }

        /**
         * Methode pour fermer le formulaire
         */
        element.close = function () {
            const form = document.getElementById('contact')
            form.remove()
        }

        return element
    }
}
