

let variable;
console.log(variable); // outputs "undefined"

function testFunc() {
    // no return statement
}
console.log(testFunc()); // outputs "undefined"

const whatthis = (userInput) => {

    if (userInput) {
        // Proceed with processing userInput
        
    }

    // Proceed with processing userInput
}
// An undefined or null userInput will bypass this block.


let result = null;
console.log(result); // outputs "null"



export default function handler(req: Request, res: Response) {
    const { variable } = req.params

    let params = JSON.parse(userInput); // userInput might be '{"__proto__": {"isAdmin": true}}'
    let obj = {};
    Object.assign(obj, params);
    console.log(obj.isAdmin);
    return (res.json({
        messsage: obj.isAdmin
    }))
