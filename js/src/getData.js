/**
 * Récupère les données via l'api
 */
const routeAPI = 'js/site-with-alt.json'
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
}
const getData = new Promise((resolve) => {
    fetch(routeAPI, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            resolve(result)
        })
        .catch((error) => console.error(error))
})
export default getData
