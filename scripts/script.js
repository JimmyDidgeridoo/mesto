<<<<<<< Updated upstream
const formElement = document.querySelector('.popup__form');
=======
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
function formSubmitHandler(evt) {
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
const cardNameInput = document.querySelector('.popup__form-input_text_card-name');
const urlInput = document.querySelector('.popup__form-input_text_img-url');

//Открытие формы
>>>>>>> Stashed changes

//img popup
const elementImgZoom = document.querySelector('.element__image');
const imgPopup = document.querySelector('.popup_form_img');
const closeButtonImg = document.querySelector('.popup__close_button_img');

<<<<<<< Updated upstream

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

=======
>>>>>>> Stashed changes
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

<<<<<<< Updated upstream
=======
//редактирование профиля
>>>>>>> Stashed changes
editButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(editPopup); // открываем попап редактирования
});

<<<<<<< Updated upstream
=======
addButton.addEventListener('click', function () {
    openPopup(addPopup); // открываем попап добавления
});

//Закрытие формы
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

>>>>>>> Stashed changes
closeButtonEdit.addEventListener('click', function () {
    closePopup(editPopup);
});

addButton.addEventListener('click', function () {
    openPopup(addPopup);
});

closeButtonAdd.addEventListener('click', function () {
<<<<<<< Updated upstream
    closePopup(addPopup);
=======
    closePopup(addPopup)
});

closeButtonEdit.addEventListener('click', function () {
    closePopup(editPopup);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
formElement.addEventListener('submit', formAddSubmitHandler);
=======
addPopup.addEventListener('submit', formAddSubmitHandler);

//редактирование фото
addButton.addEventListener('click', function () {
    openPopup(addPopup);
});

closeButtonAdd.addEventListener('click', function () {
    closePopup(addPopup);
});
>>>>>>> Stashed changes

//функция лайка
function likePicture(evt) {
    evt.preventDefault();
    const likePictureClass = 'element__like_active';
    evt.target.classList.toggle(likePictureClass);
}

<<<<<<< Updated upstream
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

//функция попапа картинки 
function popupPicture(evt) {
    evt.preventDefault();
    let imgLink = evt.target.getAttribute('src');
    let imgCaption = evt.target.getAttribute('alt');
    let imgZoom = document.querySelector('.popup__img');
    //const imgZoomCaption = document.querySelector('.popup__figcaption');
    imgZoom.setAttribute('src', imgLink);
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
=======
//функция добавления объекта в начало массива initialCard
function addObject(card, url) {
    let newObject = {
        name: card,
        link: url
    }
    initialCards.unshift(newObject);
};

    //функция удаления картинки
    function deletePicture(evt) {
        evt.preventDefault();
        evt.target.parentElement.remove();
    };



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

    /*
    function deleteImg() {
        const deleteButton = document.querySelector('.element__remove');
        deleteButton.addEventListener('click', function() {
            deleteButton.parentElement.remove();
            
        });
      }
      */

    //функция попапа картинки 
    function popupPicture(evt) {
        evt.preventDefault();
        let imgLink = evt.target.getAttribute('src');
        //let imgCaption = evt.target.getAttribute('alt');
        let imgZoom = document.querySelector('.popup__img');
        //const imgZoomCaption = document.querySelector('.popup__figcaption');
        imgZoom.setAttribute('src', imgLink);
        openPopup(imgPopup);
        closeButtonImg.addEventListener('click', function () {
            closePopup(imgPopup);
        });
    }

    //попапим
    const elementsImgZoom = document.querySelectorAll('.element__image');
    elementsImgZoom.forEach((item) => {
        item.addEventListener('click', popupPicture);
    });

    //фоточки
    const gallery = document.querySelector('.elements');

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

    //добавляем
    function addImg(src, name) {

        const elementTemplate = document.getElementById('element-template').content;
        const newImg = elementTemplate.firstElementChild.cloneNode(true);

        newImg.querySelector('.element__image').src = src;
        //newImg.querySelector('.element__image').alt = name;
        newImg.querySelector('.element__name').textContent = name;
        gallery.prepend(newImg);



        /*likePicture();
        deletePicture;
        popupPicture;*/
    }

    //изображаем
    initialCards.forEach(function (item) {
        addImg(item.link, item.name);
    });




>>>>>>> Stashed changes
