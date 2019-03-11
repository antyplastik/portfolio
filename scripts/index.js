console.log("Hello visitor!");

document.getElementById("nav-home").addEventListener("click", goToTop);
document.getElementById("nav-projects").addEventListener("click", goToProjects);
document.getElementById("nav-contact").addEventListener("click", goToContact);

document.getElementById("toggle-background-button").addEventListener("click",toggleButtonChangeBackground);


function goToTop(){
    console.log("go to home");
    scrollFunction();
}

function goToProjects(){
    console.log("go to my projects");
}

function goToContact(){
    console.log("go to contact");
}

function toggleButtonChangeBackground(){
    console.log("button click");
    const description = document.querySelector(".background-white");
    console.log(description);
}