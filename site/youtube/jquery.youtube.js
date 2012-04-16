(function ($) {

    var methods = {
        init : function (options) {

            return this.each(function () {

            });

        },
        destroy : function () {

            return this.each(function () {

            })

        }
    };

    $.fn.youtube = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.youtube');
        }

    };

})(jQuery);