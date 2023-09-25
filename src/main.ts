
console.log("Hallo")

//String name = "Florian";
//let variable-Name : Type   = Wert
  let name          : string = "Florian"


let money: number = 612.54
let bool : boolean = false

console.log(name)
console.log(money)
console.log(bool)

name = "Zeshan"

console.log(name)

const lastName: string = "Weber"

console.log(lastName)

function functionName(value: string): string {
    let result: string = "Hallo" + value;
    return result;
}

console.log(functionName("test"))

let mitarbeiter: {name: string, lastName: string} = {
    name: "Florian",
    lastName: "Weber"
}

console.log(mitarbeiter)

mitarbeiter.name = "Zeshan"

console.log(mitarbeiter.name)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

if (3 > 5) {
    console.log("Wahr")
}
else {
    console.log("Falsch")
}
