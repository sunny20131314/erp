requirejs.config({
    paths: {
        jquery: ['../../../lib/js/jquery-1.11.3.min'],
        'picker': ['../../../lib/datetimepicker/picker'],
        'picker-date': ['../../../lib/datetimepicker/picker.date'],
        'mod-experience': ['./mod-experience'],
        'CoverLayer': ['../../../common/js/CoverLayer']
    }
});

require( [ 'mod-experience', 'jquery' ], function ( modExperience, $ ) {

    $( function () {
        // demo
        $( ".demo-experience" ).click(function () {
            modExperience.show();
        });


    } )

} );