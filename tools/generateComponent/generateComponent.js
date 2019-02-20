/*
* Author: cloudshadow
* This is generate container and component function
* How to use
* 1.npm run generate component <component name>
*   Generate 2 files (component js and component scss) in <component name> folder  
* 2.npm run generate sub-component <component name> <sub component path>
*   Generate 2 files (component js and component scss) in under the <sub component path> folder  
* 3.npm run generate container <container name> 
*   Generate container, component, action, reducer
* PS:
*   After generate container, u need import container in router.js and import reducer in reducers/index.js 
*/

/* eslint-disable */
import rimraf from 'rimraf';
import fs from 'fs';

const path = {
  containerPath: './src/containers/',
  componentPath: './src/components/',
  actionPath: './src/actions/',
  reducerPath: './src/reducers/'
}

function generate(type, componentName, subPath) {
  const upperCaseName = upperCase(componentName);
  const lowerCaseName = componentName;
  if ( type === 'container') {
    generateContainer(upperCaseName,lowerCaseName);
    generateComponent(upperCaseName,lowerCaseName);
    generateAction(upperCaseName,lowerCaseName);
    generateReducer(upperCaseName,lowerCaseName);
  } else if ( type === 'component' ) {
    generateComponent(upperCaseName,lowerCaseName);
  }  else if ( type === 'sub-component' && subPath) {
    generateComponent(upperCaseName,lowerCaseName,subPath);
  } else {
    console.log('type:' + type);
    console.log('component:' + componentName);
    console.log('subPath:' + subPath);
    console.log('Enter the error type');
  }
}

function generateContainer(upperCaseName,lowerCaseName) {
  const filePath = path.containerPath + upperCaseName + 'Page.js',
  tempFilePath = './tools/generateComponent/container/TemplateContainer.js';
  createFile(upperCaseName,lowerCaseName,filePath,tempFilePath);
}

function generateComponent(upperCaseName,lowerCaseName,subPath) {
  let finialPath = subPath ? path.componentPath + subPath  + '/' : path.componentPath;
  
  fs.mkdir(finialPath + upperCaseName, function (err,data) {
    if (err) return console.log(err);
    // generate component js
    const filePath = finialPath + upperCaseName + '/' + upperCaseName + 'Component.js',
    tempFilePath = './tools/generateComponent/components/TemplateComponent.js';
    createFile(upperCaseName,lowerCaseName,filePath,tempFilePath);
    // generate component scss
    const scssFilePath = finialPath + upperCaseName + '/'  + lowerCaseName + '.scss',
    scssTempFilePath = './tools/generateComponent/components/template.scss';
    createFile(upperCaseName,lowerCaseName,scssFilePath,scssTempFilePath);
  });
}

function generateAction(upperCaseName,lowerCaseName) {
  const filePath = path.actionPath + lowerCaseName + 'Actions.js',
  tempFilePath = './tools/generateComponent/actions/TemplateActions.js';
  createFile(upperCaseName,lowerCaseName,filePath,tempFilePath);
}

function generateReducer(upperCaseName,lowerCaseName) {
  const filePath = path.reducerPath + lowerCaseName + 'Reducer.js',
  tempFilePath = './tools/generateComponent/reducer/tempReducer.js';
  createFile(upperCaseName,lowerCaseName,filePath,tempFilePath);
}

function createFile(upperCaseName,lowerCaseName,filePath,tempFilePath) {
  const type = tempFilePath.split('.')[2];
  fs.readFile(tempFilePath, 'utf8', function (err,data) {
    if (err) return console.log(err);
    let result = {};
    if( type === 'js' ){
      // remove eslint-disable
      result = data.replace(/Template/g, upperCaseName).replace(/template/g, lowerCaseName).split('\n').slice(1).join('\n');
    } else {
      result = data.replace(/Template/g, upperCaseName).replace(/template/g, lowerCaseName);
    }
    // const result = data.replace(/Template/g, upperCaseName).replace(/template/g, lowerCaseName).split('\n').slice(1).join('\n');
    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

function upperCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

process.argv[2] && process.argv[3] ? generate(process.argv[2],process.argv[3],process.argv[4]) : console.log('Attribute Error');
