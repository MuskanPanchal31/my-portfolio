const style = document.querySelector(".style-switcher-toggler");
 style.addEventListener("click", () => {
      document.querySelector(".color").classList.toggle("open");
  }
  )
 window.addEventListener("scroll", () => {
    if(document.querySelector(".color").classList.contains("open"))
    {
       document.querySelector(".color").classList.remove("open");
    }
 })

 function myFunction() {
   var x = document.getElementById("fas fa-cog fa-spin");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }
 const alternateStyles = document.querySelectorAll(".alternate-style");
 function setActiveStyle(color)
 {
    alternateStyles.forEach((style) =>
     {
       if(color === style.getAttribute("title"))
       {
          style.removeAttribute("disabled");
       }
       else
       {
          style.setAttribute("disabled","true");
       }
    })
 }
 /*thmene dark and light*/
 const daynight = document.querySelector(".day-night");
 daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon"); 
    document.body.classList.toggle("dark");
 })
 window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
       daynight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
       daynight.querySelector("i").classList.add("fa-moon");  
    }
 })