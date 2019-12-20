// document.getElementsByClassName('nav-item')

const setTab = (hash)=> {
    const active = document.querySelector('a.active');
    if(active) {
        active.classList.remove('active');
    }
    const link = document.querySelector(`a[hrefs='${hash}']`);
};

window.addEventListener('hashchange', ()=> {
    setTab(window.location.hash);
})

if(!window.location.hash) {
    window.location.hash = '#products';
} else {
    setTab(window.location.hash);
}

const getData = async (hash)=> {
    return axios.get(`https://acme-users-api-rev.herokuapp.com/api/${hash}`)
    .then( response => response.data)
    .then( products => console.log(products))
}
console.log(getData)