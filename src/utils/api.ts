import { depsArray, catsArray } from '../stores/stores';

const apiRoot = 'https://backendapi.turing.com';

function getDepartments(callback: (result: depsArray) => void){
    fetch(`${apiRoot}/departments`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( departments ) => {
            callback(departments);
            console.log(departments);
        });
}

function getCategories(callback: (result: catsArray) => void){
    fetch(`${apiRoot}/categories`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( categories ) => {
            callback(categories.rows);
        });
}

export default {
    getDepartments,
    getCategories
};