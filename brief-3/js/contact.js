



   function formValidation()
   {
      var name = document.getElementById("name");
      var msgName = document.getElementById("msgName");
      var lastName = document.getElementById("lastname");
      var msgLastname = document.getElementById("msgLastname");
      var email = document.getElementById("email");
      var msgEmail = document.getElementById("msgEmail");
      var sujet = document.getElementById("sujet");
      var msgSujet = document.getElementById("msgSujet");
      var message = document.getElementById("message");
      var msgMessage = document.getElementById("msgMessage");
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

      
      
      
      if(name.value=="")
      {
         msgName.innerHTML = "enter your name";
      }
      else
      {
         msgName.innerHTML = "";
      }
      if(lastName.value=="") 
      {
         msgLastname.innerHTML = "enter your last name";
      }
      else {
         msgLastname.innerHTML = "";
      }
      if(email.value.match(mailformat))
    {
      msgEmail.innerHTML = "";
    }
      else if (email.value=="")
      {
         msgEmail.innerHTML = "ente your email";
      }else{
         msgEmail.innerHTML = "it's not a email";
      }
      if(sujet.value=="")
      {
         msgSujet.innerHTML = "what is your subject";
      } else {
         msgSujet.innerHTML = "";
      }
      if (message.value == "") {
         msgMessage.innerHTML = "Right your msg";
      }
      else if(message.value.length > 100){
         msgMessage.innerHTML = "your msg is to long";
      }else {
         msgMessage.innerHTML = "";
      }
      
   }