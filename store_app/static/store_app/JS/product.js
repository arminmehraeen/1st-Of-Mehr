// On document load control menu bar functionality for both mobile (Hamburger menu) and Desktop
document.addEventListener('DOMContentLoaded', () => {
    // Create a variable for navbar item
    const navbar = document.getElementById('navbar');
    const menuButton = document.getElementById('menu-button');
    
    // Toggle function to control menu visibility
    const toggle = () => {
        if (navbar.style.display == "none") {
            navbar.style.display = "block";
        }
        else {
            navbar.style.display = "none";
        }
    }

    // If view port is a tablet or mobile display Hamburger menu
    if (window.screen.width <= 769) {
        navbar.style.display = "none";
        menuButton.style.display = "block";
    }
    // Otherwise display long desktop menu
    else {
        navbar.style.display = "block";
        menuButton.style.display = "none";
    }

    // When menu button is click toggle visibility
    menuButton.addEventListener('click', toggle);

});