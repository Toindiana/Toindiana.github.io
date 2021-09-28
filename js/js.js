// let say = "Я JavaScript!";

// alert(say);

// let name = "Джон";
// let admin;
// admin = name;
// alert(admin);


// let text = prompt("Ваше имя", "Андрей");
// alert(`Привет ${text}`); 

// let age = prompt("Ваш возраст?");

// let massage = (age <= 3) ? "Такой маленький!": (age <= 18) ? "Привет!" : (age < 100) ? "Добро пожаловать!" : "Сколько, сколько???";

// alert(massage);

// let login = prompt("введите ваш логин");
// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : 'упс';   

// alert(message);




// let login = prompt('введите логин');

// if (login == 'Админ') {

//     let password = prompt('введите пароль');
//     if (password == "Я главный") {
//         alert('Здраствуйте!');
//     }else if (password == '' || password == null) {
//         alert('отменено');
//     }else {
//         alert('неверный пароль')
//     }

// } else if (login == '' || login == null) {
//     alert('отменено');
// } else if (login != 'Админ') {
//     alert('я вас не знаю');
// }




// let firstname = prompt('имя');
// let lastname = prompt('фамилия');
// let nickname = prompt('ник');

// if (firstname == "" && lastname == "" && nickname == "") {
//     firstname = lastname = nickname = null;
// }


// alert(firstname ?? lastname ?? nickname ?? 'аноним');




// let i = 0;
// while (i <= 55) {
//     document.write(i + "<br>");
//     i++;
// }



// let a;
// for(i = 0; i <= 9; i++) {
//     a = i + 10;
//     document.write(i + "<br>");
//     document.write(a + "<br>" + "<br>");
// }

function resault() {
    let number_start = document.getElementById("n_start").value;
    number_start = parseInt(number_start);
    let number_finish = document.getElementById("n_finish").value;
    number_finish = parseInt(number_finish);
    let uneven_number = [];
    let even_number = [];

    for (i = number_start; i <= number_finish; i++) {
        if (i % 2 == 0) continue;
        uneven_number.push(i);
        document.getElementById("out_1").innerHTML = (uneven_number);
}

    for (i = number_start; i <= number_finish; i++) {
        if (i % 2 != 0) continue;
        even_number.push(i);
        document.getElementById("out_2").innerHTML = (even_number);
}
}





function randon_number() {
    let mass_random = ["привет", "как дела", "или", "при", "привет", "как дела", "или", "при", "привет", "как дела", "или", "при"];
    let dlina = mass_random.length;
    let random = parseInt(Math.random() * dlina);
    document.getElementById("out_random").innerHTML = mass_random[random];
}





