var name1= document.querySelector("#name");
var age= document.querySelector("#age");
var profession= document.querySelector("#profession");
var button= document.querySelector("#submitbtn");
 var result= document.querySelector("#result")


//console.log(document.querySelector("#name").value);
button.addEventListener("click",function check(){
console.log(name1.value);
console.log(age.value);
console.log(profession.value)
result.innerText= "details  submit   successfully"
});
