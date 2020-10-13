let input = document.querySelector(".input");
let output = document.querySelector(".output");

const luni = new Lunicode();

let creepify = luni.tools.creepify.encode(input.value);
output.innerHTML = creepify;

let eListeners = ["keypress", "input", "paste"];

eListeners.forEach(event => {
  input.addEventListener(event, e => {
    let val = e.target.value;

    let creepify = luni.tools.creepify.encode(val);
    output.innerHTML = creepify;
  });
});

