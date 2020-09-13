const elements = document.getElementsByClassName("column");

let i

function one() {
    for(i = 0;i< elements.length;i++){
        elements[i].style.flex = "100%";

    }
    
}
function two() {
    for(i = 0;i< elements.length;i++){
        elements[i].style.flex = "50%";

    }
    
}
function four() {
    for(i = 0;i< elements.length;i++){
        elements[i].style.flex = "25%";

    }
    
}

const gallaryHeader = document.getElementById("gallery-header");
const btns = gallaryHeader.getElementsByClassName("gallery-btn");

for(let i = 0;i< btns.length;i++){
    btns[i].addEventListener("click",function () {
        let current = document.getElementsByClassName("gallery-btn-active");
        current[0].className = current[0].className.replace("gallery-btn-active","");
        
        this.className += "gallery-btn-active";
    })
}

