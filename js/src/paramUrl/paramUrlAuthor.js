/**
 * récupère l'id du photogrape d'une page
 */
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const author = parseInt(urlParams.get('author'), 10)
export default author
