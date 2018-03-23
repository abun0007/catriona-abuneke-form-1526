
 var box1 = document.getElementById("name");
 var box2 = document.getElementById("email");
 var box3 = document.getElementById("message");
 var collectedData = {
            name: null,
            email: null,
            message: null
     
 var errors = {};


function validateTextbox() {            
};
        
function validateForm(ev){
  ev.preventDefault();
 }
 

 if (box1.value == "" || box2.value == "" || box3.value == "") {
 alert("Please fill in all fields");
 return false;
 }


 if (box1.value.length < 3 || box2.value.length < 3 || box3.value.length < 3 ) {
 alert("Please enter at least 3 characters in each field");
 return false;
 }

    
function validateEmail(){
    var valEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  
if (valEmail.test(email.value)) {
    alert("Yay. It worked!")
} else {
    alert("Oh-oh. Try again.")

}
form.addEventListener("submit", validateForm);