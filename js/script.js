let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});


navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxmS0Iel5FRsVMMLDFpYLeXlXFH4HBDDaVtOJwsF5f6_lCjOxaSU9FwfJH8wMghdBzDOQ/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

    ScrollReveal().reveal('.sc-info,.heading', { origin: "top" });
    ScrollReveal().reveal('.about-img,.contact-info', { origin: "left" });
    ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
    ScrollReveal().reveal('.project-gallery,.img-sc', { origin: "bottom" });