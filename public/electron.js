// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  mainWindow.on("closed", () => (mainWindow = null));

  var menu = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        { label: "New pdf file" },
        { label: "New Window" },
        { type: "separator" },
        { label: "Open File" },
        { label: "Add Folder to workspace" },
        { type: "separator" },
        { label: "Save" },
        { label: "Save as" },
        { label: "Auto Save" },
        { type: "separator" },
        { label: "Close Window" },
        {
          label: "Exit",
          click() {
            app.quit();
          },
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        { label: "Undo" },
        { label: "Redo" },
        { label: "Cut" },
        { label: "Copy" },
        { label: "Paste" },
        { label: "Find" },
      ],
    },
    {
      label: "view",
      submenu: [
        { label: "Full screen" },
        { label: "Show menu bar" },
        { label: "Zoom in" },
        { label: "Zoom out" },
      ],
    },
    {
      label: "Help",
      submenu: [
        { label: "Get started" },
        { label: "Documentation" },
        { label: "About" },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools.
  isDev && mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
