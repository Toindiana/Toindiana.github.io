let slider = document.querySelector(".cases_slider"); 
let right = document.querySelector(".button_right");
let left = document.querySelector(".button_left");
let slid = 1;
let name_company = document.querySelector(".name_company");
let cite_company = document.querySelector(".cite_company");
let link_company = document.querySelector(".link_company");

let name_company_arr = ["_", "Yandex", "Rambler", "HtmlBook"];
let cite_company_arr = ["_", "https://yandex.ru", "https://www.rambler.ru", "http://htmlbook.ru"];
let link_company_arr = ["_", "https://yandex.ru", "https://www.rambler.ru", "http://htmlbook.ru"];


function goCite () {
    slider.style.background = "url(img/slider/fon_" + slid + ".png) center/ auto 100% no-repeat";
    name_company.textContent = name_company_arr[slid];
    cite_company.textContent = cite_company_arr[slid];
    link_company.setAttribute("href", link_company_arr[slid]);
}
function aniSlider () {
    slider.style.background = "url(img/slider/fon_" + slid + ".png) center/ auto 1% no-repeat";
}

function goSlidRigth() {
    if(slid <= 2){
        aniSlider();
        slid = slid + 1;
        setTimeout(goCite, 405);
    }else {
        aniSlider();
        slid = 1;
        setTimeout(goCite, 405);
    }
    
}
function goSlidLeft() {
    if (slid == 1) {
            aniSlider();
            slid = 1;
            setTimeout(goCite, 405);
    }else {
            aniSlider();
            slid = slid - 1;
            setTimeout(goCite, 405);
        }  
}

right.addEventListener("click", goSlidRigth);
left.addEventListener("click", goSlidLeft);











let skills_block = document.querySelector(".skills_block");
let skills_block_top = skills_block.offsetTop; 
let height_page = document.documentElement.clientHeight; 
let height_skills_block = skills_block.clientHeight;


function open_skills() {
    let scroll_page = window.pageYOffset;
    if((skills_block_top - height_page) < scroll_page - height_skills_block) {
        skills_block.style.opacity = "1";
        skills_block.style.transform = "scale(1) scaleY(1)";
    } 
}

window.addEventListener("scroll", open_skills);
console.log(height_skills_block);