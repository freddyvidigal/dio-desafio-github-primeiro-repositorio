const cards = document.querySelectorAll('.card');
let hasFlipperdCard = false;
let firstCard, secondCard;
let lockBoard = false;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if (!hasFlipperdCard) {
        hasFlipperdCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipperdCard = false;
    checkForMath();
}

function checkForMath() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlipperdCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) => {
        let randonPosition = Math.floor(Math.random() * 12);
        card.style.order = randonPosition;
    });
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});