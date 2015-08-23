define( 'mod-ku', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modKu = $(".mod-ku");
    var $modKuSelect = $modKu.find( ".header .ku-list" );
    var $modDetail = $(".mod-commodity-detail");


    // 清单路径的弹层联动
    var clDetail = new CoverLayer({
        layers : [
            {
                tpl : $modKu,
                closeTrigger : '.close'
            },
            {
                tpl : $modDetail,
                closeTrigger : '.close'
            }
        ]
    });

    // 清单按钮点击
    $modKu.on( "click", ".content .inventory", function (e) {
        e.preventDefault();

        clDetail.showLayer(1);
    } );

    //select ——改变
    $modKuSelect.on("change",function(){
        var $val = $modKu.find(".header option:selected").val() || $modKu.find(".header option:first").val();
        if ($val == 2){
            $modKu.find(".content .put-num span").text("现有数量");
        }else{
            $modKu.find(".content .put-num span").text("入库数量");
        }

    });

    return {
        showKu:function(){
            clDetail.show();
            $modKuSelect.val(1);
            $modKuSelect.trigger("change");
        },
        showPanDian:function(){
           clDetail.show();
            $modKuSelect.val(2);
            $modKuSelect.trigger("change");
        }
    }
});
