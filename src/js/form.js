var textMessage;
var nome = document.querySelector('#nome')
var fone = document.querySelector('#fone')
var email = document.querySelector('#email')
var contactForm = document.querySelector('.contact-form')
var bubble = document.getElementById('bubble')
nome.focus()

function showMessage(text) {
  textMessage = text
  var textz = document.createTextNode(textMessage)
  bubble.appendChild(textz)
  bubble.className = 'showing'
  setTimeout(function() {
    bubble.removeAttribute('class')
    bubble.innerHTML = ''
  },2500)
}

nome.addEventListener('blur', function() {
  console.log(this);
  if(this.value === ''){
    showMessage('O campo nome não pode ficar vazio')
    return false
   } else {
     return true
  }
})

nome.addEventListener('keypress', function() {
  var elem = this
  var exec = function(val) {
    val = val.replace(/[^A-Za-z]+/g, '')
    return val
  }
  setTimeout(function(){
     elem.value = exec(elem.value);
  },1)
});

fone.addEventListener('blur', function() {
  console.log(this);
  if(this.value === ''){
    showMessage('O campo telefone não pode ficar vazio')
    return false
   } else {
     return true
  }
})

fone.addEventListener('keypress', function() {
  var elem = this
  var exec = function(val) {
    val = val.replace(/\D/g,"")
    val = val.replace(/^(\d{2})(\d)/g,"($1) $2")
    val = val.replace(/(\d)(\d{4})$/,"$1-$2")
    return val
  }
  setTimeout(function(){
     elem.value = exec(elem.value);
  },1)
})

email.addEventListener('blur', function() {
  var elem = this
  var reg = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
  if (elem.value === ''){
    showMessage('O campo e-mail não pode ficar em vazio')
    return false
  } else if (reg.test(elem.value)){
    return true
  } else {
    showMessage('O formato do email deve ser: nome@domain.com')
    return false
  }
})

contactForm.addEventListener('submit', function(event) {
  event.preventDefault()
  var contactList = [nome.value, fone.value, email.value];
  var contactListLength = contactList.length
  var ul = document.createElement("ul")
  for (var i = 0; i < contactListLength; i++) {
    console.log(contactList[i]);
    if(contactList[i] == ''){
      showMessage('Preencha todos os campos')
      return true
    }
    var li = document.createElement("li")
    var textlist = document.createTextNode(contactList[i])
    li.appendChild(textlist)
    ul.appendChild(li)
  }
  var div = document.querySelector(".contact-list").appendChild(ul)
  nome.value = '';
  fone.value = '';
  email.value = '';
})
