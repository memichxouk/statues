// Функция для отображения подробностей о памятниках
function showDetails(animal) {
    const details = {
        lion: {
            title: 'Памятник льву',
            description: 'Этот памятник был установлен в честь львов, которые являются символами силы и мужества. Он расположен в одном из крупнейших зоопарков мира.',
            image: 'images/lion.jpg'
        },
        dog: {
            title: 'Памятник собаке',
            description: 'Монумент в память о верных собаках, которые служат человеку на протяжении веков. Памятник стал символом верности и преданности.',
            image: 'images/dog.jpg'
        },
        elephant: {
            title: 'Памятник слону',
            description: 'Памятник, посвященный величественным слонам, символизирующим мудрость и долгую жизнь. Его установили в Африке, на родине слонов.',
            image: 'images/elephant.jpg'
        },
        horse: {
            title: 'Памятник лошади',
            description: 'Монумент, посвященный лошадям, которые играют важную роль в культуре и истории человечества. Он был установлен в Европейском музее истории.',
            image: 'images/horse.jpg'
        }
    };

    const monument = details[animal];
    if (monument) {
        alert(`${monument.title}\n\n${monument.description}`);
    } else {
        alert('Информация не найдена.');
    }
}

// Функция для открытия изображения в модальном окне
function openImage(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Функция для закрытия модального окна
function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Анимация появления элементов при прокрутке
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.monuments, .gallery, .card-container');
    elements.forEach(function (element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
});

// Для элементов, которые будут анимированы при прокрутке
window.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.monuments, .gallery, .card-container');
    elements.forEach(function (element) {
        element.classList.remove('fade-in');
    });
});
