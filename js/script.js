// Age Verification
document.getElementById('confirmAge').addEventListener('click', function() {
    document.getElementById('ageVerification').style.display = 'none';
    localStorage.setItem('ageVerified', 'true');
});

document.getElementById('rejectAge').addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
});

// Check if age was verified before
if (localStorage.getItem('ageVerified') === 'true') {
    document.getElementById('ageVerification').style.display = 'none';
}

// Cookie Banner
document.getElementById('acceptCookies').addEventListener('click', function() {
    document.getElementById('cookieBanner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

document.getElementById('rejectCookies').addEventListener('click', function() {
    document.getElementById('cookieBanner').style.display = 'none';
    localStorage.setItem('cookiesRejected', 'true');
});

// Check if cookies were handled before
if (localStorage.getItem('cookiesAccepted') === 'true' || localStorage.getItem('cookiesRejected') === 'true') {
    document.getElementById('cookieBanner').style.display = 'none';
}

// Newsletter Form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Vielen Dank für deine Anmeldung! Du erhältst in Kürze eine E-Mail mit deinem 30% Rabattcode.');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
