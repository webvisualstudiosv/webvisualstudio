document.addEventListener('DOMContentLoaded', () => {
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu_visible');
        });

        
        document.querySelectorAll('.nav-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-menu_visible');
            });
        });
    }

    
    const checkboxes = document.querySelectorAll('.calc-check');
    const totalDisplay = document.getElementById('totalEstimado');

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                total += parseInt(cb.value);
            }
        });
        if (totalDisplay) {
            totalDisplay.textContent = `$${total}`;
        }
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('change', calculateTotal);
    });
});