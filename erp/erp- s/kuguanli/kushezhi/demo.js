requirejs.config({
    paths: {
        jquery: ['../../lib/js/jquery-1.11.3.min'],
        'mod-set': ['./mod-set'],
        'CoverLayer': ['../../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-set' ], function ( $, modSet) {

    $( function () {
        // demo ： 显示设置
        $( ".demo-set" ).click(function () {
            modSet.show();
        });

    } )

} );