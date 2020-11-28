const main = document.querySelector("input#main");
const body = document.querySelector("body");
main.addEventListener("change", function () {
    console.log("I've changed you!");
    SetEnable();
});

function SetEnable() {
    let value = main.checked;
    console.log(main.checked);
    chrome.storage.sync.set({ value: value });
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            let msgObj = { wartki: "I've got ya!" };
            chrome.tabs.sendMessage(tab.id, msgObj);
        });
    });
    SetTheme(value);
}

window.onload = SetChecks;

function SetChecks() {
    // Set Check-box
    try {
        chrome.storage.sync.get("value", function (data) {
            const obj = JSON.parse(JSON.stringify(data));
            main.checked = obj.value;
            SetTheme(obj.value);
        });
    } catch (e) {
        console.log(e);
    }
}

function SetTheme(value) {
    if (!value) {
        body.style["background"] = "#EEE";
        body.style["color"] = "#111";
    } else {
        body.style["background"] = "#111";
        body.style["color"] = "#EEE";
    }
}
