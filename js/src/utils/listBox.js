/**
 * fait fonctionner la listbox
 */
/**
 * mets à jour les valeur et attributs de la listbox
 * @param {array} options un tabelau d'objet avec les valeurs de chaque option
 * @param {objet} listboxBtn élément du dom du bouton de la listbox
 * @param {int} newIndex nouvel index de la valeur sélectionné
 * @param {int} oldIndex index de l'ancienne valuer ssélectionné
 * @param {function} updateAfterTri function pour mettre à jour le composant parent
 */
function updateValue(options, listboxBtn, newIndex, oldIndex, updateAfterTri) {
    const id = options[newIndex].id
    const textContent = options[newIndex].textContent
    listboxBtn.querySelector('.listbox__btn__text').textContent = textContent
    listboxBtn.setAttribute('aria-activedescendant', id)
    options[oldIndex].classList.remove('selected')
    options[newIndex].classList.add('selected')
    options[oldIndex].removeAttribute('aria-selected')
    options[newIndex].setAttribute('aria-selected', true)
    console.log(textContent.toLowerCase().trim())
    updateAfterTri(textContent.toLowerCase().trim())
}
/**
 * mets à jour aria-expended
 * @param {oject} elt element du dom où la valuer de aria-expended est à modifier
 * @param {boolean} value true si la listbox est déplié sinon false
 */
function ariaExpanded(elt, value) {
    elt.setAttribute('aria-expanded', value)
}

/**
 * initialise le fonctionnement de la listbox
 * @param {function} updateAfterTri function pour mettre à jour le composant parent
 */
export default function listBox(updateAfterTri) {
    const listboxes = document.getElementsByClassName('listbox')
    Array.from(listboxes).forEach((listbox) => {
        const listboxBtn = listbox.querySelector('.listbox__btn')
        const listboxContent = listbox.querySelector('.listbox__content')
        const listboxList = listbox.querySelector('.listbox__list')
        const options = listbox.getElementsByClassName('listbox__elt')
        /**
         * action au survol du bouton
         * @param {event} e evenement
         */
        listboxBtn.onmouseover = function (e) {
            ariaExpanded(listboxBtn, true)
            listboxList.classList.remove('hidden')
        }
        /**
         * action à la fin du survol
         * @param {event} e évenement
         */
        listboxContent.onmouseout = function (e) {
            if (!listboxContent.contains(e.relatedTarget)) {
                // moused out of div
                ariaExpanded(listboxBtn, false)
                listboxList.classList.add('hidden')
            }
        }
        /**
         * action au focus du bouton
         * @param {event} e évenement
         */
        listboxBtn.onfocus = (e) => {
            ariaExpanded(listboxBtn, true)
        }
        /**
         * action à la fin du focus
         * @param {event} e evenement
         */
        listboxBtn.onfocusout = (e) => {
            ariaExpanded(listboxBtn, false)
        }
        /**
         * action lors de l'utilisation des bouton haut bas
         * @param {event} e evenement
         */
        listbox.onkeydown = (e) => {
            const index = Array.from(options).findIndex((x) =>
                x.classList.contains('selected')
            )
            // const selected =  listbox.getElementsByClassName('selected')[0]
            if ([32, 13].includes(e.keyCode)) {
                if (listboxList.classList.contains('hidden')) {
                    listboxList.classList.remove('hidden')
                    listboxList.focus()
                } else {
                    listboxList.classList.add('hidden')
                    listboxBtn.focus()
                }

                if (e.keyCode === 38) {
                    // haut
                    const prev = index === 0 ? options.length - 1 : index - 1
                    updateValue(
                        options,
                        listboxBtn,
                        prev,
                        index,
                        updateAfterTri
                    )
                }
                if (e.keyCode === 40) {
                    // bas
                    const next = index === options.length - 1 ? 0 : index + 1
                    updateValue(
                        options,
                        listboxBtn,
                        next,
                        index,
                        updateAfterTri
                    )
                }
            }
        }
        /**
         * action lors de l'utilisation de la souris
         * @param {event} e evenement
         */
        listbox.onclick = (e) => {
            const index = Array.from(options).findIndex((x) =>
                x.classList.contains('selected')
            )
            const newValue = Array.from(options).findIndex(
                (x) => x === e.target
            )
            updateValue(options, listboxBtn, newValue, index, updateAfterTri)
            listboxList.classList.add('hidden')
        }
    })
}
