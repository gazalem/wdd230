const addChapterBtn = document.querySelector("button");

addChapterBtn.addEventListener("click", () => {
    const favChapter = document.querySelector("#favchap");
    const listOfChapters = document.querySelector("#list");
    const listItem = document.createElement("li");

    // Create Delete button of the item
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-regular fa-trash-alt"></i>`;
    deleteBtn.setAttribute("aria-label", "Close");
    deleteBtn.style.border = "none";
    deleteBtn.style.color = "red";
    deleteBtn.style.backgroundColor = "transparent";
    deleteBtn.style.fontSize = "1.8rem"
    
    // insert values to the list Item
    if (favChapter.value === "") {
        //align here
        favChapter.focus();
        return;
    }
    listItem.append(favChapter.value, deleteBtn);

    // Insert list item to the list
    listOfChapters.appendChild(listItem);

    // clean input
    favChapter.value = "";
    favChapter.focus();

    // create functionality to delete item
    deleteBtn.addEventListener("click", () => {
        listOfChapters.removeChild(listItem);
    });


});
