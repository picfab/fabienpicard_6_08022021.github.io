import MediaCard from '../DomConstructor/MediaCard'

/**
 * Factory pour creer les objets Media
 */
export default function FactoryMedia() {
    /**
     * Le constructeur prend en parametre :
     * @param {object} media les données du média
     * @param {function} updateTotalLikes une fonction pour mettre à jour le total de like du photographe
     */
    this.createElement = function (media,updateTotalLikes) {
            let element = media


            if(media.hasOwnProperty('video')){
              element.html = new MediaCard(media, 'video')
            }
            else if(media.hasOwnProperty('image')){
              element.html = new MediaCard(media,'image')
            }

            //Methode pour incrémenter le nombre de like de l'objet
            //et mets à jour le total de likes du photographe
            element.updateLikes = function(){
              const textLikes = this.html.querySelector('.listPhoto__like span')
                this.likes = this.likes+1
                textLikes.textContent=this.likes
                updateTotalLikes()
            }

            //Methode pour afficher le rendu html de l'object
            //gérer les evenement sur l'élément like
            element.showElement = function(){
              const container = document.querySelector('.listPhoto')
              if(this.html){
                const btn = this.html.querySelector('.listPhoto__like')
                btn.onclick = (e) =>{
                  this.updateLikes()
                }
                btn.onkeydown = (e) =>{
                  if ([32,13].includes(e.keyCode)){
                    this.updateLikes()
                  }
                }
                container.append(this.html)
              }

            }

        return element;
    }
}
