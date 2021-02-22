/**
 * initialisation des fonctionnalité de la page d'un photographe
 */
import IdAuthor from './paramUrl/paramUrlAuthor'
import getData from './getData'
import FactoryPhotographe from './Factory/FactoryPhotographe'
import FactoryMedia from './Factory/FactoryMedia'
import updateTotalLikes from './utils/updateTotalLikes'
import Lightbox from './DomConstructor/Lightbox'
import ListBox from './utils/ListBox'
import { triPopularite, triDate, triTitre } from './utils/tri'
import FactoryForm from './Factory/FactoryForm'

const container = document.querySelector('.listPhoto')
const medias = []
const factPhotographe = new FactoryPhotographe()
const factMedia = new FactoryMedia()
const factForm = new FactoryForm()
let form

/**
 * Afficher la lightbox au click sur les images
 */
function showMedia() {
    medias.forEach((media, i) => {
        media.showElement()
        const img = media.html.querySelector('img')
        img.onclick = () => {
            Lightbox(medias, i)
        }
        img.onkeydown = (e) => {
            if (['Enter', 'Space'].includes(e.key)) {
                Lightbox(medias, i)
            }
        }
    })
}

/** On récupère les données et on les traites */
getData.then((result) => {
    // on retrouve les données du photographe de la page
    const findPhotographe = result.photographers.find((x) => x.id === IdAuthor)
    // On créait l'objet photographe
    const photographe = factPhotographe.CreateElement(findPhotographe, 'header')
    // on récupère les médias du photographe
    const mediaFilter = result.media.filter(
        (x) => x.photographerId === IdAuthor
    )
    // on créait chaque
    mediaFilter.forEach((elt) => {
        // condition temporaire, il faut traiter les vdo
        if (elt.image) {
            const newElement = factMedia.CreateElement(elt, () =>
                updateTotalLikes(medias)
            )
            medias.push(newElement)
        }
        triPopularite(medias)
        showMedia()
    })
    // on créait l'objet du formulaire
    form = factForm.CreateElement(photographe.name)

    // Une fois tous les objects média créé on affiche le total des likes
    updateTotalLikes(medias)
})

/**
 * Gestion de la listBox
 * @param {string} type nom du type de tri
 */
function updateAfterTri(type) {
    switch (type) {
        case 'popularité':
            triPopularite(medias)
            break
        case 'titre':
            triTitre(medias)
            break
        case 'date':
            triDate(medias)
            break
        default:
            triPopularite(medias)
            break
    }
    container.innerHTML = ''
    showMedia()
}

const lisboxPhotographe = new ListBox()

lisboxPhotographe.CreateElement(
    document.querySelector('.listbox'),
    updateAfterTri
)

/**
 * Afficher le formulaire de contact
 */
const btnForm = document.querySelector('.author__btn')
btnForm.onclick = () => {
    form.open()
}
