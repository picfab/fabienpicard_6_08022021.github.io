/**
 * initialisation des fonctionnalité de la page d'un photographe
 */
import IdAuthor from './HeaderAuthor'
import getData from './getData'
import FactoryPhotographe from './Factory/FactoryPhotographe'
import FactoryMedia from './Factory/FactoryMedia'
import updateTotalLikes from './utils/updateTotalLikes'
import listBox from './listBox'

listBox()
let photographe;
const medias = [];
const factPhotographe = new FactoryPhotographe();
const factMedia = new FactoryMedia();

/** On récupère les données et on les traites */
getData.then(result=>{
  //on retrouve les données du photographe de la page
  const findPhotographe = result.photographers.find(x=>x.id===IdAuthor)
  // On créait l'objet photographe
  photographe = factPhotographe.createElement(findPhotographe,'header')
  //on récupère les médias du photographe
  const mediaFilter = result.media.filter(x=>x.photographerId===IdAuthor)
  //on créait chaque
  mediaFilter.forEach(elt => {
    //condition temporaire, il faut traiter les vdo
    if(elt.hasOwnProperty('image')){
      const newElement = factMedia.createElement(
                            elt,
                            ()=>updateTotalLikes(medias)
                          )
      medias.push(newElement)
      newElement.showElement()
    }
  });

  // Une fois tous les objects média créé on affiche le total des likes
  updateTotalLikes(medias)
})

