# 🌤️ Weather Forecasting App

A simple React.js weather app that lets users search by city and view live weather data using the [OpenWeatherMap API](https://openweathermap.org/).

**Deployed on [Vercel](https://vercel.com/)** — [🔗 Live Demo](https://weatherforecasting-app.vercel.app)

---

## ✨ Features

* 🔎 Search weather by city name
* 🕒 Live temperature & weather conditions
* 🎨 Clean responsive UI built with React.js
* 🌐 OpenWeatherMap API integration

---

## 🚀 Getting Started

### Prerequisites

* Node.js & npm installed

### Clone the Repo

```bash
git clone https://github.com/shivakumarsouta/WeatherAppReact.git
cd WeatherAppReact
```

### Install Dependencies

```bash
npm install
```

### Get Your OpenWeatherMap API Key

* Sign up at [OpenWeatherMap](https://openweathermap.org/)
* Get your API key from [here](https://home.openweathermap.org/api_keys)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your API key like this:

```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

**Access it in your code:**

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

---

## 🏗️ Build & Run Locally

```bash
npm run dev
```

---

## ☁️ Deployment (Vercel)

1️⃣ Push your project to a GitHub repository

2️⃣ Go to [Vercel](https://vercel.com/)

3️⃣ Import your GitHub repo

4️⃣ Set environment variable on Vercel:

```
VITE_OPENWEATHER_API_KEY = your_api_key_here
```

5️⃣ Deploy

---

## 🛠️ Built With

* **React.js**
* **Vite**
* **OpenWeatherMap API**

---

## 🙌 Contributing

Feel free to fork, star ⭐, and contribute!

---

## 📃 License

[MIT License](LICENSE)

---

## 📫 Connect

* [LinkedIn](https://linkedin.com/in/shivakumarsouta)
* [Portfolio](https://shivakumarsouta-portfolio.vercel.app/)
* [EMail](mailto:shivakumarsouta18@gmail.com)

---