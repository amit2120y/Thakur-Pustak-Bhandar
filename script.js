// Smooth scroll navigation for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const sectionName = link.textContent.toLowerCase().replace(/\s+/g, '');
        const section = document.querySelector('section.' + sectionName);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button hover effect for "btn"
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.06)';
        btn.style.boxShadow = '0 4px 14px rgba(61,43,31,0.07)';
        btn.style.transition = 'all 0.2s';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
});

// "Order Now" button scrolls to Favorite section
const orderBtns = document.querySelectorAll('.btn');
orderBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes('order now')) {
        btn.addEventListener('click', e => {
            const fav = document.querySelector('.favorite');
            if (fav) {
                e.preventDefault();
                fav.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Simple Gallery Modal (click an image to view larger)
const galleryImgs = document.querySelectorAll('.gallery img');
galleryImgs.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        // Modal background
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0'; overlay.style.left = '0';
        overlay.style.width = '100vw'; overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';

        // Large image
        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.style.maxWidth = '90vw';
        largeImg.style.maxHeight = '90vh';
        largeImg.style.borderRadius = '10px';
        largeImg.style.boxShadow = '0 6px 32px #2228';

        // Close on click
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);
    });
});

// Simple "Join Our Community" alert
const joinBtn = document.querySelector('.community .btn');
if (joinBtn) {
    joinBtn.addEventListener('click', () => {
        alert('Thank you for your interest! Community sign-up coming soon.');
    });
}

