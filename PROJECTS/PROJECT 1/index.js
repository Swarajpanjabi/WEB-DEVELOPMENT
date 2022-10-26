let isDOBOpen = false;

const settingCog = document.getElementById("settingIcon");
const settingcontentEL = document.getElementById("settingcontent")

const toggleDateofBirthSelector = () => {
if(isDOBOpen){
    settingcontentEL.classList.add("hide")
}else{
    settingcontentEL.classList.remove("hide")
}
isDOBOpen = !isDOBOpen;

console.log("toggle", isDOBOpen)
};
settingCog.addEventListener("click", toggleDateofBirthSelector)