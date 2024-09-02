function newnote(){

    const container = document.getElementById("topbar");
    const newpage = document.createElement("button");
    const newtext = document.createElement("textarea");

    const notes = document.querySelectorAll(".note");


    newpage.classList.add("notebutton");
    newtext.classList.add("note");

    newpage.addEventListener("click", function(){

        document.getElementById("info").style.display = "none";

        // Deselect any previously active note and button
        const activeButton = document.querySelector(".notebutton#active-button");
        const activeNote = document.querySelector(".note#active-note");

        if (activeButton) {
            activeButton.removeAttribute("id");
        }

        if (activeNote) {
            activeNote.removeAttribute("id");
        }

        // Set the new active button and note
        newpage.setAttribute("id", "active-button");
        newtext.setAttribute("id", "active-note");
    });

    container.append(newpage);
    textarea.append(newtext);
    newtext.placeholder = "Enter some text..."
    newpage.textContent = notes.length + 1;

}

function removenote(){

    const notes = document.querySelectorAll(".note");
    const lastNote = notes[notes.length - 1];

    if (notes.length === 1){
        document.getElementById("info").style.display = "flex";
    }

    lastNote.remove();

    const buttons = document.querySelectorAll(".notebutton");
    const lastButton = buttons[buttons.length - 1];
    lastButton.remove();

}

function deleteall(){
    document.getElementById("info").style.display = "flex";
    const allnotes = document.querySelectorAll(".note")
    const allbuttons = document.querySelectorAll(".notebutton");
    
    allnotes.forEach(note =>{
        note.remove();
    });

    allbuttons.forEach(button =>{
        button.remove();
    });

}