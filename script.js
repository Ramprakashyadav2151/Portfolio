document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.mobile-nav-toggle');
  const nav=document.querySelector('.nav');
  toggle&&toggle.addEventListener('click',()=>{nav.style.display=(nav.style.display==='flex')?'none':'flex'});

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});