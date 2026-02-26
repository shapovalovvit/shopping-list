// test

const addButton = document.getElementById("addButton");
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");

// Функция добавления товара
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName === "") return;

    const li = document.createElement("li");

    // чекбокс
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            shoppingList.appendChild(li);
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    });

    // текст
    const span = document.createElement("span");
    span.textContent = itemName;

    // кнопка "Удалить"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    shoppingList.appendChild(li);
    itemInput.value = "";
}

// Событие при нажатии кнопки
addButton.addEventListener("click", addItem);

// Событие при нажатии Enter в поле ввода
itemInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addItem();
});
