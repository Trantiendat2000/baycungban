// ---- datapicker trong input: date
const fromDate = document.getElementById("from-date");
const toDate = document.getElementById("to-date");

const today = new Date().toISOString().slice(0, 10);
fromDate.setAttribute("min", today);

fromDate.addEventListener("change", function () {
  const fromDateValue = fromDate.value;
  toDate.setAttribute("min", fromDateValue);
});
