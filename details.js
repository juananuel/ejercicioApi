const img = "./assets/ban-col.jpg";
const imgNatural = "./assets/natural-col.jpg"

const urlParams = new URLSearchParams(window.location.search);
const depId = urlParams.get("id");

const departmentUrl = `https://api-colombia.com/api/v1/Department/${depId}`;
const departmentCities = `https://api-colombia.com/api/v1/Department/${depId}/cities`
const naturalAr = `https://api-colombia.com/api/v1/Department/${depId}/naturalareas`

const departments = document.getElementById("department");
const citiesCont = document.getElementById("cities");
const natural = document.getElementById("natural")

function displayDepartments() {
  fetch(departmentUrl)
    .then((response) => response.json())
    .then((department) => {
      const card = document.createElement("div");
      card.classList.add("card-detail","p-3","d-flex","flex-column","justify-content-between");

      const image = document.createElement("img");
      image.classList.add("card-img-top", "card-img", "card-img-detail");
      image.src = img;
      image.alt = department.name;
      card.appendChild(image);

      const title = document.createElement("h5");
      title.classList.add("card-title", "text-center");
      title.textContent = department.name;
      card.appendChild(title);

      const description = document.createElement("p");
      description.classList.add("card-text", "text-justify");
      description.textContent = department.description;
      card.appendChild(description);

      const population = document.createElement("p");
      population.classList.add("card-text", "text-justify");
      population.textContent = `Population: ${department.population}`;
      card.appendChild(population);

      departments.appendChild(card);
    });
}

function displayCities() {
  fetch(departmentCities)
    .then(response => response.json())
    .then((cities) => {
      console.log(cities)
      cities.forEach((city) => {
        const cityCard = document.createElement("div");
        cityCard.classList.add("card","p-3","d-flex","flex-column","justify-content-between");

        const image = document.createElement("img");
        image.classList.add("card-img-top", "card-img");
        image.src = img;
        image.alt = city.name;
        cityCard.appendChild(image);
    
        const cityTitle = document.createElement("h5");
        cityTitle.classList.add("card-title", "text-center");
        cityTitle.textContent = city.name;
        cityCard.appendChild(cityTitle);
    
        const cityDescription = document.createElement("p");
        cityDescription.classList.add("card-text", "text-justify");
        cityDescription.textContent = city.description;
        cityCard.appendChild(cityDescription);
    
        citiesCont.appendChild(cityCard);
      });
    })
}

function displayNaturalAreas() {
  fetch(naturalAr)
    .then(response => response.json())
    .then((areas) => {
      const areasCard = areas[0].naturalAreas
      console.log(areasCard)
      areasCard.forEach((area) => {
        const areasCard = document.createElement("div");
        areasCard.classList.add("card","p-3","d-flex","flex-column","justify-content-between");

        const image = document.createElement("img");
        image.classList.add("card-img-top", "card-img");
        image.src = imgNatural;
        image.alt = area.name;
        areasCard.appendChild(image);
    
        const cityTitle = document.createElement("h5");
        cityTitle.classList.add("card-title", "text-center");
        cityTitle.textContent = area.name;
        areasCard.appendChild(cityTitle);
    
        const cityDescription = document.createElement("p");
        cityDescription.classList.add("card-text", "text-justify");
        cityDescription.textContent = area.description;
        areasCard.appendChild(cityDescription);
    
        citiesCont.appendChild(areasCard);
      });
    })
}

displayDepartments();
displayCities();
displayNaturalAreas();
