/**
 *
 * @param {object} data les données du média
 * @param {string} type le type de media 'image' ou 'video'
 */
export default function MediaCard(data,type){
  const card = document.createElement('div')
  card.classList.add('listPhoto__card')
  card.tabIndex=0

  const container = document.createElement('div')
  container.classList.add('listPhoto__container')

  const imgBox = document.createElement('div')
  imgBox.classList.add('listPhoto__imgBox')

  const img = document.createElement('img')
  img.classList.add('listPhoto__img')
  img.alt=data.alt
  img.src=`img/${data.photographerId}/${data.image}`

  const content = document.createElement('div')
  content.classList.add('listPhoto__content')

  const title = document.createElement('h2')
  title.classList.add('listPhoto__title')
  const titleValue = data.image.replace(/_/g, '-').replace(/.jpg/g, '')
  title.textContent= titleValue

  const info = document.createElement('div')
  info.classList.add('listPhoto__info')

  const price = document.createElement('p')
  price.classList.add('listPhoto__price')
  price.textContent=`${data.price} € `

  const likes = document.createElement('div')
  likes.tabIndex=0
  likes.roles='button'
  likes.ariaLabel="AJouter un like"
  likes.classList.add('listPhoto__like')
  likes.innerHTML=`<span>${data.likes}</span>`

  const likeBtn = document.createElement('i')
  likeBtn.classList.add('fas','fa-heart')

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
