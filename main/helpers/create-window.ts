import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
  Rectangle,
} from 'electron'
import Store from 'electron-store'

/**
 * Creates a new Electron window with persistent state.
 * The window's position and size are saved and restored between sessions.
 *
 * @param {string} windowName - The name of the window, used to store its state.
 * @param {BrowserWindowConstructorOptions} options - The options for creating the BrowserWindow.
 * @returns {BrowserWindow} The created BrowserWindow instance.
 */
export const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = 'window-state'
  const name = `window-state-${windowName}`
  const store = new Store<Rectangle>({ name })
  const defaultSize = {
    width: options.width,
    height: options.height,
  }
  let state = {}

  /**
   * Restores the window's state from the store.
   *
   * @returns {Rectangle} The restored window state.
   */
  const restore = () => store.get(key, defaultSize)

  /**
   * Gets the current position and size of the window.
   *
   * @returns {Rectangle} The current position and size of the window.
   */
  const getCurrentPosition = () => {
    const position = win.getPosition()
    const size = win.getSize()
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    }
  }

  /**
   * Checks if the window is within the bounds of a display.
   *
   * @param {Rectangle} windowState - The state of the window.
   * @param {Rectangle} bounds - The bounds of the display.
   * @returns {boolean} Whether the window is within the bounds.
   */
  const windowWithinBounds = (windowState, bounds) => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    )
  }

  /**
   * Resets the window to its default position and size.
   *
   * @returns {Rectangle} The default window state.
   */
  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    })
  }

  /**
   * Ensures that the window is visible on some display.
   *
   * @param {Rectangle} windowState - The state of the window.
   * @returns {Rectangle} The corrected window state.
   */
  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds)
    })
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults()
    }
    return windowState
  }

  /**
   * Saves the window's state to the store.
   */
  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition())
    }
    store.set(key, state)
  }

  state = ensureVisibleOnSomeDisplay(restore())

  const win = new BrowserWindow({
    ...state,
    ...options,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      ...options.webPreferences,
    },
  })

  win.on('close', saveState)

  return win
}
