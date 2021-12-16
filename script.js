/*Dette er for at skjule skjule/vise hamburger menuen i navigations baren.*/

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});



/*Dette er for at finde længden på de forskellige længder path i svg filen*/

// const Logo = document.querySelectorAll("#videoer path");
// for (let i = 0; i < Logo.length; i++) {
//     console.log(`Letter ${i} is ${Logo[i].getTotalLength()}`);
// }