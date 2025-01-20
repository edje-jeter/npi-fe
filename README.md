# Setup
1. Clone this repo
2. Clone the backend repo: [https://github.com/edje-jeter/npi-be](https://github.com/edje-jeter/npi-be)
3. In a terminal window, setup the backend server:
4.   > bundle install
     > rails db:create
     > rails db:migrate

# Run the app
1. Open two terminal windows
2. In one terminal window run the backend server with `./bin/rails s`
3. In the other terminal window run the frontend server with `npm start`
4. Open a web browser
5. Navigate to [http://localhost:3001/providers](http://localhost:3001/providers)
