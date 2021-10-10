const hallSvg = document.querySelector('.hall_svg');
const totalPriceTag = document.querySelector('.price_total');

let cost = 400;
let TotalPrice = 0;
let day_activity = 1;


hallSvg.addEventListener("click", (event) => {
    if( (!event.target.classList.contains('booked')) &&(!event.target.classList.contains('no_click')) )
    {
    event.target.classList.toggle("activity");
    let sum_class = document.querySelectorAll(".activity").length;
    day_activity = document.querySelectorAll(".day_activity").length;
    if(day_activity==0){day_activity=1};
    TotalPrice = cost * sum_class * day_activity;
    document.querySelector('.price_total').textContent = TotalPrice;
    }
});



function take(a) {
    let day = document.getElementById("day_" + a);
    day.classList.toggle("date-items-activity");
    day.classList.toggle("day_activity");
}