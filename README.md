# Suflist

#### buy + sell surfboards 

****

#### Find you next surfboard.

Surflist connects you with other surfers selling their boards. 
We are by surfers for surfers. Don't worry about having to sort through the junk you might 
find on other sites, Surflist is just for surfboards! 
Filter your search results based on location, price, style, and condition.

![alt text](http://res.cloudinary.com/sethjensenbrown/image/upload/bo_1px_solid_rgb:000000,c_lpad,h_250,w_400/v1510788036/Screen_Shot_2017-11-15_at_3.16.23_PM_mpsrkn.png)

#### Sell your board.

Time for a new stick and need to get rid of the old one? 
Or are you just running out of space in your garage? 
Post that bad boy up on Surflist and wait for the offers to come in.
Include an image, general location, price, condition, and style, 
and watch the offers come in.

![alt text](http://res.cloudinary.com/sethjensenbrown/image/upload/bo_1px_solid_rgb:000000,c_lpad,h_250,w_400/v1510788050/Screen_Shot_2017-11-15_at_3.17.31_PM_whkchq.png)

#### No account required.

Surflist works with your email, so you stay anonymous until you decide 
to make/accept an offer.
When you post a board for sale, you'll receive an email confirmation 
with links to edit and delete the post if necessary.
When making an offer on a board an email will be sent to the seller, 
it's up to you to give them whatever contact info you want.

![alt text](http://res.cloudinary.com/sethjensenbrown/image/upload/bo_1px_solid_rgb:000000,c_lpad,h_250,w_400/v1510788056/Screen_Shot_2017-11-15_at_3.18.14_PM_zqm8ho.png)

#### API

The surflist API is hosted on Heroku and has 5 endpoints

-/boards GET will return all of the boards in the database. 
It can also be queried via URL to filter seacrhes.  

-/boards POST is for adding a new board to the database. 
It also sends an email to the seller to confirm that the board is posted 
and give a link to the posting and a link for editing.

-/boards PUT is for updating data for boards alreay posted to the database. 
It requires a URL query with an id to match the id in the request body.

-/boards DELETE is for deleting a board from the database.
It also requires a URL query with an id to determine which board to delete.

-/offer POST is for when a user makes an offer on a board. 
It gets the board id from the URL, and then sends an email to the seller 
using the Send In Blue API.

#### Technologies Used

HTML5, CSS3, Foundations, JavaScript, Node.js, Express, React, ReduxForm, Mongoose, MongoDb, 
Enzyme, Chai, GoogleMaps Api, SendInBlue API, Cloudinary API, Dropzone



