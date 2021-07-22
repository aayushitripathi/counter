let count = 0;
const addbutton = document.getElementById("add")
const addition=()=>{
  count+=1;
  addbutton.innerHTML = "ADD : " + count;
}
addbutton.addEventListener('click',addition);


const addbutton2 = document.getElementById("minus")
const decrement=()=>{
  count-=1;
  addbutton2.innerHTML = "DECREMENT : " + count;
}
addbutton2.addEventListener('click',decrement);

const addbutton3 = document.getElementById("reset")
const resets=()=>{
  count =0;
  addbutton3.innerHTML = "RESET: " + count;
}
addbutton3.addEventListener('click',resets);