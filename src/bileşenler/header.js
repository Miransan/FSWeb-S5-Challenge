const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;
  headerDiv.appendChild(span1);

  const h1 = document.createElement("h1");
  h1.textContent = baslik;
  headerDiv.appendChild(h1);

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;
  headerDiv.appendChild(span2);

  return headerDiv;
};





const headerEkleyici = (secici) => {
  let baslik = Header(
    "Teknoloji Zamanı",
    "11 Kasım 2022",
    "Teknoloji Dünyasında Küçük Bir Tur"
  );

  const headerContainer = document.querySelector(secici);
  headerContainer.appendChild(baslik);

};



export { Header, headerEkleyici }
