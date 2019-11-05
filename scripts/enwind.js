#!/usr/bin/env node

'use strict';


const {execSync} = require('child_process');
const {unlinkSync} = require('fs');
const {resolve} = require('path');


function enableWindows() {
    console.log('Enable Windows support to the project...');
    execSync(`react-native windows`, {stdio: 'inherit'});

    unlinkSync(resolve('App.windows.js'))
}

enableWindows();
