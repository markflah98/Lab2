import {toDointerface} from './toDoInterface';

class toDoClass implements toDointerface{
    MyTasks:Array<string> = [];

    addTask(task: string):number {
        return this.MyTasks.push(task);
     }

    listAllTasks(): void{
        console.log("Beginning of Array");
        MyTasks.forEach(function(task){
            console.log(task);
        })
        console.log("End of Array");
     }

    deleteAllTasks(task:string):number{
        let index :number = MyTasks.indexOf(task);
    
        if(index > -1){
            MyTasks.splice(index,1);
        }
    
        else{
            console.log("Item: "+task+" not found!");
        }
    
        return this.MyTasks.length;
    }

}

let testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.addTask("element3");
testClass.listAllTasks();
testClass.deleteAllTasks("element2");
testClass.listAllTasks();

