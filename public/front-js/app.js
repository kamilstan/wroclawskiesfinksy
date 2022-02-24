//UP BUTTON

const upButton = document.querySelector('p.up');

document.addEventListener('scroll', () => {
    upButton.style.opacity = '1';
})

upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

})

// ACTIVE NAV

const navHome = document.querySelector('.nav-item .home');
const navGallery = document.querySelector('.nav-item .gallery');
const navCats = document.querySelector('.nav-item .cats');
const navContact = document.querySelector('.nav-item .contact');

function setActiveNavLink() {
    if (window.location.pathname === '/') {
        navHome.classList.add('active')
    } else if (window.location.pathname === '/cats') {
        navCats.classList.add('active')
    } else if (window.location.pathname === '/gallery') {
        navGallery.classList.add('active')
    } else if (window.location.pathname === '/contact') {
        navContact.classList.add('active')
    }
}

setActiveNavLink();


// LIGHTBOX SCRIPT
document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el);
    lightbox.show();
}));

// Fetch data from form


const emailInput = document.querySelector('#emailInput');
const subjectInput = document.querySelector('#subjectInput');
const textareaInput = document.querySelector('#textareaInput');
const form = document.querySelector('.contact form');

form.addEventListener('submit', async event => {

    event.preventDefault();

    let email = emailInput.value;
    let subject = subjectInput.value;
    let message = textareaInput.value;

    if ((email || subject || message) === '') {
        alert('Błędnie wypełniony formularz. Wypełnij wszystkie pola.')
    } else {
        alert('Dziękujemy. Twoja wiadomość została wysłana')
    }

    console.log(email, message, subject)

    const res = await fetch('/contact', {
        method: 'POST',
        body: JSON.stringify({
            email,
            subject,
            message,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    emailInput.value = '';
    subjectInput.value = '';
    textareaInput.value = '';

});

