const submit = document.querySelector("#submit");
const ul = document.querySelector("#List");
const input = document.querySelector("#input");

function add_task() {
  if (input.value == "") {
    alert("Task cannot be empty");
  } else {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    var value = document.createTextNode(input.value);
    input.value = "";
    span.className = "close";

    span.appendChild(cross);

    li.appendChild(value);
    li.appendChild(span);
    span.onclick = function () {
      var list_item = this.parentElement;
      list_item.style.display = "none";
    };

    li.addEventListener("click", () => {
      li.classList.toggle("checked");
    });
    ul.appendChild(li);
  }
}
