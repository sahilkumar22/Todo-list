var noOftasks=0;
setTasksCount();
function setTasksCount(){
    var p=document.getElementById("total-count");
    p.innerHTML=noOftasks +" tasks left";
}

//delete button functionality:-to delete the tasks from tasks list
deleteTask();
function deleteTask(){
    let deleteList=document.getElementsByClassName("delete-tasks");
    var i;
    for(i=0;i<deleteList.length;i++){
        deleteList[i].addEventListener("click",function(){
            var div=this.parentElement;
            noOftasks--;
            setTasksCount();
            div.remove();
        })
    }
}


//ADD task button functionality:-To add the task in tasks list
let addButton=document.getElementById("add-button");
addButton.addEventListener("click",function(){
    var inputValue=document.getElementById("task").value;
    var div=document.createElement("div");
    div.className="uncomplete";
    div.classList.add("tsk");
    var li=document.createElement("li");
    var i=document.createElement("i");
    if(inputValue=== ""){
        alert("You Must Write Something");
    }else{
        i.className="fas fa-trash delete-tasks";
        li.innerHTML=inputValue;
        div.append(li,i);
        var myTasksList=document.getElementById('tasks-container');
        myTasksList.append(div);
        noOftasks++;
       setTasksCount();
        deleteTask();
        var input=document.getElementById("task");
        input.value=""; 
    }
   
})

//All button functionality:to show both uncomplete and completed tasks
var allButton=document.getElementById('all-button');
allButton.addEventListener("click",function(){
    var tasksList=document.getElementsByClassName("complete");
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='flex';
    }
    var tasksList=document.getElementsByClassName('uncomplete');
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='flex';
    }
})

//Completed button functionality:to show only completed tasks
var completeButton=document.getElementById('complete-button');
completeButton.addEventListener("click",function(){
    var tasksList=document.getElementsByClassName("complete");
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='flex';
        tasksList[i].classList.add("checked");
    }
    var tasksList=document.getElementsByClassName('uncomplete');
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='none';
    }
})

//uncomplete button functionality:to show only uncomplete tasks
var uncompleteButton=document.getElementById('uncomplete-button');
uncompleteButton.addEventListener("click",function(){
    var tasksList=document.getElementsByClassName("complete");
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='none';
    }
    var tasksList=document.getElementsByClassName('uncomplete');
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='flex';
    }
})



//complete all tasks button
var completeAll=document.getElementById("complete-all");
completeAll.addEventListener('click',function(){
    var totalDiv=document.querySelectorAll("ul .tsk");
    for(var i=0;i<totalDiv.length;i++){
       if(totalDiv[i].classList.contains("uncomplete")){
           totalDiv[i].classList.remove("uncomplete");
           totalDiv[i].classList.add("complete"); 
       }
    }
    noOftasks=0;
    setTasksCount();
    
})

//Clear All Completed Task button
var clearAllbtn=document.getElementById('clear-complete');
clearAllbtn.addEventListener("click",function(){
    var tasksList=document.querySelectorAll("ul .complete");
    for(var i=0;i<tasksList.length;i++){
        tasksList[i].remove();
    }
 
})


//toggling class complete and uncomplete when clicked on the list
var list=document.querySelector('ul');
list.addEventListener('click',function(e){
    if(e.target.tagName==="DIV"){
        e.target.classList.toggle("uncomplete")
        e.target.classList.toggle("complete");        
    }else if(e.target.tagName==="LI"){
        e.target.parentElement.classList.toggle("uncomplete");
        e.target.parentElement.classList.toggle("complete");    
    }
    var tasksList=document.querySelectorAll("ul .uncomplete");
    noOftasks=tasksList.length;
    setTasksCount();

},false);