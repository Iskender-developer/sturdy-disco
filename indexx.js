{
    console.log("Hello, JavaScript!");
}

{
    const name = "iskander";
    const age = 20;
    const city = "tashkent";
    console.log(name, age, city);
}

{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}

{
    const a = 10, b = 3;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
}

{
    const n = 8;
    console.log(n % 2 === 0);
}

{
    const n = -5;
    if (n > 0) console.log("positive");
    else if (n < 0) console.log("negative");
    else console.log("zero");
}

{
    const a = 4, b = 9;
    console.log(a > b ? a : b);
}

{
    const a = 4, b = 9, c = 7;
    console.log(Math.max(a, b, c));
}

{
    const age = 19;
    console.log(age >= 18);
}

{
    const n = 15;
    console.log(n % 3 === 0 && n % 5 === 0);
}

{
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const n = 3;
    console.log(months[n - 1]);
}

{
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const n = 5;
    console.log(days[n - 1]);
}

{
    const y = 2024;
    console.log((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0);
}

{
    const a = 10, b = 5, op = "/";
    switch (op) {
        case "+": console.log(a + b); break;
        case "-": console.log(a - b); break;
        case "*": console.log(a * b); break;
        case "/": console.log(b === 0 ? "cannot divide by zero" : a / b); break;
        default: console.log("unknown operation");
    }
}

{
    const n = 50;
    console.log(n >= 10 && n <= 100);
}

{
    const s = 75;
    if (s >= 90) console.log("A");
    else if (s >= 70) console.log("B");
    else if (s >= 50) console.log("C");
    else console.log("F");
}

{
    for (let i = 1; i <= 100; i++) console.log(i);
}

{
    for (let i = 100; i >= 1; i--) console.log(i);
}

{
    for (let i = 2; i <= 100; i += 2) console.log(i);
}

{
    for (let i = 1; i <= 100; i += 2) console.log(i);
}

{
    let s = 0;
    for (let i = 1; i <= 100; i++) s += i;
    console.log(s);
}

{
    let s = 0;
    for (let i = 2; i <= 100; i += 2) s += i;
    console.log(s);
}

{
    const n = 7;
    for (let i = 1; i <= 10; i++) console.log(`${n} * ${i} = ${n * i}`);
}

{
    for (let n = 1; n <= 10; n++) {
        for (let i = 1; i <= 10; i++) console.log(`${n} * ${i} = ${n * i}`);
    }
}

{
    const n = 5;
    let f = 1;
    for (let i = n; i > 0; i--) f *= i;
    console.log(f);
}

{
    const n = 12345;
    console.log(String(Math.abs(n)).length);
}

{
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
    for (const x of arr) console.log(x);
}

{
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
    let s = 0;
    for (const x of arr) s += x;
    console.log(s);
}

{
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
    let s = 0;
    for (const x of arr) s += x;
    console.log(s / arr.length);
}

{
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
    console.log(Math.max(...arr));
}

{
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
    console.log(Math.min(...arr));
}

{
    const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
    let c = 0;
    for (const x of arr) if (x % 2 === 0) c++;
    console.log(c);
}

{
    const arr = [5, -2, 8, -1, 9, 0, 7];
    const r = [];
    for (const x of arr) if (x > 0) r.push(x);
    console.log(r);
}

{
    const arr = [1, 2, 3, 4, 5];
    const r = [];
    for (let i = arr.length - 1; i >= 0; i--) r.push(arr[i]);
    console.log(r);
}

{
    const arr = [1, 2, 2, 3, 3, 3, 4];
    console.log([...new Set(arr)]);
}

{
    const arr = [5, 2, 8, 8, 9, 3];
    const u = [...new Set(arr)].sort((a, b) => b - a);
    console.log(u[1]);
}

{
    const add = (a, b) => a + b;
    console.log(add(2, 3));
}

{
    const isEven = (n) => n % 2 === 0;
    console.log(isEven(4));
}

{
    const maxOf = (arr) => Math.max(...arr);
    console.log(maxOf([3, 9, 2]));
}

{
    const rev = (s) => s.split("").reverse().join("");
    console.log(rev("iskander"));
}

{
    const isPal = (s) => s === s.split("").reverse().join("");
    console.log(isPal("level"), isPal("iskander"));
}

{
    const vowels = (s) => s.toLowerCase().split("").filter((c) => "aeiou".includes(c)).length;
    console.log(vowels("iskander"));
}

{
    const longest = (s) => s.split(" ").reduce((a, b) => (b.length > a.length ? b : a), "");
    console.log(longest("i love javascript very much"));
}

{
    const user = {
        name: "iskander",
        age: 20,
        email: "iskander@mail.com",
        info() {
            console.log(`${this.name}, ${this.age}, ${this.email}`);
        },
    };
    user.info();
}

{
    const products = [
        { name: "phone", price: 500, category: "tech" },
        { name: "book", price: 10, category: "books" },
        { name: "laptop", price: 1200, category: "tech" },
        { name: "pen", price: 2, category: "office" },
    ];
    const maxPrice = 100;
    console.log(products.filter((p) => p.price < maxPrice));
}

{
    const users = [
        { name: "ali", age: 25 },
        { name: "vali", age: 17 },
        { name: "sami", age: 30 },
        { name: "nodir", age: 15 },
    ];
    const adults = users.filter((u) => u.age >= 18);
    const names = adults.map((u) => u.name);
    const totalAge = users.reduce((s, u) => s + u.age, 0);
    console.log(adults);
    console.log(names);
    console.log(totalAge);
}