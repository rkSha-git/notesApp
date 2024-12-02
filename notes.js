let btn = document.querySelector('button');
let notes = document.getElementById('notes');

btn.addEventListener('click', function(){
    let input = document.createElement('div');
    let text = document.createElement('textarea');
    let dl = document.createElement('span');
    let sav = document.createElement('i');
    input.appendChild(text);
    input.appendChild(dl);
    input.appendChild(sav);
    dl.textContent = "❌";
    sav.textContent = "✔️";
    notes.appendChild(input);
    save(); 
});

notes.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    } else if(e.target.tagName === 'I'){
        let content = e.target.parentElement.querySelector('textarea');
        content.textContent = content.value;
        save();
    }
});

function save(){
    localStorage.setItem('note', notes.innerHTML);
}

function display(){
    notes.innerHTML = localStorage.getItem('note');
}

display();
