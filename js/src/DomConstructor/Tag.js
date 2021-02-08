/**
 * Constructeur html d'un bouton Tag
 * @param {string} tag le nom du tag
 */

export default function Tag(tag){
    const tagElt = document.createElement('li')
    tagElt.classList.add('tags__elt')
    const tagBtn = document.createElement('button')
    tagBtn.classList.add('tags__btn', 'btn', 'btn--tags')
    tagBtn.textContent = tag
    tagElt.append(tagBtn)
    return tagElt
}
