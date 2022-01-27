import content from './index'
let aboutT = 'In our traditional Japanese restaurant, you can try national cuisine. We have the best service because our chefs have tens of years of experience.';
function home() {
    content.innerHTML = '';
    let intro = document.createElement('div');

    //document.createElement
    intro.textContent = aboutT;
    intro.classList.add('intro');
    content.append(intro)
}

export default home;