var exec = require('cordova/exec');

exports.show = function(url, title, options, successCallback, errorCallback) {
    if (title == undefined) {
        title = '';
    }

    if (typeof options == "undefined") {
        options = {};
    }

    if (options.share === undefined) {
        options.share = false;
    }

    if (options.closeButton === undefined) {
        options.closeButton = true;
    }

    if (options.copyToReference === undefined) {
        options.copyToReference = false;
    }

    var args = [url, title, options.share, options.closeButton, options.copyToReference];

    exec(successCallback, errorCallback, "PhotoViewer", "show", args);
};
