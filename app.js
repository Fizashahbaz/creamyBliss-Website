
Swal.fire({
  title: "Welcome To My CreamyBliss Website😍!",
  text: "go and place your order🍦🍧",
//   icon: "success",
background: "#e3ccd7",
color:"black",
  iconColor: "#ec4899",
    confirmButtonText: "OK",  
  confirmButtonColor: "#ec4899", 

});



let btn =document.getElementById("btn")

btn.addEventListener("click",()=>{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!First place your order now",
 
});
})



let togglebtn=document.getElementById("togglebtn")

let isDarkMode = false


togglebtn.addEventListener("click",()=>{
    if(isDarkMode){
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        togglebtn.textContent="🌞"
    }else{
           document.body.style.backgroundColor="black"
        document.body.style.color="white"
        togglebtn.textContent="🌜"
    }
    isDarkMode =!isDarkMode
})



