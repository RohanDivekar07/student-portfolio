// Navbar active link highlight
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = '#e94560';
    }
});

// Contact form message
function sendMessage() {
    const status = document.getElementById('msg-status');
    if (status) {
        status.textContent = 'Message sent successfully!';
        status.style.color = 'green';
        status.style.marginTop = '10px';
    }
}

// Console log to confirm JS loaded
console.log('Portfolio JS loaded - Deployed by Jenkins CI/CD');
