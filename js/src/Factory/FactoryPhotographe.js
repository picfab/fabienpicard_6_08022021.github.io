import PhotographerCard from '../DomConstructor/PhotographerCard'
import PhotographerHeaderCard from '../DomConstructor/PhotographerHeaderCard'

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
    this.createElement = function (data,type) {
        let element = data;
        if(type==='card'){
            element.cardPhotographer= new PhotographerCard(data)
        }
        else{
            element.cardHeaderPhotographer= new PhotographerHeaderCard(data)
        }
        return element;
    }
}
