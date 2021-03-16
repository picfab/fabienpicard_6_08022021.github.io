import PhotographerCard from '../DomConstructor/PhotographerCard'
import PhotographerHeaderCard from '../DomConstructor/PhotographerHeaderCard'
import { showBtnComeBack } from '../utils/btnComeBack'

/**
 * Factory de creation des photographe
 */
export default function FactoryPhotographe() {
    /**
     * Le constructeur prend en parametres :
     * @param {object} data les données du photographe
     * @param {string} type 'card' si c'est une carte de photographe
     *                       ou 'header' si c'est un header de page de photographe
     */
    this.CreateElement = function (data, type, filterTag) {
        const element = data
        if (type === 'card') {
            element.cardPhotographer = new PhotographerCard(data)
        } else {
            element.cardHeaderPhotographer = new PhotographerHeaderCard(data)
        }

        if (type === 'card') {
            element.showCard = function () {
                const main = document.getElementById('listPhotographers')
                const allFilter = this.cardPhotographer.querySelectorAll(
                    '.tags__btn'
                )
                Array.from(allFilter).forEach((filter) => {
                    filter.onclick = () => {
                        const value = filter.textContent
                            .replace(/#/, '')
                            .toLowerCase()
                        showBtnComeBack(true)
                        filterTag(value)
                    }
                })
                main.append(this.cardPhotographer)
            }
        }
        return element
    }
}
