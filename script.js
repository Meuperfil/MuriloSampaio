let sections = document.querySelectorAll('section')
let navLinks = document.querySelector('.navbar')

/* menu */

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

const imagens = document.querySelectorAll('.imagem-pequena');
const modal = document.getElementById('modal');
const imagemAmpliada = document.querySelector('.imagem-ampliada');
const fecharModal = document.querySelector('.fechar');

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    modal.style.display = 'block';
    imagemAmpliada.src = imagem.src;
  });
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});



window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
          })
      }
  });

let header = document.querySelector('.menu')

header. classList.toggle('sticky', window.scrollY > 100)

menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

}

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}