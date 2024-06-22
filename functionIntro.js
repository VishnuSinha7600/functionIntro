// 1 Variable Declaration and Assignment

function printName(name){
    return name
}

var name = printName("Masai")
console.log(name)

// 2 Dynamic Typing Challenge

function printDynamicType(value){
    console.log(typeof(value))
}
printDynamicType(10)
printDynamicType("Hello")



// 3 Data Types Challenge



function printDataType(value){
    console.log(typeof(value))
}

printDataType("Hello"); // Expected Output: string
printDataType(10); // Expected Output: number
printDataType(true); // Expected Output: boolean
printDataType([1, 2, 3]); // Expected Output: object
printDataType({ key: "value" }); // Expected Output: object
printDataType(null); // Expected Output: object
printDataType(undefined); // Expected Output: undefined



console.log("next")
// 4 Null and Undefined Challenge

function printNullableType(value){
    if(value == null){
        console.log(null)
    }else if(value == undefined){
       console.log("undefined")
    }else{
        console.log(typeof(value))
    }
}

printNullableType(null); // Expected Output: null
printNullableType(undefined); // Expected Output: undefined
printNullableType("Hello"); // Expected Output: string
printNullableType(10); // Expected Output: number




// 5 Truthy and Falsey Values Challenge

function checkTruthy(value){
    if(value){
        console.log("true")
    }else{
        console.log("false")
    }
}
checkTruthy(""); // Expected Output: false
checkTruthy(0); // Expected Output: false
checkTruthy(null); // Expected Output: false
checkTruthy(undefined); // Expected Output: false
checkTruthy("Hello"); // Expected Output: true
checkTruthy(10); // Expected Output: true
checkTruthy({}); // Expected Output: true




// 6 Template Literals Challenge


function composeMessage(name , age , city){
    const message = `Hello ${name}, you are ${age} years old and live in ${city}.`
    return message
}

const message = composeMessage("john", 25 , "New York")

console.log(message)