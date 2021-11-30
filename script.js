window.addEventListener("load", () => {
    const formdetail = document.querySelector(".detail-form");
    const inputdata = document.querySelector("#inputdata");
    const submit_btn = document.querySelector("#submit_btn");
    const task_list = document.querySelector(".second-section");
    const nooftask = document.querySelector("#count");
    const pending = document.querySelector(".pending");
    var x = 0;
    nooftask.innerHTML = x;


    formdetail.addEventListener("submit", (e) => {
        e.preventDefault();

        const task_content = inputdata.value;
        if (!task_content) {
            alert("please add task");
        } else {
            x=x+1;
            nooftask.innerHTML= x;
            pending.innerHTML=x+" " +" Pending tasks";
        
        const singletask = document.createElement("div");
        singletask.classList.add("mainboxfortask");
        const list_el_content = document.createElement("input");
        list_el_content.classList.add("each_task");

        task_list.appendChild(singletask);
        singletask.appendChild(list_el_content);
        list_el_content.value = task_content;
        list_el_content.setAttribute("readonly", "readonly");

        const edit_button = document.createElement("button");
        edit_button.classList.add("edit_btn");
        edit_button.innerText = "Edit";
        const detele_button = document.createElement("button");
        detele_button.innerText = "Delete";
        detele_button.classList.add("delete_btn");
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.classList.add("check-_box");
        singletask.appendChild(edit_button);
        singletask.appendChild(detele_button);
        singletask.appendChild(check);

        inputdata.value = "";




        detele_button.addEventListener("click", () => {
            singletask.remove();
            x=x-1;
            nooftask.innerHTML = x;
            if(x===0){
                pending.innerHTML="No Pending tasks";
            }else{
            pending.innerHTML=x+" " +" Pending tasks";}
        });


        edit_button.addEventListener("click", () => {
            if (check.checked == true) {
                edit_button.disabled = true
            } else {

                if (edit_button.innerText.toLowerCase() == "edit") {
                    list_el_content.removeAttribute("readonly");
                    edit_button.innerText = "Save"
                } else {
                    edit_button.innerText = "Edit";
                    list_el_content.setAttribute("readonly", "readonly");
                }
            }
        })
    }
    
    })
})