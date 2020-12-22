let array1 = ['world ', ' la classe', ' les geeks'];
function bonjour(myName) {
    return bonjour.join(" ,");
}
document.getElementById('para1').innerHTML += "Bonjour " + array1;
array1.push(" les fleurs"," l'univers");
document.getElementById('para2').innerHTML +=  "Bonjour " + array1;

//exo 2
let result = document.createElement('div');
document.body.appendChild(result);
let table1 = [2, 4, 6, 8];
let table2 = [10, 10, 10, 10];
let add = (table1[0] + table2[0]);
let add1 = table1[1] + table2[1];
let add2 = table1[2] + table2[2];
let add3 = table1[3] + table2[3];
result.innerHTML =  add.toString() + " " + add1.toString() + " "+ add2 + " " + add3;


// exo 3

let multiplication = 11.76
let multi = (table2[0] * multiplication);
document.getElementById('para3').innerHTML = Math.trunc(multi).toString() + " ";

let multi2 = (table1[3] * multiplication);
document.getElementById('para3').innerHTML += Math.trunc(multi2).toString();