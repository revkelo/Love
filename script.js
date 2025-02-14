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

  const noBtn = document.getElementById("noBtn");
  let clickCount = 0;
  
  noBtn.addEventListener("click", () => {
      clickCount++;
  
      // Si es el segundo clic, el botón desaparece
      if (clickCount === 5) {
          noBtn.style.display = "none";

          return;
      }
  
  
          noBtn.style.position = "absolute";
  
          const maxX = window.innerWidth - noBtn.offsetWidth - 20;
          const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  
          const x = Math.random() * maxX;
          const y = Math.random() * maxY;
  
          noBtn.style.left = `${x}px`;
          noBtn.style.top = `${y}px`;
      
  });
  
  // Reiniciar el contador después de un tiempo para evitar doble clic accidental
  noBtn.addEventListener("mouseleave", () => {
      setTimeout(() => {
          clickCount = 0;
      }, 500);
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