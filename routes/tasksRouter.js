import express from 'express';
import { createDeck, shuffleDeck, showDeck, drawCard } from '../controllers/tasksController.js';

const router = express.Router();


router.post('/create-deck', createDeck);


router.post('/shuffle-deck/:deckId', shuffleDeck);

router.get('/show-deck/:deckId', showDeck);


router.post('/draw-card/:deckId', drawCard);

export default router;
