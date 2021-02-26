/**
 *
 * @param {object} data les données du média
 * @param {string} type le type de media 'image' ou 'video'
 */
export default function Lightbox(medias, index) {
    // Tableau des slides
    const listSLide = []

    // creation des elements de la lightbox
    const body = document.querySelector('body')
    const lightbox = document.createElement('div')
    lightbox.classList.add('lightbox')
    lightbox.ariaLabel = 'image closeup view'

    const container = document.createElement('div')
    container.classList.add('lightbox__container')

    const navLeft = document.createElement('div')
    navLeft.classList.add('lightbox__blockNav')

    const navRight = document.createElement('div')
    navRight.classList.add('lightbox__blockNav')

    const left = document.createElement('span')
    left.classList.add('lightbox__left', 'fas', 'fa-chevron-left')
    left.tabIndex = 2
    left.ariaLabel = 'Previous image'

    const right = document.createElement('span')
    right.classList.add('lightbox__right', 'fas', 'fa-chevron-right')
    right.tabIndex = 3
    right.ariaLabel = 'Next image'

    const closeBtn = document.createElement('span')
    closeBtn.classList.add('lightbox__close', 'fas', 'fa-times')
    closeBtn.tabIndex = 1
    closeBtn.ariaLabel = 'Close dialog'

    const arrow = document.createElement('div')
    arrow.classList.add('lightbox__arrow')

    // creation de tous les slides de la lightbox
    medias.forEach((media, i) => {
        const content = document.createElement('div')
        content.classList.add('lightbox__content')
        if (i === index) {
            content.classList.add('show')
        }

        const imgbox = document.createElement('div')
        imgbox.classList.add('lightbox__imgbox')

        let img
        if (media.type === 'video') {
            img = document.createElement('video')
            img.textContent = media.alt
            img.autoplay = true
            img.loop = true
        } else {
            img = document.createElement('img')
            img.alt = media.alt
        }
        img.classList.add('lightbox__img')
        img.src = media.url
        img.ariaLabel = media.title

        const title = document.createElement('div')
        title.classList.add('lightbox__title')
        title.textContent = media.title

        content.append(imgbox)
        content.append(title)
        imgbox.append(img)
        container.append(content)
        listSLide.push(content)
    })

    // creation de tout les éléments
    lightbox.append(container)
    navLeft.append(left)
    navRight.append(closeBtn)
    navRight.append(right)
    container.prepend(navLeft)
    container.append(navRight)

    /**
     * Fonction de navigation
     */
    // Droite
    const goRight = () => {
        listSLide[index].classList.remove('show')
        index = index + 1 === medias.length ? 0 : index + 1
        listSLide[index].classList.add('show')
    }
    // Gauche
    const goLeft = () => {
        listSLide[index].classList.remove('show')
        index = index - 1 < 0 ? medias.length - 1 : index - 1
        listSLide[index].classList.add('show')
    }

    const close = () => {
        const imgInitial = medias[index].html.querySelector('.listPhoto__img')
        imgInitial.focus()
        lightbox.remove()
        document.querySelector('html').removeAttribute('style')
    }

    /**
     * Gestion des clicks
     */

    // ferme la lightbox
    closeBtn.onclick = () => {
        close()
    }

    // image precedante
    left.onclick = () => {
        goLeft()
    }

    // image suivante
    right.onclick = () => {
        goRight()
    }

    /**
     * Gestion du clavier
     */
    right.onkeydown = (e) => {
        if (!e.shiftKey && e.key === 'Tab') {
            e.preventDefault()
            closeBtn.focus()
        }
        if (e.key === 'Enter') {
            goRight()
        }
    }
    closeBtn.onkeydown = (e) => {
        if (e.shiftKey && e.key === 'Tab') {
            e.preventDefault()
            right.focus()
        }
        if (e.key === 'Enter') {
            close()
        }
    }
    left.onkeydown = (e) => {
        if (e.key === 'Enter') {
            goLeft()
        }
    }

    lightbox.onkeydown = (e) => {
        if (e.key === 'Escape') {
            close()
        }
        if (e.key === 'ArrowLeft') {
            goLeft()
        }
        if (e.key === 'ArrowRight') {
            goRight()
        }
    }

    body.append(lightbox)
    closeBtn.focus()
}
