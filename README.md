## T9 Fullstack JS

A number to word list converter as a Node backend and React/Redux fronted.

The backend provides a rest endpoint that converts a given numeric string into a list of corresponding words which exist in provided list of animals in the style of [T9](https://en.wikipedia.org/wiki/T9_(predictive_text)) or [Phonewords](https://en.wikipedia.org/wiki/Phoneword). For example, given the input `2327` the output would be: `bear`.

The frontend allows the user to enter a number, query the backend for the corresponding expansions, and display them.


## Getting started

You may use both `npm` or `yarn` to set it up and run. Please follow instructions for `yarn`. Tested with `Node 9.5.0`.

Clone repository with:
```
git clone https://github.com/bmind12/full-stack-js.git
```

Go to repository and install node dependencies for client and for server:
```
cd full-stack-js
yarn install
cd server/
yarn install
```

Run the server from `/server` directory:
```
node server.js
```

Now `Node` server is running, open another terminal, come back to `root` directory and run the client:
```
yarn start
```
