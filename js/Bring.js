$( document ).ready(function() {
 
    $('.toggleBoy').hide();
    $('.toggleGirl').hide();
    $('.btnBoy').click(function() {
      $( '.toggleBoy' ).slideToggle( 'slow', function() {
      });
    });
    $('.btnGirl').click(function() {
        $( '.toggleGirl' ).slideToggle( 'slow', function() {
        });
      });
  });
