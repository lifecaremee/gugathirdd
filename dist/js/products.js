/* -----------------
   products.js
   ----------------- */

/* MixItUp Sorting */
let mixerPortfolio;
try {
    mixerPortfolio = mixitup('.work-container', {
        selectors: { target: '.work-card' },
        animation: { duration: 300 }
    });
} catch (err) {}

/* Active work filter (linkWork) */
const linkWork = document.querySelectorAll('.work-item');
linkWork.forEach(l => l.addEventListener('click', activeWork));

/* Show More button */
document.addEventListener('DOMContentLoaded', () => {
    const batchSize = 3;
    const showBtn = document.getElementById('show-more-btn');
    const getHidden = () => Array.from(document.querySelectorAll('.work-card.hidden'));

    if (!document.querySelector('.work-card.hidden') && showBtn) {
        showBtn.style.display = 'none';
    }

    if (showBtn) {
        showBtn.addEventListener('click', () => {
            const hidden = getHidden();
            for (let i = 0; i < batchSize && i < hidden.length; i++) {
                hidden[i].classList.remove('hidden');
                hidden[i].style.opacity = 0;
                hidden[i].style.transition = 'opacity .35s ease';
                requestAnimationFrame(() => { hidden[i].style.opacity = 1; });
            }
            if (getHidden().length === 0) showBtn.style.display = 'none';
        });
    }

    /* Product card popups */
    const popup = document.getElementById('portfolio-popup');
    const popupContent = document.getElementById('pp-content');
    const popupClose = document.getElementById('pp-close');
    const workContainer = document.getElementById('work-container');

    function openPopup(innerHTML) {
        if (!popup || !popupContent) return;
        popupContent.innerHTML = innerHTML;
        popup.classList.add('open');
        popup.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (popupClose) popupClose.focus();
    }

    function closePopup() {
        if (!popup) return;
        popup.classList.remove('open');
        popup.setAttribute('aria-hidden', 'true');
        popupContent.innerHTML = '';
        document.body.style.overflow = '';
    }

    if (workContainer) {
        workContainer.addEventListener('click', e => {
            let el = e.target;
            while (el && el !== workContainer && !el.classList.contains('product-card')) {
                el = el.parentElement;
            }
            if (!el || el === workContainer) return;
            if (e.target.closest('a')) return;
            const details = el.querySelector('.portfolio-item-details');
            if (details) openPopup(details.innerHTML);
        });
    }

    if (popupClose) popupClose.addEventListener('click', closePopup);
    if (popup) popup.addEventListener('click', e => { if (e.target === popup) closePopup(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
});
