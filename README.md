# Women's Tops App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This project provides functionality to read clothes data from JSON file and to load them into the page with responsive layout and provides a filter to filter data by cloth size. 

## How to build
1. Download source code
```sh 
git clone https://github.com/Natasha023/women-tops 
```
2. Go to the folder: 
```sh
cd women-tops
```
3. Install dependencies:  
```sh
npm install
```
4. Run front end: 
```sh
npm start
```
## How to deploy
1. Add homepage into package.json
```
"homepage": "https://natasha023.github.io/women-tops" 
```
2. Add these lines of code to package.json script part: 
```diff
"script":{
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -d build" 
```
3. Install gh-pages
```sh
npm install --save-dev gh-pages
```
4. Deploy website 
```sh
npm run deploy
```

## Divide Mock into Components

![Alt text](./src/Resource/mockImg.jpg?raw=true "Mock")

## Folder Structure
```
women-tops/
  node_modules/
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    Component/
      ClothCard/
       ClothCard.jsx
      Filter/
        Filter.css
        Filter.jsx
      Header/
        Header.css
        Header.jsx
      MainScreen/
        MainScreen.css
        MainScreen.jsx
    Container/
      App.css
      App.js
      App.test.js
    Resource/
      product.json
      data.js
      product-1.jpg
      ...
    Services/
      Api.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
  package-lock.json
  package.json
  README.md
```

