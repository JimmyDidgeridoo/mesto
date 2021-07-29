<<<<<<< Updated upstream
let editButton = document.querySelector('.profile__edit-button');
let editPopup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

function popupOpen() {
    editPopup.classList.add('popup__opened');
}

function popupClose() {
    editPopup.classList.remove('popup__opened');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-input-name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__form-input-job');// Воспользуйтесь инструментом .querySelector()


// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
    let profileName = document.querySelector('.profile__name'); // Получите значение полей jobInput и nameInput из свойства value
    let profileJob = document.querySelector('.profile__job');  // Выберите элементы, куда должны быть вставлены значения полей
    profileName.textContent = nameInput.value;                 // Вставьте новые значения с помощью textContent
    profileJob.textContent = jobInput.value;
    popupClose();                                              //Вызываем функцию закрытия поп-апа 
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
=======
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

//Первый поп-ап
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_button_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const closeButtonEdit = document.querySelector('.popup__close_button_edit');

//Второй поп-ап
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_button_add');
const closeButtonAdd = document.querySelector('.popup__close_button_add');

// Форма в DOM
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-input_text_name');
const jobInput = document.querySelector('.popup__form-input_text_job');
const cardNameInput = document.querySelector('.popup__form-input_text_card-name'); 
const urlInput = document.querySelector('.popup__form-input_text_img-url');


//Открытие формы
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

editButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(editPopup); // открываем попап редактирования
});

addButton.addEventListener('click', function () {
    openPopup(addPopup); // открываем попап добавления
});

//Закрытие формы
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

closeButtonEdit.addEventListener('click', function () {
    closePopup(editPopup);
});

closeButtonAdd.addEventListener('click', function () {
    closePopup(addPopup);
});

//функция лайка
function likePicture(evt) {
    evt.preventDefault();
    const likePictureClass = 'element__like_active';
    evt.target.classList.toggle(likePictureClass);
}

//функция

//функция добавления объекта в начало массива initialCard
function addObject(card, url) {
    let newObject = {
        name: card,
        link: url
    }
initialCards.unshift(newObject);

}

//функция удаления объекта из массива initialCards


// Обработчик «отправки» формы edit
function formEditSubmitHandler(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;                 
    profileJob.textContent = jobInput.value;
    closePopup(editPopup);
}

formElement.addEventListener('submit', formEditSubmitHandler);

// Обработчик «отправки» формы add
function formAddSubmitHandler(evt) {
    evt.preventDefault(); 
    //    код для считывания инфы из формы и записи в массив
    
    closePopup(addPopup);
    
}

formElement.addEventListener('submit', formAddSubmitHandler);

>>>>>>> Stashed changes
