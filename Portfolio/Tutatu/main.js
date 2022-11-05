const bar= document.getElementById("bars");
const close= document.getElementById("close");
const navbar= document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classlist.add("active");
    })
}

if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classlist.remove("active");
    })
}
