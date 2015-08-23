
define( 'mod-recharge', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modRecharge = $( ".mod-recharge");

    //充值
    var clrecharge = new CoverLayer({
        layers:[{
            tpl: $modRecharge,
            closeTrigger: ".close"
        }]
    });
    // 付款方式
    var $payTyps = $modRecharge.find( ".pay-type li" );
    $modRecharge.on( "click", ".pay-type li", function (e) {
        var $this = $(this);

        $payTyps.removeClass( "selected" );
        $this.addClass( "selected" );
    } );

    return {
        show : function (){
                clrecharge.show();
        }
    }

} );
