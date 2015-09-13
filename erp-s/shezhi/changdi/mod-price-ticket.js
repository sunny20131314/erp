define( 'mod-price-ticket', [ 'CoverLayer', 'jquery', 'picker-date', 'picker-time' ], function ( CoverLayer, $, pickerDate, pickerTime ) {
    var $modPriceTicket = $( ".mod-price-ticket" );

    // 弹层联动
    var cl = new CoverLayer({
        layers : [
            {
                tpl : $modPriceTicket,
                closeTrigger : '.close'
            }
        ]
    });

    // 增加条目
    $modPriceTicket.on( "click", ".plus", function (e) {
        e.preventDefault();

        var $li = $(this).closest("li");
        $li.clone().insertAfter( $li );

        updateNo();
    } );

    // 减少条目
    $modPriceTicket.on( "click", ".minus", function (e) {
        e.preventDefault();

        $(this).closest("li").remove();

        updateNo();
    } );

    // 更新条目序号
    function updateNo () {
        $modPriceTicket.find( ".cards li" ).each( function (index) {
            $(this).find( ".no span" ).text( "<" + (index + 1) + ">" );
        } );
    }

    return {
        show : function () {
            cl.show();
        }
    }
} );