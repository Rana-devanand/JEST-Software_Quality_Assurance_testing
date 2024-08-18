# JEST `Software Testing Tool`

https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbbc5bek5atvngq2imz6d.png

### steps to configure jest tool

## Step 1 -
```js
- Install jest 
     `npm install jest`
```
## Step 2 -
- Configure jest in Package..json file.

```js
"scripts": {
    "start":"npx nodemon index.js",
    "test": "jest"
  },
```

## Step 3 -
```js
- Install babel
     `npm install --save-dev babel-jest @babel/core @babel/preset-env`
```

## Step 4 -
-  Create a `babel.config.js` file to your root directory, and paste the code inside the config.js file which is given below.

```js
module.exports = {
     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
   };
```
## Step 5 -
- Now create a Folder `Test` and start testing your application.

```javascript
- Example :

     const {execute} = require("../services/calculation-service")

test("Calculation result is :" ,()=>{
     const result = execute();
     expect(result).toBe('Success');
})
```
