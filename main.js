//change navbar styles on scroll

window.addEventListener('scroll', () =>{
  /*.toggle adds class if it was not added, it removes if it was added and
   it control the statement right side of adding or removing class,
   if window.scrollY >0 it adds 'window-scroll' class, it is not it removes*/
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

//show and hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', ()=>{
    //to show p, we used faq's second children that means p
    faq.children[1].classList.toggle('open');

    //change icon to minus
    const icon = faq.querySelector('.faq__icon i')
    // faq.querySelector means '.faq__icon i' selector just in faq element
    if(icon.className === 'uil uil-plus'){
      icon.className = "uil uil-minus"
    }else {
      icon.className ='uil uil-plus'
    }
  })
})


// show and hide nav menu

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', ()=>{
  menu.style.display = "flex"
  closeBtn.style.display="inline-block" /*we can change class just like faq section
  and switch between menu and closemenu buttons */
  menuBtn.style.display = "none";
})
//close nav menu
closeBtn.addEventListener('click', ()=>{
  menu.style.display = "none"
  closeBtn.style.display="none" /*we can change class just like faq section
  and switch between menu and closemenu buttons */
  menuBtn.style.display = "inline-block";
})

