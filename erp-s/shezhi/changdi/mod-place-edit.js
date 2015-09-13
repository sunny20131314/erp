define( 'mod-place-edit', [ 'CoverLayer', 'jquery', 'picker-date', 'picker-time' ], function ( CoverLayer, $, pickerDate, pickerTime ) {
    var $modPlaceEdit = $( ".mod-place-edit" );
    var $places = $modPlaceEdit.find( ".places" );
    var $placesRadios = $places.find( ".row-content span" );
    var $charge = $modPlaceEdit.find( ".charge" );
    var $chargeRadios = $charge.find( ".row-content span" );
    var $chargeInput = $charge.find( ".row-content input" );

    // 弹层联动
    var cl = new CoverLayer({
        layers : [
            {
                tpl : $modPlaceEdit,
                closeTrigger : '.close'
            }
        ]
    });

    // 开放时间选择
    $modPlaceEdit.find( ".time-picker" ).pickatime({
        clear : '清空',
        format : 'HH:i',
        formatSubmit : 'HH:i',
        interval : 30 // 设置时间间隔值
    });

    // 运动地点
    $places.on( "click", ".row-content span", function () {
        $placesRadios.removeClass( "selected" );
        $(this).addClass( "selected" );
    } );

    // 收费方式
    $charge.on( "click", ".row-content span", function () {
        var $this = $( this );
        $chargeRadios.removeClass( "selected" );
        $this.addClass( "selected" );

        if ( $this.hasClass( "ticket" ) ) {
            $chargeInput.removeClass( "disabled" );
            $chargeInput.attr( "disabled", false );
        } else {
            $chargeInput.addClass( "disabled" );
            $chargeInput.attr( "disabled", true );
        }
    } );

    return {
        show : function () {
            cl.show();
        }
    }
} );