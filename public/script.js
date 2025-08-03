document.addEventListener('DOMContentLoaded', () => {
    let balance = 0;
    const depositInput = document.getElementById('deposit');
    const linesInput = document.getElementById('lines');
    const betInput = document.getElementById('bet');
    const spinBtn = document.getElementById('spinBtn');
    const balanceDiv = document.getElementById('balance');
    const messageDiv = document.getElementById('message');
    const grid = document.getElementById('slot-grid');

    const updateBalance = () => balanceDiv.textContent = `Balance: $${balance}`;

    depositInput.addEventListener('change', () => {
        const val = parseFloat(depositInput.value);
        if (!isNaN(val) && val > 0) {
            balance = val;
            updateBalance();
        }
    });

    spinBtn.addEventListener('click', async () => {
        const lines = parseInt(linesInput.value);
        const bet = parseFloat(betInput.value);
        messageDiv.textContent = '';

        if (!bet || bet <= 0 || bet * lines > balance) {
            messageDiv.textContent = 'Invalid bet or insufficient balance.';
            return;
        }

        balance -= bet * lines;
        updateBalance();

        const res = await fetch('/api/spin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bet, lines })
        });
        const data = await res.json();

        // Render grid
        grid.innerHTML = '';
        data.display.flat().forEach(icon => {
            const cell = document.createElement('div');
            cell.className = 'slot-cell';
            cell.textContent = icon;
            grid.appendChild(cell);
        });

        // Show winnings
        balance += data.winnings;
        updateBalance();
        messageDiv.textContent = `You won $${data.winnings}!`;

        if (balance <= 0) {
            messageDiv.textContent += ' Game over!';
            spinBtn.disabled = true;
        }
    });
});