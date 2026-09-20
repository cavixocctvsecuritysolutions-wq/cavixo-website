const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.right = '4%';
  nav.style.background = '#fff';
  nav.style.padding = '18px 22px';
  nav.style.borderRadius = '14px';
  nav.style.boxShadow = '0 15px 40px rgba(0,0,0,.12)';
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 800) nav.style.display = '';
}));
