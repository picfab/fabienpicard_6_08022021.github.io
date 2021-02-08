/**
 * Constructeur html d'un bouton Tag
 * @param {string} tag le nom du tag
 */

export default function Tag(tag, type, href = null) {
    const tagElt = document.createElement('li')
    tagElt.classList.add('tags__elt')
    const tagBtn = document.createElement(type)
    if (type === 'a') {
        tagBtn.href = href
    }
    tagBtn.classList.add('tags__btn', 'btn', 'btn--tags')
    tagBtn.textContent = `#${tag}`
    tagElt.append(tagBtn)
    return tagElt
}
