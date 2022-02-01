function f(){
    return function(name){
console.log("MAIN HOON DON",name);
    };
}
f()("Sagar");
var result=f();
result("Kabir");