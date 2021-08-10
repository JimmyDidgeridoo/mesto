const initialCards = [
    {
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
const elementTemplate = document.getElementById('element-template').content;

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
const imgArray = document.querySelector('.elements');
const imgZoom = document.querySelector('.popup__img');
const imgZoomCaption = document.querySelector('.popup__figcaption');

const gallery = document.querySelector('.elements');

const inputImgName = document.querySelector('.popup__form-input_text_img-name');
const inputLink = document.querySelector('.popup__form-input_text_url');

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

function handleProfileFormEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editPopup);
}

editPopup.addEventListener('submit', handleProfileFormEdit);

//функция попапа картинки 
function showPopupPicture(evt) {

    if (!evt.target.matches('.element__image')) {
        return;
    }
    else {
        const imgLink = evt.target.getAttribute('src');
        const imgAlt = evt.target.getAttribute('alt');
        imgZoom.setAttribute('src', imgLink);
        imgZoom.setAttribute('alt', imgAlt);
        imgZoomCaption.textContent = evt.target.closest('.element').textContent;
        openPopup(imgPopup);
    }
}

closeButtonImg.addEventListener('click', function () {
    closePopup(imgPopup);
});

//лайкаем
function likeImg(evt) {
    if (!evt.target.matches('.element__like')) {
        return;
    }
    else {
        evt.target.classList.toggle('element__like_active');
    }
}

//удаляем
function deleteImg(evt) {
    if (!evt.target.matches('.element__remove')) {
        return;
    }
    else {
        evt.target.closest('.element').remove();
    }
}

//создаем
function createImg(src, name) {
    const newImg = elementTemplate.firstElementChild.cloneNode(true);

    newImg.querySelector('.element__image').src = src;
    newImg.querySelector('.element__image').alt = name;
    newImg.querySelector('.element__name').textContent = name;

    //вешаем обработчики
    newImg.querySelector('.element__like').addEventListener('click', likeImg);
    newImg.querySelector('.element__remove').addEventListener('click', deleteImg);
    newImg.querySelector('.element__image').addEventListener('click', showPopupPicture);

    return newImg;
}

//добавляем
function addImg(card) {
    const cardImg = createImg(card.link, card.name);
    gallery.prepend(cardImg);
}

//выводим
initialCards.forEach(function (item) {
    addImg(item);
});

function handleProfileFormAdd(evt) {
    evt.preventDefault();
    const imgAdded = {
        name: inputImgName.value,
        link: inputLink.value
    };
    addImg(imgAdded);
    inputImgName.value = '';
    inputLink.value = '';
    closePopup(addPopup);
}

addPopup.addEventListener('submit', handleProfileFormAdd);