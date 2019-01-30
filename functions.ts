let MyTasks:Array<string> = [];

//first function
 function addTasks(task: string):number {
    return MyTasks.push(task);
 }//end

 //second function
 function listAllTasks(): void{
    console.log("Beginning of Array")
    MyTasks.forEach(function(task){
        console.log(task);
    })
    console.log("End of Array");
 }//end

 //Third Function
function deleteAllTasks(task:string):number{
    let index :number = MyTasks.indexOf(task);

    if(index > -1){
        MyTasks.splice(index,1);
    }

    else{
        console.log("Item: "+task+" not found!");
    }

    return MyTasks.length;

}//end

addTasks("element1");

addTasks("element2");

addTasks("element3");
listAllTasks();
deleteAllTasks("element2");
listAllTasks();