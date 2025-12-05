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
            
            
            const allCards = document.querySelectorAll('.tier-card');
            
            for (let j = 0; j < allCards.length; j++) {
                allCards[j].style.backgroundColor = "#ffffff";
                allCards[j].style.borderColor = "#dddddd";
            }

            
            const activeCard = this.parentElement;
            
            
            activeCard.style.backgroundColor = "#e6f0f2";
            activeCard.style.borderColor = "#007a99";

            const title = activeCard.querySelector('h2').innerText;

            alert("You have selected the " + title + " plan.");
        });
    }

});
const factButton = document.getElementById('fact-btn');
    const factText = document.getElementById('fact-text');

    if (factButton) {
        const facts = [
            "Dehydration can decrease physical performance.",
            "Almonds are a great source of Vitamin E.",
            "Your body absorbs more iron from plants if you eat Vitamin C.",
            "Broccoli has more Vitamin C than oranges.",
            "Dark chocolate is high in antioxidants.",
            "Eating slowly helps your digestion.",
            "Avocados are a fruit, not a vegetable.",
            "Green tea can improve brain function.",
            "Eggs are a complete protein source."
        ];

        factButton.addEventListener('click', function() {
            let randomIndex = Math.floor(Math.random() * facts.length);
            factText.innerText = facts[randomIndex];
        });
    }
