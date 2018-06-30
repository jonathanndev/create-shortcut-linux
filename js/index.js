var spanName = document.querySelector('#span-name');
var spanExec = document.querySelector('#span-exec');
var spanIcon = document.querySelector('#span-icon');
var spanComment = document.querySelector('#span-comment');
var buttonGenerate = document.querySelector('#button-generate');
var panel = document.querySelector('.panel');


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




