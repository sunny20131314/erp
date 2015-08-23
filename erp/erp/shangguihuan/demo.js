requirejs.config({
    paths: {
        jquery: ['../lib/js/jquery-1.11.3.min'],
        'mod-return': ['./mod-return'],
        'CoverLayer': ['../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-return' ], function ( $, modReturn ) {
    $(function ( ){

        // demo ： 显示消费

        $( ".demo-return" ).click(function () {
            modReturn.show();
        });
    });

} );