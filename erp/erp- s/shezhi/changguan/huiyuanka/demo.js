requirejs.config({
    paths: {
        jquery: ['../../../lib/js/jquery-1.11.3.min'],
        'mod-member-card': ['./mod-member-card'],
        'CoverLayer': ['../../../common/js/CoverLayer']
    }
});

require( [ 'jquery', 'mod-member-card' ], function ( $, modMemberCard ) {

    $( function () {
        // demo
        $( ".demo-member-card" ).click(function () {
            modMemberCard.show();
        });
        modMemberCard.show();

    } )

} );