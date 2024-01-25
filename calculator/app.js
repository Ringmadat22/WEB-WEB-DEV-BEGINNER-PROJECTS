function Solve(val) {
    var v = document.getElementById('search');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('search').value;
    var num2 = eval(num1);
    document.getElementById('search').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('search');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('search');
    ev.value = ev.value.slice(0,-1);
 }