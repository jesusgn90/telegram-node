/* jshint esversion: 6 */
'use strict';
const User = require('../models/user');
/**
 * @module Processor
 */
(function () {
    function process(text, done) {
        calculateMostUsedWord(function(){
            done(false);
        });

    }

    function calculateMostUsedWord(done) {
        User.find({}, function (err, data) {
            if (err) throw err;
            let words = {};
            for (let i = 0, len = data.length; i < len; i++) {
                for (let j = 0, len2 = data[i].actions.length; j < len2; j++) {
                    words[data[i].actions[j]] ? words[data[i].actions[j]] = parseInt(words[data[i].actions[j]]) + 1 : words[data[i].actions[j]] = 1;
                }
            }
            let most = undefined;
            for(let w in words){
                most ? check(w) : most = [w,words[w]];
            }
            function check(w){
                if(words[w] > most[1]){
                    most = [w,words[w]]
                }
            }
            console.log(most);
            done();
        });
    }

    module.exports = {
        /**
         * @function
         * @description Process the text
         */
        process: process
    };
})();