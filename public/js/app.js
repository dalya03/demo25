document.addEventListener("DOMContentLoaded", () => {
    let deck = [];
    const suits = ["♥", "♦", "♠", "♣"]; // الألوان الأربعة
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // القيم
    const deckContainer = document.getElementById("deckContainer");
    const drawnCardContainer = document.getElementById("drawnCard");

    // إنشاء مجموعة جديدة من البطاقات
    function createDeck() {
        deck = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({ rank, suit });
            }
        }
        console.log("New deck created:", deck);
        document.getElementById("shuffleDeck").disabled = false;
        document.getElementById("getDeck").disabled = false;
        document.getElementById("drawCard").disabled = false;
        alert("New deck created with 52 cards!");
    }

    // خلط البطاقات
    function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        console.log("Deck shuffled:", deck);
        alert("Deck shuffled successfully!");
    }

    // عرض جميع البطاقات
    function showDeck() {
        deckContainer.innerHTML = "";
        deck.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.className = "card";
            cardDiv.innerHTML = `<div class="rank">${card.rank}</div><div class="suit">${card.suit}</div>`;
            deckContainer.appendChild(cardDiv);
        });
    }

    // سحب بطاقة عشوائية
    function drawCard() {
        if (deck.length === 0) {
            alert("No more cards to draw!");
            return;
        }
        const card = deck.pop();
        drawnCardContainer.innerHTML = `<div class="card"><div class="rank">${card.rank}</div><div class="suit">${card.suit}</div></div>`;
        console.log("Card drawn:", card);
    }

    // ربط الأزرار بالوظائف
    document.getElementById("createDeck").addEventListener("click", createDeck);
    document.getElementById("shuffleDeck").addEventListener("click", shuffleDeck);
    document.getElementById("getDeck").addEventListener("click", showDeck);
    document.getElementById("drawCard").addEventListener("click", drawCard);
});
