const heading=document.getElementById("heading");
const dobInput=document.getElementById("dobInput");
const dobButton=document.getElementById("dobButton");
const setting=document.querySelector(".setting");
const settingContent=document.querySelector(".setting-content");
const initialText=document.getElementById("initialText");
const afterDobButton=document.getElementById("afterDobButton");
const years=document.getElementById("years");
const months=document.getElementById("months");
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
let isSettingOpen=false;
let dobValue;

setting.addEventListener("click",()=>{
    if(!isSettingOpen){
        settingContent.classList.add("hide");        
    }else{
        settingContent.classList.remove("hide");
    }
    isSettingOpen=!isSettingOpen;
})

dobButton.addEventListener("click",()=>{
    dobValue=dobInput.value;
    if(dobValue){
        initialText.classList.add("hide");
        afterDobButton.classList.remove("hide");
    }else{
        afterDobButton.classList.add("hide");
        initialText.classList.remove("hide");
    }
    console.log(dobValue);
})

const updateAge=()=>{
    const dob=new Date(dobValue);
    const now=new Date();
    console.log(now);
    let years=now.getFullYear()-dob.getFullYear();
    let months=now.getMonth()-dob.getMonth();
    let days=now.getDate()-dob.getDate();
    let hours=now.getHours()-dob.getHours();
    let minutes=now.getMinutes()-dob.getMinutes();
    let seconds=now.getSeconds()-dob.getSeconds();
    if(seconds<0){
        seconds=60+seconds;
        minutes--;
    }
    if(minutes<0){
        minutes=60+minutes;
        hours--;
    }
    if(hours<0){
        hours=24+hours;
        days--;
    }
}

updateAge();

