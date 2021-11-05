
// появление элементов в разделе "что я умею"
let skills_block = document.querySelector(".skills_block"); 
let skills_block_top = skills_block.offsetTop; //расстояние от начала блока до верха страницы
let height_page = document.documentElement.clientHeight; // выстоа окна браузера 
let height_skills_block = skills_block.clientHeight; // выстота блока


function open_skills() {
    let scroll_page = window.pageYOffset; // на сколько пользователь прокрутил страницу
    if (document.documentElement.clientWidth < 426) {
        if((skills_block_top - height_page) < scroll_page) {
        skills_block.style.opacity = "1";
        skills_block.style.transform = "scale(1) scaleY(1) translate(0, 0)";
    } 
    } else {
        if((skills_block_top - height_page) < scroll_page - height_skills_block) {
        skills_block.style.opacity = "1";
        skills_block.style.transform = "scale(1) scaleY(1)";
    } 
    }
    
}

window.addEventListener("scroll", open_skills);
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


//калькулятор цены
let sel_type_cite = document.querySelector("#type_cite");
let sel_design_cite = document.querySelector("#design_cite");
let sel_adaptive_cite = document.querySelector("#adaptive_cite");
let price_type_cite = 0;
let price_design_cite = 0;
let price_adaptive_cite = 0;
let term_type_cite = 0;
let term_design_cite = 0;
let term_adaptive_cite = 0;
let price_text = document.querySelector(".price_text");
let term_text = document.querySelector(".term_text");


sel_type_cite.addEventListener("change", (event) => {
    let count_type_cite = +event.target.value; 
    let term_total;
    if (count_type_cite == 1) {
        price_type_cite = 400;
        term_type_cite = 1;
    } else if (count_type_cite == 2) {
        price_type_cite = 500;
        term_type_cite = 1;
    } else if (count_type_cite == 3) {
        price_type_cite = 550;
        term_type_cite = 2;
    }else if (count_type_cite == 4) {
        price_type_cite = 600;
        term_type_cite = 1;
    }else if (count_type_cite == 5) {
        price_type_cite = 700;
        term_type_cite = 2;
    }else if (count_type_cite == 6) {
        price_type_cite = 750;
        term_type_cite = 1;
    }else if (count_type_cite == 7) {
        price_type_cite = 800;
        term_type_cite = 5;
    }

    term_total = term_type_cite + term_design_cite + term_adaptive_cite;
    if(term_total == 1) {
        term_text.textContent = term_total + " день"
    } else if (term_total == 2 || term_total == 3 || term_total == 4) {
        term_text.textContent = term_total + " дня"
    } else  {
        term_text.textContent = term_total + " дней"
    }
    price_text.textContent = price_type_cite + price_adaptive_cite + price_design_cite + " рублей";
})

sel_design_cite.addEventListener("change", (event) => {
    let count_design_cite = +event.target.value;
    let term_total;
    if (count_design_cite == 1) {
        price_design_cite = 0;
    } else if (count_design_cite == 2) {
        price_design_cite = 800;
        term_design_cite = 2;
    } else if (count_design_cite == 3) {
        price_design_cite = 400;
        term_design_cite = 1;
    }

    term_total = term_type_cite + term_design_cite + term_adaptive_cite;
    if(term_total == 1) {
        term_text.textContent = term_total + " день"
    } else if (term_total == 2 || term_total == 3 || term_total == 4) {
        term_text.textContent = term_total + " дня"
    } else  {
        term_text.textContent = term_total + " дней"
    }

    price_text.textContent = price_type_cite + price_adaptive_cite + price_design_cite + " рублей";
})

sel_adaptive_cite.addEventListener("change", (event) => {
    let count_adaptive_cite = +event.target.value;
    let term_total;
    if (count_adaptive_cite == 1) {
        price_adaptive_cite = 1600;
        term_adaptive_cite = 1;
    } else {
        price_adaptive_cite = 0;
        term_adaptive_cite = 0;
    }

    term_total = term_type_cite + term_design_cite + term_adaptive_cite;

    if(term_total == 1) {
        term_text.textContent = term_total + " день"
    } else if (term_total == 2 || term_total == 3 || term_total == 4) {
        term_text.textContent = term_total + " дня"
    } else  {
        term_text.textContent = term_total + " дней"
    }

    price_text.textContent = price_type_cite + price_adaptive_cite + price_design_cite + " рублей";
})

let btn_reset = document.querySelector("#btn_reset");
btn_reset.addEventListener("click", () => {
    price_text.textContent = "0";
    term_text.textContent = "0";
})
//калькулятор цены


//появление статистики и набирающеся цифры
function statistics_number () {
    let option = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, option);
    let element = $(".statistics_container");
    element.each((i, el) => {
    observer.observe(el);
})

function onEntry (entry) {
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.remove("hide");
            go_statistics($('#happy_clients'), 0, 120, 5);
            go_statistics($('#hours_work'), 0, 4600, 200);
            go_statistics($('#project_end'), 0, 340, 20);
             go_statistics($('#awards'), 0, 23, 1);
        } else {
            change.target.classList.add("hide");
        }
    })
}

function go_statistics(item, start, end, step) {
    let sInt = setInterval(()=> {
        start = start + step;
        item.text(start);
            if(start === end) {
                clearInterval(sInt);
            }
    }, 70)
}
}
statistics_number();
//появление статистики и бегущие цифры


//плавный скролл до элемента на странице
$("a[href^='#']").click(function() {
    let valHref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valHref).offset().top - $(".header").outerHeight()});
})
//плавный скролл до элемента на странице


// подсвечивание пунктов меню
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".section").each((i, el) => {

        if($(el).offset().top - $(".header").outerHeight() - 100 <= scrollDistance ) {
            $(".menu li").each((i, el) => {
                if($(el).hasClass("menu_active")){
                    $(el).removeClass("menu_active");
                }
            });

            $(".menu li:eq("+ i +")").addClass("menu_active");
        } else {
            $(".menu li:eq("+ i +")").removeClass("menu_active");
        };

        if($(el).offset().top + $(el).outerHeight() + 400  <= scrollDistance) {
            $(".menu li:eq("+ i +")").removeClass("menu_active");
        }
    })
});
// подсвечивание пунктов меню

// дозагрузка фона для секции контакты
function change_bg_contacts () {
    let option = {threshold: [0.2]};
    let observer = new IntersectionObserver(onEntry, option);
    let element = $(".contacts_bg");
    element.each((i, el) => {
    observer.observe(el);
})

function onEntry (entry) {
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.src = change.target.dataset.goodbg;
        }
    })
}
}
change_bg_contacts(); 
// дозагрузка фона для секции контакты



// появление модального окна
setTimeout(() => {
    $("#sale_window").css("display", "flex");
}, 3000);

$("#sale_window").click(()=> {
    $("#sale_window").css("display", "none");
    setTimeout(() => {
    $("#open_slider").css("display", "flex");
}, 3000);
})
$("#open_slider").click(()=> {
    $("#open_slider").css("display", "none");
})
// появление модального окна

