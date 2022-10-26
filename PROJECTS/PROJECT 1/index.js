let isDOBOpen = false;
let dateOfBirth;
const settingCog = document.getElementById("settingIcon");
const settingcontentEL = document.getElementById("settingcontent");
const initialTextEL = document.getElementById("initialtext");
const afterDOBButtonEL = document.getElementById("afterDOBButton");
const dobButtonEL = document.getElementById("dobButton");
const dobInputEL = document.getElementById("dobInput");

const yearEL = document.getElementById("year");
const MonthEL = document.getElementById("Month");
const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondEL = document.getElementById("second");

const toggleDateofBirthSelector = () => {
  if (isDOBOpen) {
    settingcontentEL.classList.add("hide");
  } else {
    settingcontentEL.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;

  console.log("toggle", isDOBOpen);
};

const updateAge = () => {
    const currentDate = new Date();
const dateDiff = currentDate - dateOfBirth;
const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 *365));
const Month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 *365))%12;
const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24))%30;
const hour = Math.floor(dateDiff / (1000 * 60 * 60))%24;
const minutes = Math.floor(dateDiff / (1000 * 60))%60;
const second = Math.floor(dateDiff / (1000))%60;

yearEL.innerHTML = year;
MonthEL.innerHTML = Month;
dayEL.innerHTML = day;
hourEL.innerHTML = hour;
minutesEL.innerHTML = minutes;
secondEL.innerHTML = second;
};



const setDOBHandler = () => {
  const dateString = dobInputEL.value;
  dateOfBirth = dateString ? new Date(dateString) : null;
  if(dateOfBirth){
    localStorage.setItem('year', dateOfBirth.getFullYear());
    localStorage.setItem('month', dateOfBirth.getMonth());
    localStorage.setItem('day', dateOfBirth.getDay());
    initialTextEL.classList.add("hide");
    afterDOBButtonEL.classList.remove("hide");
    setInterval(() => updateAge(), 1000);
  }else{
    afterDOBButtonEL.classList.add('hide');
    initialTextEL.classList.remove('hide');
  }
};
setDOBHandler();


settingCog.addEventListener("click", toggleDateofBirthSelector);
dobButtonEL.addEventListener("click", setDOBHandler);
