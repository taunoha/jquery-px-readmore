(function($) {

    $.fn.readmore = function(options) {

        var defaults = {
            maxHeight: 200,
            btnClasses: 'button link',
            helperConClasses: 'px-readmore-helper',
            toggleConClasses: 'px-readmore-toggle'
        };

        var settings = $.extend({}, defaults, options);

        var toggle = function(e) {
            var $this = $(this);
            var $con = $this.closest('[data-readmore]');

            if ($con.hasClass('open')) {
                $con.removeClass('open').attr('aria-expanded', false);;
                $this.text($con.data('readmore'));
                return;
            }

            $con.addClass('open').attr('aria-expanded', true);
            $this.text($con.data('readmore-less'));

        };

        return this.each(function() {
            var $el = $(this);
            var token = 'px-' + Math.random().toString(36).substr(2);

            if ($el.height() < settings.maxHeight)
                return;

            $el.addClass('has-readmore').attr('aria-expanded', false).attr('id', token);
            $el.wrapInner(function() {
                return '<div class="' + settings.helperConClasses + '"></div>';
            });

            $el.append(
                $('<div />')
                .addClass(settings.toggleConClasses)
                .append(
                    $('<button type="button" class="' + settings.btnClasses + '" aria-controls="' + token + '">' + $el.data('readmore') + '</button>').on('click.readmore', toggle)
                )
            );
        });
    };

    $(function() {
        $('[data-readmore]').readmore();
    });

}(jQuery));
