const formElement = document.querySelector('.popup__form');

//форма редактирования
const editButton = document.querySelector('.profile__edit-button');
const closeButtonEdit = document.querySelector('.popup__close_button_edit');
const editPopup = document.querySelector('.popup_form_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//добавление фото
const addButton = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__close_button_add');
const addPopup = document.querySelector('.popup_form_add');
const nameInput = document.querySelector('.popup__form-input_text_name');
const jobInput = document.querySelector('.popup__form-input_text_job');

//img popup
const elementImgZoom = document.querySelector('.element__image');
const imgPopup = document.querySelector('.popup_form_img');
const closeButtonImg = document.querySelector('.popup__close_button_img');


const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(editPopup); // открываем попап редактирования
});

closeButtonEdit.addEventListener('click', function () {
    closePopup(editPopup);
});

addButton.addEventListener('click', function () {
    openPopup(addPopup);
});

closeButtonAdd.addEventListener('click', function () {
    closePopup(addPopup);
});

function formEditSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editPopup);
}

formElement.addEventListener('submit', formEditSubmitHandler);

function formAddSubmitHandler(evt) {
    evt.preventDefault();
    //тут будет много красивого кода
    closePopup(addPopup);
}

formElement.addEventListener('submit', formAddSubmitHandler);

//функция лайка
function likePicture(evt) {
    evt.preventDefault();
    const likePictureClass = 'element__like_active';
    evt.target.classList.toggle(likePictureClass);
}

//лайкаем
const elementsLike = document.querySelectorAll('.element__like');
elementsLike.forEach((item) => {
    item.addEventListener('click', likePicture);
});

//функция удаления картинки
function deletePicture(evt) {
    evt.preventDefault();
    evt.target.parentElement.remove();
};

//удаляем
const elementsRemove = document.querySelectorAll('.element__remove');
elementsRemove.forEach((item) => {
    item.addEventListener('click', deletePicture);
});



//функция попапа картинки - заготовка
function popupPicture(evt) {
    evt.preventDefault();
    openPopup(imgPopup);

    closeButtonImg.addEventListener('click', function () {
        closePopup(imgPopup);
    });
}

const elementsImgZoom = document.querySelectorAll('.element__image');
elementsImgZoom.forEach((item) => {
    item.addEventListener('click', popupPicture);
});

/*const elementImgZoom = document.querySelector('.element__image');
const imgPopup = document.querySelector('.popup_form_img');
const closeButtonImg = document.querySelector('.popup__close_button_img');
*/