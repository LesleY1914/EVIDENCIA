function greeting(name){
    return`Hola, ${name}`;

function helloCourse(){
    return`Hello`
}

}
console.log(greeting("Node.js"));

module.exports = {
    greeting: greeting,
    helloCourse: helloCourse
}