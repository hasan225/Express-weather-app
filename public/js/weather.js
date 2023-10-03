const input_city = document.querySelector(".input_city");
const submit_btn = document.querySelector(".submit_btn");
const output_temp = document.querySelector(".output_temp");
const date_day = document.querySelector(".date_day");
const date_d_m = document.querySelector(".date_d_m");
const output_p = document.querySelector(".output_p");
const temp_icon = document.querySelector(".temp_icon");

const sun = "https://cdn-icons-png.flaticon.com/512/1400/1400310.png"
const cloud = "https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-vector-cloud-icon-png-image_939423.jpg"

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  apiData();
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const mL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const mS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Today = new Date();

let todaysDate = Today.getDate();
if (todaysDate < 10) {
  todaysDate = "0" + todaysDate;
}

date_day.innerText = days[Today.getDay()];
date_d_m.innerText = `${todaysDate} ${mS[Today.getMonth()]}`;

const apiData = async () => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input_city.value}&appid=c1b148c20523bd6177cd0779cca1720b`
    );
    const data = await res.json();
    output_p.innerText = input_city.value;
    output_temp.innerText = data.main.temp + "°C";
    if(data.main.temp < 300){
        temp_icon.src = cloud;
        temp_icon.width = 100;
        temp_icon.height = 100;
    }
    else{
        temp_icon.src = sun;
        temp_icon.width = 100;
        temp_icon.height = 100;
    }
  } catch (error) {
    console.log(error.message);
  }
};
