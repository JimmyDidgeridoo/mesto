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

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
        // Вставьте новые значения с помощью textContent
    
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 