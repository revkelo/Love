onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const letter = document.querySelector(".letter");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    letter.classList.add("show"); 
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // Mostrar mensaje hermoso con animación suave
    openMessage.style.display = "block";
    setTimeout(() => {
        openMessage.style.opacity = "1"; // Hace visible el mensaje
        openMessage.style.transform = "translateY(0)"; // Suaviza el movimiento
    }, 100);

    // Ocultar mensaje después de 7 segundos con desvanecimiento
    setTimeout(() => {
        openMessage.style.opacity = "0"; 
        openMessage.style.transform = "translateY(-20px)"; // Se desliza suavemente hacia arriba
        setTimeout(() => {
            openMessage.style.display = "none";
        }, 1500); // Esperamos que termine la animación antes de ocultarlo
    }, 7000);
});

  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      letter.classList.toggle("show"); // Agrega o quita la clase 'show'
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });

// Si el mouse pasa sobre el botón "No", este se mueve
 noBtn.addEventListener("click", () => {

    noBtn.style.position = "absolute"; // Se vuelve absoluto cuando se mueve
            // Dimensiones de la ventana
            const maxX = window.innerWidth - noBtn.offsetWidth - 20; // Restamos 20px para que no toque el borde
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;
            
            // Posiciones aleatorias dentro del área permitida
            const x = Math.max(10, Math.random() * maxX); // No menor a 10px para que no desaparezca
            const y = Math.max(10, Math.random() * maxY);

            // Aplicamos la nueva posición
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });

// Si presiona "Sí", aparece un hermoso mensaje
yesBtn.addEventListener("click", () => {
    loveMessage.style.display = "block";

    // Desaparece después de 3 segundos
    setTimeout(() => {
        loveMessage.style.animation = "fadeOut 1s ease-in-out";
        setTimeout(() => {
            loveMessage.style.display = "none";
            loveMessage.style.animation = "fadeIn 1s ease-in-out"; // Reiniciar animación para la próxima vez
        }, 1000);
    }, 3000);
});