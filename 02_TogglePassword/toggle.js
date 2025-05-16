function password(){
    let pass = document.getElementById("pass")
    let toggle = document.getElementById("toggle")
    let toggle1 = document.getElementById("toggle1")
    
    if(pass.type==="password"){
    pass.type="text";
    }else{
        pass.type="password";
    }
    
    }
