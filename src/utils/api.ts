import { depsArray, catsArray, proArray } from '../stores/stores';

const apiRoot = 'https://backendapi.turing.com';

function getDepartments(callback: (result: depsArray) => void) {
    fetch(`${apiRoot}/departments`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((departments) => {
            callback(departments);
            console.log(departments);
        });
}

function getCategories(callback: (result: catsArray) => void) {
    fetch(`${apiRoot}/categories`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((categories) => {
            callback(categories.rows);
        });
}

function getProducts(callback: (result: proArray) => void) {
    fetch(`${apiRoot}/products`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((products) => {
            callback(products.rows);
        });
}

function getProductsDep(callback: (result: proArray) => void) {
    fetch(`${apiRoot}/products/inDepartment/${getDepartments}`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((products) => {
            callback(products.rows);
        });
}

function getProductsCat(callback: (result: proArray) => void) {
    fetch(`${apiRoot}/products/inCategory/${getCategories}`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((products) => {
            callback(products.rows);
        });
}

export default {
    getDepartments,
    getCategories,
    getProducts,
    getProductsDep,
    getProductsCat
};