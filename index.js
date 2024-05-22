function addtodo() {
    var input = document.getElementById("todo-input");
    // console.log(input.value);

    var list = document.getElementById("listItems");

var listElement = document.createElement("li");

var listText = document.createTextNode(input.value);

listElement.appendChild(listText);

//*****************Delete Button********************//

var delbtn = document.createElement("button");

var delbtnText = document.createTextNode("Delete");

delbtn.appendChild(delbtnText);

delbtn.setAttribute("onclick", "delTodo(this)" );

listElement.appendChild(delbtn);

//*****************Edit Button********************//

var Editbtn = document.createElement("button");

var EditbtnText = document.createTextNode("Edit");

Editbtn.appendChild(EditbtnText);

listElement.appendChild(Editbtn);

list.appendChild(listElement);

Editbtn.setAttribute("onclick", "editTodo(this)" );

console.log(listElement);

input.value = "";
}

function deletetodo() {
    var list = document.getElementById("listItems");

    list.innerHTML = "";

    // list.remove();
}

function delTodo(e) {
    console.log(e.parentNode.remove());
}

function editTodo(e) {
    var currentli = e.parentNode.firstChild.nodeValue;

    var inputfield = prompt("Enter the updated value", currentli);

    e.parentNode.firstChild.nodeValue = inputfield;
}