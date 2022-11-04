const contenedor = document.querySelector('#detalle');
const servidor = 'https://pokeapi.co/api/v2/pokemon/';
let namePokemon = location.search.slice(4);


    console.log('Se hizo click en el boton');
    const endPoint = servidor + namePokemon;

    fetch( endPoint )
    .then( respuesta => {
        return respuesta.json();
    })
    .then( respuestaJSON => {
        console.log(respuestaJSON);
        let datos = respuestaJSON;
        renderizar(datos);
    })

function renderizar(datos){
    let cuerpo = document.createElement('div');
    let titulo = document.createElement('h4');
    let imagen = document.createElement('img');
    let id     = document.createElement('p');
    let altura = document.createElement('p');
    let peso   = document.createElement('p');
    let xp     = document.createElement('p');

    let nombre = datos.name.charAt(0).toUpperCase() + datos.name.slice(1);

    cuerpo.classList.add('detalle');
    imagen.setAttribute('src', datos.sprites.front_default);
    
    titulo.innerHTML = `Nombre: ${nombre}`;
    id.innerHTML     = `Id: ${datos.id}`;
    altura.innerHTML = `Altura: ${datos.height}`;
    peso.innerHTML   = `Peso: ${datos.weight}`;
    xp.innerHTML     = `Experiencia base: ${datos.base_experience}`;

    cuerpo.appendChild(imagen);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(id);
    cuerpo.appendChild(altura);
    cuerpo.appendChild(peso);
    cuerpo.appendChild(xp);
    contenedor.appendChild(cuerpo);

    let title = document.getElementById('title');
        title.innerHTML = nombre;
}


