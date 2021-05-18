let emailElement = document.querySelector('#fname');
let countryElement = document.querySelector('#country');
  let messageElement = document.querySelector('#message');
  let submitButton = document.querySelector('#submit-button');

    submitButton.addEventListener('click',function(e){
  e.preventDefault();
  let emailValue = emailElement.value;
  let countryValue = countryElement.value;
  let messageValue = messageElement.value;

  if (emailValue.includes('@')){
    //all good
    alert('Thank you for your message');
  }
  else{
    alert('Oh no, that does not look like a valid email address :frowning: Please try again');
  }

  console.log('email:',emailValue);
  console.log('country:',countryValue);
  console.log('message:',messageValue);
})