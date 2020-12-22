let result = document.createElement('p');
document.body.appendChild(result);
function bonjour(myName) {
     result.innerHTML = "hello "
    for(let name of myName) {
        result.innerHTML += name + " , ";
    }
    result.innerHTML = result.innerHTML.trim().slice(0, -1);
}

bonjour('world', 'la classe', 'les geeks');
bonjour('le monde', 'les amis', 'la famille');

//fonction Math()
let resultat = document.getElementById('result');
let table1 = [2, 4, 6, 8];
let table2 = [1, 3, 5, 7];
let mini = Math.min(table1, table2);
resultat.innerHTML = mini.toString();
