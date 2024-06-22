let playerInstance; // Variable global para almacenar la instancia del reproductor

  function openFloatingPlayer(videoLink, thumbnailUrl) {
    
    
    
    document.body.classList.add('floating-player-open');

    const floatingPlayer = document.createElement('div');
    floatingPlayer.className = 'floating-player';
    document.body.appendChild(floatingPlayer);
    

    const playerHtml = `
      <div ondragstart="return false;" ondrop="return false;">
        <div class="floating-player">
        
          
          <div class="player show"> 
          <div class="close-containerImg">
          <div class="iconoApp"></div>
          

          </div>
          <div class="close-container">
          
          <button class="close-button" onclick="location.href='${videoLink}';">
        <i class="fas fa-download"></i>
    </button>
    
            <button class="close-button" onclick="closeFloatingPlayer()">X</button>
          </div>
            <div id="iframeContainer" style="border-radius:0px">
 <video id="myVideo"  frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="" controls="controls" style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:0px"  seamless=""><source src="${videoLink}" type="video/mp4"></video>
</div>

<div id="noInternetMessage">
  <p>No hay conexión a Internet o el dispositivo está en modo avión.</p>
</div>
          </div>
        </div>
      </div>
    `;

  
    
      floatingPlayer.innerHTML = playerHtml;
 const iframe = document.

    
getElementById('myIframe');
    const sandboxDiv = document.getElementById('sandbox');
const sandboxAttributes = sandboxDiv.getAttribute('data-sandbox-attributes');

// Verifica si el atributo data-sandbox-attributes está definido y no está vacío
if (sandboxAttributes && sandboxAttributes.trim() !== "") {
    iframe.setAttribute('sandbox', sandboxAttributes);
}


  const noInternetMessage = document.getElementById('noInternetMessage');

  function checkInternetConnection() {
    if (navigator.onLine) {
      iframe.src = iframe.src; // Recargar el iframe
      iframe.style.display = 'block';
      noInternetMessage.style.display = 'none';
    } else {
      iframe.style.display = 'none';
      noInternetMessage.style.display = 'block';
    }
  }

  function checkAirplaneMode() {
    if (!navigator.onLine) {
      checkInternetConnection();
    }
  }

  // Verificar la conexión y el modo avión al cargar la página
  checkInternetConnection();
  checkAirplaneMode();

  // Verificar la conexión y el modo avión cuando cambia el estado
  window.addEventListener('online', checkInternetConnection);
  window.addEventListener('offline', checkInternetConnection);
  window.addEventListener('offline', checkAirplaneMode);

  // Verificar la conexión al cargar la página y mostrar el cartel si no hay conexión
  if (!navigator.onLine) {
    checkInternetConnection();
  }

    floatingPlayer.addEventListener('click', function(event) {
      if (event.target === this) {
        closeFloatingPlayer();
      }
    });
  }

    
  function closeFloatingPlayer() {
    if (playerInstance) {
      playerInstance.destroy(); // Destruir la instancia del reproductor
    }

    
    document.body.classList.remove('floating-player-open');

    const floatingPlayer = document.querySelector('.floating-player');
    if (floatingPlayer) {
      floatingPlayer.remove();
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".open-modal-button");
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content"); // Obtener el contenedor modal-content

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            const rating = this.getAttribute("data-rating");
            const fecha = this.getAttribute("data-fecha");
            const Ep = this.getAttribute("data-Ep");
            const bgImage = this.getAttribute("data-bg-image"); // Obtener la URL de la imagen de fondo

            // Actualizar contenido del modal
            modal.querySelector(".titulo5").textContent = title;
            modal.querySelector(".descripcion").textContent = description;
            modal.querySelector(".rating").innerHTML = `| ${rating} <i class="far fa-star sarp"></i> |`;
            modal.querySelector(".fecha").textContent = fecha;
            modal.querySelector(".Ep").textContent = Ep;

            // Establecer la imagen de fondo del contenedor modal-content
            modal.style.backgroundImage = `url(${bgImage})`;

            // Mostrar el modal
            modal.style.display = "block";
        });
    });

    // Cerrar modal al hacer clic en la "X"
    const closeBtn = document.querySelector(".closeinfo");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", function(event) {
        if (!modal.contains(event.target) && !Array.from(buttons).some(button => button.contains(event.target))) {
            modal.style.display = "none";
        }
    });
});
