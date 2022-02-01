var vowel=prompt("please enter a name");
 var value=vowel.toLowerCase();
 var counter=0;
 var result=value.match(/[aeiou]/gi).length;
// for(var i=0;i<value.length;i++){
//     // if(value.charAt(i)=="a" || value.charAt(i)=="e" || value.charAt(i)=="i" || value.charAt(i)=="o" || value.charAt(i)=="u"){
//     //  counter=counter+1;

//     // }
    
// }
console.log(result);