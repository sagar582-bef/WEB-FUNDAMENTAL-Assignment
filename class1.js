class Sagar{
    name="Sagar Manna";
    gf="Mala";
    nick="janu";
    phone="7432897576";
    getDetails(){
     console.log(this.name,this.gf,this.nick,this.phone);
    }
}
var result=new Sagar();
console.log(result.name);
result.gf="choto ma";
result.getDetails();
var last=new Sagar();
last.name="mala";
last.gf="Sagar";
last.nick="Sagar";
last.phone="938265442";
last.getDetails();