import getData from './getData'
import FactoryPhotographe from './Factory/FactoryPhotographe'
/**
 * récupère les données des photographes et affiche le rendu html de chaque carte
 */
const factPhotographe = new FactoryPhotographe();
const photographers=[]
const main = document.getElementById('listPhotographers')

getData.then(result=>{
  result.photographers.forEach(photographer => {
    const newPhotographer =new factPhotographe.createElement(photographer,'card')
    photographers.push(newPhotographer)
    main.append(newPhotographer.cardPhotographer)
  });
})


