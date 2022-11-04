const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const servidor = 'https://pokeapi.co/api/v2/';


btn.addEventListener('click', function(){
    console.log('Click en el botón');
    const endPoint = servidor + 'pokemon?offset=0&limit=100';
    // const endPoint = servidor + 'pokemon/1';
    console.log(endPoint);

    fetch(  endPoint)
    .then(  respuesta => {
        return respuesta.json();
    })
    .then(  respuestaJSON => {
        let datos = respuestaJSON.results;
        console.log(datos);
        renderizar(datos);
    })
});

// Con DOM
function renderizar(lista){
    let card,
        nombre,
        url;
    lista.forEach(element => {
        card   = document.createElement('div');
        nombre = document.createElement('h4');
        url    = document.createElement('a');

        card.classList.add('card');

        if (element)
            {
                nombre.innerHTML = element.name.toUpperCase(1);
                url.innerHTML    = 'Ver detalles';
                url.setAttribute('href', `detalles.html?id=${element.name}`);
            }

        card.appendChild(nombre);
        card.appendChild(url);
        contenedor.appendChild(card);
    });
}

