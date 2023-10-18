const card = document.querySelector('.card');
const cardInner = document.querySelector('.card-inner');

card.addEventListener('click', function () {
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});
