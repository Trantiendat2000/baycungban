const DUMMY_DATA = [
  {
    flightId: 00,
    airline: "BAMBOO AIRWAYS",
    code: "QH-183",
    src: "images/logo-bamboo.jpg",
    class: "Economy",
    from: "Da nang",
    departure: "Da Nang Airport",
    timeFlight: "21:40",
    to: "Ho Chi Minh",
    destination: "Tansonnhat Intl",
    timeTo: "23:10",
    timeEstimate: "1h 30m",
    detail: {
      baggage: 20,
      inFlight: ["Meal", "Entertainment"],
      aircraft: "Airbus A321",
      seatLayout: "3-3",
      seatPitch: "29 inches (standard)",
    },
    prePrice: 1326000,
    price: 1322000,
    tax: true,
  },
  {
    flightId: 01,
    airline: "VIETNAM AIRLINES",
    code: "VA-258",
    src: "images/logo-vietnamairline.jpg",
    class: "Special Economy",
    from: "Da nang",
    departure: "Da Nang Airport",
    timeFlight: "09:00",
    to: "Ho Chi Minh",
    destination: "Tansonnhat Intl",
    timeTo: "10:30",
    timeEstimate: "1h 30m",
    detail: {
      baggage: 20,
      inFlight: ["Meal", "Entertainment"],
      aircraft: "Airbus A321",
      seatLayout: "5-2",
      seatPitch: "29 inches (standard)",
    },
    prePrice: 2000000,
    price: 1500000,
    tax: true,
  },
  {
    flightId: 02,
    airline: "BAMBOO AIRWAYS",
    code: "QH-183",
    src: "images/logo-bamboo.jpg",
    class: "First Class",
    from: "Da nang",
    departure: "Da Nang Airport",
    timeFlight: "01:00",
    to: "Ho Chi Minh",
    destination: "Tansonnhat Intl",
    timeTo: "02:30",
    timeEstimate: "1h 30m",
    detail: {
      baggage: 20,
      inFlight: ["Meal", "Entertainment"],
      aircraft: "Airbus A321",
      seatLayout: "2-1",
      seatPitch: "29 inches (standard)",
    },
    prePrice: 2326000,
    price: 2322000,
    tax: true,
  },
  {
    flightId: 03,
    airline: "VIETNAM AIRLINES",
    code: "VA-258",
    src: "images/logo-vietnamairline.jpg",
    class: "Business Class",
    from: "Da nang",
    departure: "Da Nang Airport",
    timeFlight: "05:30",
    to: "Ho Chi Minh",
    destination: "Tansonnhat Intl",
    timeTo: "07:00",
    timeEstimate: "1h 30m",
    detail: {
      baggage: 20,
      inFlight: ["Meal", "Entertainment"],
      aircraft: "Airbus A321",
      seatLayout: "1-2",
      seatPitch: "29 inches (standard)",
    },
    prePrice: 2300000,
    price: 2100000,
    tax: true,
  },
];

//----------- filter airline--------------
const flight = document.querySelector(".flight-data");
const filterPrice = document.querySelector("#filter-price");
const airlineFilter = document.querySelector("#filter-airline");

let listFlights = [...DUMMY_DATA];

let airlist;

// ---filter airline
airlineFilter.addEventListener("click", () => {
  if (airlineFilter.value === "bamboo-airway") {
    airlist = listFlights.filter(
      (flight) => flight.airline === "BAMBOO AIRWAYS"
    );
  } else if (airlineFilter.value === "vietnam-airlines") {
    airlist = listFlights.filter(
      (flight) => flight.airline === "VIETNAM AIRLINES"
    );
  }
  renderListFlight(airlist);
});

//---------- filter price
filterPrice.addEventListener("click", () => {
  if (airlist) {
    if (filterPrice.value === "low") {
      airlist.sort((a, b) => a.price - b.price);
    } else if (filterPrice.value === "high") {
      airlist.sort((a, b) => b.price - a.price);
    }
    renderListFlight(airlist);
  } else {
    if (filterPrice.value === "low") {
      listFlights.sort((a, b) => a.price - b.price);
    } else if (filterPrice.value === "high") {
      listFlights.sort((a, b) => b.price - a.price);
    }
    renderListFlight(listFlights);
  }
});

// -----function render list flight
const renderListFlight = async (data) => {
  let html = "";
  data.forEach((flight) => {
    html += `
    <div class="box">
    <div class="flight">
      <div class="flight-logo">
        <img
          src="${flight.src}"
          alt="${flight.airline}"
          width="30px"
          height="30px"
        />
        <h3>${flight.airline}</h3>
      </div>
      <div class="flight-time">
        <p>
          ${flight.timeFlight}<br />
          DAD
        </p>
        <div>
          <p>1h30</p>
          <svg width="60" height="15">
            <circle
              cx="3"
              cy="10"
              r="2"
              stroke="black"
              stroke-width="1"
              fill="white"
            />
            <circle
              cx="50"
              cy="10"
              r="2"
              stroke="black"
              stroke-width="1"
              fill=""
            />
            <line
              x1="4"
              y1="10"
              x2="48"
              y2="10"
              style="stroke: rgb(70, 76, 250); stroke-width: 1"
            />
          </svg>
          <p>Direct</p>
        </div>
        <p>
          ${flight.timeTo} <br />
          DAD
        </p>
      </div>
      <div>
        <p>
          <i class="fas fa-suitcase"></i> Baggage
          <span class="color-blue">${flight.detail.baggage}kg</span>
        </p>
        <p>
          <i class="fas fa-utensils"></i> In-flight
          <span class="color-blue"> ${flight.detail.inFlight[0]}</span>
        </p>
      </div>
      <div>
        <p class="pre-price">${flight.prePrice} vnd</p>
        <p class="price">${flight.price} vnd</p>
      </div>
      <div><button class="btn-choose-flight ${flight.flightId}">Choose</button></div>
    </div>
    <div class="flight-nav">
      <p class="show-flight-detail ${flight.flightId} flight-nor">
        FLIGHT DETAIL
      </p>
      <p class="show-flight-info ${flight.flightId} flight-nor">FARE INFO</p>
      <div></div>
    </div>
    <div class="detail detail-flight"></div>
    </div>
            `;
  });
  flight.innerHTML = html;
};

renderListFlight(DUMMY_DATA);

// ------------show detail---------------
const showFlightDetail = document.querySelectorAll(".show-flight-detail");
const detail = document.querySelectorAll(".detail-flight");

showFlightDetail.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("flight-active");
    const idx = +item.classList[1];
    const detailFlight = DUMMY_DATA[idx];
    let html = `   
    <div class="detail-time-place">
    <div class="detail-time">
      <p>
        <b>${detailFlight.timeFlight}</b><br />
        11 Feb
      </p>
      <p>${detailFlight.timeEstimate}</p>
      <p>
        <b>${detailFlight.timeTo}</b><br />
        11 Feb
      </p>
    </div>
    <div>
      <svg width="50" height="150">
        <circle
          cx="25"
          cy="10"
          r="3"
          stroke="black"
          stroke-width="1"
          fill="white"
        />
        <circle
          cx="25"
          cy="130"
          r="3"
          stroke="black"
          stroke-width="1"
          fill="#4d46fa"
        />
        <line
          x1="25"
          y1="13"
          x2="25"
          y2="130"
          style="stroke: rgb(70, 76, 250); stroke-width: 1"
        />
      </svg>
    </div>
    <div class="detail-time">
      <p>
        <b>${detailFlight.from} (DAD)</b><br />
        ${detailFlight.departure}
      </p>
      <p>
        <b>${detailFlight.to} (SGN)</b><br />
        ${detailFlight.destination}
      </p>
    </div>
  </div>
  <!-- detail airway -->
  <div class="detail-airway">
    <div class="airway-type">
      <img
        src=${detailFlight.src}
        alt=${detailFlight.airline}
        width="10%"
      />
      <div>
        <h3>BAMBOO AIRWAYS</h3>
        <p>${detailFlight.code} * ${detailFlight.class}</p>
      </div>
    </div>
    <div class="detail-ticket">
      <div>
        <p>Baggage <span>${detailFlight.detail.baggage}kg</span></p>
        <p>In-flight <span>${detailFlight.detail.inFlight[0]}</span></p>
        <p>In-flight <span>${detailFlight.detail.inFlight[1]}</span></p>
      </div>
      <div>
        <p>Aircraft <span>${detailFlight.detail.aircraft}</span></p>
        <p>Seat layout <span>${detailFlight.detail.seatLayout}</span></p>
        <p>Seat pitch <span>${detailFlight.detail.seatPitch}</span></p>
      </div>
    </div>
  </div>
  `;

    detail[idx].innerHTML = html;
  });
});

// ------------show info------------
const showFlightInfo = document.querySelectorAll(".show-flight-info");

showFlightInfo.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("flight-active");
    const idx = +item.classList[1];
    const detailFlight = DUMMY_DATA[idx];
    let html = `   
    <div class="detail-time-place">
    <div class="detail-time">
      <p>
        <b>CONDITIONS</b>
      </p>
      <div class="airway-type">
        <img
          src=${detailFlight.src}
          alt=${detailFlight.airline}
          width="10%"
        />
        <div>
          <h3>BAMBOO AIRWAYS</h3>
          <p>${detailFlight.code} * ${detailFlight.class}</p>
        </div>
      </div>
      <div class="display-flex">
        <p>${detailFlight.from}</p>
        <svg width="100" height="25">
          <circle
            cx="10"
            cy="10"
            r="3"
            stroke="black"
            stroke-width="1"
            fill="white"
          />
          <circle
            cx="90"
            cy="10"
            r="3"
            stroke="#4d46fa"
            stroke-width="1"
            fill="#4d46fa"
          />
          <line
            x1="13"
            y1="10"
            x2="90"
            y2="10"
            style="stroke: rgb(70, 76, 250); stroke-width: 1"
          />
        </svg>
        <p>${detailFlight.to}</p>
      </div>
      <p class="type-class">${detailFlight.class}</p>
      <p>Non - Refundable</p>
    </div>
  </div>
  <!-- detail airway -->
  <div class="detail-airway">
    <div class="airway-type">
      <b>PRICE DETAILS</b>
    </div>
    <div class="detail-price">
      <div>
        <p>Adult Basic Fare (x1)</p>
        <p>Tax</p>
        <p>Regular Total price</p>
        <p class="color-orange">Save</p>
        <hr />
        <p>You pay</p>
      </div>
      <div>
        <p><b>${convertCurrency(detailFlight.prePrice)} </b></p>
        <p>included</p>
        <p>${convertCurrency(detailFlight.prePrice)} </p>
        <p>${convertCurrency(detailFlight.prePrice - detailFlight.price)} </p>
        <hr />
        <p class="color-orange"><b>${convertCurrency(
          detailFlight.price
        )}</b></p>
      </div>
    </div>
  </div>`;

    detail[idx].innerHTML = html;
  });
});

//  funxtion ddoi tien te
function convertCurrency(number) {
  return number.toLocaleString("vi", { style: "currency", currency: "VND" });
}

// ----choose your flight
const btnChooseFlight = document.querySelectorAll(".btn-choose-flight");
console.log(btnChooseFlight);
const yourFlight = document.querySelector(".your-flight");

btnChooseFlight.forEach((item) => {
  item.addEventListener("click", () => {
    const idx = +item.classList[1];
    const detailFlight = DUMMY_DATA[idx];
    let html = `
    <h4>YOUR FLIGHT</h4>
    <hr />
    <div>
      <div class="departure">
        <span>01</span>
        <p>Fri, 11 Feb, 2022 <br /><b>Da Nang - Ho Chi Minh</b></p>
      </div>
      <div class="departure">
        <img src=${detailFlight.src} width="10%" alt=${detailFlight.airline} />
        <p>${detailFlight.airline} <br /><a href="#">Details</a></p>
      </div>
    </div>
    <div class="flight-time">
      <p>
      ${detailFlight.timeFlight}<br />
        DAD
      </p>
      <div>
        <p>1h30</p>
        <svg width="60" height="15">
          <circle
            cx="3"
            cy="10"
            r="2"
            stroke="black"
            stroke-width="1"
            fill="white"
          />
          <circle
            cx="50"
            cy="10"
            r="2"
            stroke="black"
            stroke-width="1"
            fill=""
          />
          <line
            x1="4"
            y1="10"
            x2="48"
            y2="10"
            style="stroke: rgb(70, 76, 250); stroke-width: 1"
          />
        </svg>
        <p>Direct</p>
      </div>
      <p>
      ${detailFlight.timeTo}<br />
        DAD
      </p>
    </div>
    <button class="btn-change-your-flight">Change departure flight</button>
    <hr />
    <div class="return">
      <span>02</span>
      <p>Sun, 13 Feb, 2022 <br /><b>Ho Chi Minh - Da Nang</b></p>
    </div>
    <div class="your-price">
      <h4>Subtotal</h4>
      <p>${convertCurrency(detailFlight.price)}</p>
    </div>`;

    yourFlight.innerHTML = html;
  });
});
