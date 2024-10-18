document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate-btn');

    calculateButton.addEventListener('click', function() {
        let total = 0;
        const checkboxes = document.querySelectorAll('.course-selection input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const price = parseFloat(checkbox.getAttribute('data-price'));
                if (!isNaN(price)) {
                    total += price;
                } else {
                    console.error('Invalid price detected:', checkbox.getAttribute('data-price'));
                }
            }
        });

        alert(`Info has been sent.\nTotal Cost: R${total.toFixed(2)}`);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-main-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
