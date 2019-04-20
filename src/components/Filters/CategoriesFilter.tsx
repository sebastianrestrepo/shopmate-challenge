import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const CategoriesFilter = () => {

return <div className="cat-filt">
            {store.currentDept != null && <h3>{store.categories ? 'Categories' : 'Loading Categories...'}</h3>}
            <div className="box-btns">
                {store.categories && store.categories.map((cat) => {
                    if (cat.department_id != store.currentDept) return null;
                    return <button key={cat.category_id}
                        onClick={() => {
                            store.setCategory(cat.category_id);
                        }}
                        style={{
                            background: store.currentCat == cat.category_id ? '#F62F5E' : 'rgb(226, 226, 226)',
                            color: store.currentCat == cat.category_id ? 'white' : '#2E2E2E'
                        }}>
                        {cat.name}
                    </button>;
                })}
            </div>
        </div>;
}

export default observer(CategoriesFilter);