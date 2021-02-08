/**
 * function de tri
 */
/**
 * Tri par likes
 * @param {array} medias
 */
export function triPopularite(medias) {
    medias.sort(function (a, b) {
        return b.likes - a.likes
    })
}
/**
 * Tri par date
 * @param {array} medias
 */
export function triDate(medias) {
    medias.sort(function (a, b) {
        return Date.parse(a.date) - Date.parse(b.date)
    })
}
/**
 * Tri par Titre
 * @param {array} medias
 */
export function triTitre(medias) {
    medias.sort(function (a, b) {
        ;[a, b].forEach((elt) => {
            if (elt.image) {
                elt.text = elt.image.replace(/_/g, ' ')
            } else if (elt.video) {
                elt.text = elt.video.replace(/_/g, ' ')
            }
        })
        return a.text.localeCompare(b.text)
    })
}
