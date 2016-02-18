/**
 * Twitter service provider
 */

var config = require('../config');

var twitter = {
    counterUrl: 'https://openshare.the.tj/count.json?url={url}',
    counter: function (url, factory) {

        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.response);
                count = data.count;
                factory(count);
            }
        };

        request.send();

    },
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }
        
        return true;
    }
};

module.exports = twitter;
