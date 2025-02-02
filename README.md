# 📚 Python Learning App

# Direct Link to Site:-
https://skc-ketanmattoo-assignment.vercel.app/

Welcome to the **Python Learning App**! 🚀  
A React-based web application designed to help beginners learn Python programming in a simple and engaging way. With interactive features, personalized tutors, and AI-powered responses, this app makes learning Python fun and easy!

---

## 🧑‍🏫 Features

- **Interactive Python Learning**: Get clear, beginner-friendly explanations for Python-related questions. 🤖
- **Multiple Tutors**: Choose from four fun tutors (Python, Robot, Wizard, Alien) to guide your learning journey. 🐍🤖🧙‍♂️👽
- **Dynamic Routing**: Uses React Router for seamless navigation between the homepage and the Python study page. 🔄
- **AI-Powered Responses**: Leverages Google's **Generative AI (Gemini)** to generate responses to user queries. 🤖✨
- **Responsive Design**: Works seamlessly across different devices (mobile, tablet, desktop). 📱💻
- **Customizable Settings**: Allows users to input their API key and select their preferred tutor. ⚙️

---

## 📁 Files Overview

### `App.css`
This file contains the styles for the application. It includes:
- Centered text and layout. 📝
- Animations for the app logo. 🎨
- Responsive design for the header and other components. 📐

### `App.js`
The main entry point of the application. It:
- Sets up the routing using **react-router-dom**.
- Defines routes for the homepage and the Python study page. 🏠➡️📚

### `HomePage.js`
The homepage of the application:
- Provides an introduction to the app, its features, and a button to navigate to the Python study page. 🏠

### `StudyPython.js`
The main page for learning Python:
- Integrates **CardHeader**, **CardContent**, **CardFooter**, and **Setting** components to provide an interactive learning experience. 🎓

### `CardHeader.js`
Displays the header of the study card:
- Shows the selected tutor's character. 🧑‍🏫
- Includes a settings button to customize the tutor and API key. ⚙️

### `Setting.js`
Allows users to:
- Input their Google Generative AI API key. 🔑
- Choose their preferred tutor from the available characters (Python, Robot, Wizard, Alien). 👨‍💻🤖🧙‍♂️👽

### `CardContent.js`
Displays the introductory message from the selected tutor:
- Overview of the topics like print statements, variables, basic math, and string manipulation. 🔤

### `CardFooter.js`
Handles user interaction:
- Users can ask Python-related questions. ❓
- Displays AI-generated responses. 💡
- Shows toast notifications for user feedback. 🎉

### `OpenAi.js`
This file contains the logic for interacting with Google's **Generative AI API (Gemini)**:
- Fetches responses to Python-related questions. 💬
- API key is retrieved from the environment variable **REACT_APP_MY_GEMINI_API**. 🔑

---

## 🚀 Getting Started

### 🔧 Prerequisites
- **Node.js** and **npm** installed on your machine. 🌐
- A **Google Generative AI API key** (Gemini). 🧑‍💻

### ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```
   
2. **Navigate to the project directory**:

    ```bash
    cd python-learning-app
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Create a .env file in the root directory and add your Google Generative AI API key**:

    ```env
    REACT_APP_MY_GEMINI_API=your_api_key_here
    ```

5. **Start the development server**:

    ```bash
    npm start
    ```

# 🖥️ Usage
• Open the app in your browser. 🌍
• Navigate to the homepage or the Python study page.
• Choose your preferred tutor (Python, Robot, Wizard, or Alien) and start learning Python by asking questions! 🗨️📚
