import '../css/componentes.css';


export const saludar = ( nombre ) => {
    console.log('creando etiqueda h1');
    const h1  = document.createElement('h1');
    h1.textContent='hola'+ nombre;
    document.body.append(h1);


}
