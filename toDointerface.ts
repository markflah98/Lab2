export interface toDointerface{
    MyTasks:Array<String>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteAllTasks(task:string):number;
}