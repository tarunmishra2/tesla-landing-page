const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('.overlay-close');

const openMenu = document.querySelectorAll('.overlay-menu');
openMenu.forEach(menuBtn => {
  menuBtn.addEventListener('click', (e) => {
    overlay.classList.add('show')
  });
});
overlayClose.addEventListener('click', (e) => {
  overlay.classList.remove('show')
});

scrollOut({
  scrollingElement: ".container",
  onShown: function(el) {
    el.animate([{ opacity: 0 }, { opacity: 1 }], 1500);
  },
  onHidden: function(el) {
    el.animate([{ opacity: 1 }, { opacity: 0 }], 1500);
  }
});