let editButton = document.querySelector('.profile__edit-button');
let showPopup = document.querySelector('.popup');

editButton.addEventListener('click', function() {
    showPopup.classList.add('popup__opened');
});

let closeButton = document.querySelector('.popup__close-button')
let closePopup = document.querySelector('.popup');

closeButton.addEventListener('click', function() {
    closePopup.classList.remove('popup__opened');
});


