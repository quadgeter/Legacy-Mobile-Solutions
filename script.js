// Smooth scroll to contact section
document.getElementById('contactBtn').addEventListener('click', function() {
    const contactSection = document.getElementById('contactSection');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, phone, message });

    // Show success message
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('contactForm');

    form.style.display = 'none';
    successMessage.classList.add('show');

    // Reset form and hide success message after 5 seconds
    setTimeout(function() {
        form.reset();
        form.style.display = 'block';
        successMessage.classList.remove('show');
    }, 5000);
});

// Header shadow on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 12px -1px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';