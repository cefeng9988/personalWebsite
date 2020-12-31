//can not connect local file to front-end web development platform i.e ReactJS
//node.js not compatible when ran through React.js
//FAILED

const fs = require("fs");

//helper function, creates instance of JSON file
function loadJSON(fileName = ''){
    return require(fileName);
};

//helper function, loads the JSON file with our data
function saveJSON(fileName = '', json = '""') {
    return fs.writeFileSync(fileName, JSON.stringify(json));
};

const deleteTodo = (id) => {
    const data = loadJSON('./todosJSON.json');
    const filteredData = data.filter(todo=>todo[0] !== id); //successfully removed by key==id
    saveJSON('todosJSON.json', filteredData);
}

const  addTodo = (id, input) => {
    //console.log("readFile: ", readFileSync('todosJSON.json').toString());
    const data = loadJSON('./todosJSON.json');
    data.push([id , input]);
    saveJSON('todosJSON.json', data);
}

const myStorage = window.localStorage;
const jsonGet = window.localStorage.getItem('./todosJSON.json')
//console.log(loadJSON('./todosJSON.json'));
//console.log(jsonGet);
// deleteTodo(11);
//addTodo(12, "Test add 12");















// //original read/write functions that write and read but it reads as an object not an array
// fs.writeFile('todosJSON.json', eachData, (error) => {
//     // In case of a error throw err exception.
//     if (error) throw err;
// })
//
// fs.readFile('todosJSON.json', (error, txtString) => {
//
//     if (error) throw err;
//     console.log(txtString.toString());
//
// })


