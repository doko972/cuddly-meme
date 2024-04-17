//Galerie//
const gallery = document.querySelector('.gallery__img');
let isDragging = false;
let lastX;

gallery.addEventListener('mousedown', (event) => {
  isDragging = true;
  lastX = event.clientX;
});

gallery.addEventListener('mouseup', () => {
  isDragging = false;
});

gallery.addEventListener('mouseleave', () => {
  isDragging = false;
});

gallery.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const deltaX = event.clientX - lastX;
    lastX = event.clientX;

    gallery.style.transform = `rotateY(${deltaX}deg)`;
  }
});


