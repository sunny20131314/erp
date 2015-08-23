
define( 'mod-ticket', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modTicket = $ (".mod-ticket");
    var $modMoneyMsg = $( "#msg-for-return" );
    var $msgForConsume = $( "#msg-for-consume" );

    // 优惠券
    var clTicket = new CoverLayer({
        layers: [{
            tpl:$modTicket,
            closeTrigger:".close"
        },
        {   tpl : $modMoneyMsg,
            closeTrigger : '.close'
        }]
    });

    //选择时间
    $modTicket.on( "click", ".time-list li", function (e) {
        e.preventDefault();

        $(this).toggleClass("selected");
    });


    // 编辑路径的弹层联动
    var clEdit = new CoverLayer({
        layers : [
            {
                tpl : $modTicket,
                closeTrigger : '.close'
            },
            {
                tpl : $msgForConsume,
                closeTrigger : '.close'
            }
        ]
    });
    // 编辑按钮点击
    $modTicket.on( "click", ".footer .edit", function (e) {
        e.preventDefault();

        clEdit.showLayer(1);
    } );


    return {
        show : function (){
            clTicket.show();
            clEdit.show();
        }
    }
    });