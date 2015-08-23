requirejs.config({
    paths: {
        jquery: ['../lib/js/jquery-1.11.3.min'],
        'mod-consume': ['./mod-consume'],
        'mod-departure': ['./mod-departure'],
        'CoverLayer': ['../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-consume', 'mod-departure' ], function ( $, modComsume, modDeparture ) {

    $( function () {
        // demo ： 显示消费
        $( ".demo-consume" ).click(function () {
            modComsume.show();
        });

        // deomo： 离场
        $( ".demo-departure" ).click(function () {
            modDeparture.show();
        });
    } )

} );