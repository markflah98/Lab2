"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.MyTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.MyTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        console.log("Beginning of Array");
        MyTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of Array");
    };
    toDoClass.prototype.deleteAllTasks = function (task) {
        var index = MyTasks.indexOf(task);
        if (index > -1) {
            MyTasks.splice(index, 1);
        }
        else {
            console.log("Item: " + task + " not found!");
        }
        return this.MyTasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.addTask("element3");
testClass.listAllTasks();
testClass.deleteAllTasks("element2");
testClass.listAllTasks();
