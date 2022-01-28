import content from './index'
let nameDishes = ['Dango','Doroyaki','Noodles','Sashimi'];
let Prise = ['2$','1$','4$','7$'];
let srsOfDishes = ['img/dango.png','img/dorayaki.png','img/noodles.png','img/sashimi.png'];

function menu() {
    content.innerHTML = '';
    content.style.padding = "5px 0px 0px 0px"; 
    for (let index = 0; index < nameDishes.length; index++) {
        let container = document.createElement('div');
        let img = document.createElement('img');
        let priseContainer = document.createElement('div');
        let nameContainer = document.createElement('div');

        img.src = srsOfDishes[index];
        priseContainer.textContent = Prise[index];
        nameContainer.textContent = nameDishes[index];

        img.classList.add('menu_img')
        container.classList.add('menu_card')

        container.append(img)
        container.append(nameContainer)
        container.append(priseContainer)
       
        content.append(container)
    }
}

export default menu;