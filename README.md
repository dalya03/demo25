Project 1: demo25-3
Overview
The first project is a basic web server built using Express.js. It demonstrates simple API endpoints that return text, handle user input, and perform basic calculations.

Features
Hello World Endpoint (GET /):

Responds with a simple "Hello World" message.
Return a Poem (GET /tmp/poem):

Responds with a predefined poem.
Return a Random Quote (GET /tmp/quote):

Picks and responds with a random quote from a predefined list.
Sum of Two Numbers (POST /tmp/sum/:a/:b):

Accepts two numbers as URL parameters and returns their sum.
Validates input to ensure both parameters are numbers.
How to Run demo25-3
Install Dependencies:

Run the following commands:
bash
نسخ
تحرير
npm install express
Start the Server:

Use the command:
bash
نسخ
تحرير
node script.mjs
Test Endpoints:

Use tools like Postman or your browser:
GET /tmp/poem to view the poem.
GET /tmp/quote to get a random quote.
POST /tmp/sum/:a/:b to calculate the sum of two numbers.
Project 2: demo25-4
Overview
The second project extends functionality by managing card decks. It demonstrates API endpoints to create, shuffle, view, and draw cards from a dynamically generated deck.

Features
Create a New Deck (POST /temp/deck):

Generates a new 52-card deck and assigns it a unique ID.
Returns the deckId for later operations.
Shuffle a Deck (PATCH /temp/deck/shuffle/:deck_id):

Shuffles the cards in a specified deck using the Fisher-Yates algorithm.
View a Deck (GET /temp/deck/:deck_id):

Retrieves the current state of the specified deck.
Draw a Card (GET /temp/deck/:deck_id/card):

Removes and returns the top card from the deck.
How to Run demo25-4
Install Dependencies:

Run:
bash
نسخ
تحرير
npm install express uuid
Start the Server:

Use the command:
bash
نسخ
تحرير
node script.mjs
Test Endpoints:

Use the following API calls:
POST /temp/deck to create a new deck.
PATCH /temp/deck/shuffle/:deck_id to shuffle the deck.
GET /temp/deck/:deck_id to view the cards.
GET /temp/deck/:deck_id/card to draw a card.
Combined Use Case
These two projects demonstrate:

How to build simple, static APIs with demo25-3.
How to handle dynamic, stateful operations like managing card decks with demo25-4.
Future Improvements
Store deck data in a database for persistence.
Add more endpoints, such as restoring a deck or resetting the drawn cards.
Implement frontend integration to visualize deck operations interactively.
