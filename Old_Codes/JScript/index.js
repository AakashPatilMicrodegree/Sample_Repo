
xx = 222;
function sample1(){
    if (true){
    var x = 100;
    let y = 200;
    const z = 800;
    xx = 222;
    }
console.log(xx)
//console.log(y)
//console.log(z)
}

function sample2(){
    var x = 'Hello'
    console.log(x[0]);
    console.log(x.length);

    var myarary = [50,"hello",98.9];
    console.log("before",myarary[0]);
    myarary[0] = 500;
    console.log("after",myarary[0]);

    console.log(myarary);
    myarary.push("newItem");
    console.log(myarary);

    console.log("before",myarary);
    myarary[6] = 566;
    console.log("after",myarary);

    var array_2d = [[50,"hello",98.9],["second","array"]];
    console.log(array_2d[0])

    console.log(array_2d)
    var emp = array_2d.pop();
    console.log(emp,array_2d)

}

function sample3(p1,p2,p3){
    var new_item = "";
    new_item = p1+p2+p3;
    return new_item;

}

class Student {

    constructor(name, rno){
        this.Student_Name = name;
        this.Rno = rno;
        this.email = name+"@MyGmail.com"
    }

    show_details(){

        console.log("name : ", this.Student_Name)
        console.log("Rno : ", this.Rno)
        console.log("email : ", this.email)
    }

}

//console.log(sample3("Hello","World","!"))

const SampleObject = new Student("Mahesh",100)
SampleObject.show_details();