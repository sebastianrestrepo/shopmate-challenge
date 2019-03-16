function getDepartments(callback){
    fetch('https://backendapi.turing.com/departments')
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( departments ) => {
            callback(departments);
        });
}

export default {
    getDepartments,
};