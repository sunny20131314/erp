define( 'mod-commodity', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modCommodity = $( ".mod-commodity" );
    var $modMoneyMsg = $( "#msg-for-commodity" );
    var $forMemeberCard = $modCommodity.find( ".for-member-card" );

    //dl 列表
    var $list = $modCommodity.find( ".content .list" );

    //物品件数-1
    $list.on( "click", ".num .minus" ,function (){
        var $this = $(this);

        //this 父元素的子元素  em
        var value = $this.closest( ".num" ).find( "em");
        var i = parseInt( value.text() ) - 1 ;
        if ( i >= 1){
            value.text( i );
        }else{
            value.text( 1 );
        }
    });

    //  物品+1
    $list.on( "click", ".num .plus" ,function (){
        var $this = $(this);

        //this 父元素的子元素  em
        var value = $this.closest( ".num" ).find( "em");
        var i = parseInt( value.text() ) + 1 ;
        value.text( i );
    });

    //delete
    $list.on( "click", "em" ,function (){
        var $this = $(this);

        //delete 的父元素 dd
        var $dd = $this.closest("dd");
        $dd.hide();
    });

    // 编辑路径的弹层联动
    var clEdit = new CoverLayer({
        layers : [
            {
                tpl : $modCommodity,
                closeTrigger : '.close'
            },
            {
                tpl : $modMoneyMsg,
                closeTrigger : '.close'
            }
        ]
    });

    // 编辑按钮点击
    $modCommodity.on( "click", ".pay-line .edit", function (e) {
        e.preventDefault();

        clEdit.showLayer(1);
    } );

    // 付款方式
    var $payTyps = $modCommodity.find( ".pay-type li" );
    $modCommodity.on( "click", ".pay-type li", function (e) {
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
        }
    }

} );