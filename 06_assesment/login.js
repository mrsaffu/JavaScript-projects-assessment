let form = document.getElementById('form');
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    userId = document.getElementById("email").value;
    password = document.getElementById("pwd").value;

    console.log(userId, password);

    if (userId == "") {
        alert("please fill the details ");
    } else if (password == " ") {
        alert("please enter the password ");
    }

    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("user deatils----->", userDetails);

    let isEmailAvailable = userDetails.find((u) => {
        console.log(u);
        return u.email === userId;
    })
    console.log(isEmailAvailable);

    let isPasswordAvailable = userDetails.find((p) => {
        return p.conformPwd === password;
    })

    if (!isEmailAvailable) {
        alert("invalid Userid ...")

        // setTimeout(() => {
        //     window.open("./singup.html")
        // }, 1000)
    } else {

        if (isPasswordAvailable) {

            
            alert("login succesfull");
            window.open("./home.html")
            // alert()
        }
        else {
            alert("password is invalid please type correct password ");
           

            // alert("login successfully")
        }

    }

})


// ----------------------------------------------------------


let userId = document.getElementById("email");
let password = document.getElementById("pwd");
let userError = document.getElementById("userError");
let errorCss = "height:15px; color:red; padding-left:15px; font-Size:14px; border:2px solid red"

userId.addEventListener("keyup", () => {
    let validation = userId.value.length < 8;
    if (validation) {

        userId.classList.add("warning")
        userId.classList.remove("success")
        submit_btn.disabled = true;
        userError.innerHTML = "please enter minimum 8 char";
        userError.style.cssText = errorCss;
        submit_btn.classList.add("disable")
    } else {
        userId.classList.add("success")
        userId.classList.remove("warning")
        submit_btn.disabled = false;
        userError.innerHTML = ""
    }

})

password.addEventListener("keyup", (e) => {
    let validation = password.value.length < 5;
    if (validation) {

        password.classList.add("warning")
        password.classList.remove("success")
        submit_btn.disabled = true;
        pwdError.innerHTML = "please enter minimum 5 char";
        pwdError.style.cssText = errorCss;
        submit_btn.classList.add("disable")
    } else {
        password.classList.add("success")
        password.classList.remove("warning")
        submit_btn.disabled = false;
        pwdError.innerHTML = ""
    }

})


let showPwd = document.getElementById("showpwd");

showPwd.addEventListener("mouseover", (e) => {

    if (password.type == "password") {
        password.type = "text"
        showPwd.innerHTML = "hide password"

    } else {
        password.type = "password"
        showPwd.innerHTML = "show password"

    }
})
