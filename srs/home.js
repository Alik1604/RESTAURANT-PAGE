import content from './index'
let aboutT = 'In our traditional Japanese restaurant, you can try national cuisine. We have the best service because our chefs have tens of years of experience.';
let ouhrs = "Hours " + "<br>" + "Sunday: 8am - 8pm" + "<br>" + "Monday: 6am - 6pm" + "<br>" + "Tuesday: 6am - 6pm" + "<br>" +"Wednesday: 6am - 6pm"+ "<br>" +"Thursday: 6am - 10pm"+ "<br>" +"Friday: 6am - 10pm"+ "<br>" + "Saturday: 8am - 10pm";

function home() {
    content.innerHTML = '';
    content.style.padding = "0px"; 
    let intro1 = document.createElement('div');
    let intro2 = document.createElement('div');
    let location =  document.createElement('div');
    let dish = document.createElement('img')

    dish.src = 'img/koi-fish.png';
    dish.id = "koi";
    intro1.innerHTML = aboutT;
    intro2.innerHTML = ouhrs;
    location.innerHTML = "Location" + "<br>" + "8 Makarova Stret, Mykolaive, Ukraine";

    intro1.classList.add('intro');
    intro2.classList.add('intro');
    location.classList.add('intro');

    content.append(intro1)
    intro1.append(dish)
    content.append(intro2)
    content.append(location)
}

export default home;