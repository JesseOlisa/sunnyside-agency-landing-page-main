
/*JAAVASCRIPT FOR HAMBUGER ICON*/
const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.mobile-nav-container');

hamburger.addEventListener('click', () =>{
    if(navBar.style.display === "none") {
        navBar.style.display = 'block';
    }
    else {
        navBar.style.display = 'none';
    }

});