const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#navigation');
function closeMenu(){nav?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Abrir menu');}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){closeMenu();menuButton.focus();}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.type!==button.dataset.filter;if(!card.hidden)card.classList.add('visible');});
}));
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.05});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const dialog=document.querySelector('#image-dialog');
let activeGallery=null;
const galleries=[];
document.querySelectorAll('[data-gallery]').forEach(el=>{
  const gallery={el,slides:JSON.parse(el.dataset.slides),index:0};galleries.push(gallery);
  el.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>{gallery.index=(gallery.index+Number(button.dataset.direction)+gallery.slides.length)%gallery.slides.length;renderGallery(gallery);}));
  el.querySelector('.image-open').addEventListener('click',()=>{activeGallery=gallery;renderDialog();dialog.showModal();document.body.style.overflow='hidden';});
  let touchX=null;el.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});el.addEventListener('touchend',e=>{if(touchX!==null&&Math.abs(e.changedTouches[0].clientX-touchX)>60&&gallery.slides.length>1){gallery.index=(gallery.index+(e.changedTouches[0].clientX<touchX?1:-1)+gallery.slides.length)%gallery.slides.length;renderGallery(gallery);}touchX=null;},{passive:true});
});
function renderGallery(gallery){const slide=gallery.slides[gallery.index];const img=gallery.el.querySelector('img');img.src=slide.src;img.alt=slide.alt;gallery.el.querySelector('.caption').textContent=slide.caption;const counter=gallery.el.querySelector('.counter');if(counter)counter.textContent=`${gallery.index+1} / ${gallery.slides.length}`;}
function renderDialog(){if(!activeGallery)return;const slide=activeGallery.slides[activeGallery.index];const img=document.querySelector('#dialog-image');img.src=slide.src;img.alt=slide.alt;document.querySelector('#dialog-caption').textContent=slide.caption;document.querySelector('#dialog-count').textContent=`${activeGallery.index+1} / ${activeGallery.slides.length}`;document.querySelector('#dialog-prev').disabled=activeGallery.slides.length<2;document.querySelector('#dialog-next').disabled=activeGallery.slides.length<2;}
function stepDialog(direction){if(!activeGallery)return;activeGallery.index=(activeGallery.index+direction+activeGallery.slides.length)%activeGallery.slides.length;renderDialog();renderGallery(activeGallery);}
document.querySelector('#dialog-prev')?.addEventListener('click',()=>stepDialog(-1));document.querySelector('#dialog-next')?.addEventListener('click',()=>stepDialog(1));
document.querySelector('#close-dialog')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('close',()=>{document.body.style.overflow='';});
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();stepDialog(-1);}if(e.key==='ArrowRight'){e.preventDefault();stepDialog(1);}});
