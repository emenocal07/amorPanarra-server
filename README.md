# Amor Panarra

## Description:

AmorPanarra is the third and final project of the Ironhack Web Development Bootcamp. A project that has been done by four hands by Anna Porras and Ernesto Espinoza. The project consists of an Online Bakery, an e-commerce where we put into practice what we learned throughout the bootcamp to get a Fullstack application. Amor Panarra is an online bakery with carefully selected and quality products for bread lovers.

## Technologies used:
SERVER: We used Express/Node for the server part, from where we created the relevant models and routes.
As for the management of images of the entire application are managed through CLOUDINARY which greatly facilitates access and support for them.
Regarding Database we have used MongoDB and Mongoose for DB management and transfer to the cloud with MongoDB Atlas.

CLIENT: On the client side we have used REACT as a library, shelling out the components of the Web product to obtain a dynamic and attractive Single Page Application, likewise we used Hooks, Context API and JSON Web Token.
In terms of layout we have used Bootstrap and CSS.

## Working on:
- Stripe implementation.
- Add buttons for product listing when admin.
- Add news and/or facts information.
- Add product ratings
- Add contact page.
- Bug fixes: Uploading product image gives error on deployed page but not on local.


## Endpoints

| HTTP Method | URI path            | Description      |      Protected |
| :---         |   :---:            |          ---:    |           ---: |
| GET          | /                  | Render index page and category   |          |
| GET          | /inicio-sesion     | Render Login and Register page                          |    |
| POST / PUT   | /inicio-sesion     | Handle login and register page   |    |
| GET          | /perfiles/:id      | Render user profile                        |    |
| POST         | /perfiles/:id      | Handle user profile (edit)    |    |
| DELETE       | /perfiles/:id      | Handle user profile (delete)    |  U+2705  |
| GET          | /productos         | List of all products  |    |
| GET          | /perfiles          | Render all users's profiles  | U+2705   |
| PUT          | /                  | Modal to create product form | U+2705   |
| GET          | /productos/:id     | Render product details   |  |
| GET          | /productos/:id/editar   | Render edit page form   |  U+2705  |
| POST / DELETE | /productos/:id/editar   | Handle edit and delete page form   |  U+2705  |
| GET       | /detalles-pedido   | Render products in cart    |    |
| GET       | /finalizar-compra  | Render payment page    |    |