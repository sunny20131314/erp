define( 'mod-member-card', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modMemberCard = $( ".mod-member-card" );

    // 增加条目
    $modMemberCard.on( "click", ".plus", function (e) {
        e.preventDefault();

        var $li = $(this).closest("li");
        $li.clone().insertAfter( $li );

        updateNo();
    } );

    // 减少条目
    $modMemberCard.on( "click", ".minus", function (e) {
        e.preventDefault();

        $(this).closest("li").remove();

        updateNo();
    } );

    function updateNo () {
        $modMemberCard.find( ".cards li" ).each( function (index) {
            $(this).find( ".no span" ).text( "<" + (index + 1) + ">" );
        } );
    }

    // 弹层联动
    var cl = new CoverLayer({
        layers : [
            {
                tpl : $modMemberCard,
                closeTrigger : '.close'
            }
        ]
    });

    return {
        show : function () {
            cl.show();
        }
    }

} );