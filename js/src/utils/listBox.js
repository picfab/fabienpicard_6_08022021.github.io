/**
 * fait fonctionner la listbox
 */

export default function ListBox() {
    /**
     * initialise le fonctionnement de la listbox
     * @param {objcet} listbox L'élément du dom conmprenant la listbox
     * @param {function} updateAfterTri function pour mettre à jour le composant parent
     */
    this.CreateElement = function (listbox, updateAfterTri) {
        const element = {}
        element.btn = listbox.querySelector('.listbox__btn')
        element.boxContent = listbox.querySelector('.listbox__list')
        element.options = listbox.getElementsByClassName('listbox__elt')

        /**
         * mets à jour aria-expended
         * @param {boolean} value true si la listbox est déplié sinon false
         */
        element.ariaExpanded = function (value) {
            this.btn.setAttribute('aria-expanded', value)
        }

        /**
         * action sur le bouton de la listbox
         */
        /**
         * action sur les touches
         * @param {event} e evenement
         */
        element.btn.onkeydown = (e) => {
            if (['Enter', 'Space'].includes(e.key)) {
                if (element.boxContent.classList.contains('hidden')) {
                    element.open()
                } else {
                    element.boxContent.classList.add('hidden')
                    element.btn.focus()
                    element.close()
                }
            }
        }
        // action au click
        element.btn.onclick = function () {
            element.open()
        }

        /**
         * Ouvrir la listbox et Ajoute les TabIndex aux options
         */
        element.open = function () {
            let i = 100
            Array.from(this.options).forEach((elt) => {
                elt.tabIndex = i
                if (i === 100) {
                    elt.focus()
                }
                i = i + 1
            })
            this.boxContent.classList.remove('hidden')
            this.ariaExpanded(true)
            this.boxContent.focus()
        }

        /**
         * Ferme la listbox
         */
        element.close = function () {
            Array.from(element.options).forEach((elt) => {
                elt.removeAttribute('tabIndex')
            })
            element.ariaExpanded(false)
            element.boxContent.classList.add('hidden')
        }

        /**
         * mets à jour les valeur et attributs de la listbox
         * @param {int} newIndex nouvel index de la valeur sélectionné
         */
        element.updateValue = function (newIndex) {
            const id = this.options[newIndex].id
            const textContent = this.options[newIndex].textContent
            this.btn.querySelector(
                '.listbox__btn__text'
            ).textContent = textContent
            this.btn.nextSibling.nextElementSibling.setAttribute(
                'aria-activedescendant',
                id
            )
            const old = Array.from(this.options).findIndex((x) =>
                x.classList.contains('selected')
            )
            this.options[old].classList.remove('selected')
            this.options[old].removeAttribute('aria-selected')
            this.options[newIndex].classList.add('selected')
            this.options[newIndex].setAttribute('aria-selected', true)
            updateAfterTri(textContent.toLowerCase().trim())
            this.close()
        }

        /**
         * Ajoute les événnements aux options de la listbox
         */
        Array.from(element.options).forEach((option, i) => {
            option.onkeydown = (e) => {
                if (!e.shiftKey && e.key === 'Tab') {
                    if (i === element.options.length - 1) {
                        e.preventDefault()
                        element.options[0].focus()
                    }
                }
                if (e.shiftKey && e.key === 'Tab') {
                    if (i === 0) {
                        e.preventDefault()
                        element.options[element.options.length - 1].focus()
                    }
                }
                if (['Enter', 'Space'].includes(e.key)) {
                    element.updateValue(i)
                }
            }
            option.onclick = () => {
                element.updateValue(i)
            }
        })

        return element
    }
}
