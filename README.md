# Test Shop Project - Crisostomo, John Dominic S.

## BASIC REQUIREMENTS:

### FRONTEND / SHOP :
- ~~Search categories / products~~**
- ~~Browse categories / products~~
- ~~Shopping cart~~
- ~~Purchase / checkout of products (without singup/login)~~
- ~~Receive email on purchase~~
- ~~Receive email on shipped~~

### ADMIN :
- ~~Login~~
- ~~Add/update/delete categories (with photos)~~
- ~~Update orders to shipped~~
- ~~Daily email to admin of total sales~~
- ~~Logout~~

** _Products can be searched through full text matches and can be filtered by categories_

## Starting the app

The project consists of two apps which are both inside the `test-project/` directory:

- `admin/` - contains the admin app
- `shop/` - contains the frontend shop


The `shop` connects to the MongoDB server started by the `admin` app. In order to easily start and reset the project as needed, I have provided two basic shell scripts to run and or reset both applications simultaneously:

- `./reset.sh` - execute this to reset both Meteor projects simultaneously
- `/.run.sh` - start the `admin` on `PORT 3000` and the `shop` on `PORT 4000`. This script also handles the environment variables of the two applications for the `MAIL_URL` and `MONGO_URL`
- The frequency of the  daily sales mailer can be changed (**for testing**) at *Line 8* of the `admin/server/configs/scheduler.js`. It uses [Later.js](https://bunkat.github.io/later/) syntax for specifying the frequency. The default configuration that I have set is for it to send the sales report at exactly 11:00 PM everyday. It was tested to work by using `every 1 min` as the parameter.

## Todos / needs improvement :
- pagination and search using reg exp instead of word stems
- refactor code in the shop application (*I did this last, and I was falling out of schedule so it was rushed*)
- improve / style the emails sent through the mailer (*I decided not to clutter the code anymore with long html strings to design the emails, and using packages will use more time, so I just made it simple*)
- use standard XHR methods to handle file uploads (*instead of a deprecated package*)
- use proper validations (*very basic validations (if not) were used, I focused more on having all requirements to work*)
- overall design (*the site lacks imagination and heavily relied on default bootstrap classes*)
