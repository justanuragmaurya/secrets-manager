# Secrets Manager
https://secrets-manager.vercel.app/


## Project Description
This project is a web application built using Express.js, a popular Node.js framework, that connects to a MongoDB database to manage a collection of secrets. It allows users to perform CRUD (Create, Read, Update, Delete) operations on the secrets stored in the database. The application uses EJS (Embedded JavaScript) for server-side rendering of HTML pages and Body-Parser to handle form data.

## Key Features
- **Add New Secrets:** Users can add new secrets through a form submission.
- **View Secrets:** Users can view a list of all secrets stored in the database.
- **View Secret Details:** Users can view details of a specific secret by its ID.
- **Edit Secrets:** Users can edit the details of an existing secret.
- **Delete Secrets:** Users can delete a secret by its ID.

## Technologies Used
- **Express.js:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database for storing secrets.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **EJS:** A templating engine used to generate HTML markup with plain JavaScript.
- **Body-Parser:** Middleware to parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.

## How It Works
1. **Home Page:** The home page provides a form to add new secrets.
2. **Add Secret:** When the form is submitted, the new secret is saved to the MongoDB database.
3. **View All Secrets:** Users can navigate to a page that lists all the secrets.
4. **View Secret Details:** By clicking on a secret, users can view its detailed information.
5. **Edit Secret:** Users can edit an existing secret by navigating to the edit page and submitting the updated details.
6. **Delete Secret:** Users can delete a secret, which removes it from the database.

## Routes Overview
- **GET /:** Renders the home page.
- **POST /addDetails:** Handles form submission to add a new secret.
- **GET /viewSecrets:** Displays all secrets stored in the database.
- **GET /viewSecrets/:id:** Displays details of a specific secret.
- **POST /delete/:id:** Deletes a specific secret.
- **GET /edit/:id:** Renders the edit page for a specific secret.
- **POST /edit/:id:** Updates the details of a specific secret.

This project provides a simple yet functional way to manage secrets, demonstrating the power of Express.js and MongoDB for building dynamic web applications.
