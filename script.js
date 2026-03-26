// test

const addButton = document.getElementById("addButton");
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");

// Функция добавления товара
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName === "") return;

    // updateDivider();

    const li = document.createElement("li");

    // чекбокс
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        li.classList.add("completed");
        placeItem(li, true);
    } else {
        li.classList.remove("completed");
        placeItem(li, false);
    }
    updateDivider();
});

function placeItem(li, completed) {
    const divider = document.querySelector(".divider");
    const completedItems = shoppingList.querySelectorAll(".completed");

    if (completed) {
        // помещаем в конец отмеченных
        shoppingList.appendChild(li);
    } else {
        // помещаем в конец неотмеченных
        if (divider) {
            shoppingList.insertBefore(li, divider);
        } else if (completedItems.length > 0) {
            shoppingList.insertBefore(li, completedItems[0]);
        } else {
            shoppingList.appendChild(li);
        }
    }
}

function updateDivider() {
    const divider = document.querySelector(".divider");
    const allItems = shoppingList.querySelectorAll("li");
    const completedItems = shoppingList.querySelectorAll(".completed");
    const uncompletedItems = shoppingList.querySelectorAll("li:not(.completed)");

    // если нет разделения на группы — удалить линию
    if (completedItems.length === 0 || uncompletedItems.length === 0) {
        if (divider) divider.remove();
        return;
    }

    // создаём линию если её нет
    let hr = divider;
    if (!hr) {
        hr = document.createElement("hr");
        hr.classList.add("divider");
    }

    // вставляем перед первым отмеченным
    const firstCompleted = completedItems[0];
    shoppingList.insertBefore(hr, firstCompleted);
}

    // текст
    const span = document.createElement("span");
    span.textContent = itemName;

    // кнопка "Удалить"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить нафиг";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
    li.remove();
    updateDivider();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    placeItem(li, false);
    updateDivider();
    itemInput.value = "";
}

// Событие при нажатии кнопки
addButton.addEventListener("click", addItem);

// Событие при нажатии Enter в поле ввода
itemInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addItem();
});


