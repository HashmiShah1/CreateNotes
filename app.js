const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelector('.input-box'); // Changed to let

let showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "imgs/delete.png";
    inputBox.appendChild(img); 
    notesContainer.appendChild(inputBox); 
    updateStorage(); // Added updateStorage here to save after adding new note
});

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P"){ // Changed to uppercase "P"
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        });
    }
});
