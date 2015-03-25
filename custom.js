jQuery(function($) {

  var readmoreHandler = function(e) {
      var $self = $(e.relatedTarget);
      var $helper = $self.parent().prev();

      if( e.type == 'open' ) {
          $helper.animate({height: $helper.parent().data('px-readmore-max')}, 250);
      } else {
          $helper.animate({height: 200}, 250);
      }
  };
  $(document).on('open.px.readmore', readmoreHandler);
  $(document).on('closed.px.readmore', readmoreHandler);
    
});
