/**
 * initialisation des fonctionnalité de la page d'un photographe
 */
import IdAuthor from './paramUrl/paramUrlAuthor'
import getData from './getData'
import FactoryPhotographe from './Factory/FactoryPhotographe'
import FactoryMedia from './Factory/FactoryMedia'
import updateTotalLikes from './utils/updateTotalLikes'
import listBox from './utils/listBox'
import { triPopularite, triDate, triTitre } from './utils/tri'

const container = document.querySelector('.listPhoto')
const medias = []
const factPhotographe = new FactoryPhotographe()
const factMedia = new FactoryMedia()

/** On récupère les données et on les traites */
getData.then((result) => {
    // on retrouve les données du photographe de la page
    const findPhotographe = result.photographers.find((x) => x.id === IdAuthor)
    // On créait l'objet photographe
    factPhotographe.CreateElement(findPhotographe, 'header')
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
        medias.forEach((media) => {
            media.showElement()
        })
    })

    // Une fois tous les objects média créé on affiche le total des likes
    updateTotalLikes(medias)
})

// Gestion de la listBox
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
    medias.forEach((media) => {
        media.showElement()
    })
}

listBox(updateAfterTri)
