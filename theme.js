const utility=document.getElementById('utility');
if(utility){const b=utility.querySelector('button');if(b)b.addEventListener('click',()=>utility.remove());}
const toggle=document.querySelector('.menu-toggle'),mobile=document.getElementById('mobileMenu');
if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',open);document.body.classList.toggle('menu-open',open)});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')}));}
