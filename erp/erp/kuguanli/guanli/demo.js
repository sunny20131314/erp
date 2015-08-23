requirejs.config({
    paths: {
        jquery: ['../../lib/js/jquery-1.11.3.min'],
        'mod-ku': ['./mod-ku'],
        'CoverLayer': ['../../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-ku' ], function ( $, modKu) {

    $( function () {
        // demo ： 显示消费
        $( ".demo-ku" ).click(function () {
            modKu.showKu();
        });
        $( ".demo-pandian" ).click(function () {
            modKu.showPanDian();
        });

    } )

} );