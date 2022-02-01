var obj1={
    x:350,
};
var obj2={
    x:250,
};
function fn(a,b,c){
    var result=this.x+a+b+c;
    console.log(result);

}
fn.call(obj1, 10,20,30);
fn.call(obj2,40,90,70);
fn.apply(obj2,[40,50,70]);
fn.apply(obj2,[100,900,300]);
fn.bind(obj1,10,20,30)();
var f=fn.bind(obj2);
f(10,202,40);