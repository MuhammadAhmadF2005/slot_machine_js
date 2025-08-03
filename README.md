
# 🎰 Slot Machine Game

A fullstack Slot Machine game built with **HTML**, **CSS**, **Bootstrap**, **JavaScript**, and **Node.js + Express**. Users can deposit, place bets, and spin to win — with a fully responsive and interactive interface.

---

## 🧠 Features

- 🎮 Classic 3x3 slot machine layout
- 💸 Virtual balance with deposit and winnings
- 🧠 Server-side spin logic (randomized + fair)
- 🧮 Win calculation based on symbol value
- 🎨 Responsive UI using Bootstrap
- 🧾 Clean and modular codebase

---

## 🚀 Live Demo

If hosted (e.g., on [Render](https://render.com/) or [Vercel](https://vercel.com/)):

> 🌐 [Click here to play the live game](https://your-live-link.com)

---

## 🛠️ Tech Stack

| Frontend         | Backend      | Styling     |
|------------------|--------------|-------------|
| HTML, JS         | Node.js      | Bootstrap 5 |
| Fetch API        | Express.js   | Custom CSS  |

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/slot-machine.git
cd slot-machine
npm install
````

Start the server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
slot-machine/
├── public/
│   ├── index.html        # Game UI
│   ├── style.css         # Custom styles
│   └── script.js         # Frontend logic
├── server.js             # Backend game logic (spin, winnings)
├── package.json          # Node dependencies
└── README.md             # Project documentation
```

---

## ⚙️ API Endpoint

**POST** `/api/spin`

**Body:**

```json
{
  "bet": 5,
  "lines": 3
}
```

**Response:**

```json
{
  "display": [["🍒", "🍒", "🍒"], ["🍋", "🍊", "🍋"], ["⭐", "⭐", "🍊"]],
  "winnings": 25
}
```

---

## 🎉 Future Improvements

* 🎵 Add sound effects and animations
* 🏆 High score tracking or leaderboard
* 🪪 User authentication
* 🖼️ Symbol customization with images/SVGs

---

## 📄 License

MIT License. Free to use and modify.

---

## 🙌 Credits

Built by @Muhammad Ahmad : https://github.com/MuhammadAhmadF2005

````
