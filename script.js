// Obtener todos los botones "Ver Receta"
const botonesVerReceta = document.querySelectorAll('.btn-success');

// Función para mostrar la receta correspondiente al botón presionado
function mostrarReceta(event) {
    // Obtener el texto de la descripción del plato correspondiente

    // Mostrar la descripción en el div#recetas
    const recetasDiv = document.getElementById('recetas');
    recetasDiv.innerHTML = `<div class="card mb-10" style="max-width: 1000px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="./img/sopa.jpg" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Receta de la Sopa Paraguaya </h5>
          <h2>Ingredientes:</h2>
          <ul>
              <li>1/2 kilo de harina de maíz</li>
              <li>300 gramos queso tipo paraguay</li>
              <li>150 gramos de grasa de cerdo o manteca</li>
              <li>4 cebollas cortadas en juliana</li>
              <li>5 huevos</li>
              <li>1/2 litro de leche</li>
              <li>Pizca de pimienta (opcional)</li>
              <li>Sal al gusto</li>
              <li>Fuente para hornear de 30x20 cm</li>
          </ul>
            <h5>Cómo hacer Sopa paraguaya tradicional:</h5>
            <p> 1 Lo primero que hay que hacer para elaborar esta sopa paraguaya tradicional <br>
            es freír la cebolla finamente cortada en la grasa o manteca de cerdo en una sartén y, <br>
             una vez está bien frita, dejarla enfriar un poco. </p>
            
            <p> 2 A continuación, mezclar la harina de maíz con la leche y esponjar bien. </p>
            
            <p> 3 A esta mezcla incorporarle los huevos muy bien batidos, hasta que espumen, <br> 
            también la cebolla con su grasa y el queso Paraguay desgranado con las manos o <br>
            cortado en pequeños cuadraditos, y sal y pimienta al gusto. </p>
            
            <p> 4 Seguidamente enmantecar y enharinar una fuente de horno un tanto profunda o cubrirla <br>
             con hojas de banano/plátano. Llenar con la mezcla de la sopa paraguaya esparciéndola pareja <br>
              y dando una altura de entre 5 a 8 cm, y llevar al horno caliente (si es un horno de <br> 
              leños/barro/tatagua mucho mejor) para cocinar como una torta casera hasta que esté sequita. </p>
            
            <p> 5 Una vez la sopa paraguaya tradicional esté lista, se corta en cuadrados o rectángulos <br> 
            grandes o pequeños y se sirve, ya sea sola como entrante, para acompañar una cerveza bien <br>
            helada o como guarnición de una comida. Generalmente la sopa paraguaya tembi'u Paraguay es <br>
            tomada como un aperitivo antes de las comidas principales. </p>
            
          </div>
          <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./img/olla-caliente.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            Recetas Formoseñas ¡Jhetereï!
          </a>
          <div>
      </div>
    </div>
  </div>
  
    `;
}

// Agregar un evento a cada botón "Ver Receta"
botonesVerReceta.forEach(boton => {
    boton.addEventListener('click', mostrarReceta);
});
