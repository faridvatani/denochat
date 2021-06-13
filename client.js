let ws;
window.addEventListener("DOMContentLoaded", () => {
    ws = new WebSocket(`ws://localhost:3000/ws`);
    ws.addEventListener("open", onConnectionOpen);
    ws.addEventListener("message", onMessageReceived);
  });

function onConnectionOpen(){
    console.log(`Connection Opened`);
}

function onMessageReceived(event){
    console.log("Message received", event);
}