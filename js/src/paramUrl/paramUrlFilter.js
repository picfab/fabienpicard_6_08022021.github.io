/**
 * récupère le fitre en parmetre d'url
 */
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const filter = urlParams.get('filter')
export default filter
