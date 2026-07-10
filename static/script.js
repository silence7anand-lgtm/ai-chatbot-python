function sendMessage(){

let input=document.getElementById("message");

let message=input.value;

if(message==="") return;

let chat=document.getElementById("chat-box");

chat.innerHTML+=`<div class="user"><b>You:</b> ${message}</div>`;

fetch("/get",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:message

})

})

.then(res=>res.json())

.then(data=>{

chat.innerHTML+=`<div class="bot"><b>Bot:</b> ${data.reply}</div>`;

chat.scrollTop=chat.scrollHeight;
});

input.value="";
}