// // Dom Manip

// console.log(document.getElementById("title"));

// define sayHello();

function sayHello() {
  var name = document.getElementById("name").value;  
  var message = "<h2>This person is a Nigger: " + name + "!</h2";
  // document.getElementById("content").textContent = message;
  document.getElementById("content").innerHTML = message;

  if (name === "chan") {
    var title = document.querySelector("#title").textContent;
    title += " You sure are a Nigger";
    document.querySelector("#title").textContent = title;
  }
}
