const addBtn = document.getElementById("addEventBtn");
const eventsContainer = document.getElementById("eventsContainer");
const clearAllBtn = document.getElementById("clearAll");
const sampleBtn = document.getElementById("sampleEvents");

addBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (title === "" || date === "") {
        alert("Please fill required fields");
        return;
    }

    addEventCard(title, date, category, description);
    clearForm();
});

function addEventCard(title, date, category, description) {
    eventsContainer.querySelector(".empty")?.remove();

    const div = document.createElement("div");
    div.className = "event";

    div.innerHTML = `
        <button class="close-btn">×</button>
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
    `;

    eventsContainer.appendChild(div);
}


eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
    }
});

clearAllBtn.addEventListener("click", () => {
    eventsContainer.innerHTML =
        `<p class="empty">No events yet. Add your first event!</p>`;
});

sampleBtn.addEventListener("click", () => {
    addEventCard("Tech Conference", "2026-03-01", "Conference", "Web Development Event");
    addEventCard("JS Workshop", "2026-03-05", "Workshop", "Learn DOM Manipulation");
});

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}


const domInput = document.getElementById("domInput");
const domText = document.getElementById("domText");

domInput.addEventListener("keyup", (e) => {
    domText.innerText = "You Pressed: " + e.key;
});