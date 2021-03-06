import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  console.log('isDev', isDev);

  win.loadURL(
    isDev
      ? 'http://localhost:9000'
      : `file://${app.getAppPath()}/index.html`,
  );
};

app.on('ready', createWindow);
