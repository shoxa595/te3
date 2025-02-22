//1
function fibonacci(i) {
    let a = 0, b = 1;  
    console.log(a);
    while (b <= i) console.log(b), [a, b] = [b, a + b];
}

let i = Number(prompt("Введите число:"));
fibonacci(i);

//2
let lastName = prompt("Введите вашу фамилию:").trim(); 
let firstName = prompt("Введите ваше имя:").trim(); 

function generateEmail(lastName, firstName) {
     let exr = "gmail.com"; 
     return [firstName, lastName].map(name => name.trim().toLowerCase()).join("_") + "@" + exr; }

console.log("Ваш email:", generateEmail(lastName, firstName));


//3
function randomID(length) {
    let chars = "hjdfujegtghrtjgkjukujkujasdswdhjwehjrfhjr0123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

console.log(randomID(10));


//4
function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; 
            }
        }
    }
    return arr;
}

console.log(manualSort([3, 2, 6, 4, 3, 7]));
