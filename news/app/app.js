const cont = document.querySelector(".main");
const country = document.querySelector(".country");
const btnSearch = document.querySelector(".btn__search");
const search = document.getElementById("search");
const kub = document.querySelector(".kub");
const category = document.querySelector(".category");
const categoryItem = document.querySelectorAll(".category__item");
const logo = document.querySelector(".logo");
const progressBar = document.querySelector(".progress_bar");
let countryTake = "ru";

function fetchService(country = "ru", searchWords = 0, category = 0) {
  let urlSrting;
  if (searchWords) {
    urlSrting = `https://newsapi.org/v2/everything?q=${searchWords}&apiKey=74ee151a7353452abbd3a7cd5a31a1ff`;
  } else if (category) {
    urlSrting = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=74ee151a7353452abbd3a7cd5a31a1ff`;
  } else {
    urlSrting = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=74ee151a7353452abbd3a7cd5a31a1ff`;
  }

  kub.style.opacity = "0.6";
  let count = kub.clientWidth;
  var setInt = setInterval(() => {
    count = count + 2;
    kub.style.width = `${count}px`;
    if (count >= progressBar.clientWidth) {
      clearInterval(setInt);
    }
  }, 5);

  fetch(urlSrting)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      clearInterval(setInt);
      kub.style.opacity = "0";
      kub.style.width = `5px`;
      render(data.articles);
    })
    .catch((er) => {
      console.error(er);
      kub.style.opacity = "0";
      kub.style.width = `5px`;
      render();
    });
}
fetchService();

country.addEventListener("click", (e) => {
  if (e.target.closest(".countery_img")) {
    fetchService(e.target.getAttribute("alt"));
  }
  countryTake = e.target.getAttribute("alt");
  removeClassActive();
});
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  fetchService(null, search.value);
  search.value = "";
  removeClassActive();
});
category.addEventListener("click", (e) => {
  if (e.target.closest(".category__item")) {
    removeClassActive();
    e.target.classList.add("category_active");
    fetchService(countryTake, 0, e.target.dataset.category);
  }
});
logo.addEventListener("click", () => {
  fetchService();
});

function removeClassActive() {
  categoryItem.forEach((item) => {
    item.classList.remove("category_active");
  });
}
function render(data) {
  cont.innerHTML = " ";
  if (data === undefined) {
    cont.innerHTML = `
      <span>oops...</span>
    `;
  } else {
    data.forEach((el) => {
      // let des = el.description;
      // des = des.replace(/<ol>/g, "");
      // des = des.replace(/<li>/g, "");
      let div = document.createElement("div");
      div.classList.add("news_item");
      div.innerHTML = `
      <h3 class="news_title">${el.title}</h3>
      <span class="news_desc">${el.description}</span>
      <a href="${el.url}" target="_blank" class="new_link">открыть источник...</a>
      <img src="${el.urlToImage}" alt="news_img" class="news_img">
    `;

      cont.append(div);
    });
  }
}
