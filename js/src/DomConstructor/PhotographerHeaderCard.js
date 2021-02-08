import Tag from './Tag'
/**
 *
 * @param {object} data les données du photographe
 */
export default function PhotographerHeaderCard(data){
    //récupération de l'emplacement
    const headerId = 'header_author'
    const title = document.querySelector(`#${headerId} .author__title`)
    const local = document.querySelector(`#${headerId} .author__localisation`)
    const tagline = document.querySelector(`#${headerId} .author__slogan`)
    const tags = document.querySelector(`#${headerId} .tags`)
    const img = document.querySelector(`#${headerId} .author__img`)
    const price = document.querySelector('.infoAuthor__price span')

    title.textContent=data.name
    local.textContent=`${data.city}, ${data.country}`
    tagline.textContent=data.tagline
    img.src = `./img/authors/${data.portrait}`
    img.alt = `Portrait du photographe ${data.name}`

    price.textContent=data.price

    data.tags.map(tag=>{
        const tagElt = Tag(tag)
        tags.append(tagElt)
    })
}
