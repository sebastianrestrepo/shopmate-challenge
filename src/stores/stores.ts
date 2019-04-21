import { observable, autorun, toJS, configure, action, computed } from 'mobx';

import api from '../utils/api';

export type depsArray = { name: string, department_id: number }[];
export type catsArray = { name: string, category_id: number, department_id: number }[];
export type proArray = { name: string, product_id: number, description: string, price: number, discounted_price: number, thumbnail: string, color: number, size: number }[];

class Store {

    @observable showHambMenu: boolean = false;

    @observable getShowHambMenu() {
        return this.showHambMenu;
    }

    @action setShowHambMenu(show: boolean) {
        this.showHambMenu = show;
        console.log('exdi');
    }

    @observable departments: depsArray | null = null;
    @observable loadingDeps: boolean = false;

    @observable categories: catsArray | null | false = null;
    @observable products: proArray | null | false = null;

    @observable productsCat: proArray | null | false = null;
    @observable productsDept: proArray | null | false = null;

    @observable currentDept: number | null = null;
    @observable currentCat: number | null = null;

    @observable currentProDept: number | null = null;
    @observable currentProCat: number | null = null;

    @observable currentPro: number | null = null;

    @computed get pageTitle() {
        var dep = this.departments && this.departments.find(e => e.department_id == this.currentDept);
        var cat = this.categories && this.categories.find(e => e.category_id == this.currentCat);

        var res = `${dep ? dep.name : ''} ${cat ? ' - ' + cat.name : ''}`;
        return res;
    }

    @action getDepartments() {
        if (this.loadingDeps || this.departments) return;

        var depsLocal = localStorage.getItem('departments');
        var depsLocalTime = localStorage.getItem('departments_time');
        if (depsLocal && depsLocalTime &&
            Date.now() - parseInt(depsLocalTime) < 7 * 24 * 60 * 60 * 1000) {
            this.departments = JSON.parse(depsLocal);
            return;
        }

        this.loadingDeps = true;
        var callback = (result: depsArray) => {
            localStorage.setItem('departments', JSON.stringify(toJS(result)));
            localStorage.setItem('departments_time', Date.now() + '');

            console.log(result);
            console.log('hola');
            this.departments = result;
            this.loadingDeps = false;
        }
        api.getDepartments(callback);
    }

    @action setDepartment(id: number) {
        this.currentDept = id;
        this.currentCat = null;
    }

    @action getCategories() {
        if (this.categories != null) return;

        this.categories = false;
        api.getCategories((result: catsArray) => {
            this.categories = result;
        });
    }

    @action setCategory(id: number) {
        this.currentCat = id;
    }

    @action getProducts() {
        if (this.products != null) return;

        var prodsValues = localStorage.getItem('prodsValues');
        var prodsLocalTime = localStorage.getItem('prodsValues-time');

        if (prodsValues && prodsLocalTime && Date.now() - JSON.parse(prodsLocalTime) < 10 * 24 * 60 * 60 * 1000) {
            this.products = JSON.parse(prodsValues);
            return;
        }

        this.products = false;
        api.getProducts((result: proArray) => {
            console.log('productos cargados', result);
            result.map((p) => {
                p.color = Math.floor(Math.random() * 5);
                p.size = Math.floor(Math.random() * 5);
                return p;
            });

            this.products = result;

            localStorage.setItem('prodsValues', JSON.stringify(toJS(result)));
            localStorage.setItem('prodsValues-time', JSON.stringify(toJS(Date.now())));
        });
    }

    @action getProductsCat() {
        if (this.productsCat != null) return;

        var proCatValues = localStorage.getItem('prodsValues');
        var proCatLocalTime = localStorage.getItem('prodsValues-time');

        if (proCatValues && proCatLocalTime && Date.now() - JSON.parse(proCatLocalTime) < 10 * 24 * 60 * 60 * 1000) {
            this.productsCat = JSON.parse(proCatValues);
            return;
        }

        this.productsCat = false;
        api.getProductsCat((result: proArray) => {
            console.log('productos cargados', result);
            result.map((p) => {
                p.color = Math.floor(Math.random() * 5);
                p.size = Math.floor(Math.random() * 5);
                return p;
            });

            this.productsCat = result;

            localStorage.setItem('prodsValues', JSON.stringify(toJS(result)));
            localStorage.setItem('prodsValues-time', JSON.stringify(toJS(Date.now())));
        });


    }

}

const store = new Store();

export default store;