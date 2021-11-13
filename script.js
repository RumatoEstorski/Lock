function closure(n) {
    let localVar = n;
    return function () {
        return localVar
    };
}
let one = closure(1);
closure.log(one);
let x = one();
closure.log(x);