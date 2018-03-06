'use strict';
const path = require('path');
const {app, BrowserWindow} = require('electron');

if (process.mas) app.setName('MJML Cheatsheet')

let mainWindow = null

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 1000
    });
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
});