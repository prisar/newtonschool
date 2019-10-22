
var myfunc = function(a) { // anonymous 
    var list =    document.getElementById('addtodo')
    var value1 = document.getElementById('invalues').value;
    var listitem = document.createElement("li")
       

    var checkbox = document.createElement("input")
    checkbox.type="checkbox";
    checkbox.className="checkbox-margin";

    listitem.appendChild(checkbox);
    console.log(listitem);
    console.log('hi');

    listitem.innerHTML += value1
    console.log(listitem)
    listitem.innerHTML += value1
    list.appendChild(listitem)
    
}

var x = (a, b) => { // arrow 
    return a+b;
};

x(1, 2);

document.getElementById('aa');

<input name="login"></input>

target.innerHTML 