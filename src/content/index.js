const HARMONY_EXTENSION_MESSAGE = "TO_ONEWALLET_EXTENSION";

window.onerror = function(message, source, line, column, error) {
  console.log(
    "ONE ERROR HANDLER TO RULE THEM ALL:",
    message,
    ", source: ",
    source,
    ", line: ",
    line,
    ", column: ",
    column,
    ", error: ",
    error
  );
};

// Content script

window.addEventListener(
  "ONEWALLET_SERVICE_EVENT_REQUEST",
  function(event) {
    if (
      !event.detail ||
      !event.detail.type ||
      event.detail.type !== HARMONY_EXTENSION_MESSAGE
    ) {
      return;
    }
    const { payload } = event.detail;
    chrome.runtime.sendMessage({
      payload,
      messageSource: HARMONY_EXTENSION_MESSAGE,
    });
  },
  false
);
/*
window.addEventListener(
  "message",
  (event) => {
    console.log("event---->", event);
    if (event.source !== window) {
      return;
    }

    if (
      !event.data ||
      !event.data.type ||
      event.data.type !== HARMONY_EXTENSION_MESSAGE
    ) {
      return;
    }

    const { payload } = event.data;
    chrome.runtime.sendMessage(
      {
        payload,
        messageSource: HARMONY_EXTENSION_MESSAGE,
      },
      (response) => {
        console.log("response ", response);
        window.postMessage(response);
      }
    );
  },
  false
);
*/
// Listen message from extension background page/popup and re-send to current window (dashboard page)
chrome.runtime.onMessage.addListener(async (message) => {
  if (
    !message ||
    !message.type ||
    message.type !== "FROM_ONEWALLET_EXTENSION"
  ) {
    return true;
  }
  // window.postMessage(message);
  window.dispatchEvent(
    new CustomEvent("ONEWALLET_SERVICE_EVENT_RESPONSE", {
      detail: message,
    })
  );
  return true;
});

// Tell website that lunie(harmony) extension is available
window.postMessage({
  type: "FROM_ONEWALLET_EXTENSION",
  message: { type: "INIT_EXTENSION" },
});
try {
  const node = document.getElementsByTagName("body")[0];
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", chrome.extension.getURL("inject-script.js"));
  node.appendChild(script);
  console.log("Onewallet provider injected");
} catch (e) {
  console.error("Onewallet provider injection failed.", e);
}
