# Note Taker App

A simple note-taking application built using Express.js that allows users to write, save, and delete notes.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

## Description

The Note Taker App is designed for small business owners who want to organize their thoughts and tasks by writing and saving notes. The application provides a user-friendly interface for creating, viewing, and deleting notes.

## Features

- Write and save notes with titles and text.
- View existing notes with titles listed in the left-hand column.
- Click on a note title to view its content.
- Delete notes by clicking on the delete icon.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jtuvek/note-taker-app.git

2. Navigate to the project directory:

    cd note-taker-app

3. Install the dependencies:

    npm install

## Usage

1. Start the server:

    npm start

2. Open a web browser and go to http://localhost:3001

3. Use the application to write, save, and manage your notes.

## API Routes

* GET /api/notes: Get a list of all saved notes.
* POST /api/notes: Create a new note and save it.
* DELETE /api/notes/:id: Delete a note with the specified ID.

## License

This project is licensed under the ISC License.