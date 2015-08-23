requirejs.config({
    paths: {
        jquery: ['../../lib/js/jquery-1.11.3.min'],
        'mod-consume': ['./mod-consume'],
        'CoverLayer': ['../../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-consume' ], function ( $, modConsume ) {

    $( function () {
        // demo ： 显示消费
        $( ".demo-consume" ).click(function () {
            modConsume.show();
        });

    } )

} );