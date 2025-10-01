# FINKI HUB

Official landing page for the student-lead community of the Faculty of Computer Science and Engineering. 
Built with AngularJS (component-based) and styled using Tailwind CSS and Font Awesome.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following software installed:

* **Node.js**: Version **v20.x** or higher.
* **npm**: Version **10.x** or higher (comes bundled with Node.js).
* **Angular CLI**: The Angular Command Line Interface.
    * This project specifically used **Angular CLI version 20.3.2**.

---

## ⚙️ Installation

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

## 💻 Development Server

To start a local development server for testing:

1.  **Run the serve command:**
    ```bash
    ng serve
    ```
2.  **Access the application:**
    Open your browser and navigate to `http://localhost:4200/`.

The application will automatically reload whenever you modify any of the source files.

---

## 🏗️ Building the Project

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
    This process compiles your project and stores the build artifacts (static files) in the `dist/(project name)/browser` directory.

---

## ⚖️ License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.