let left = document.querySelector('.btnL');
let right = document.querySelector('.btnR');
let card = document.querySelector('.banner');
let scrollL = document.querySelector('.scrllL');
let scrollR = document.querySelector('.scrllR');
let reviewCard = document.querySelector('#testimonial');

function wheelScroll(to, by){
    return to.scrollLeft += by;
}
function leftScroll(to, by){
    return to.scrollLeft -= by;
}
function RightScroll(to, by){
    return to.scrollLeft += by;
}

card.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    wheelScroll(card, 840);
})
left.addEventListener('click', () => {
    leftScroll(card, 840);
    left.classList.add('clicked');
    right.classList.remove('clicked');
})
right.addEventListener('click', () => {
    RightScroll(card, 840);
    right.classList.add('clicked');
    left.classList.remove('clicked');
    setTimeout(() => {
        setInterval(() => {
            card.scrollLeft += 840;
        }, 4000);
    }, 6000);
})

reviewCard.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    wheelScroll(reviewCard, 1160);
})
scrollL.addEventListener('click', () => {
    leftScroll(reviewCard, 1160);
    scrollL.classList.add('clicked');
    scrollR.classList.remove('clicked');
})
scrollR.addEventListener('click', () => {
    RightScroll(reviewCard, 1160);
    scrollR.classList.add('clicked');
    scrollL.classList.remove('clicked');
    setTimeout(() => {
        setInterval(() => {
            card.scrollLeft += 840;
        }, 4000);
    }, 6000);
})
