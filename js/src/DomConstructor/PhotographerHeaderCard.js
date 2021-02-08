import Tag from './Tag'
/**
 *
 * @param {object} data les données du photographe
 */
export default function PhotographerHeaderCard(data) {
    // récupération des l'emplacements
    const siteTitle = document.querySelector('title')
    const headerId = 'header_author'
    const title = document.querySelector(`#${headerId} .author__title`)
    const local = document.querySelector(`#${headerId} .author__localisation`)
    const tagline = document.querySelector(`#${headerId} .author__slogan`)
    const tags = document.querySelector(`#${headerId} .tags`)
    const img = document.querySelector(`#${headerId} .author__img`)
    const price = document.querySelector('.infoAuthor__price span')

    // modifier le contenu
    siteTitle.textContent = siteTitle.textContent + data.name
    title.textContent = data.name
    local.textContent = `${data.city}, ${data.country}`
    tagline.textContent = data.tagline
    img.src = `./img/authors/${data.portrait}`
    img.alt = `Portrait du photographe ${data.name}`
    price.textContent = data.price
    // ajouter les tags
    data.tags.forEach((tag) => {
        const tagElt = Tag(tag, 'a', `./?filter=${tag}`)
        tags.append(tagElt)
    })
}
