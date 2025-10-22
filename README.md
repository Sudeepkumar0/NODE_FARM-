# 🌱 NODE_FARM

![Status](https://img.shields.io/badge/Status-Active-blue)

---

## Overview
**NODE_FARM** is a Node.js-based web application that dynamically serves product data using templates.  
It displays all available products in an overview page and shows detailed information when a specific product is selected.  
This project demonstrates **server-side rendering**, **routing**, and **template-based page generation** using Node.js.

---

## Features
- View all available products on the overview page  
- Click a product to view its detailed information using the product ID  
- Dynamic routing with Node.js and templating  
- Demonstrates use of the core `http`, `fs`, and URL modules  
- Simple structure — easy to expand and integrate into larger apps  

---

## Technologies Used
- **Node.js** (core HTTP module)
- **HTML & CSS**
- **JavaScript (ES6)**
- **JSON data handling**
- **File System (fs) for data reading**
- **URL parsing and query handling**

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation
```bash
# Clone the repository
git clone https://github.com/Sudeepkumar0/NODE_FARM-.git

# Navigate to project directory
cd NODE_FARM-

# Install dependencies
npm install


### Running the App

```bash
# Run the project
node index.js
```

Open your browser and go to:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## Usage

1. The **overview page** displays all the available products with their images and basic details.
2. Clicking on any product takes you to its **product details page**, where you can view complete information based on its product ID.
3. The data is fetched from a local JSON file (`dev-data/data.json`) and dynamically inserted into HTML templates.
4. Modify or add new products by updating the JSON file and refreshing the app.

---

## 📁 Project Structure

```
NODE_FARM-/
│
├── dev-data/
│   └── data.json             # Product data in JSON format
│
├── templates/
│   ├── overview.html         # Template for overview page
│   └── product.html          # Template for single product details
│
├── index.js                  # Main server logic
├── package.json              # Project configuration and dependencies
└── README.md                 # Project documentation
```

---

## Screenshots

### Overview Page

Displays all available products in a clean grid layout.

![Overview Page](https://github.com/Sudeepkumar0/NODE_FARM-/blob/main/txt/NODE_FARM_ONE.jpg)

---

### Product Details Page

Shows detailed information about a selected product using its product ID.

![Product Details Page](https://github.com/Sudeepkumar0/NODE_FARM-/blob/main/txt/NODE_FARM_TWO.jpg)

---

## 🤝 Contributing

Contributions are always welcome!
If you have ideas to improve this project, feel free to fork the repo and create a pull request.
Please make sure your code follows the existing style and includes clear documentation.

---

##  Author

**G Sudeep Kumar**
[[sudeepkumar.connect@gmail.com](mailto:sudeepkumar.connect@gmail.com)]
🔗 [GitHub Profile](https://github.com/Sudeepkumar0)

> *"A simple Node.js project that demonstrates how data and templates work together to create dynamic web content."*

---






