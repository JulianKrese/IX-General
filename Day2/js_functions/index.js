let areaSubmitBtn = document.getElementById("submitArea");
let areaCancelBtn = document.getElementById("cancelArea");
let areaText = document.getElementById("areaText");

let fibonacciSubmitBtn = document.getElementById("submitFibonacci");
let fibonacciCancelBtn = document.getElementById("cancelFibonacci");
let fibonacciText = document.getElementById("fibonacciText");

areaSubmitBtn.addEventListener("click", function () {
    let a = parseInt(document.getElementById("sideA").value);
    let b = parseInt(document.getElementById("sideB").value);
    let c = parseInt(document.getElementById("sideC").value);
    let arr = [a, b, c];
    if (isNaN(a)|| isNaN(a) || isNaN(a)) {
        areaText.textContent = "Enter all fields to complete the calculation";
    }
    else {
        let area = calculateTriangleAreaHeronsFormula(arr);
        areaText.textContent = area;
    }
})

areaCancelBtn.addEventListener("click", function () {
    document.getElementById("sideA").value = NaN;
    document.getElementById("sideB").value = NaN;
    document.getElementById("sideC").value = NaN;
    areaText.textContent = "no buttons clicked yet"
})

fibonacciSubmitBtn.addEventListener("click", function() {
    let fibonacciNumbers = parseInt(document.getElementById("fibonacciRepeatingNumbers").value)
    logXFibonnaciNumbers(fibonacciNumbers);
    fibonacciText.textContent = "Done! Check the console";
})

fibonacciCancelBtn.addEventListener("click", function () {
    document.getElementById("fibonacciRepeatingNumbers").value = NaN;
    fibonacciText.textContent = "no buttons clicked yet";
})



///// FUNCTIONS ////


/* 
    Returns the area of a triangle given 3 side lengths as represented in an array
    using Heron's formula to find the area of a SSS triangle.
    PARAMS: arr: an array of numerics; represents the sides of a triangle
    RET: the area of a triangle (numeric)
*/
function calculateTriangleAreaHeronsFormula(arr) {
    let a = arr[0], b = arr[1], c = arr[2];
    let s = ((a + b + c) / 2);
    let area = Math.sqrt( s * (s-a) * (s-b) * (s-c) );
    return area;
}

/* 
    Prints a designated amount of digits from the Fibonacci sequence
    PARAMS: x: a numeric; the amount of digits you want to print from the 
            Fibonacci sequence. x must be greater than or equal to 2.
    RET: NA
*/
function logXFibonnaciNumbers(x) {
    let prev = 0;
    let curr = 1;
    console.log(prev);
    console.log(curr);
    while (x > 2) {
        oldCurr = curr;
        curr += prev;
        prev = oldCurr;
        console.log(curr);
        x--;
    }
}
