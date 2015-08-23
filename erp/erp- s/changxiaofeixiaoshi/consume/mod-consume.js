
define( 'mod-consume', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modConsume = $( ".mod-consume" );
    var $modDetail = $( ".mod-consume-detail" );
    var $modPopRecharge = $( ".mod-pop-recharge" );
    var $msgForConsume = $( "#msg-for-consume" );
    var $forMemberCard = $modConsume.find( ".for-member-card" );

    // 清单路径的弹层联动
    var clDetail = new CoverLayer({
        layers : [
            {
                tpl : $modConsume,
                closeTrigger : '.close'
            },
            {
                tpl : $modDetail,
                closeTrigger : '.close'
            }
        ]
    });

    // 清单按钮点击
    $modConsume.on( "click", ".pay-detail", function (e) {
        e.preventDefault();

        clDetail.showLayer(1);
    } );


    // 编辑路径的弹层联动
    var clEdit = new CoverLayer({
        layers : [
            {
                tpl : $modConsume,
                closeTrigger : '.close'
            },
            {
                tpl : $msgForConsume,
                closeTrigger : '.close'
            }
        ]
    });

    // 编辑按钮点击
    $modConsume.on( "click", ".pay-line .edit", function (e) {
        e.preventDefault();

        clEdit.showLayer(1);
    } );


    // 充值的弹层联动
    var clRecharge = new CoverLayer({
        layers : [
            {
                tpl : $modConsume,
                closeTrigger : '.close'
            },
            {
                tpl : $modPopRecharge,
                closeTrigger : '.close'
            }
        ]
    });

    // 充值按钮点击
    $modConsume.on( "click", ".charge", function (e) {
        e.preventDefault();

        clRecharge.showLayer(1);
    } );


    // 消费付款方式
    var $payTyps = $modConsume.find( ".pay-type li" );
    $modConsume.on( "click", ".pay-type li", function (e) {
        var $this = $(this);

        if ( $this.hasClass( "member" ) ) {
            $forMemberCard.show();
        } else {
            $forMemberCard.hide();
        }

        $payTyps.removeClass( "selected" );
        $this.addClass( "selected" );
    } );


    // 充值付款方式
    var $rechargePayTyps = $modPopRecharge.find( ".pay-type li" );
    $modPopRecharge.on( "click", ".pay-type li", function (e) {
        var $this = $(this);

        $rechargePayTyps.removeClass( "selected" );
        $this.addClass( "selected" );
    } );


    //选择时间段
    $modConsume.on( "click", ".time-list li", function (e) {
        e.preventDefault();

        $(this).toggleClass("selected");
    });



    return {
        show : function () {
            clEdit.show();
            clDetail.show();
            clRecharge.show();
        }
    }

} );