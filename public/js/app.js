document.getElementById("createDeck").addEventListener("click", async () => {
    const response = await fetch('/api/tasks/create-deck', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cards: generateDeck() }) });
    const deck = await response.json();
    console.log("New deck created:", deck);
});

document.getElementById("shuffleDeck").addEventListener("click", async () => {
    const deckId = prompt("Enter Deck ID to shuffle:");
    await fetch(`/api/tasks/shuffle-deck/${deckId}`, { method: 'POST' });
    console.log("Deck shuffled!");
});

document.getElementById("getDeck").addEventListener("click", async () => {
    const deckId = prompt("Enter Deck ID:");
    const response = await fetch(`/api/tasks/show-deck/${deckId}`);
    const deck = await response.json();
    console.log("Deck:", deck);
});

document.getElementById("drawCard").addEventListener("click", async () => {
    const deckId = prompt("Enter Deck ID:");
    const response = await fetch(`/api/tasks/draw-card/${deckId}`, { method: 'POST' });
    const card = await response.json();
    console.log("Drawn card:", card);
});
