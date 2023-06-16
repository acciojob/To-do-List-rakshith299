//your code here

function addTodo(){
    let input = document.getElementById("newTodoInput");
    let ol = document.getElementById("todoList");
    let error = document.getElementById("error");

    
    if(input.value === ''){
        error.innerText = "Please enter valid Task";
    }

    document.getElementById("newTodoInput").addEventListener("focus", (event) => {
        error.innerText = "";
    });

    if(input.value !== ''){
        const li = document.createElement("li");
        li.innerText = input.value;
        ol.appendChild(li);
        input.value = "";


    }



    
}

