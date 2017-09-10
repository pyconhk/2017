# PyCon HK 2017

## Tooling Requirements
1. Node (version >= 6)
2. yarn
3. git

## Development

### Running Gulp scripts

Most developers tools are written as gulp scripts. You may run the gulp scripts
with the help of yarn or npm:

```
yarn gulp [command]
```

or

```
npm run gulp -- [command]
```

You may use the **`help`** command for available tasks.

### To run development server

We will use `yarn` tool in all examples here.

To build all the HTML and assets (JS, images), you can run this command:

```
yarn gulp build
```

This will build the website in the `public` folder.

To start a development server that host the above files:

```
yarn gulp server
```

This will start a web server on [localhost:8080](http://localhost:8080).
