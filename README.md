# My Todo List App

A simple to-do list application built with Next.js and Redux Toolkit.

## Overview

This project demonstrates how to use Redux in a Next.js application to manage the state of a to-do list.

## How It Works

Think of your Next.js app as a big library. This library has many sections (pages), and each section needs to know the latest information about what's happening in the library (like a to-do list).

### Components in Action

1. **Store (Library's Record Book)**:
   - The **store** is like a big record book where everything about the library (app) is written down.
   - This book holds all the important information (state) about the library, such as what to-dos are on your list.

2. **Actions (Library Requests)**:
   - **Actions** are like written requests you make to change something in the library's record book.
   - For example, if you want to add a new book (to-do item), you write a request saying, "Please add this new book to the record."

3. **Reducers (Librarians)**:
   - **Reducers** are like librarians who read the requests (actions) and update the record book (store) accordingly.
   - If you request to add a new book, the librarian (reducer) adds it to the correct section in the record book.

4. **Redux Provider (Library Announcer)**:
   - The **Redux Provider** is like an announcer who makes sure everyone in the library knows about any updates in the record book.
   - This ensures that all sections (pages) of the library always have the latest information.

### How It Works Together

1. **User Interaction**:
   - You, as the user, go to the `page.js` (a section of the library) and interact with it. For instance, you add a new to-do item.

2. **Dispatching an Action**:
   - When you add a new to-do, an action is dispatched. This is like you writing a request saying, "Add this new to-do item."

3. **Reducer Updates the Store**:
   - The request goes to the reducer (librarian), which updates the store (record book) with the new to-do item.

4. **Provider Updates the Pages**:
   - The Redux Provider (announcer) ensures all pages know about the update. So, the `page.js` reflects the new to-do item in the to-do list.

### Step-by-Step Walkthrough

1. **Store.js (Library's Record Book)**:
   - This file is where the big record book is created.
   - It also includes the rules (reducers) for how to update the book based on different requests (actions).

2. **ReduxProvider.js (Library Announcer)**:
   - This component wraps around the app to make sure everyone knows about changes in the record book.
   - It ensures the app's state is consistently available throughout the app.

3. **Layout.js (Library Layout)**:
   - This file is like the library's layout that uses the announcer to keep all sections (pages) updated.
   - It provides the Redux store to all the children components (pages) within the app.

4. **Page.js (Library Section)**:
   - This is where you interact with the library (app).
   - It includes the interface for adding or removing to-dos, and it displays the current to-dos by reading from the store.

### Putting It All Together

1. **You add a to-do in `page.js`**.
2. **An action is dispatched to add the to-do**.
3. **The reducer updates the store with the new to-do**.
4. **The Redux Provider ensures the updated to-do list is displayed in `page.js`**.

In summary, Redux helps manage the state of your app by using a central store, actions to request changes, reducers to update the state, and a provider to keep everything in sync. This ensures that your app remains organized, predictable, and easy to manage as it grows.

## Getting Started

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/my-todo-list.git
   cd my-todo-list
   npm install / yarn install
   npm run dev / yarn run dev
   Open your browser and navigate to http://localhost:3000/


## Directory Structure
    /src
     /app
      layout.js
      page.js
     ReduxProvider.js
    /store.js


## Technologies Used

- Next.js
- Redux Toolkit
- React-Redux
- Tailwind CSS

## License

This project is licensed under the MIT License.
