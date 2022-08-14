let sliderElement = document.querySelector("slider");
let buttonElement = document.querySelector("button");

let sizePasswords = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "mago2323Mago33423Mgm34324!Gustavo213124jg33443";
let novaSenha = "";

sizePasswords.innerHTML = sliderElement.value;

slider.oniput = function(){
    sizePasswords.innerHTML = this.value;
}

function generatepasswords(){

    let pass = "";
    for(let i = 0, n = charset.length; i< sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(math.random() * n));
    }


    console.log(pass);
}

