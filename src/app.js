import { logout } from "./api/data.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

const root = document.querySelector('main');
document.querySelector('nav > ul li:nth-child(6)').addEventListener('click', onLogout)
page(decorateContext);
page('/edit/:id', editPage)
page('/create', createPage)
page('/catalog', catalogPage)
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/details/:id', detailsPage)
page('/search', searchPage)

updateUserNav();
page.start()

function decorateContext(ctx, next){
    ctx.render = (content) =>render(content, root);
    ctx.updateUserNav = updateUserNav
    next();
}
function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/')
}

function updateUserNav(){
    const userData = getUserData();

    if(userData){
        
        document.querySelector('nav > ul li:nth-child(3)').style.display = 'none';
        document.querySelector('nav > ul li:nth-child(4)').style.display = 'none';
        document.querySelector('nav > ul li:nth-child(5)').style.display = '';
        document.querySelector('nav > ul li:nth-child(6)').style.display = '';

    } else{
        document.querySelector('nav > ul li:nth-child(3)').style.display = '';
        document.querySelector('nav > ul li:nth-child(4)').style.display = '';
        document.querySelector('nav > ul li:nth-child(5)').style.display = 'none';
        document.querySelector('nav > ul li:nth-child(6)').style.display = 'none';
    }
}