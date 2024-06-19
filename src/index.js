import './style.css';
import home from './home.js'
import menu from './menu.js'
import about from './about.js'

const home1 = document.getElementById("home");
const menu1 = document.getElementById("menu");
const about1 = document.getElementById("about");
const content = document.getElementById('content');

    home1.addEventListener("click", () => {
        content.style.height = "auto"
        home();
    });


menu1.addEventListener("click", () => {
    content.style.height = "auto"
    menu();
});
about1.addEventListener("click", () => {
    content.style.height = "auto"
    about();
});


