var noOfNum=prompt(" enter the total number");
var arr=[];
var i=0;
for(i=0;i<noOfNum;i++){
    var value=prompt("please enter value");
    arr.push(value);
}
var max=arr[0];
for(i=0;i<noOfNum;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("It is the max number", max);

alert(max)
