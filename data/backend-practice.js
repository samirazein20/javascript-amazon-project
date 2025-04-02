//we are going to XMLHttpRequest class to send a request to the backend
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

//1st is the request operation, 2nd tells us where to send the request to
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();


