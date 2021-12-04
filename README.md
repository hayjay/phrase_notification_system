# NODEJS CHALLENGE

## PROJECT OVERVIEW

For this challenge we'll be aggregating the responses from a notification system. Three features will be created:

1. Aggregate notification
2. Add a new notification to the notifications feed
3. Update the read status of the notification

## SOLUTION
This Repository contains the code for both the `notification system` written using `nodejs`, `postgresql` for the database engine


### REQUIREMENTS
* NodeJS
* PostgreSQL
* Yarn (dependency manager)
* Sequelize (For handling migration and any modification to the database)



### SETUP
To set up the services please follow the steps belows:
1. Clone this repository
2. Run ```yarn install```
3. Duplicate the .env.example file and rename the duplicate to .env file.
4. Edit the newly created .env file with your appropriate env key variables such as the DB_NAME, SERVER_PORT(if not set, port 5000 will be used by the application).
5. To create necessary tables, please run the database seeder using ```yarn db:migrate```
6. For dummy records to all the tables including the users table, please run ```yarn db:seeds```

#### Available Endpoints

##### Notification service
* get /notifications/:post_id
* POST /norifications/create
* PUT /norifications/:id






