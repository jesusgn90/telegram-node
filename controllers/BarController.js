const Telegram               = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class BarController extends TelegramBaseController {

    barHandler($) {
        $.sendMessage('Hello from BarController');
    }

    get routes() {
        return {
            'barCommand': 'barHandler'
        };
    }
}
module.exports = BarController;