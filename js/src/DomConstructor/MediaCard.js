/**
 *
 * @param {object} data les données du média
 * @param {string} type le type de media 'image' ou 'video'
 */
export default function MediaCard(data, type, index = 0) {
    const card = document.createElement('div')
    card.classList.add('listPhoto__card')

    const container = document.createElement('div')
    container.classList.add('listPhoto__container')

    const imgBox = document.createElement('div')
    imgBox.classList.add('listPhoto__imgBox')
    let img
    if (type === 'video') {
        img = document.createElement('video')
        img.textContent = data.alt
    } else {
        img = document.createElement('img')
        img.alt = data.alt
    }
    img.classList.add('listPhoto__img')
    img.src = data.url
    img.tabIndex = index
    img.ariaLabel = `${data.title}, closeup view`

    const content = document.createElement('div')
    content.classList.add('listPhoto__content')

    const title = document.createElement('h2')
    title.classList.add('listPhoto__title')
    title.textContent = data.title

    const info = document.createElement('div')
    info.classList.add('listPhoto__info')

    const price = document.createElement('span')
    price.classList.add('listPhoto__price')
    price.textContent = `${data.price} € `

    const likes = document.createElement('div')
    likes.tabIndex = index
    likes.roles = 'button'
    likes.ariaLabel = 'AJouter un like'
    likes.classList.add('listPhoto__like')
    likes.innerHTML = `<span>${data.likes}</span>`

    const likeBtn = document.createElement('span')
    likeBtn.classList.add('fas', 'fa-heart')
    likes.ariaLabel = 'Likes'

    card.append(container)

    container.append(imgBox)
    container.append(content)

    imgBox.append(img)
    content.append(title)
    content.append(info)
    info.append(price)
    info.append(likes)

    likes.append(likeBtn)

    return card
}
