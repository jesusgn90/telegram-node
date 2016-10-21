'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model(
    'User',
    new Schema({
        username: { type: String, required: true },
        actions: { type: [String], required: true }
    })
);
