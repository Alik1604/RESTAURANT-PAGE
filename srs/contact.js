import content from './index'

let names = ['Chef','Delivery']
let numbers = ['12345678','87654321'];
let srcs = ['img/chef.png','img/package-box.png']

function contact() {
    content.innerHTML='';
    content.style.padding = "100px 0px 0px 0px"; 
    for (let index = 0; index < names.length; index++) {
        let container = document.createElement('div');
        let nameContainer = document.createElement('div');
        let numberCont = document.createElement('div');
        let img = document.createElement('img');

        img.src = srcs[index];
        nameContainer.textContent = names[index];
        numberCont.textContent = numbers[index];

        container.classList.add('contact_container');
        img.classList.add('c_img')
        nameContainer.classList.add('conName')

        container.append(img)
        container.append(nameContainer)
        container.append(numberCont)
        content.append(container)
    }


}

export default contact;