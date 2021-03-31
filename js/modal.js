'use strict'
// modal
// 開く
{
  $( '.js-modal-open' ).each( function() {
    $( this ).on( 'click', function() {
         var target = $( this ).data( 'target' );
         var modal = document.getElementById( target );
         $( modal ).fadeIn( 300 );
         return false;
    });
});

// ウィンドウを閉じる
$( '.js-modal-close' ).on( 'click', function() {
   $( '.js-modal' ).fadeOut( 300 );
   return false;
});


}