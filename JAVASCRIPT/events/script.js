let button=document.getElementById("btn")

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked </b>Enjou your click!"   
})
button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by Right click please!")  
})
button.addEventListener("keydown",(e)=>{
    console.log(e)
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
})
