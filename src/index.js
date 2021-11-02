import mainPage from './home';


const homePage = mainPage();

const content = document.querySelector('#content');

const show = (section) => {
  content.innerHTML = null;
  content.appendChild(section);
};

show(homePage);