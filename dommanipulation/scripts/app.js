const addChapterBtn = document.querySelector("button");

addChapterBtn.addEventListener("click", () => {
    const favChapter = document.querySelector("#favchap");
    const listOfChapters = document.querySelector("#list");
    const listItem = document.createElement("li");

    // Create Delete button of the item
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.ariaLabel = "Close.";
    
    // insert values to the list Item
    listItem.append(favChapter.value, deleteBtn);

    // Insert list item to the list
    listOfChapters.appendChild(listItem);

    // clean input
    favChapter.value = "";

    // create functionality to delete item
    deleteBtn.addEventListener("click", () => {
        listOfChapters.removeChild(listItem);
    });


});
