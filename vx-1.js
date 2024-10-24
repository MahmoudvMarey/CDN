("use strict");
window.Suppa =
  window.Suppa ||
  (function () {
    const Suppa = {};
    const IS_DEV = window.location.hostname === "localhost";
    const SERVER_URL = IS_DEV
      ? "http://localhost:3000"
      : "https://app.suppa.ai";
    Suppa.isOpen = false;
    function attributeGetter(attribute) {
      const scriptAttribute =
        document.currentScript.getAttribute(attribute) ||
        document.currentScript.getAttribute("data-" + attribute) ||
        null;
      if (scriptAttribute) return scriptAttribute;
      try {
        const url = new URL(document.currentScript.src);
        return url.searchParams.get(attribute);
      } catch {
        return null;
      }
    }
    function anyAttributeGetter(attributes) {
      let result = null;
      attributes.forEach((attribute) => {
        result ||= attributeGetter(attribute);
      });
      return result;
    }
    Suppa.apiKey = attributeGetter("api-key");
    Suppa.manualInit = !!anyAttributeGetter([
      "manual-embed",
      "manual-init",
      "no-init",
    ]);
    Suppa.persistChats = !attributeGetter("no-history");
    Suppa.init = function (container) {
      if (!Suppa.apiKey) return console.warn("Suppa: No API key provided");
      container =
        (typeof container === "string"
          ? document.querySelector(container)
          : container) ?? null;
      const domInit = () => {
        let chatOpener = null;
        let chatDiv = null;
        if (!container) {
          chatOpener = document.createElement("button");
          chatOpener.id = "suppa-opener";
          chatOpener.style.position = "fixed";
          chatOpener.style.bottom = "25px";
          chatOpener.style.right = "25px";
          chatOpener.style.width = "70px";
          chatOpener.style.height = "70px";
          chatOpener.style.borderRadius = "50%";
          chatOpener.style.backgroundColor = "#6630ff";
          chatOpener.style.boxShadow = "0 0 10px #6630ff7f";
          chatOpener.style.border = "none";
          chatOpener.style.cursor = "pointer";
          chatOpener.style.outline = "none";
          chatOpener.style.transition = "all 0.3s ease-in-out";
          chatOpener.style.zIndex = "99999";
          chatOpener.style.color = "white";
          chatOpener.style.display = "none";
          chatOpener.style.opacity = "0";
          chatOpener.style.transition = "0.25s ease opacity";
          chatOpener.innerHTML = `
            <svg fill="#fff" width="104" height="118" viewBox="0 0 104 118" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 50%; height: 50%; margin: 25%; display: initial;">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.644 58.6361C59.1038 58.324 59.3791 57.8044 59.3791 57.2487V2.51967C59.3791 0.500871 57.1206 -0.695401 55.4505 0.438772L1.60222 37.0078C0.91278 37.476 0.5 38.2552 0.5 39.0886V94.9432C0.5 96.2889 2.00539 97.0865 3.1188 96.3306L58.644 58.6361ZM75.5761 43.6258C75.5761 42.6997 76.3269 41.9489 77.253 41.9489H101.115C102.504 41.9489 103.631 43.075 103.631 44.4642V100.624C103.631 101.55 102.88 102.301 101.954 102.301H92.63C91.7039 102.301 90.9531 103.052 90.9531 103.978V115.453C90.9531 117.74 88.1488 118.84 86.5936 117.164L73.3037 102.837C72.9863 102.495 72.5409 102.301 72.0743 102.301H4.60128C3.61606 102.301 3.43805 100.896 4.39213 100.651L74.3175 82.6396C75.0583 82.4487 75.5761 81.7807 75.5761 81.0156V43.6258Z"/>
            </svg>`;
          document.body.appendChild(chatOpener);
          chatDiv = document.createElement("div");
          chatDiv.id = "suppa";
          chatDiv.style.position = "fixed";
          chatDiv.style.bottom = "25px";
          chatDiv.style.right = "25px";
          chatDiv.style.width = "calc(100% - 50px)";
          chatDiv.style.height = "calc(100% - 50px)";
          chatDiv.style.maxWidth = "400px";
          chatDiv.style.maxHeight = "700px";
          chatDiv.style.boxShadow = "32px 32px 64px 28px #54586612";
          chatDiv.style.borderRadius = "16px";
          chatDiv.style.backgroundColor = "white";
          chatDiv.style.display = "none";
          chatDiv.style.zIndex = "100000";
          chatDiv.style.overflow = "hidden";
          document.body.appendChild(chatDiv);
        }
        const sendMessage = (data) => {
          chatIframe.contentWindow.postMessage(
            data,
            new URL(chatIframe.src).origin
          );
        };
        const openChat = () => {
          Suppa.isOpen = true;
          sendMessage({ type: "chat-open", isInContainer: !!container });
          if (chatDiv) {
            chatDiv.style.display = "block";
            if (gotColor) chatOpener.style.display = "none";
          }
        };
        const closeChat = () => {
          Suppa.isOpen = false;
          if (chatDiv) {
            chatDiv.style.display = "none";
            if (gotColor) chatOpener.style.display = "block";
          }
        };
        let gotColor = false;
        closeChat();
        const localStorageValue = Suppa.persistChats
          ? localStorage.getItem("suppa-chat-id")
          : undefined;
        let chatIdLocalStorage = null;
        if (localStorageValue) {
          try {
            const chatIds = JSON.parse(localStorageValue);
            const chatId = chatIds[Suppa.apiKey];
            if (chatId) {
              chatIdLocalStorage = chatId;
            }
          } catch (e) {
            chatIdLocalStorage = localStorageValue;
            localStorage.removeItem("suppa-chat-id");
            localStorage.setItem(
              "suppa-chat-id",
              JSON.stringify({ [Suppa.apiKey]: chatIdLocalStorage })
            );
          }
        }
        const chatIframe = document.createElement("iframe");
        chatIframe.id = "suppa-iframe";
        chatIframe.style.width = "100%";
        chatIframe.style.height = "100%";
        chatIframe.style.border = "none";
        chatIframe.src =
          SERVER_URL +
          "/chat/" +
          Suppa.apiKey +
          "/" +
          (chatIdLocalStorage ?? "");
        chatIframe.style.display = "none";
        (container ?? chatDiv).appendChild(chatIframe);
        if (container) openChat();
        else chatIframe.style.display = "block";
        window.addEventListener("message", (event) => {
          if (event.origin !== new URL(chatIframe.src).origin) return;
          const messageData = event.data;
          if (!messageData?.type) return;
          const messageType = messageData.type;
          switch (messageType) {
            case "color":
              if (!chatOpener) {
                chatIframe.style.display = "block";
                break;
              }
              if (messageData.color) {
                chatOpener.style.backgroundColor = messageData.color;
                chatOpener.style.boxShadow = `0 0 10px ${messageData.color}7f`;
              }
              chatOpener.style.display = "block";
              setTimeout(() => (chatOpener.style.opacity = "1"), 1);
              gotColor = true;
              break;
            case "check-open":
              if (Suppa.isOpen) {
                sendMessage({ type: "chat-open", isInContainer: !!container });
              }
              break;
            case "open":
              openChat();
              break;
            case "close":
              closeChat();
              break;
            case "chatId":
              const allChatIds = JSON.parse(
                localStorage.getItem("suppa-chat-id") || "{}"
              );
              localStorage.setItem(
                "suppa-chat-id",
                JSON.stringify({
                  ...allChatIds,
                  [Suppa.apiKey]: messageData.chatId,
                })
              );
              break;
            case "function":
              const callId = messageData.call.id;
              const callFunction = async (data) => {
                try {
                  const response = await fetch(data.url, {
                    method: data.method,
                    headers: data.headers,
                    ...(data.body ? { body: JSON.stringify(data.body) } : {}),
                  });
                  const text = await response.text();
                  try {
                    return JSON.parse(text);
                  } catch {
                    return text;
                  }
                } catch (error) {
                  return error.message;
                }
              };
              const sendResponse = (response) =>
                sendMessage({ type: "response", id: callId, data: response });
              callFunction(messageData.call.data)
                .then(sendResponse)
                .catch((error) => {
                  console.error(error);
                  sendResponse(null);
                });
              break;
          }
        });
        if (chatOpener)
          chatOpener.addEventListener("click", () => {
            if (Suppa.isOpen) {
              closeChat();
            } else {
              openChat();
            }
          });
      };
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        domInit();
      } else {
        document.addEventListener("DOMContentLoaded", domInit);
      }
      console.info("Suppa initialized");
      return Suppa;
    };
    if (!Suppa.manualInit) return Suppa.init();
    return Suppa;
  })();
