const content = document.querySelector('#content');
export default content;

import home from './home'
import menu from './menu'
import contact from './contact'


let homeButton = document.querySelector('#Home');
homeButton.addEventListener("click",home)

let menuButton = document.querySelector('#Menu');
menuButton.addEventListener("click",menu)

let contactButton = document.querySelector('#Contact');
contactButton.addEventListener("click",contact)
