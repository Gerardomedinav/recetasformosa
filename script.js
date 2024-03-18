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
          <ul id="ingredientes">
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
            Volver!
          </a>
          <div>
      </div>
    </div>
  </div>
  
    `;
}

function mostrarRecetaDos(event) {
  // Obtener el texto de la descripción del plato correspondiente

  // Mostrar la descripción en el div#recetas
  const recetasDiv = document.getElementById('recetas');
  recetasDiv.innerHTML = `<div class="card mb-10" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/chupin-de-pescado-4.jpeg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Receta de Chupín de Pescado</h5>
        <h2>Ingredientes:</h2>
        <ul id="ingredientes">
            <li>6 filetes de surubi o pecado a elección</li>
            <li>1 tomate</li>
            <li>1 cebolla</li>
            <li>1/2 pimiento morrón rojo</li>
            <li>2 dientes de ajo</li>
            <li>1/2 vaso de puré de tomates</li>
            <li>Perejil</li>
            <li>1 limón</li>
            <li>Pimentón</li>
            <li>3 papas pequeñas</li>
            <li>1 chorro de vino blanco</li>
            <li>1/2 vaso de caldo</li>
            <li>Sal, pimienta y aceite de oliva</li>
        </ul>
          <h5>Cómo hacer Chupín de Pescado:</h5>
          <p> 1 Limpia el pescado: quita las espinas, la cola y la cabeza. Añade el jugo de un limón, sal y pimienta negra molida. Remueve bien para integrar los sazonadores, el limón y el pescado correctamente. Deja macerar en la nevera 45 minutos aproximadamente.</p>
          
          <p> 2 Para empezar con el chupín de pescado, prepara todos los ingredientes. Corta la cebolla en aros, el pimiento en juliana (cortado a tiras finas) y pica el ajo muy fino. Corta la patata en rodajas de unos 2 centímetros de grosor aproximadamente. Cuando tengas todos los ingredientes listos, prepara en la sartén el sofrito con la cebolla y el pimiento, cocinando unos 3 minutos. A continuación, añade el ajo, remueve y deja sofreír otros 4 minutos.</p>
          
          <p> 3 Una vez sofreídas las verduras, incorpora el chorro de vino blanco. Deja que se evapore el alcohol un minuto. Mientras, limpia el tomate y córtalo a cubos. Si la piel es demasiado gruesa, retírala. Añade el tomate al sofrito y deja cocinar otros 2 minutos.</p>
          
          <p> 4 Agrega el tomate triturado y deja que rehogue otros 3 minutos. Una vez listo el sofrito, añade el caldo de pescado y el agua. Deja que rompa a hervir e introduce las patatas para que se vayan cociendo, ya que al ser gruesas, necesitan más cocción que el pescado.</p>
          
          <p> 5 Incorpora la cucharadita de pimentón dulce y remueve. Prueba y rectifica de sal si lo necesita. Tapa la sartén y deja que cueza 10 minutos; vigila que no se quede completamente sin caldo, pero tampoco demasiado caldoso.</p>

          <p> 6 Saca el pescado de la nevera y escurre el jugo de la sazón. A continuación, corta el pescado en filetes de 4 dedos de ancho, aproximadamente, y añade los pedazos al caldo junto con el resto de ingredientes. Deja cocer 10 minutos más a fuego bajo sin remover. Si lo deseas, puedes menear la sartén ligeramente. Espolvorea perejil picado por encima.</p>

          <p> 7 ¡Ya está lista tu receta de chupín de pescado! Deja reposar el plato media hora antes de servirlo a la mesa. Esto resaltará su textura e integrará todos los sabores del plato. No importa si debes calentar de nuevo el plato, estos reposos hacen que tus recetas aumenten su exquisitez.</p>

        </div>
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./img/olla-caliente.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Volver!
        </a>
        <div>
    </div>
  </div>
</div>`;
}

function mostrarReceta3(event) {
  // Obtener el texto de la descripción del plato correspondiente

  // Mostrar la descripción en el div#recetas
  const recetasDiv = document.getElementById('recetas');
  recetasDiv.innerHTML = `<div class="card mb-10" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/bife.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Receta de Bife Koygua o Bife Criollo</h5>
        <h2>Ingredientes:</h2>
        <ul id="ingredientes">
            <li>1 bife de carne vacuna (aprox. 300g)</li>
            <li>Sal y pimienta al gusto</li>
            <li>Aceite de oliva</li>
            <li>1 cucharada de manteca</li>
            <li>1 cebolla grande</li>
            <li>1 pimiento rojo</li>
            <li>1 pimiento verde</li>
            <li>2 tomates maduros</li>
            <li>1 vaso de vino tinto</li>
            <li>1 taza de caldo de carne</li>
        </ul>
          <h5>Cómo hacer Bife Koygua o Bife Criollo:</h5>
          <p> 1. Salpimentar el bife al gusto y dorarlo en una sartén con aceite de oliva y manteca caliente.</p>
          <p> 2. Retirar el bife y en la misma sartén agregar la cebolla, los pimientos y los tomates cortados en juliana.</p>
          <p> 3. Incorporar el vino tinto y dejar reducir. Agregar el caldo de carne y cocinar a fuego lento hasta que las verduras estén tiernas.</p>
          <p> 4. Devolver el bife a la sartén para que se termine de cocinar en la salsa.</p>
          <p> 5. Servir el Bife Koygua o Bife Criollo acompañado de las verduras y la salsa.</p>
      </div>
    </div>
  </div>
</div>`;
}

function mostrarReceta4(event) {
  // Obtener el texto de la descripción del plato correspondiente

  // Mostrar la descripción en el div#recetas
  const recetasDiv = document.getElementById('recetas');
  recetasDiv.innerHTML = `<div class="card mb-10" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/empanadas.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Receta de Empanadas de Charque</h5>
        <h2>Ingredientes:</h2>
        <ul id="ingredientes">
            <li>500g de charque</li>
            <li>2 tazas de harina de trigo</li>
            <li>1 huevo</li>
            <li>1 cucharada de grasa derretida</li>
            <li>Agua tibia</li>
            <li>1 cebolla grande picada</li>
            <li>2 tomates picados</li>
            <li>1 pimiento picado</li>
            <li>Aceite para freír</li>
            <li>Sal y pimienta al gusto</li>
        </ul>
          <h5>Cómo hacer Empanadas de Charque:</h5>
          <p> 1. Remojar el charque en agua durante toda la noche para desalarlo. Luego, hervirlo para ablandarlo.</p>
          <p> 2. Preparar la masa mezclando la harina, el huevo, la grasa derretida y suficiente agua tibia para formar una masa suave.</p>
          <p> 3. Extender la masa y cortar círculos para formar las empanadas. Rellenar con el charque desmenuzado y la mezcla de cebolla, tomate y pimiento.</p>
          <p> 4. Cerrar las empanadas y freírlas en aceite caliente hasta que estén doradas. ¡Disfruta!</p>
      </div>
    </div>
  </div>
</div>`;
}


// Agregar un evento a cada botón "Ver Receta"
botonesVerReceta.forEach(boton => {
    boton.addEventListener('click', mostrarReceta);
});
