import { v4 as uuidv4 } from 'uuid';

let decks = [];

const createDeck = (req, res) => {
    const { cards } = req.body;
    const newDeck = {
        id: uuidv4(),
        cards: cards || [],
        isShuffled: false,
    };
    decks.push(newDeck);
    res.status(201).json(newDeck);
};

const shuffleDeck = (req, res) => {
    const { deckId } = req.params;
    const deck = decks.find(d => d.id === deckId);
    
    if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
    }
    
    deck.cards = deck.cards.sort(() => Math.random() - 0.5);
    deck.isShuffled = true;
    res.status(200).json(deck);
};

const showDeck = (req, res) => {
    const { deckId } = req.params;
    const deck = decks.find(d => d.id === deckId);
    
    if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
    }
    
    res.status(200).json(deck);
};

const drawCard = (req, res) => {
    const { deckId } = req.params;
    const deck = decks.find(d => d.id === deckId);
    
    if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
    }
    
    if (deck.cards.length === 0) {
        return res.status(400).json({ message: "No cards left in deck" });
    }
    
    const drawnCard = deck.cards.pop();
    res.status(200).json({ card: drawnCard });
};

export { createDeck, shuffleDeck, showDeck, drawCard };
