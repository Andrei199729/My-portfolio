const headerLinks = document.querySelectorAll('.header__link');
const headerLinkAbout = document.querySelector('.header__link-about');
const headerLinkPassions = document.querySelector('.header__link-passions');
const headerLinkPortfolio = document.querySelector('.header__link-portfolio');
const headerLinkContact = document.querySelector('.header__link-contact');
const headerLogo = document.querySelector('.header__logo');

const passionsArticle = document.querySelector('.passions');
const portfolioArticle = document.querySelector('.portfolio');
const contactsArticle = document.querySelector('.contacts');

const projectTemplate = document.querySelector('.project-template').content;
const projectportfolio = document.querySelector('.portfolio__projects');

// Массив проектов
const initialProjects = [{
    name: 'Mesto',
    link: './images/projectsimages/mesto.png',
    href: 'https://andrei199729.github.io/mesto/index.html'
},
{
    name: 'Prechu',
    link: './images/projectsimages/prechu.png',
    href: 'https://andrei199729.github.io/Prechu/index.html'
}, {
    name: 'Путешествия по России',
    link: './images/projectsimages/russia.png',
    href: 'https://andrei199729.github.io/russian-travel/index.html'
}, {
    name: 'Научиться учиться',
    link: './images/projectsimages/styde.gif',
    href: 'https://andrei199729.github.io/how-to-learn/index.html'
}
];

// Создание карточки проекта
function createCardProject(item) {
    const element = projectTemplate.querySelector('.portfolio__project').cloneNode(true);
    const portfolioImage = element.querySelector('.portfolio__image');
    portfolioImage.src = item.link;
    portfolioImage.alt = item.name;
    element.querySelector('.portfolio__project-title').textContent = item.name;
    element.href = item.href;
    return element;
}

// Добавление на страницу
function prependCard(item) {
    const element = createCardProject(item);
    projectportfolio.prepend(element);
}

initialProjects.forEach(prependCard);

// Плавный скролл
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();
        const href = link.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header__nav').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        // Метод Window.scrollBy() имеет параметр top в котором мы укажем количество пикселей, на сколько нам необходимо прокрутить страницу.
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});        

// При клике на одну ссылку, со второй ссылку снимается активный класс
function removeHeaderLinks() {
    headerLinks.forEach(headerLink => headerLink.classList.remove('header__link-active'));
};

// При клике на ссылку, добавляется активный класс
function addHeaderLinks(evt) {
    evt.preventDefault();
    removeHeaderLinks();
    evt.currentTarget.classList.add('header__link-active');
};
headerLinks.forEach(headerLink => headerLink.addEventListener('click', addHeaderLinks));

// При клике на логотим, страницу возвращается в начало (подымается вверх)
function headerLogoClick(evt) {
    if (evt.target === document.querySelector('.header__logo')) {
        removeHeaderLinks();
    }
}

headerLogo.addEventListener('click', headerLogoClick)