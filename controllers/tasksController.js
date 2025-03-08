import { v4 as uuidv4 } from 'uuid';

const createDeck = async (req, res) => {
    try {
        const { cards } = req.body;
        const newDeckId = uuidv4();
        const deckData = JSON.stringify(cards || []);
        
        await req.db.query(
            'INSERT INTO decks (id, cards, is_shuffled) VALUES ($1, $2, $3)',
            [newDeckId, deckData, false]
        );

        res.status(201).json({ id: newDeckId, cards, isShuffled: false });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deck', error: error.message });
    }
};

const shuffleDeck = async (req, res) => {
    try {
        const { deckId } = req.params;
        const result = await req.db.query('SELECT cards FROM decks WHERE id = $1', [deckId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Deck not found" });
        }

        let cards = JSON.parse(result.rows[0].cards);
        cards.sort(() => Math.random() - 0.5);

        await req.db.query(
            'UPDATE decks SET cards = $1, is_shuffled = $2 WHERE id = $3',
            [JSON.stringify(cards), true, deckId]
        );

        res.status(200).json({ id: deckId, cards, isShuffled: true });
    } catch (error) {
        res.status(500).json({ message: 'Error shuffling deck', error: error.message });
    }
};

const showDeck = async (req, res) => {
    try {
        const { deckId } = req.params;
        const result = await req.db.query('SELECT * FROM decks WHERE id = $1', [deckId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Deck not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deck', error: error.message });
    }
};

const drawCard = async (req, res) => {
    try {
        const { deckId } = req.params;
        const result = await req.db.query('SELECT cards FROM decks WHERE id = $1', [deckId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Deck not found" });
        }

        let cards = JSON.parse(result.rows[0].cards);

        if (cards.length === 0) {
            return res.status(400).json({ message: "No cards left in deck" });
        }

        const drawnCard = cards.pop();

        await req.db.query(
            'UPDATE decks SET cards = $1 WHERE id = $2',
            [JSON.stringify(cards), deckId]
        );

        res.status(200).json({ card: drawnCard });
    } catch (error) {
        res.status(500).json({ message: 'Error drawing card', error: error.message });
    }
};

export { createDeck, shuffleDeck, showDeck, drawCard };
