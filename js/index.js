var spanName = document.querySelector('#span-name');
var spanExec = document.querySelector('#span-exec');
var spanIcon = document.querySelector('#span-icon');
var spanComment = document.querySelector('#span-comment');
var buttonGenerate = document.querySelector('#button-generate');
var panel = document.querySelector('#panel');


buttonGenerate.addEventListener('click', function(){
    console.log(inputs);
});

panel.addEventListener('input', function(event){
    var input = event.target;
    var id = input.id;
    if(id == 'input-name'){
        spanName.textContent = input.value;
        if(input.value == ''){
            spanName.textContent = 'Name of Application';
        }
    }
    if(id == 'input-exec'){
        spanExec.textContent = input.value;
        if(input.value == ''){
            spanExec.textContent = '/path/to/executable';
        }
    }
    if(id == 'input-icon'){
        spanIcon.textContent = input.value;
        if(input.value == ''){
            spanIcon.textContent = '/path/to/icon';
        }
    }
    if(id == 'input-comment'){
        spanComment.textContent = input.value;
        if(input.value == ''){
            spanComment.textContent = 'Comment here';
        }
    }
});

buttonGenerate.addEventListener('click', function(){

    var inputName = document.querySelector('#input-name');
    var inputExec = document.querySelector('#input-exec');
    var inputIcon = document.querySelector('#input-icon');
    var inputComment = document.querySelector('#input-comment');

    var ajax = new XMLHttpRequest();

    ajax.open('POST', 'http://localhost:3000/create-shortcut', true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

    data = //create json 

    ajax.send(data);

    ajax.onreadystatechange = function() {
    
        if (ajax.readyState == 4 && ajax.status == 200) {
        
            var data = ajax.responseText;
            
            console.log(data);
        }
    }
});





