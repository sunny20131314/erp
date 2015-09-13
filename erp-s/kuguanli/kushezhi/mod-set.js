define( 'mod-set', [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    var $modSet = $(".mod-set");
    var $modTypeEdit = $(".mod-type-edit");
    var $modUnitEdit = $(".mod-unit-edit");
    var $modMemberEdit = $(".mod-member-edit");


    //上架下架的背景转换
    $modSet.on("click",".footer .commodity-detail a",function(e){
        e.preventDefault();
        console.log(1);

        var $this = $(this);
        $modSet.find(".footer .commodity-detail a").removeClass("selected");
        $this.addClass("selected");
    });


    // 类型编辑的弹层联动
    var clType = new CoverLayer({
        layers : [
            {
                tpl : $modSet,
                closeTrigger : '.close'
            },
            {
                tpl : $modTypeEdit,
                closeTrigger : '.close'
            }
        ]
    });
    $modSet.on( "click", ".content .type-set", function (e) {
        e.preventDefault();
        clType.showLayer(1);
    } );

    //类型编辑的添加名称
    $modTypeEdit.on("click",".add-type",function(){
        var $val = $modTypeEdit.find(".content .add input").val();
        if (0 != $val.length) {
            $modTypeEdit.find(".content .contain").append(
                "<span class='fd-clr item'>" +
                "<span class='name'>" + $val + "</span>" +
                "<span class='pic'></span>" +
                "</span>")
        }
    });

    //类型编辑的删除名称
    $modTypeEdit.on("click",".contain .pic",function(){
        var $this = $(this);
        var $span = $this.parent("span");
        $span.remove();
    });


        // 单位编辑的弹层联动
    var clUnit = new CoverLayer({
        layers : [
            {
                tpl : $modSet,
                closeTrigger : '.close'
            },
            {
                tpl : $modUnitEdit,
                closeTrigger : '.close'
            }
        ]
    });
    $modSet.on( "click", ".content .unit-set", function (e) {
        e.preventDefault();
        clUnit.showLayer(1);
    } );


    //单位编辑的添加名称
    $modUnitEdit.on("click",".add-unit",function(){
        var $val = $modUnitEdit.find(".content .add input").val();
        if (0 != $val.length){
            $modUnitEdit.find(".content .contain").append(
                "<span class='fd-clr item'>" +
                "<span class='name'>" +$val+"</span>" +
                "<span class='pic'></span>" +
                "</span>")
        }
    });

    //单位编辑的删除名称
    $modUnitEdit.on("click",".contain .pic",function(){
        var $this = $(this);
        var $span = $this.parent("span");
        $span.remove();
    });



    // 图片编辑的弹层联动
    var clEdit = new CoverLayer({
        layers : [
            {
                tpl : $modSet,
                closeTrigger : '.close'
            },
            {
                tpl : $modMemberEdit,
                closeTrigger : '.close'
            }
        ]
    });
    $modSet.on( "click", ".footer .detail .edit", function (e) {
        e.preventDefault();
        clEdit.showLayer(1);
    } );


    return {
        show:function(){
            clType.show();
            clUnit.show();
            clEdit.show();
        }
    }
});
