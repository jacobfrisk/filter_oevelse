const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },

  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },

  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },

  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },

  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },

  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },

  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },

  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },

  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },

  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const header = "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  ulPointer.innerHTML = header;
  arr.forEach((each) => {
    // || " " denne gør at hvis et parameter er undefined eller der ikke står noget, er der tomt
    ulPointer.innerHTML += `<li>${each.type || " "}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel || " "}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers || " "}</li>`;
    ulPointer.innerHTML += `<li>${each.stops || " "}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy || " "}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric || " "}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem || " "}</li>`;
  });
}

const electricFilter = document.querySelector("#electric");
const seatFilter = document.querySelector("#seats");
const jonasFilter = document.querySelector("#jonas");
const ryebreadFilter = document.querySelector("#ryebread");
const allVehiclesFilter = document.querySelector("#all");

// Her er funktionalitet til at vise alle vehicles igen
allVehiclesFilter.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

// ----- Kun elektriske -----

function isElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

const onlyElectric = vehicles.filter(isElectric);

// Her er koden der kun får de elektriske frem
electricFilter.addEventListener("click", () => {
  ulPointer.innerHTML = header; // Fjerner alt der står i forvejen
  showTheseVehicles(onlyElectric);
});

// ----- Kun mere end 2 sæder -----

function moreThanTwoSeats(vehicle) {
  if (vehicle.passengers >= 3) {
    return true;
  } else {
    return false;
  }
}

const onlyMoreSeats = vehicles.filter(moreThanTwoSeats);

// Her er koden der kun får mere end 2 sæder frem
seatFilter.addEventListener("click", () => {
  ulPointer.innerHTML = header; // Fjerner alt der står i forvejen
  showTheseVehicles(onlyMoreSeats);
});

// ----- Kun elektriske ejet af Jonas -----

function jonasElectricVehicles(vehicle) {
  if (vehicle.ownedBy === "Jonas" && vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

const onlyJonasVehicles = vehicles.filter(jonasElectricVehicles);

// Her er koden der kun får elektriske ejet af Jonas frem
jonasFilter.addEventListener("click", () => {
  ulPointer.innerHTML = header; // Fjerner alt der står i forvejen
  showTheseVehicles(onlyJonasVehicles);
});

// ----- Alle rugbrød med plads til mere end en -----

function ryebreadWithSpace(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  } else {
    return false;
  }
}

const showRyebreadWithSpace = vehicles.filter(ryebreadWithSpace);

// Her er koden der kun får alle rugbrød med plads til mere end en frem
ryebreadFilter.addEventListener("click", () => {
  ulPointer.innerHTML = header; // Fjerner alt der står i forvejen
  showTheseVehicles(showRyebreadWithSpace);
});
