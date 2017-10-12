/**
 * Created by yanam on 2/19/2016.
 */

var b = 1, c = 2, d = 3, e = 4;
var a = b + c;        //注意末尾加分号
(d + e);
console.log("a=" + a);


var x = 0;
function f() {
    var z = "foxes", r = "birds";
    m = "fish";
    function child() {
        var r = "monkeys";
        z = "penguins"
    }

    twenty = "20";
    var twenty;
    child();

    return x + z + r + m + twenty;
}

f();
console.log(f());
//console.log("z" + z);


(function foo() {
    var x = 7;
    alert("val=" + eval("x+5"));
})();