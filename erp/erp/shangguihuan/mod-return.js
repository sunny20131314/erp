define( 'mod-return', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modReturn = $( ".mod-return" );
    var $modPayReturn =  $(".mod-pay-return");
    var $modPayMoney =  $(".mod-pay-money");
    var $forMemeberCard = $modPayMoney.find( ".for-member-card" );
    var $modMoneyMsg = $( "#msg-for-return" );


    // 编辑路径的弹层联动
    var clEdit = new CoverLayer({
        layers : [
            {
                tpl : $modReturn,
                closeTrigger : '.close'
            },
            {
                tpl : $modPayMoney,
                closeTrigger : '.close'
            },
            {
                tpl : $modMoneyMsg,
                closeTrigger : '.close'
            }
        ]
    });
    var clReturn = new CoverLayer ({
        layers : [
            {
                tpl : $modReturn,
                closeTrigger : '.close'
            },
            {
                tpl : $modPayReturn,
                closeTrigger : '.close'
            }
        ]
    });

    //已付钱时点击未还
    $modReturn.on( "click",".pay-back-list .state .ret",function (e){
        e.preventDefault();
        clReturn.showLayer(1);

    });

    //未付钱 点击未还
    $modReturn.on( "click",".pay-back-list .state .money",function (e){
        e.preventDefault();
        clEdit.showLayer(1);
    });

    // 编辑按钮点击
    $modPayMoney.on( "click", ".pay-line .edit", function (e) {
        e.preventDefault();
        clEdit.showLayer(2);
    } );

    // 付款方式
    var $payTyps = $modPayMoney.find( ".pay-type li" );
    $modPayMoney.on( "click", ".pay-type li", function (e) {
        var $this = $(this);

        if ( $this.hasClass( "member" ) ) {
            $forMemeberCard.show();
        } else {
            $forMemeberCard.hide();
        }

        $payTyps.removeClass( "selected" );
        $this.addClass( "selected" );
    } );


    return {
        show : function () {
            clEdit.show();
            clReturn.show();
        }
    }

} );