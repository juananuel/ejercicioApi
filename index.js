const cards = document.getElementById("cards");
const leyend = document.getElementById("leyend");
const img = "./assets/ban-col.jpg";

const url = "https://api-colombia.com/";
const urlPpal = url + "api/v1/Country/Colombia";
const urlDep = url + "api/v1/Department";

function displayLeyend() {
  leyend.innerHTML = "";
  fetch(urlPpal)
    .then((response) => response.json())
    .then((res) => {
      const heroDiv = document.createElement("div");
      heroDiv.classList.add("hero-div");

      const heroTitle = document.createElement("h1");
      heroTitle.classList.add("hero-title", "text-center", "pb-4");
      heroTitle.textContent = res.name;
      heroDiv.appendChild(heroTitle);

      const heroDesc = document.createElement("p");
      heroDesc.classList.add("hero-p");
      heroDesc.textContent = res.description;
      heroDiv.appendChild(heroDesc);

      leyend.appendChild(heroDiv);
    });
}

function getDepartments() {
  cards.innerHTML = "";
  fetch(urlDep)
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
      res.forEach((e) => {
        const card = document.createElement("div");
        card.classList.add("card","p-3","d-flex","flex-column","justify-content-between");

        const image = document.createElement("img");
        image.classList.add("card-img-top", "card-img");
        image.src = img;
        image.alt = e.name;
        card.appendChild(image);

        const title = document.createElement("h5");
        title.classList.add("card-title", "text-center");
        title.textContent = e.name;
        card.appendChild(title);

        const cardBody = document.createElement("p");
        cardBody.classList.add("card-text", "text-justify");
        cardBody.textContent = e.description;
        card.appendChild(cardBody);

        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.textContent = "Details";
        button.addEventListener("click", () => {
          window.location.href = `./details.html?id=${e.id}`;
        });
        card.appendChild(button);

        cards.appendChild(card);
      });
    });
}

displayLeyend();
getDepartments();
