// управление слайдером
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
// управление слайдером


// появление элементов в разделе "что я умею"
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
// появление элементов в разделе "что я умею"

// перелистывание комментанриев
let count_comment = 1;
let button_1 = document.getElementById("comment_1");
let button_2 = document.getElementById("comment_2");
let button_3 = document.getElementById("comment_3");
let comment_img = document.querySelector(".comment_img");
let who_comments= ["Александр, ", "Дмитрий, ", "Юрий, "];
let who_comments_post = ["Директор ПАО 'ТГК-1'", "Старший менеджер Яндекс", "Системный аналитик"];

function range_comment() {
    if (count_comment == 1){
        button_1.classList.add("comment_button_active");
        button_2.classList.remove("comment_button_active");
        button_3.classList.remove("comment_button_active");
        document.querySelector(".who_comments_name").textContent = who_comments[0];
        document.querySelector(".who_comments_post").textContent = who_comments_post[0];
        comment_img.setAttribute("src", "img/comment_photo/1.jpeg");
    } else if(count_comment == 2) {
        button_2.classList.add("comment_button_active");
        button_1.classList.remove("comment_button_active");
        button_3.classList.remove("comment_button_active");
        document.querySelector(".who_comments_name").textContent = who_comments[1];
        document.querySelector(".who_comments_post").textContent = who_comments_post[1];
        comment_img.setAttribute("src", "img/comment_photo/2.jpeg");
    }else if (count_comment == 3) {
        button_3.classList.add("comment_button_active");
        button_1.classList.remove("comment_button_active");
        button_2.classList.remove("comment_button_active");
        document.querySelector(".who_comments_name").textContent = who_comments[2];
        document.querySelector(".who_comments_post").textContent = who_comments_post[2];
        comment_img.setAttribute("src", "img/comment_photo/3.jpeg");
    }   
}

function comment_1() {
    count_comment = 1;
    range_comment()
}
function comment_2() {
    count_comment = 2;
    range_comment()
}
function comment_3() {
    count_comment = 3;
    range_comment()
}

button_1.addEventListener("click", comment_1);
button_2.addEventListener("click", comment_2);
button_3.addEventListener("click", comment_3);
// перелистывание комментанриев