/**
 * Calculer le total des likes et l'afficher
 * @param {object} data un array avec toutes les données des médias
 */
export default function updateTotalLikes (data){
  const likesBox = document.querySelector('.infoAuthor__like span')
  let likes=0
  data.forEach(elt => {
    likes=likes+elt.likes
  });
  likesBox.textContent = likes
}

