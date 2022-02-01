function fn(){
    return function(){
        console.log("Main Hoon Don");
    };
}
fn()();
var sagar=fn();
sagar();