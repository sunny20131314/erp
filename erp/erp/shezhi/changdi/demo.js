requirejs.config({
    paths: {
        jquery: ['../../lib/js/jquery-1.11.3.min'],
        'picker': ['../../lib/datetimepicker/picker'],
        'picker-date': ['../../lib/datetimepicker/picker.date'],
        'mod-place-edit': ['./mod-place-edit'],
        'CoverLayer': ['../../common/js/CoverLayer']
    }
});

require( [ 'mod-place-edit', 'jquery' ], function ( modPlaceEdit, $ ) {

    $( function () {
        // demo
        $( ".demo-place-edit" ).click(function () {
            modPlaceEdit.show();
        });
        modPlaceEdit.show();

    } )

} );