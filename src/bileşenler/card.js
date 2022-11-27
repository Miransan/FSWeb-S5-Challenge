import axios from "axios";
const Card = (makale) => {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  
  divCard.innerHTML = `
     <div class="headline">${makale.anabaslik}</div>
      <div class="author">
        <div class="img-container">
          <img src= ${makale.yazarFoto}>
        </div>
        <span>${makale.yazarAdi} tarafından</span>
      </div>
    </div>`;
  
  divCard.addEventListener("click", function () {
    console.log(makale.anabaslik);
  });
  
  return divCard;
};



const cardEkleyici = (secici) => {
  xios.get("http://localhost:5001/api/makaleler").then(function (response) {

    for (let i in response.data.makaleler) {
      response.data.makaleler[i].forEach(function (makale) {
        document.querySelector(secici).appendChild(Card(makale));
      });
    }
  });
};

export { Card, cardEkleyici }
