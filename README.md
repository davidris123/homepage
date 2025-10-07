# FINKI HUB

Official landing page for the student-lead community of the Faculty of Computer Science and Engineering. 
Built with AngularJS (component-based) and styled using Tailwind CSS and Font Awesome.

---

## Prerequisites

Before you begin, ensure you have the following software installed:

* **Node.js**: Version **v20.x** or higher.
* **npm**: Version **10.x** or higher (comes bundled with Node.js).
* **Angular CLI**: The Angular Command Line Interface.
    * This project specifically used **Angular CLI version 20.3.2**.

---

## Running with Docker Compose

This project is set up for containerization, ensuring a consistent and reproducible environment.

---

### Local Development (Build from Dockerfile)

| **Build & Run** | `docker compose -f compose.yaml up --build` |

*Note: `compose.yaml` builds and tags the image as `ghcr.io/finki-hub/finki-hub:local`.*

---

### Production Deployment (Pull from GHCR)


| **Login** | `docker login ghcr.io` |
| **Deploy** | `docker compose -f compose.prod.yaml up -d` |

*Note: `compose.prod.yaml` pulls `ghcr.io/finki-hub/finki-hub:latest`. Adjust the image tag in this file if using commit SHAs or other tags.*

You can access the website through `http://localhost`

## Installation

Follow these steps to set up the project locally:

1.  **Install the Angular CLI (if you haven't already):**
    ```bash
    npm install -g @angular/cli
    ```

2.  **Install project dependencies:**
    Navigate to the project directory and run the following command to download all required packages:
    ```bash
    npm install
    # or the shorthand: npm i
    ```

---

## Development Server

To start a local development server for testing:

1.  **Run the serve command:**
    ```bash
    ng serve
    ```
2.  **Access the application:**
    Open your browser and navigate to `http://localhost:4200/`.

The application will automatically reload whenever you modify any of the source files.

---

## Building the Project

To build the project for deployment or production:

1.  **Run the build command:**
    ```bash
    ng build
    ```
    To create an optimized production build, use the `--configuration production` (or simply `-c production`) flag:
    ```bash
    ng build --configuration production
    ```

2.  **Output:**
    This process compiles your project and stores the build artifacts (static files) in the `dist/` directory.
    The `browser/` directory is for the client-side code that runs in the browser.
    The `server/` is for the server-side code used for Node.js-based SSR.

---

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.