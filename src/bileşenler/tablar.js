import axios from "axios";
const Tablar = (konu) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  for (let i = 0; i < konu.length; i++) {
    const divItems = document.createElement("div");
    divItems.classList.add("tab");
    divItems.textContent = konu[i];
    topicsDiv.appendChild(divItems);
  }

  return topicsDiv;
};

const test = Tablar(["javascript", "bootstrap", "teknoloji"]);
console.log(test);


const tabEkleyici = (secici) => {
  const tabContainer = document.querySelector(secici);
  axios.get("http://localhost:5001/api/konular").then(function (response) {
    const tablar = Tablar(response.data.konular);
    tabContainer.appendChild(tablar);
  });
};


export { Tablar, tabEkleyici }
