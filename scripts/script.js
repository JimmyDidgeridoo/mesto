const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

function popupOpen() {
    editPopup.classList.add('popup__opened');
}

function popupClose() {
    editPopup.classList.remove('popup__opened');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);


