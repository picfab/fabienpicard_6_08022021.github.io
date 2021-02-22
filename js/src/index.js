/**
 * Js de la page d'accueil
 */
import getData from './getData'
import FactoryPhotographe from './Factory/FactoryPhotographe'
import { showBtnComeBack, resetData } from './utils/btnComeBack'

/**
 * récupère les données des photographes et affiche le rendu html de chaque carte
 */
import paramUrlFilter from './paramUrl/paramUrlFilter'
const factPhotographe = new FactoryPhotographe()
const photographers = []

getData.then((result) => {
    result.photographers.forEach((photographer) => {
        const newPhotographer = new factPhotographe.CreateElement(
            photographer,
            'card',
            filterTag
        )
        photographers.push(newPhotographer)
        newPhotographer.showCard()
    })
    if (paramUrlFilter) {
        filterTag(paramUrlFilter)
    }
})

/**
 * Créé un nouvel array de photogrphes en fonction de la valeur d'un filtre
 * @param {string} value Du filtre sélectionné
 */
function filterTag(value) {
    const newArray = photographers.filter((x) => x.tags.includes(value))
    filterPhotographer(newArray)
}

/**
 * affiche les cartes de photographes filtrées
 * @param {array} arrayPhotographer un tableau d'objet des photographes à afficher
 */
function filterPhotographer(arrayPhotographer = photographers) {
    const main = document.getElementById('listPhotographers')
    main.innerHTML = null
    arrayPhotographer.forEach((element) => {
        element.showCard()
    })
}

// gestion du click sur les filtres du header
const allFilter = document.getElementsByClassName('tags__btn')
Array.from(allFilter).forEach((filter) => {
    filter.onclick = () => {
        const value = filter.textContent.replace(/#/, '').toLowerCase()
        showBtnComeBack(true)
        filterTag(value)
    }
})

// gestion du boutton passer au contenu
// const menu = document.querySelector('header')
const listPhotographers = document.getElementById('listPhotographers')
const cardAuthor = document.getElementsByClassName('cardAuthor')
window.onscroll = function () {
    if (
        listPhotographers.offsetTop + 100 > window.scrollY &&
        photographers.length === cardAuthor.length
    ) {
        showBtnComeBack(false)
    } else {
        showBtnComeBack(true)
    }
}
resetData(filterPhotographer)
