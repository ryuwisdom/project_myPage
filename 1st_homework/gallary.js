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
function three() {
    for(i = 0;i< elements.length;i++){
        elements[i].style.flex = "33.3%";

    }
    
}

const gallaryHeader = document.getElementById("gallary-header");
const btns = gallaryHeader.getElementsByClassName("btn");

for(let i = 0;i< btns.length;i++){
    btns[i].addEventListener("click",function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active","");
        
        this.className += " active";
    })
}

