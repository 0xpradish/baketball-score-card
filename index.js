let count=0;
function plusone(){
  count++;
  document.getElementById("home-score").textContent=count;
}
function plustwo(){
  count+=2;
  document.getElementById("home-score").textContent=count;
}
function plusthree(){
  count+=3;
  document.getElementById("home-score").textContent=count;
}

////////////////////////////////

let gcount=0;
function gplusone(){
  gcount++;
  document.getElementById("guest-score").textContent=gcount;
}
function gplustwo(){
  gcount+=2;
  document.getElementById("guest-score").textContent=gcount;
}
function gplusthree(){
  gcount+=3;
  document.getElementById("guest-score").textContent=gcount;
}