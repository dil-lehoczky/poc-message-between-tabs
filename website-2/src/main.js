import './style.css'

window.addEventListener("message", (event) => {
  if (
    event.origin !== "http://localhost:5173" ||
    event.data["sender"] !== "application"
  ) {
    return;
  }
  console.log("iframe received message: ", event);
});