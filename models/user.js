/* jshint esversion: 6 */
'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @description User mongoose model
 */
module.exports = mongoose.model(
    'User',
    new Schema({
        username: { type: String, required: true },
        actions: { type: [String], required: true }
    })
);
