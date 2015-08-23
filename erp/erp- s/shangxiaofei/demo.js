requirejs.config({
    paths: {
        jquery: ['../lib/js/jquery-1.11.3.min'],
        'mod-commodity': ['./mod-commodity'],
        'CoverLayer': ['../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-commodity' ], function ( $, modCommodity ) {
    $(function ( ){
        $( ".demo-commodity" ).click(function () {
            modCommodity.show();
        });
    });
    // demo ： 显示消费


} );