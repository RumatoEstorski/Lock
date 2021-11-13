function initCounter(name){
    let color = "red";
    let innerCounter = function () {
        console.log(name + " " + color);
        if(color=="red") color = "yellow";
        else if(color == "yellow") color = "green";
        else color = "red";
    };
    return innerCounter;
}
let counter1 = initCounter("first");
let counter2 = initCounter("second");
let counter3 = initCounter("third");
counter1();
counter1();
counter2();
counter1();
counter3();
counter3();
counter1();
counter2();
counter2();
counter1();
counter3();





