window.JZ = widnow.JZ || {};
(function (win, $) {
    //@param msg {String} debug information
    $.log = function (msg) {
        if(window.console){
            console.log(msg);
        }
    }
})(window,JZ);