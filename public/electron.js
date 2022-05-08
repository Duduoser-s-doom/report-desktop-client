const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const storage = require("electron-json-storage")
const isDev = require("electron-is-dev");

require("@electron/remote/main").initialize();

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 900,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

app.whenReady().then(createWindow);

// Push Cmd + Q to exit.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const key = "elements";
ipcMain.on("FETCH_ELEMENTS", (event, message) => {
  storage.get(key, (error, data) => {
    if (data.elements && data.elements.length > 0) {
      win.send("HANDLE_FETCH_ELEMENTS", {
        success: true,
        message: data.elements,
      });
    } else {
      win.send("HANDLE_FETCH_ELEMENTS", {
        success: false,
        message: [],
      });
    }
  });
});

ipcMain.on("SAVE_ELEMENTS", (event, message) => {
  storage.set(key, { elements: message }, (error, data) => {
    if (error) {
      win.send("HANDLE_SAVE_ELEMENTS", {
        success: false,
      });
    } else {
      win.send("HANDLE_SAVE_ELEMENTS", {
        success: true,
      });
    }
  });
});
