import { tambah, kurang, kali, bagi } from "./math.js";

// Menggunakan let & const
let tasks = [];
const taskListEl = document.getElementById("taskList");
const inputEl = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

// Arrow function + Template literal
const renderTasks = () => {
  taskListEl.innerHTML = tasks
    .map(
      (task, index) => `
        <li>
          ${task}
          <button onclick="deleteTask(${index})">Hapus</button>
        </li>`
    )
    .join("");
};

// Destructuring + Spread
const addTask = () => {
  const { value } = inputEl; // destructuring dari object
  if (value.trim() !== "") {
    tasks = [...tasks, value]; // spread
    inputEl.value = "";
    renderTasks();
  }
};

// event listener tombol tambah
addBtn.addEventListener("click", addTask);

// supaya bisa dipanggil di onclick HTML
window.deleteTask = (index) => {
  tasks = tasks.filter((_, i) => i !== index);
  renderTasks();
};

// Class + Inheritance
class Storage {
  save(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
  }
  load() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
}

class TaskStorage extends Storage {
  constructor() {
    super();
    this.tasks = this.load();
  }
  add(task) {
    this.tasks.push(task);
    this.save(this.tasks);
  }
}

const store = new TaskStorage();

// Async/Await simulasi fetch
const getInitData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Belajar JS", "Latihan React"]), 1000)
  );
};

(async () => {
  const initialTasks = await getInitData();
  tasks = [...tasks, ...initialTasks];
  renderTasks();
})();

// Coba modul math.js di console
console.log("2 + 3 =", tambah(2, 3));
console.log("7 - 4 =", kurang(7, 4));
console.log("5 × 6 =", kali(5, 6));
console.log("10 ÷ 2 =", bagi(10, 2));
