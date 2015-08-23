define( 'mod-member', [ 'CoverLayer', 'jquery', 'picker-date' ], function ( CoverLayer, $, pickerDate ) {
        var $modMember= $( ".mod-member" );
        var $modLevel = $( ".mod-level" );
        var $modPassword = $( ".mod-password" );
        var $modMemberEdit = $(".mod-member-edit");

        var $deduct = $modLevel.find(".name .content .deduct");
        var $password = $modMember.find(".password .consume-pass");
        var $edit = $modMember.find( ".password .pict .edit" );

        //显示 level 会员级别
        var clLevel = new CoverLayer({
            layers: [{
                tpl:$modMember,
                closeTrigger:".close"
            },
                {
                    tpl:$modLevel,
                    closeTrigger:".close"
                }]
        });
        $modMember.on("click",".info .memb-level .set", (function(e){
            e.preventDefault();
            clLevel.showLayer(1);
             })
        );

        //是否卡内扣除
        $deduct.on("click",function(){
            $(this).toggleClass("selected");
        });


        //显示 password 修改密码
        var clPassword = new CoverLayer({
            layers: [{
                tpl:$modMember,
                closeTrigger:".close"
            },
                {
                    tpl:$modPassword,
                    closeTrigger:".close"
                }]
        });
        $password.on("click",".alter",function(e){
            e.preventDefault();
            clPassword.showLayer(1);
        });

        //重置密码
        $password.on("click",".reset",function(){
            $(this).closest(".consume-pass").find("input").val("");
        });


        //编辑
        var clEdit = new CoverLayer({
            layers: [{
                tpl:$modMember,
                closeTrigger:".close"
            },
                {
                    tpl : $modMemberEdit,
                    closeTrigger : '.close'
                }]
        });

        $edit.click( function (e) {
            e.preventDefault();
            clEdit.showLayer(1);
        } );



        //选择有效期
        var months = [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ];
        var weekdays = [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ];
        $( ".date-picker" ).pickadate({
            monthsFull : months,
            monthsShort : months,
            weekdaysFull : weekdays,
            weekdaysShort : weekdays,
            selectYears : true,
            selectMonths : true,
            format : 'yyyy/mm/dd',
            formatSubmit : 'yyyy/mm/dd',
            today: '今天',
            clear: '清空',
            close: '关闭',
            labelMonthNext: '下一月',
            labelMonthPrev: '上一月',
            labelMonthSelect: '选择月份',
            labelYearSelect: '选择年'
        });



        return {
            show : function (){
                clLevel.show();
                clPassword.show();
                clEdit.show();
            }
        }
} );


