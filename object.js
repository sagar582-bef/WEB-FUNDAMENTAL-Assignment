var car={
    brand:"Audi",
    color:"white",
    price:"2cr",
    model:"G2",
};
console.log(car);
console.log(car.price);
car.color="Black";
console.log(car);
car.discount="20%";
console.log(car);
delete car.discount;
console.log(car);
console.log(car.color);