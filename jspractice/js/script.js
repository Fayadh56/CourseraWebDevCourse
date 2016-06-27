// Dom Manipulation

// console.log(document.getElementById("title"));

// define sayHello();

function sayHello() {
  var name = document.getElementById("name").value;  
  var message = "This person is a Nigger: " + name + "!";
  document.getElementById("content").textContent = message;
}
