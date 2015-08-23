requirejs.config({
    paths: {
        jquery : ['../../lib/js/jquery-1.11.3.min'],
        'picker' : ['../../lib/datetimepicker/picker'],
        'picker-date' : ['../../lib/datetimepicker/picker.date'],
        'picker-time' : ['../../lib/datetimepicker/picker.time'],
        'mod-place-edit' : ['./mod-place-edit'],
        'mod-price-ticket' : ['./mod-price-ticket'],
        'mod-price-hour' : ['./mod-price-hour'],
        'CoverLayer' : ['../../common/js/CoverLayer']
    }
});

require( [ 'mod-place-edit', 'mod-price-ticket', 'mod-price-hour', 'jquery' ], function ( modPlaceEdit, modPriceTicket, modPriceHour, $ ) {

    $( function () {
        // demo 场地编辑
        $( ".demo-place-edit" ).click(function () {
            modPlaceEdit.show();
        });

        // demo 价格设置门票制
        $( ".demo-price-ticket" ).click(function () {
            modPriceTicket.show();
        });

        // demo 价格设置小时制
        $( ".demo-price-hour" ).click(function () {
            modPriceHour.show();
        });
        modPriceHour.show()
    } )

} );