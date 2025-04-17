const monthYear = document.getElementById("monthYear");
const dates = document.getElementById("dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  monthYear.textContent = `${months[month]} ${year}`;
  dates.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    dates.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    const isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const dateDiv = document.createElement("div");
    dateDiv.textContent = i;
    if (isToday) dateDiv.classList.add("today");

   
    dateDiv.addEventListener("click", () => {
      if (dateDiv.classList.contains("checked")) {
        dateDiv.classList.remove("checked");
        dateDiv.classList.add("crossed");
      } else if (dateDiv.classList.contains("crossed")) {
        dateDiv.classList.remove("crossed");
        dateDiv.classList.add("checked-alt");
      } else {
        dateDiv.classList.add("checked");
      }
    });

    dates.appendChild(dateDiv);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
  document.querySelector('.calendar').classList.add('flipping');
  setTimeout(() => {
    document.querySelector('.calendar').classList.remove('flipping');
  }, 600);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
  document.querySelector('.calendar').classList.add('flipping');
  setTimeout(() => {
    document.querySelector('.calendar').classList.remove('flipping');
  }, 600);
});

renderCalendar();
