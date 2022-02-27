const bgSmall_1 = document.querySelector(".bg__small-one ");
const bgSmall_2 = document.querySelector(".bg__small-two ");
const bgBig_1 = document.querySelector(".bg__big-one ");
const bgBig_2 = document.querySelector(".bg__big-two ");
const bgMiddle_1 = document.querySelector(".bg__middle-one ");
const bgMiddle_2 = document.querySelector(".bg__middle-two ");
const widthWindow = document.documentElement.clientWidth;
const heightWindow = document.documentElement.clientHeight;

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const renderBg = (el) => {
  let width = randomInteger(1, widthWindow - el.clientWidth);
  let height = randomInteger(1, heightWindow - el.clientHeight);
  el.style.left = `${width}px`;
  el.style.top = `${height}px`;
};

setInterval(() => {
  renderBg(bgSmall_1);
  renderBg(bgBig_1);
  renderBg(bgMiddle_1);
  renderBg(bgSmall_2);
  renderBg(bgBig_2);
  renderBg(bgMiddle_2);
}, 2000);

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 400,
  slideToClickedSlide: true,
  toggle: true,
  slidesPerView: 3,
  spaceBetween: 70,
  centeredSlides: true,
  slidesPerView: "auto",
});

const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const order_btn = document.getElementById("order_btn");

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modalWindow.style.display = "none";
      modal.style.display = "none";
    }, 501);
  }
});

order_btn.addEventListener("click", () => {
  modalWindow.style.display = "block";
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 0);
});
