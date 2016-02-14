/**
 * Twitter service provider
 */

module.exports = {
	counterUrl: 'https://openshare.the.tj/count.json?url={url}',
	convertNumber: function (counter) {
		return counter.count;
	},
    popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }
        
        return true;
    }
};
