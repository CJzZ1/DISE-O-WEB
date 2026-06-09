const URL_API = 'https://rickandmortyapi.com/api/character';


const obtenerPersonajes = async () => {
    try {
        const respuesta = await fetch(URL_API);
        const datos = await respuesta.json();
	const listaPersonajes = datos.results;
        crearTarjetas(listaPersonajes);

    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
    }
};

	const crearTarjetas = (personajes) => {
    	const contenedor = document.getElementById('contenedor-tarjetas');
    	const bloquesHTML = personajes.map((personaje) => {
        
        const { name, status, species, gender, image } = personaje;
        return `
            <article class="tarjeta">
                <img src="${image}" alt="${name}">
                <div class="tarjeta-info">
                    <h2>${name}</h2>
                    <p><strong>Estado:</strong> ${status}</p>
                    <p><strong>Especie:</strong> ${species}</p>
                    <p><strong>Género:</strong> ${gender}</p>
                </div>
            </article>
        `;
    });
    bloquesHTML.forEach(() => {
        contenedor.innerHTML = bloquesHTML.join('');
    });
};
obtenerPersonajes();