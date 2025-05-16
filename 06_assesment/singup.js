let form= document.getElementById("form")
// console.log(form);



let userName = document.getElementById("name");
let email= document.getElementById("email");
let password = document.getElementById("pwd")
let conformPwd = document.getElementById("cpwd")
let submit_btn = document.getElementById("submit_btn");
let userError = document.getElementById("userError");
let errorCss="height:2px; color:red; padding-left:15px; font-Size:14px;"

userName.addEventListener("keyup",(e)=>{
    let validation = userName.value.length<5;
        if(validation){

            userName.classList.add("warning")
            userName.classList.remove("success")
            submit_btn.disabled = true;
            userError.innerHTML = "please enter minimum 5 char";
            userError.style.cssText=errorCss;
            submit_btn.classList.add("disable")
        }else{
            userName.classList.add("success")
            userName.classList.remove("warning")
            submit_btn.disabled = false;
            userError.innerHTML = ""
        }

})

   let phone = document.getElementById("phone");                 
   let phoneError=document.getElementById("phoneError")
phone.addEventListener("keyup",(e)=>{
    let validation = phone.value.length<10;
        if(validation){
            phone.classList.add("warning")
            phone.classList.remove("success")
            submit_btn.disabled = true;
            phoneError.innerHTML = "please enter minimum 10 digit"
            phoneError.style.cssText= errorCss;

            submit_btn.classList.add("disable")
        }else{
            phone.classList.add("success")
            phone.classList.remove("warning")
            submit_btn.disabled = false;
            phoneError.innerHTML = ""
        }
})

let emailError=document.getElementById("gmailError")
email.addEventListener("keyup",(e)=>{
    let validation = email.value.length<8;
        if(validation){
            email.classList.add("warning")
            email.classList.remove("success")
            submit_btn.disabled = true;
            emailError.innerHTML = "please enter minimum 8 digit"
            emailError.style.cssText= errorCss;

            submit_btn.classList.add("disable")
        }else{
            email.classList.add("success")
            email.classList.remove("warning")
            submit_btn.disabled = false;
            emailError.innerHTML = ""
        }
})

let pwdError=document.getElementById("pwdError")
password.addEventListener("keyup",(e)=>{
    let validation = pwd.value.length<5;
        if(validation){
            password.classList.add("warning")
            password.classList.remove("success")
            submit_btn.disabled = true;
            pwdError.innerHTML = "please enter minimum 5 digit"
            pwdError.style.cssText= errorCss;

            submit_btn.classList.add("disable")
        }else{
            password.classList.add("success")
            password.classList.remove("warning")
            submit_btn.disabled = false;
            pwdError.innerHTML = ""
        }
})

let cpwdError=document.getElementById("cpwdError")
conformPwd.addEventListener("keyup",(e)=>{
    let validation = conformPwd.value.length<5;
        if(validation){
            conformPwd.classList.add("warning")
            conformPwd.classList.remove("success")
            submit_btn.disabled = true;
            cpwdError.innerHTML = "please enter minimum 5 digit"
            cpwdError.style.cssText= errorCss;

            submit_btn.classList.add("disable")
        }else{
            conformPwd.classList.add("success")
            conformPwd.classList.remove("warning")
            submit_btn.disabled = false;
            cpwdError.innerHTML = ""
        }
})


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let userName = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;                 
    let email= document.getElementById("email").value;
    let password = document.getElementById("pwd").value
    let conformPwd = document.getElementById("cpwd").value
    // console.log(userName,phone,email,password,conformPwd);
    if(userName =="" || phone =="" || password=="" ||conformPwd=="" ){
        alert("Please enter your details")
    }
    //--------------------------------------------------------------
    else{
        if(password!==conformPwd){
            alert("Pasward is not match plase match the password")
    
        }
        // else{
        //     alert("Registation seccessfully")
        // }
    
    
        let userData ={
            userName,
            phone,
            email,
            conformPwd,
        }
        console.log(userData);
     let arrayData= JSON.parse(localStorage.getItem("userDetails"))|| [];
     arrayData.push(userData);

     let finaldata= JSON.stringify(arrayData)
     console.log(finaldata);
     localStorage.setItem("userDetails",finaldata)

     alert("Registation seccessfully");
    }
//      if(password!==conformPwd){
//         alert("Pasward is not match plase match the password")

//     }else{
//         alert("Registation seccessfully")
//     }


//     let userData ={
//         userName,
//         phone,
//         email,
//         conformPwd,
//     }
//     console.log(userData);
//  let arrayData= JSON.parse(localStorage.getItem("userDetails"))|| [];
//  arrayData.push(userData);

//  if(arrayData===undefined){
//     arrayData.push(userData)
//  }else{
//     arrayData=[];
//     arrayData.push(userData);
//  }


//  let finaldata= JSON.stringify(arrayData)
//  console.log(finaldata);

//  let jsonObj = JSON.stringify( finaldata)

//  localStorage.setItem("userDetails",finaldata)

//  window.open("./login.html")
//  window.location.reload()
window.open("./login.html")
window.location.reload()

 
  
})

