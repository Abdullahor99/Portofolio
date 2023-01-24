// #### Help Klassen ####
function isEmpty(string) {
  // Help function die prüft ob ein String null oder leer ist.
  if (string == null) return true;
  string = string.trim();
  if (string == "") return true;
}

//!important inforamtion
// meine Regelen sind :
// Email soll Valid sein Message soll mindestens 3 buchstaben haben.

// ein valdierung passiert immer wenn der User ein Feld verlässt.
//
// Email soll ein gültige email Adresse sein
function isvalidEmail() 
{
  let email = document.getElementById('email')
  let emailValue = email.value.trim();
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (isEmpty(emailValue))
  {
    email.classList.remove('invalid');
    return false;
  }
  if (emailValue.match(pattern))
  {
    email.classList.remove("invalid");
    return true;
  }
  else
  {
    email.classList.add("invalid");
    return false;
  }

  
}
function isvalidMessage()
{
  let message = document.getElementById('message')
  let messageValue = message.value.trim();

  if (isEmpty(messageValue))
  {
    message.classList.remove('invalid');
    return false;
  }

  if(messageValue.length <= 2)
  {
    message.classList.add("invalid");
    return false;
  }
  else
  {
    message.classList.remove("invalid")
    return true;
  }
}

let form = document.getElementById('form');
form.onsubmit = (event) => 
{
  if(!isvalidEmail() || !isvalidMessage())
  {
    event.preventDefault();
    return false;
  }
  else
    return true;
}
// gobal varible immer wenn nicht mehr gebraucht werden auf null setzen damit keine spricher leaks entsteht.
window.form = null;
