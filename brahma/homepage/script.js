const pannel = document.getElementById("mySidepannel"); 
const profile = document.querySelector(".profile"); 

function btn_open(){
    pannel.style.height = "600px"; 
    pannel.style.zIndex = "4";
    pannel.style.fontSize ="30px";  
    profile.style.width = "60px"; 
    profile.style.height = "60px"; 
    profile.style.border = "2px solid black"; 
}

function closeNav(){
    pannel.style.height = "0px"; 
    pannel.style.zIndex = "0"; 
    pannel.style.fontSize = "0"; 
    profile.style.width = "0"; 
    profile.style.height = "0"; 
    profile.style.border = "0"; 
}