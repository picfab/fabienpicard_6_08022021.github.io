/**
 * Récupère les données via l'api
 */
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const getData = new Promise((resolve) => {
  fetch("js/site.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    resolve(result);
  })
  .catch(error => resolve('error'));
});
export default getData

