let icon = document.getElementById("contact-switch-icon"),
    emailForm = document.getElementById("show-email"),
    mapsFrom = document.getElementById("show-maps");

icon.addEventListener('click', () => {
    if ( icon.src.includes("img/location.svg") ) {
        icon.src = "img/no_location.svg";
        emailForm.classList.remove('show-email');
        mapsFrom.classList.add('show-maps');
    }
    else {
        icon.src = "img/location.svg";
        emailForm.classList.add('show-email');
        mapsFrom.classList.remove('show-maps');
    }
});
