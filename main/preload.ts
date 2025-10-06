import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

/**
 * An object that handles IPC communication between the main and renderer processes.
 * @property {function(channel: string, value: unknown): void} send - Sends a message to the main process.
 * @property {function(channel: string, callback: (...args: unknown[]) => void): () => void} on - Listens for messages from the main process.
 */
const handler = {
  /**
   * Sends a message to the main process.
   * @param {string} channel - The channel to send the message to.
   * @param {unknown} value - The value to send.
   * @returns {void}
   */
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value)
  },
  /**
   * Listens for messages from the main process.
   * @param {string} channel - The channel to listen on.
   * @param {function(...args: unknown[]): void} callback - The callback to execute when a message is received.
   * @returns {() => void} A function to remove the listener.
   */
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
}

contextBridge.exposeInMainWorld('ipc', handler)

/**
 * The type of the IPC handler.
 * @typedef {typeof handler} IpcHandler
 */
export type IpcHandler = typeof handler
