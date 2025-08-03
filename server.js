const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Constants
const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = { A: 2, B: 4, C: 6, D: 8 };
const SYMBOLS_VALUES = { A: 5, B: 4, C: 3, D: 2 };
const SYMBOLS_ICONS = { A: '🍒', B: '🍋', C: '🍊', D: '⭐' };

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Spin endpoint
app.post('/api/spin', (req, res) => {
    const { bet, lines } = req.body;
    // Build symbol array
    let symbols = [];
    for (const [s, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) symbols.push(s);
    }

    // Generate reels
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        const column = [];
        for (let j = 0; j < ROWS; j++) {
            const idx = Math.floor(Math.random() * reelSymbols.length);
            column.push(reelSymbols[idx]);
            reelSymbols.splice(idx, 1);
        }
        reels.push(column);
    }

    // Transpose to rows
    const rows = [];
    for (let r = 0; r < ROWS; r++) {
        rows.push(reels.map(col => col[r]));
    }

    // Calculate winnings
    let winnings = 0;
    for (let r = 0; r < lines; r++) {
        const row = rows[r];
        if (row.every(s => s === row[0])) {
            winnings += bet * SYMBOLS_VALUES[row[0]];
        }
    }

    // Map to icons
    const display = rows.map(row => row.map(s => SYMBOLS_ICONS[s]));

    res.json({ display, winnings });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));