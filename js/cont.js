// window.onload = function(){
// function show(message){
//         var error = document.getElementById('error');
//         $('#error').show();
//         $('#error2').show();
//         error.innerText = message;
//         error2.innerText= message;
//
// }
//
// function validateEmail(email) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
//
// function validatePassword(password){
//     if(password === ""){
//         return false;
//     }else{
//         return true;
//     }
// }
//
//     //step 1: set button function click listener
//  document.getElementById('btn').addEventListener('click', function(){
//      //get email value
//     var email = document.getElementById('email').value;
//      //get password value
//      var password = document.getElementById('password').value;
//      //log data
//      console.log(`${password} ${email}`);
//      //check if field are empty
//
//      console.log('email: '+validateEmail(email));
//      console.log('password: '+validatePassword(password));
//
//      if(validatePassword && !validateEmail(email)){
//        show('wrong!');
//      }else{
//          show('logged in');
//      }
//     });
//
//
//
// }