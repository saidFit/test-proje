



class MyNewCar {
    constructor(name, year) {
        this.n = name;
        this.y = year;

        this.myfunc = function(){
          return this.n==''?this.n="Unknow":this.n
        }
    }

    Updatename(newname) {
      return  this.n=newname
    }

}


const myCar = new MyNewCar('', 2009);
console.log(myCar)
console.log(myCar.n)
// console.log(myCar.Updatename('toyota'))
console.log(myCar.myfunc())
