var sagar=["sagar","manna",7432897576,"kolkata",
{
    pincode:743392,
    co:"Paritosh Manna",
    mother:"Anima Manna",
    house:"n102",
    char:{
        angry:"high",
        emtion:"much",
        sorrow:"nothing",
        guilty:"ultra level",
    },
},
[77,88,98,45,65]
];
//console.log(sagar);
console.log(sagar[4].house);
console.log(sagar[4].char.guilty);
sagar[4].char.strength="strong";
console.log(sagar[4].char);
console.log(sagar[5][4]);
delete sagar[5];
console.log(sagar);
delete sagar[4].char.strength;
console.log(sagar);
