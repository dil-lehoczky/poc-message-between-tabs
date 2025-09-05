import './style.css'

const app = document.getElementById("app")

window.addEventListener("message", (event) => {
  if (
    event.origin !== "https://localhost:5173" ||
    event.data["sender"] !== "application"
  ) {
    return;
  }

  console.log("iframe received message: ", event);

  const pre = document.createElement("pre")
  pre.textContent = JSON.stringify(event.data)
  app.append(pre)
});