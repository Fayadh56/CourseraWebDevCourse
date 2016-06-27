// // Dom Manip

// console.log(document.getElementById("title"));

// define sayHello();

function sayHello() {
  var name = document.getElementById("name").value;  
  var message = "<h2>This person is a Nigger: " + name + "!</h2><img src=https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/12743753_962432913793622_1857759489227543646_n.jpg?oh=2ffa52f3c7ff2e4ebf5bf31916c9cb29&oe=57FD8D48&__gda__=1475668770_08f62755691ba2295f6736cdeac0fc08>";
  // document.getElementById("content").textContent = message;
  document.getElementById("content").innerHTML = message;

  if (name === "chan") {
    var title = document.querySelector("#title").textContent;
    title += " You sure are a Nigger";
    document.querySelector("#title").textContent = title;
  }
}
