# vending-machine

The project consists of API providing product data. We need to run it on port 1234 first:

```
  cd ./api
  yarn
  yarn start
```

For the vending-machine React app we use:

```
  cd ./app
  yarn
  yarn start
```

Then we're ready to open `localhost:5173` and enjoy the app.
Note that using `127.0.0.1:5173` instead may cause CORS issues with the API.

## Currency

Currency is set to BGN ("ст./лв.") with possible denominations: 0.10, 0,20, 0.50, 1.00, 2.00 BGN.
