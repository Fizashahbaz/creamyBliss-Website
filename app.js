
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

let btn1= document.getElementById("btn1")
btn1.addEventListener("click",()=>{
 Swal.fire({
  title: "your order successfully received😊",
   text: "Thank you for visiting our website and buying icecream❤😊",
color:"black",
    confirmButtonText: "OK",  
  confirmButtonColor: "#ec4899",

  
});
});


function orderNow() {
  Swal.fire({
    title: 'Place Your Order',
    html: `
      <input type="text" id="name" class="swal2-input" placeholder="Your Name ">
      <input type="email" id="email" class="swal2-input" placeholder="Your Email">
    `,

      background: 'white',
      color:"black",
    confirmButtonText: 'Submit',
      confirmButtonColor: '#9a1c55',
    preConfirm: () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if (!name || !email) {
        Swal.showValidationMessage('Please enter name and email');
    
      }

      return { name: name, email: email };
    }
  }).then((result) => {
    if (result.isConfirmed) {
  
            Swal.fire({
        title: `Thanks ${result.value.name}! 🎉`,
        html: `<p style="font-size:16px; color:#fff;">Your order has been successfully received. We will contact you soon. 🍦</p>`,
        background: 'linear-gradient(135deg, #f78ca0, #f9748f)',
        color: '#fff',
        icon: 'success',
        iconColor: '#fff',
        confirmButtonText: 'OK!',
        confirmButtonColor: '#9a1c55',
        customClass:{
          title:'swal2-title',
        }
      });
    }
  });
}



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


