let table=document.querySelector("table");
let input=document.querySelector("#add2");
let button=document.querySelector("#add1");
button.addEventListener("click", function(){
    if(input.value==""){
        alert("Enter Task To Add");
    }
    else{
    let row=table.insertRow(-1);// used to add row in last 
    let cell0=row.insertCell(0);
    let cell1=row.insertCell(1);
    let cell2=row.insertCell(2);//used to add data to column 
    let cell3=row.insertCell(3);
    cell0.innerHTML='<i class="fa-solid fa-thumbs-up complete"></i>';
    cell1.innerText=input.value;
    cell2.innerText="Pending"
    cell3.innerHTML='<i class="fa-solid fa-xmark delete"></i>';
    input.value="";
    cell0.classList.add("complete");
    cell3.classList.add("delete");
    }
})
function complete(tag,e){
    if(tag=="I"){
       e.parentElement.parentElement.cells[2].innerText="Completed";
       alert(`! Congratulation you have completed your task `);
    }
    else if(tag =="TD"){
    e.parentElement.cells[2].innerText="Completed"; 
    alert(`! Congratulation you have completed your task `);
    }

}
function delte(tag,e){
    let con=confirm("Do You Want To Delete the task");
     if(tag=="I"){
       let index= e.parentElement.parentElement.rowIndex;
       if(con){
       table.deleteRow(index);
       }
     }
     else if(tag=="TD"){
        let index=e.parentElement.rowIndex;
        if (con){
        table.deleteRow(index);//used to delete the row 
        }
     }

}

table.addEventListener("click",function(event){
    let e=event.target;
    let tag=e.nodeName;//gives the tag name 
    if(e.classList.contains("complete")){
        complete(tag,e);
    }
    else if(e.classList.contains("delete")){
        delte(tag,e);

    }
});