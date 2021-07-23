let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let editPopup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-input-text_name');
// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__form-input-text_job'); // Воспользуйтесь инструментом .querySelector()

function popupOpen() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    editPopup.classList.add('popup__opened');
}

function popupClose() {
    editPopup.classList.remove('popup__opened');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
    profileName.textContent = nameInput.value;                 // Вставьте новые значения с помощью textContent
    profileJob.textContent = jobInput.value;
    popupClose();                                              //Вызываем функцию закрытия поп-апа 
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);