import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

/**
 * A boolean that is true if the application is running in production mode.
 * @type {boolean}
 */
const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

/**
 * An immediately-invoked function expression that initializes the application.
 * This function waits for the app to be ready, then creates the main window.
 * In production, it loads the application from the 'app' directory.
 * In development, it loads the application from the development server.
 * @returns {Promise<void>}
 */
;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/`)
  }
})()

/**
 * Event listener for the 'window-all-closed' event.
 * This event is fired when all windows have been closed.
 * It quits the application.
 */
app.on('window-all-closed', () => {
  app.quit()
})

/**
 * Event listener for the 'message' event from the renderer process.
 * It replies with a message back to the renderer process.
 * @param {Electron.IpcMainEvent} event - The event object.
 * @param {any} arg - The argument sent from the renderer process.
 */
ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
