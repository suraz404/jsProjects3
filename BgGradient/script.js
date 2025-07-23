let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let rgb1="#000";
let rgb2="#fff";
let divCopy=document.querySelector(".code-box")


const hexaValue=()=>{
    let myHexaValues ="0123456789abcdef";
    let colors="#"
    for(let i=0 ; i<6;i++){
        colors=colors+myHexaValues[Math.floor(Math.random()*16)]
        
    }    
    return colors;
}
const handleColor1 =()=>{
  rgb1= hexaValue();
   document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`;
   color1.textContent=`${rgb1}`
   color1.style.backgroundColor=`${rgb1}`
   copyChange();


}
const handleColor2=()=>{
    rgb2=hexaValue();
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`;
   color2.textContent=`${rgb2}`
   color2.style.backgroundColor=`${rgb2}`
   copyChange();

}
const copyChange=()=>{
 divCopy.textContent=` background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

color1.addEventListener("click",handleColor1);
color2.addEventListener("click",handleColor2);
divCopy.addEventListener("click",()=>{
    navigator.clipboard.writeText(divCopy.innerText);
    alert("text copied")
});