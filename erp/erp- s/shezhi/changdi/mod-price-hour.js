define( 'mod-price-hour', [ 'CoverLayer', 'jquery', 'picker-date', 'picker-time' ], function ( CoverLayer, $, pickerDate, pickerTime ) {
    var $modPriceHour = $( ".mod-price-hour" );

    // 弹层联动
    var cl = new CoverLayer({
        layers : [
            {
                tpl : $modPriceHour,
                closeTrigger : '.close'
            }
        ]
    });

    // 增加条目
    $modPriceHour.on( "click", ".plus", function (e) {
        e.preventDefault();

        var $li = $(this).closest(".item");
        var $new = $li.clone();
        $new.insertAfter( $li );

        updateNo();

        $new.find( ".time-picker" ).pickatime({
            clear : '清空',
            format : 'HH:i',
            formatSubmit : 'HH:i',
            interval : 30 // 设置时间间隔值
        });
    } );

    // 减少条目
    $modPriceHour.on( "click", ".minus", function (e) {
        e.preventDefault();

        $(this).closest(".item").remove();

        updateNo();
    } );

    // 更新条目序号
    function updateNo () {
        $modPriceHour.find( ".cards .item" ).each( function (index) {
            $(this).find( ".no span" ).text( "<" + (index + 1) + ">" );
        } );
    }

    // 开放时间选择
    $modPriceHour.find( ".time-picker" ).pickatime({
        clear : '清空',
        format : 'HH:i',
        formatSubmit : 'HH:i',
        interval : 30 // 设置时间间隔值
    });

    return {
        show : function () {
            cl.show();
        }
    }
} );