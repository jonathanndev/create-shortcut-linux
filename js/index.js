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
    var xmlHttp = GetXmlHttpObject();
    if(xmlHttp == null){
        console.log('error AJAX');
        return;
    } else{
        var url = '';
        xmlHttp.onreadystatechange = stateChanged();
        xmlHttp.open('POST', url, true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }    
});

function GetXmlHttpObject(){
    var xmlHttp = null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

function stateChanged() {
    if (xmlHttp.readyState == 1 || xmlHttp.readyState == 2 || xmlHttp.readyState == 3){
        console.log('loading...');
    }
    if (xmlHttp.readyState==4) {
        console.log(responseText);
    }
}



