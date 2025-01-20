# Setup
1. Clone this repo
2. Clone the backend repo: [https://github.com/edje-jeter/npi-be](https://github.com/edje-jeter/npi-be)
3. In a terminal window, setup the backend server:
   > bundle install  
   > rake db:create  
   > rake db:migrate

# Run the app
1. Open two terminal windows
2. In one terminal window run the backend server:
   > ./bin/rails s
4. In the other terminal window run the frontend server:
   > npm start
6. Open a web browser
7. Navigate to [http://localhost:3001/providers](http://localhost:3001/providers)
