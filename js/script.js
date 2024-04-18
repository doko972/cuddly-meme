//Galerie just rotation//
// const gallery = document.querySelector('.gallery__img');
// let isDragging = false;
// let lastX;

// gallery.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   lastX = event.clientX;
// });

// gallery.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// gallery.addEventListener('mouseleave', () => {
//   isDragging = false;
// });

// gallery.addEventListener('mousemove', (event) => {
//   if (isDragging) {
//     const deltaX = event.clientX - lastX;
//     lastX = event.clientX;

//     gallery.style.transform = `rotateY(${deltaX}deg)`;
//   }
// });

//Galery with stopping rotation//
const gallery = document.querySelector('.gallery__img');
let isMouseDown = false;
let lastMouseX = 0;

gallery.addEventListener('mousedown', (event) => {
  isMouseDown = true;
  lastMouseX = event.clientX;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    const mouseX = event.clientX;
    const deltaX = mouseX - lastMouseX;
    lastMouseX = mouseX;

    gallery.style.transform = `rotateY(${deltaX}deg)`;
  }
});
