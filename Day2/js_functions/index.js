let areaSubmitBtn = document.getElementById("submitArea");
let areaCancelBtn = document.getElementById("cancelArea");
let areaText = document.getElementById("areaText");

let fibonacciSubmitBtn = document.getElementById("submitFibonacci");
let fibonacciCancelBtn = document.getElementById("cancelFibonacci");
let fibonacciText = document.getElementById("fibonacciText");

areaSubmitBtn.addEventListener("click", function () {
    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);
    let arr = [a, b, c];
    if (isNaN(a)|| isNaN(a) || isNaN(a)) {
        areaText.textContent = "Enter all fields to complete the calculation";
    }
    else if (a <= 0 || b <= 0 || c <= 0) {
        areaText.textContent = "Enter all fields as positive values";
    }
    else {
        let area = calculateTriangleAreaHeronsFormula(arr);
        areaText.textContent = `The area is ${area} units squared`;
    }
})

areaCancelBtn.addEventListener("click", function () {
    document.getElementById("sideA").value = NaN;
    document.getElementById("sideB").value = NaN;
    document.getElementById("sideC").value = NaN;
    areaText.textContent = "";
})

fibonacciSubmitBtn.addEventListener("click", function() {
    let fibonacciNumbers = parseInt(document.getElementById("fibonacciRepeatingNumbers").value)
    if (isNaN(fibonacciNumbers)) {
        fibonacciText.textContent = "Enter a number before submitting"
    }
    else if (fibonacciNumbers <= 0) {
        fibonacciText.textContent = "Enter a number greater than 0"
    }
    else {
        fibonacciText.textContent = displayXFibonnaciNumbers(fibonacciNumbers);
    }
})

fibonacciCancelBtn.addEventListener("click", function () {
    document.getElementById("fibonacciRepeatingNumbers").value = NaN;
    fibonacciText.textContent = "";
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
    Prints to the console a designated amount of digits from the Fibonacci sequence
    PARAMS: x: a numeric; the amount of digits you want to print from the 
            Fibonacci sequence. x must be greater than or equal to 2.
    RET: NA
*/
function logXFibonnaciNumbers(x) {
    if (x == 1) {
        console.log(1);
    } 
    else {
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
}

/* 
    Displays within the HTML a designated amount of digits from the Fibonacci sequence
    PARAMS: x: a numeric; the amount of digits you want to print from the 
            Fibonacci sequence. x must be greater than or equal to 2.
    RET: NA
*/
function displayXFibonnaciNumbers(x) {
    if (x === 1) {
        return "1";
    }
    else {
        let text = "0, 1";
        let prev = 0;
        let curr = 1;
        while (x > 2) {
            oldCurr = curr;
            curr += prev;
            prev = oldCurr;
            text += ", " + curr;
            x--;
        }
    return text;
    }
}
