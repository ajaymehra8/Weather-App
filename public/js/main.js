const submitBtn=document.querySelector("#submitBtn");
const cityName=document.querySelector("#cityName");
const city_name=document.querySelector(".city_name");
const tempStatus=document.querySelector("#tempStatus");
const temp=document.querySelector("#temp");
const tempReal=document.querySelector("#tempReal");
const day=document.querySelector("#day");
const date=document.querySelector("#todayDate");

// INFORMATION FUNCTION

const getInfo=async(event)=>{
console.log("called");

event.preventDefault();
let cityVal=cityName.value;

console.log(cityVal+"cityvalueHai YE");

if(cityVal===""){
city_name.innerText="Please Write The Name Before Search";
tempStatus.style.visibility="hidden";
temp.style.visibility="hidden";
}else{
    try{let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=34333147b8b4e31cedc5450edc338c5d`;
    const response=await fetch(url);
    const data=await response.json();
    const arrData=[data];

  tempReal.innerText=arrData[0].main.temp;
  
  city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
 temp.style.visibility="visible";
 tempStatus.style.visibility="visible";

 let tempMood=arrData[0].weather[0].main;
console.log(tempMood);
 if(tempMood==="Clear"){
tempStatus.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>";
 }else  if(tempMood==="Clouds"){
  tempStatus.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
   }else  if(tempMood==="Rain"){
    tempStatus.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
     }else {
      tempStatus.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>";
       }



}catch{
        city_name.innerText="Please Enter City Name Properly";
        tempStatus.style.visibility="hidden";
        temp.style.visibility="hidden";



    }

}}
const getCurrentDay=()=>{
  var weekDay=["SUN",'MON','TUE','WED','THR','FRI','SAT'];
  
  let currentTime=new Date();
    let day=weekDay[currentTime.getDay()];
    return day;
}
const getCurrentDate=()=>{
  var now=new Date();
  var monthName= [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  var month=monthName[now.getMonth()];
  var day=now.getDate();
  let hours=now.getHours();
  let mins=now.getMinutes();
  let period="pm";
  if(hours<11){
      period="pm";
      
  }
  if(hours>12){
      hours-=12;
  }
  if(mins<10){
      mins="0"+mins;
  }
  return `${day}-${month} | ${hours}:${mins} ${period}`;
}
day.innerHTML=getCurrentDay();
date.innerHTML=getCurrentDate();
submitBtn.addEventListener("click",getInfo);