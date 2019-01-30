var MyTasks = [];
//first function
function addTasks(task) {
    return MyTasks.push(task);
} //end
//second function
function listAllTasks() {
    console.log("Beginning of Array");
    MyTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of Array");
} //end
//Third Function
function deleteAllTasks(task) {
    var index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
    }
    else {
        console.log("Item: " + task + " not found!");
    }
    return MyTasks.length;
} //end
addTasks("element1");
addTasks("element2");
addTasks("element3");
listAllTasks();
deleteAllTasks("element2");
listAllTasks();
