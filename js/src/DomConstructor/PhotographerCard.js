import Tag from './Tag'
/**
 *
 * @param {object} data les données du photgraphe
 */
export default function PhotographerCard(data) {
    // creation de la carte
    const card = document.createElement('article')
    card.classList.add('cardAuthor')
    // creation du lien
    const link = document.createElement('a')
    link.classList.add('cardAuthor__link')
    link.href = `./photographe.html?author=${data.id}`
    card.append(link)
    // creation de la box d'image est titre
    const imgBox = document.createElement('div')
    imgBox.classList.add('cardAuthor__imgBox')
    link.append(imgBox)
    // creation de l'image
    const img = document.createElement('img')
    img.classList.add('cardAuthor__img')
    img.alt = `Portrait du photographe ${data.name}`
    img.src = `./img/authors/${data.portrait}`
    imgBox.append(img)
    // creation du nom de l'auteur
    const title = document.createElement('h2')
    title.classList.add('cardAuthor__name')
    title.textContent = data.name
    link.append(title)
    // creation de la box d'information de l'auteur
    const info = document.createElement('div')
    info.classList.add('cardAuthor__content')
    card.append(info)
    // Ajout de la localisation de l'auteur
    const local = document.createElement('p')
    local.classList.add('cardAuthor__localisation')
    local.textContent = `${data.city}, ${data.country}`
    info.append(local)
    // ajout de la tagline
    const tagline = document.createElement('p')
    tagline.classList.add('cardAuthor__citation')
    tagline.textContent = data.tagline
    info.append(tagline)
    // Ajout de la du tarif
    const tarif = document.createElement('p')
    tarif.classList.add('cardAuthor__tarif')
    tarif.textContent = `${data.price}/jour`
    info.append(tarif)
    // creation de la box tags
    const tagsBox = document.createElement('div')
    tagsBox.classList.add('cardAuthor__tags')
    card.append(tagsBox)
    // ouverture de la liste des tags
    const tags = document.createElement('ul')
    tags.classList.add('tags')
    tagsBox.append(tags)
    // Creation des tags un par un
    data.tags.forEach((tag) => {
        const tagElt = Tag(tag, 'button')
        tags.append(tagElt)
    })
    return card
}
