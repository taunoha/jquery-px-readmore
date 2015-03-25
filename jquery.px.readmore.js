;(function($) {

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

                $con.removeClass('open').attr('aria-expanded', false);
                $this.text($con.data('readmore'));

                $this.trigger(e = $.Event('closed.px.readmore', { relatedTarget: this }));

                return;
            }

            $con.addClass('open').attr('aria-expanded', true);
            $this.text($con.data('readmore-less'));

            $this.trigger(e = $.Event('open.px.readmore', { relatedTarget: this } ));

        };

        return this.each(function() {
            var $el = $(this);
            var token = 'px-' + Math.random().toString(36).substr(2);
            var contentHeight = $el.height();
            var maxHeight = $el.data('readmore-max-height') || settings.maxHeight;

            if (contentHeight < maxHeight)
                return;

            $el.data('readmore-content-height', contentHeight);
            $el.addClass('has-px-readmore').attr('aria-expanded', false).attr('id', token);
            $el.wrapInner(function() {
                return '<div class="' + settings.helperConClasses + '" style="height: ' + maxHeight + 'px"></div>';
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
