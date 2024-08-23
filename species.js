// const urlSpecies = `https://api-colombia.com/api/v1/InvasiveSpecie`

const speciesCont = document.getElementById("main-species")

// function displaySpecies(){
//   fetch(urlSpecies)
//     .then(response => response.json())
//     .then(res => {
//       console.log(res);
//       res.forEach((e) => {
//         const specieCard = document.createElement("div")
//         specieCard.classList.add("card", "p-3")

//         const specieName = document.createElement("h5")
//         specieName.classList.add("card-title", "text-center")
//         specieName.textContent = e.name
//         specieCard.appendChild(specieName)

//         const specieImpact = document.createElement("p")
//         specieImpact.classList.add("card-text", "text-justify")
//         specieImpact.textContent = e.impact
//         specieCard.appendChild(specieImpact)

//         const specieRisk = document.createElement("p")
//         specieRisk.classList.add("card-text")
//         specieRisk.textContent = `Risk: ${e.riskLevel}`
//         specieCard.appendChild(specieRisk)

//         speciesCont.appendChild(specieCard)
//       });
//     })
// }

// displaySpecies()

// Función para crear la tabla
function createTable(data) {
  const table = document.createElement("table");
  const headers = [
    "Name",
    "Scientific Name",
    "Impact",
    "Manage",
    "Risk Level",
    "Image",
  ];

  // Crear encabezados
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Crear filas de datos
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.style.backgroundColor = item.riskLevel === 1 ? "#3498db" : "#58d68d";

    const columns = [
      item.name,
      item.scientificName,
      item.impact,
      item.manage,
      item.riskLevel,
      item.urlImage,
    ];

    columns.forEach((column) => {
      const td = document.createElement("td");
      if (column === item.urlImage) {
        const img = document.createElement("img");
        img.classList.add("table-img")
        img.src = column;
        img.alt = item.name;
        // img.style.width = "100px";
        td.appendChild(img);
      } else {
        td.textContent = column;
      }
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  // document.body.appendChild(table);
  speciesCont.appendChild(table);
}

// Función para obtener los datos de la API
function fetchData() {
  const url = "https://api-colombia.com/api/v1/InvasiveSpecie";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createTable(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Llamar a la función para obtener los datos
fetchData();
