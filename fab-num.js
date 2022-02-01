
var num=prompt("please enter a number");
num=parseInt(num);
var result=1;
if(isNaN(num)==true){
    alert("please give a number");
}
else{
    if(num>1){
        for(var i=1;i<=num;i++){
            result=result*i;

        }
        console.log("fibonaci number is",result);
        alert(result);
    }
    else if(num==1){
        alert(result)
    }
    else{
        alert("0");
    }

}