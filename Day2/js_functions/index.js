let submitBtn = document.getElementById("submit")
let cancelBtn = document.getElementById("cancel")
let buttonText = document.getElementById("buttonClickedText")

submitBtn.addEventListener("click", function () {
    buttonText.textContent = "submit clicked!"
    setInterval(clear, 3000)
})

cancelBtn.addEventListener("click", function () {
    buttonText.textContent = "cancel clicked!"
    setInterval(clear, 3000)
})

function clear() {
    clearInterval()
    buttonText.textContent = "no buttons clicked yet"
}


///// FUNCTIONS ////


/* 
    Returns the area of a triangle given 3 side lengths as represented in an array
    using Heron's formula to find the area of a SSS triangle.
    PARAMS: arr: an array of numerics; represents the sides of a triangle
    RET: the area of a triangle (numeric)
*/
function calculateAreaOfTriangleHeronsFormula(arr) {
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
function logXFibonnaciDigits(x) {
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

/* function calls */

// calculate the area of a triangle
let triangle = [5,5,5]
console.log(calculateAreaOfTriangleHeronsFormula(triangle));

// first 10 digits of Fibonacci
logXFibonnaciDigits(10);
