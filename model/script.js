const data = [
  {
    id: 1,
    nama: "Aditya S. Ase",
    nim: "C01424012",
  },
  {
    id: 2,
    nama: "Alifanur'aini",
    nim: "C01424015",
  },
  {
    id: 3,
    nama: "Depila Abas",
    nim: "C01424039",
  },
  {
    id: 4,
    nama: "MOH JUMRA A DARUN",
    nim: "C01424086",
  },
  {
    id: 5,
    nama: "Sri Adelia Latif",
    nim: "C01424159",
  },
  {
    id: 6,
    nama: "Nabila Ramadhani Yahya",
    nim: "C01424099",
  },
  {
    id: 7,
    nama: "Larasati Tangahu",
    nim: "C01424070",
  },
  {
    id: 8,
    nama: "Revalina Mohammad",
    nim: "C01424139",
  },
  {
    id: 9,
    nama: "Adinda Putri Anwar",
    nim: "C01424010",
  },
  {
    id: 10,
    nama: "Jhon Meri Tatogo",
    nim: "C01424064",
  },
  {
    id: 11,
    nama: "Nur Fazria",
    nim: "C01424112",
  },
];

function cards(data) {
  const container = document.getElementById("card-container");
  data.forEach(item => {
    const card = document.createElement("cards");
    card.className = "card mx-auto mt-5 shadow";
    card.style.width = "18rem";
    card.innerHTML = `
    <div class="card-body text-center">
                        <div class="p-3">
                            <img src="https://via.placeholder.com/100" alt="Profile Image" class="rounded-circle mb-3" />
                            <h5 class="card-title fw-bold">${item.nama}</h5>
                            <p class="card-text text-muted">NIM: ${item.nim}</p>
                            <div class="d-flex justify-content-center gap-3">
                              
                            </div>
                        </div>
                    </div>
                      `;
    container.appendChild(card);
  });
}
cards(data);
