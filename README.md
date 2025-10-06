# My Nextron App

A desktop application built with Electron, Next.js, Tailwind CSS, and Shadcn UI.

## Overview

This project is a boilerplate for creating modern desktop applications using a powerful stack of technologies:

-   **Nextron**: Integrates [Electron](https://www.electronjs.org/) with [Next.js](https://nextjs.org/) for a seamless development experience.
-   **Electron**: A framework for creating native applications with web technologies like JavaScript, HTML, and CSS.
-   **Next.js**: A React framework for production-ready applications.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Shadcn UI**: A collection of beautifully designed, accessible, and customizable React components.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and [pnpm](https://pnpm.io/installation) installed on your system.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    cd my-nextron-app
    ```

2.  Install the dependencies using `pnpm`:
    ```bash
    pnpm install
    ```

### Development

To start the application in development mode, run the following command. This will launch the Electron app with hot-reloading enabled.

```bash
pnpm dev
```

### Building for Production

To build the application for production, use the following command. This will create a distributable package for your operating system in the `dist` directory.

```bash
pnpm build
```

## Project Structure

The project is divided into two main parts:

-   `main`: Contains the Electron main process code. This is where you manage windows, application lifecycle events, and interact with the operating system.
    -   `main/background.ts`: The main entry point for the Electron application.
    -   `main/preload.ts`: A script that runs before the renderer process is loaded, used to expose Node.js APIs to the renderer process in a secure way.
-   `renderer`: Contains the Next.js application code, which runs in the Electron renderer process. This is where you build your user interface with React components.
    -   `renderer/app`: The main application pages.
    -   `renderer/components`: Reusable React components.
    -   `renderer/lib`: Utility functions.