import Api from './api';

export const get = (endpoint) => {
    console.log("aqui")
    Api.get(`70`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}