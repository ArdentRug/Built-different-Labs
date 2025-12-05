document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.appointment-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const dateInput = document.getElementById('date');
            
            let user = nameInput.value;
            let dateVal = dateInput.value;
            
            if (!dateVal) {
                dateVal = "soon";
            }

            alert("Thanks " + user + ". Your appointment request for " + dateVal + " is sent.");
            
            form.reset();
        });
    }

    const tierForms = document.querySelectorAll('.tier-card form');

    for (let i = 0; i < tierForms.length; i++) {
        tierForms[i].addEventListener('submit', function(e) {
            e.preventDefault();
            
            const card = this.parentElement;
            const title = card.querySelector('h2').innerText;

            alert("Welcome! You joined the " + title + " membership.");
        });
    }

    const buyBtns = document.querySelectorAll('.product-detail .button-primary');

    buyBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            const container = btn.parentElement;
            const productTitle = container.querySelector('h2').innerText;

            alert("Added " + productTitle + " to your cart.");
        });
    });

});