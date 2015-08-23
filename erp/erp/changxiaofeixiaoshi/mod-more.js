define( 'mod-more', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modMore = $( ".mod-more");

    //更多
    var clmore = new CoverLayer({
        layers: [{
            tpl:$modMore,
            closeTrigger:".close"
        }]
    });
    return {
        show : function (){
            clmore.show();
        }
    }
});

