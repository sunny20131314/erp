define( 'mod-departure', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modDeparture = $( ".mod-departure" );
    var $modDepartureRslt = $( ".mod-departure-rslt" );
    var $msgForDep = $( "#msg-for-departure" );
    var $forMemeberCard = $modDepartureRslt.find( ".for-member-card" );

    // 离场的弹层联动
    var clDeparture = new CoverLayer({
        layers : [
            {
                tpl : $modDeparture,
                closeTrigger : '.close'
            },
            {
                tpl : $modDepartureRslt,
                closeTrigger : '.close'
            }
        ]
    });

    // 离场按钮点击响应
    $modDeparture.on( "click", ".pay-line .departure", function (e) {
        e.preventDefault();

        clDeparture.showLayer(1);
    } );

    // 编辑路径的弹层联动
    var clEdit = new CoverLayer({
        layers : [
            {
                tpl : $modDeparture,
                closeTrigger : '.close'
            },
            {
                tpl : $msgForDep,
                closeTrigger : '.close'
            }
        ]
    });

    // 编辑按钮点击
    $modDeparture.on( "click", ".pay-line .edit", function (e) {
        e.preventDefault();

        clEdit.showLayer(1);
    } );

    // 付款方式
    var $payTyps = $modDepartureRslt.find( ".pay-type li" );
    $modDepartureRslt.on( "click", ".pay-type li", function (e) {
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
            clDeparture.show();
        }
    }
} );