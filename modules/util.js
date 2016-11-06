'use strict';
class Util {
    static calculate(users, done) {
        var results = [];
        for (var i = 0, len = users.length; i < len; i++) {
            results.push({
                'user': users[i].username,
                'number_of_messages': users[i].actions.length
            });
        }
        results.sort(Util.sortByKey);
        done(results);
    }

    static sortByKey(a, b) {
        var keyA = a.number_of_messages,
            keyB = b.number_of_messages;
        if (keyA > keyB) {
            return -1;
        }
        if (keyA < keyB) {
            return 1;
        }
        return 0;
    }
    static buildRanking(results){
        var cadena = 'Any messages yet, sorry!';
        if(results.length){
            cadena = 'First: ' + results[0].user + ', messages: ' + results[0].number_of_messages;
        }
        if(results.length > 1){
            cadena = cadena + '\nSecond: ' + results[1].user + ', messages: ' + results[1].number_of_messages;
        }
        if(results.length > 2){
            cadena = cadena + '\nThird: ' + results[2].user + ', messages: ' + results[2].number_of_messages;
        }
        return cadena;
    }
}
module.exports = Util;