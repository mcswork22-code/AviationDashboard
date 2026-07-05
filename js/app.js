function updateDateTime() {
    const el = document.getElementById("datetime");
    if (!el) return;

    const now = new Date();

    const week = ["日", "月", "火", "水", "木", "金", "土"];

    const date =
        `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;

    const time =
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    el.innerHTML = `${date} (${week[now.getDay()]})<br>${time}`;
}

document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});