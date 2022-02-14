const express = require('express');
// import express from 'express';
const FileController = require('../controllers/fileController');
const fileController = new FileController();

const fileRouter = express.Router();

fileRouter.post(
    '/upload',
    fileController.upload.single('file'),
    fileController.uploadFile,
);

module.exports = fileRouter;
