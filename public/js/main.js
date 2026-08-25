// The Door's Family Hotel — site interactions

// Hide the sticky social rail while the menu section is on screen —
// in the bottom-right corner it would otherwise sit on top of the price list on mobile.
const socialSticky = document.querySelector('.social-sticky');
const menuSection = document.getElementById('menu');
if (socialSticky && menuSection && 'IntersectionObserver' in window) {
  new IntersectionObserver(
    entries => entries.forEach(en => socialSticky.classList.toggle('is-hidden', en.isIntersecting)),
    { threshold: 0.05 }
  ).observe(menuSection);
}

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Menu tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.menu-panel');

function activateMenuTab(key) {
  const btn = document.querySelector(`.tab-btn[data-panel="panel-${key}"]`);
  const panel = document.getElementById(`panel-${key}`);
  if (!btn || !panel) return false;
  tabBtns.forEach(b => b.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  panel.classList.add('active');
  return true;
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.panel.replace('panel-', '');
    activateMenuTab(key);
    const url = new URL(window.location);
    url.searchParams.set('menu', key);
    history.replaceState(null, '', url);
  });
});

// Deep link from QR codes: e.g. thedoorsfamily.com.np/?menu=food#menu, ?menu=cafe#menu, ?menu=bar#menu
// (food already renders by default, so plain #menu with no query works too)
const menuParam = new URLSearchParams(window.location.search).get('menu');
if (menuParam) activateMenuTab(menuParam);

if (window.location.hash !== '#menu' && menuParam) {
  // No native anchor to rely on — scroll manually once the page (images/video) has
  // settled, so a late layout shift on mobile doesn't leave the viewport off-target.
  const scrollToMenu = () => document.getElementById('menu').scrollIntoView({ block: 'start' });
  window.addEventListener('load', () => requestAnimationFrame(scrollToMenu));
}

// The ?menu= param is only meaningful on the menu section — drop it when navigating
// to any other in-page anchor so it doesn't linger in the URL (e.g. ?menu=food#about).
document.querySelectorAll('a[href^="#"]').forEach(a => {
  const targetId = a.getAttribute('href').slice(1);
  if (targetId === 'menu') return;
  a.addEventListener('click', () => {
    if (window.location.search) {
      history.replaceState(null, '', window.location.pathname);
    }
  });
});

// Gallery lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.masonry a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = a.getAttribute('href');
    lightbox.classList.add('open');
  });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});

// Card photo sliders — auto-rotate each category's photos
document.querySelectorAll('.slider').forEach(slider => {
  const imgs = slider.querySelectorAll('img');
  const dots = slider.querySelectorAll('.dots span');
  if (imgs.length < 2) return;
  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove('on');
    dots[i].classList.remove('on');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('on');
    dots[i].classList.add('on');
  }, 3800);
});

// ---------- Generic auto-moving carousels ----------
function visibleCount(car){
  const w = window.innerWidth;
  if (w <= 720) return 1;
  if (car.classList.contains('v2')) return 2;
  if (w <= 900 && car.classList.contains('v3')) return 2;
  if (car.classList.contains('v3')) return 3;
  return 1;
}
document.querySelectorAll('.carousel').forEach(car => {
  const track = car.querySelector('.c-track');
  const slidesEls = track.querySelectorAll('.c-slide');
  const dotsBox = car.querySelector('.c-dots');
  let idx = 0, timer;

  function pages(){ return Math.max(1, slidesEls.length - visibleCount(car) + 1); }
  function renderDots(){
    dotsBox.innerHTML = '';
    for (let i = 0; i < pages(); i++){
      const d = document.createElement('span');
      if (i === idx) d.classList.add('on');
      d.addEventListener('click', () => { idx = i; update(); restart(); });
      dotsBox.appendChild(d);
    }
  }
  function update(){
    const step = 100 / visibleCount(car);
    track.style.transform = `translateX(-${idx * step}%)`;
    dotsBox.querySelectorAll('span').forEach((d,i)=>d.classList.toggle('on', i===idx));
  }
  function next(){ idx = (idx + 1) % pages(); update(); }
  function restart(){ clearInterval(timer); timer = setInterval(next, 3500); }

  car.addEventListener('pointerenter', () => clearInterval(timer));
  car.addEventListener('pointerleave', restart);
  window.addEventListener('resize', () => { idx = Math.min(idx, pages()-1); renderDots(); update(); });

  renderDots(); update(); restart();
});

// Lightbox for carousel images
document.querySelectorAll('a.lbx').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = a.getAttribute('href');
    lightbox.classList.add('open');
  });
});

// ---------- Auto-play reel videos when scrolled into view ----------
const reelVideos = document.querySelectorAll('.reel-grid video');
if ('IntersectionObserver' in window && reelVideos.length){
  const vobs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      const v = en.target;
      if (en.isIntersecting && en.intersectionRatio >= 0.4){
        v.play().catch(()=>{});
      } else {
        v.pause();
      }
    });
  }, { threshold:[0, .4, 1] });
  reelVideos.forEach(v => vobs.observe(v));
} else {
  reelVideos.forEach(v => v.play().catch(()=>{}));
}
