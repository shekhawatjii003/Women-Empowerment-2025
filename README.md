# Women-Empowerment-2025
**🌸 Women Empowerment Schemes (2025)**

A responsive and interactive web platform that showcases the latest women empowerment schemes across India.
Users can easily search, filter, and explore government and NGO initiatives supporting women in education, health, employment, safety, entrepreneurship, and financial aid.


**📜 Project Overview**

The Women Empowerment Schemes project is designed to promote awareness and accessibility of initiatives that empower women.
It provides an easy-to-navigate interface where users can:

🔍 Search for schemes by name or category

🧭 Filter schemes by domain (education, employment, entrepreneurship, etc.)

⚡ Instantly redirect to dedicated category pages

📱 Enjoy a fully responsive and modern user experience

**🧩 Features**

Feature	Description
🌐 Search Functionality	Quickly find schemes by name or keyword.
🧮 Filter by Category	Narrow down results by domain such as Education, Health, Safety, etc.
🗂️ Dynamic Redirects	Automatically navigates to category pages on filter selection.
🎨 Modern UI	Built with a clean, minimal design and subtle animations (e.g., fade-in effect).
📱 Responsive Layout	Works seamlessly on desktop and mobile devices.
📁 Folder Structure
women-empowerment-schemes/
│
├── index.html
├── schemes.html
├── education.html
├── employment.html
├── entrepreneurship.html
├── health.html
├── safety.html
├── financial.html
│
├── style.css
├── script.js
└── README.md

**🧠 How It Works**

🔹 Filtering Logic

When a user selects a category from the dropdown menu:

const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", (e) => {
  const selected = e.target.value;
  switch (selected) {
    case "education":
      window.location.href = "education.html";
      break;
    case "employment":
      window.location.href = "employment.html";
      break;
    // ...other categories...
    default:
      window.location.href = "schemes.html";
  }
});


This ensures smooth navigation to specific category pages without reloading or manual searching.

**⚙️ Installation & Setup**

Clone the repository

git clone https://github.com/your-username/women-empowerment-schemes.git


Navigate to the project directory

cd women-empowerment-schemes


Open index.html in your browser
or use a live server:

npx live-server

**🧰 Technologies Used**

HTML5 – Structure and content

CSS3 – Styling and animations

JavaScript (ES6) – Interactivity and navigation

(Optional) You can extend it with APIs or frameworks in the future
**
🚀 Future Enhancements
**
🔗 Integrate real-time scheme data via government APIs

🌍 Add multilingual support (English, Hindi, etc.)

📊 Include statistics and visual insights on women empowerment

💬 Add a community feedback or suggestion portal

**❤️ Contributing**

Contributions are welcome!
If you’d like to enhance this project:

Fork the repo

Create a new branch (feature/your-feature)

Commit your changes

Submit a Pull Request
