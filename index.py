def add(a, b):
    return a + b

print(add(2, 3))


def is_even(n):
    return n % 2 == 0

print(is_even(4))


def max3(a, b, c):
    return max(a, b, c)

print(max3(3, 9, 5))


def fact(n):
    f = 1
    for i in range(n, 0, -1):
        f *= i
    return f

print(fact(5))


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(7), is_prime(10))


def vowels(s):
    return len([c for c in s.lower() if c in "aeiou"])

print(vowels("iskander"))


def rev(s):
    return s[::-1]

print(rev("iskander"))


def avg(l):
    return sum(l) / len(l)

print(avg([1, 2, 3, 4]))


def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4))


def user_info(**kw):
    return ", ".join(f"{k}: {v}" for k, v in kw.items())

print(user_info(name="iskander", age=20, city="tashkent"))

print([i * i for i in range(1, 21)])

print([i for i in range(1, 21) if i % 2 == 0])

words = ["apple", "kiwi", "banana", "fig", "pineapple"]
print([len(w) for w in words])

print(sorted(words, key=lambda w: len(w)))

nums = [1, -2, 3, -4, 5]
print(list(map(lambda x: x * 2, nums)))

print(list(filter(lambda x: x > 0, nums)))

print([w for w in words if len(w) > 5])

print(list(map(int, ["1", "22", "333"])))

users = [
    {"name": "ali", "age": 25},
    {"name": "vali", "age": 17},
    {"name": "sami", "age": 30},
    {"name": "nodir", "age": 15},
]
print(sorted(users, key=lambda u: u["age"]))

print([u["name"] for u in users if u["age"] > 18])


class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f"{self.name}, {self.age}")

User("iskander", 20).info()


class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

c = Car("bmw", "m5", 2020)
print(c.brand, c.model, c.year)


class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("not enough money")
        else:
            self.balance -= amount

acc = BankAccount(100)
acc.deposit(50)
acc.withdraw(30)
acc.withdraw(500)
print(acc.balance)


class Product:
    def __init__(self, name, price, count):
        self.name = name
        self.price = price
        self.count = count

p = Product("phone", 500, 3)
print(p.name, p.price, p.count)


class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def info(self):
        print(f"{self.name}, {self.salary}")


class Developer(Employee):
    def __init__(self, name, salary, lang):
        super().__init__(name, salary)
        self.lang = lang

    def info(self):
        print(f"{self.name}, {self.salary}, {self.lang}")

Developer("iskander", 1000, "python").info()

names = ["ali", "vali", "sami"]
with open("users.txt", "w", encoding="utf-8") as f:
    for n in names:
        f.write(n + "\n")

with open("users.txt", "r", encoding="utf-8") as f:
    print(len(f.readlines()))

try:
    a = int(input("a: "))
    b = int(input("b: "))
    print(a / b)
except ZeroDivisionError:
    print("cannot divide by zero")
except ValueError:
    print("enter numbers")

products = []

while True:
    cmd = input("add / del / show / exit: ")
    if cmd == "add":
        n = input("name: ")
        p = float(input("price: "))
        c = int(input("count: "))
        products.append({"name": n, "price": p, "count": c})
    elif cmd == "del":
        n = input("name: ")
        products = [x for x in products if x["name"] != n]
    elif cmd == "show":
        for i, x in enumerate(products, 1):
            print(i, x["name"], x["price"], x["count"])
    elif cmd == "exit":
        break
    else:
        print("unknown command")

import json
import os

path = "todo.json"
tasks = []

if os.path.exists(path):
    with open(path, "r", encoding="utf-8") as f:
        tasks = json.load(f)

while True:
    cmd = input("add / show / done / del / exit: ")
    if cmd == "add":
        tasks.append({"title": input("task: "), "done": False})
    elif cmd == "show":
        for i, t in enumerate(tasks, 1):
            print(i, "[x]" if t["done"] else "[ ]", t["title"])
    elif cmd == "done":
        i = int(input("number: "))
        if 0 < i <= len(tasks):
            tasks[i - 1]["done"] = True
    elif cmd == "del":
        i = int(input("number: "))
        if 0 < i <= len(tasks):
            tasks.pop(i - 1)
    elif cmd == "exit":
        break
    else:
        print("unknown command")

    with open(path, "w", encoding="utf-8") as f:
        json.dump(tasks, f, ensure_ascii=False)