let btn_r = document.querySelector(".ya_btn_right");
let btn_l = document.querySelector(".ya_btn_light");
let count_slide = document.querySelectorAll(".ya_slide").length;
let count = 0;
let ya_slide = document.querySelectorAll(".ya_slide");
ya_slide[0].style.transform = "translateX(0)";

let name_company_arr = ["Yandex", "Rambler", "HtmlBook"];
let cite_company_arr = ["https://yandex.ru", "https://www.rambler.ru", "http://htmlbook.ru"];
let link_company_arr = ["https://yandex.ru", "https://www.rambler.ru", "http://htmlbook.ru"];
let name_company = document.querySelector(".name_company");
let cite_company = document.querySelector(".cite_company");
let link_company = document.querySelector(".link_button");

function normalize_slider() {
    for (i = 1; i < ya_slide.length; i++) {
        ya_slide[i].style.transform = "translateX(100%)";
    }
}
normalize_slider();

function ya_slider_go() {
    if (count == (count_slide - 1)) {
        count = (count_slide - 1) - 1;
    }
    document.querySelectorAll(".ya_slide")[count].style.transform = "translateX(-100%)";
    document.querySelectorAll(".ya_slide")[count + 1].style.transform = "translateX(0)";
    name_company.textContent = name_company_arr[count + 1];
    cite_company.textContent = cite_company_arr[count + 1];
    link_company.setAttribute("href", link_company_arr[count + 1]);
    count = count + 1;
}
function ya_slider_back() {
    if(count == 0) {
        count = 1;
    }
    document.querySelectorAll(".ya_slide")[count].style.transform = "translateX(100%)";
    document.querySelectorAll(".ya_slide")[count - 1].style.transform = "translateX(0)";
    name_company.textContent = name_company_arr[count - 1];
    cite_company.textContent = cite_company_arr[count - 1];
    link_company.setAttribute("href", link_company_arr[count - 1]);
    count = count - 1;
}
btn_r.addEventListener("click", ya_slider_go);
btn_l.addEventListener("click", ya_slider_back);