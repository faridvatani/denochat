let ws;

window.addEventListener("DOMContentLoaded", () => {
    ws = new WebSocket(`ws://localhost:3000/ws`);
    ws.addEventListener("open", onConnectionOpen);
    ws.addEventListener("message", onMessageReceived);

    const queryParams = getQueryParams();
    console.log(queryParams);
});

function getQueryParams(){
    const search = window.location.search.substring(1);
    const pairs = search.split("&");
    const params = {};

    for (const pair of pairs) {
        const items = pair.split("=");
        params[decodeURIComponent(items[0])] = decodeURIComponent(items[1]);
    }

    return params;
}

function onConnectionOpen(){
    console.log(`Connection Opened`);
}

function onMessageReceived(event){
    console.log("Message received", event);
}