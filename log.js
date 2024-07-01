var container = document.createElement('div');
container.style.width ='300px';
container.style.padding = '20px';
container.style.borderRadius = '6px';
container.style.backgroundColor = 'white';

document.body.appendChild(container);

var heading = document.createElement('h2');
heading.textContent = 'Login';
heading.style.textAlign = 'center';

container.appendChild(heading);

var userlable = document.createElement('label');
userlable.textContent = 'UserName';
userlable.style.color = 'blue';
userlable.style.fontSize = '18px';

container.appendChild(userlable);

var userinput = document.createElement('input');
userinput.type = 'text';
userinput.style.width = '100%';
userinput.style.height = '25px';
userinput.style.outline = 'none';
userinput.style.margin = '15px 0';

container.appendChild(userinput);
var passlable = document.createElement('label');
passlable.textContent = 'Password';
passlable.style.color = 'blue';
passlable.style.fontSize = '18px';

container.appendChild(passlable);

var passinput = document.createElement('input');
passinput.type = 'password';
passinput.style.width = '100%';
passinput.style.height = '25px';
passinput.style.outline = 'none';
passinput.style.marginTop = '15px';

container.appendChild(passinput);


var btn = document.createElement('button');
btn.textContent = 'login';
btn.style.width = '100%';
btn.style.height = '30px';
btn.style.fontSize = '18px';
btn.style.textTransform = 'uppercase';
btn.style.backgroundColor = 'blue';
btn.style.color = 'pink';
btn.style.border = 'none';
btn.style.borderRadius = '6px';
btn.style.cursor = 'pointer';
btn.style.marginTop = '15px';

container.appendChild(btn);



btn.addEventListener('click', function(){
    var username = userinput.value;
    var password = passinput.value;

    if (username === 'ameer' && password === 'shaik'){
        alert('log in successful');
    }
    else{
        alert('Incorrect username & password');
    }
});

