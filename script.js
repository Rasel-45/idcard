function login(){

let user=document.getElementById("user").value.trim();

let pass=document.getElementById("pass").value.trim();



if(user==="admin" && pass==="1234"){

window.location="idcard.html";

}

else{

document.getElementById("error").innerText="Wrong Username or Password";

}

}




function generate(){

let name=document.getElementById("name").value;

let roll=document.getElementById("roll").value;

let address=document.getElementById("address").value;

let sclass=document.getElementById("class").value;

let photo=document.getElementById("photo").files[0];



document.getElementById("sname").innerHTML="Name: "+name;

document.getElementById("sroll").innerHTML="Roll: "+roll;

document.getElementById("saddress").innerHTML="Address: "+address;

document.getElementById("sclass").innerHTML="Class: "+sclass;



let reader=new FileReader();

reader.onload=function(e){

document.getElementById("img").src=e.target.result;

}

reader.readAsDataURL(photo);

}



function download(){

html2canvas(document.querySelector("#card")).then(canvas => {

let link=document.createElement('a');

link.download='IDCard.png';

link.href=canvas.toDataURL();

link.click();

});

}


