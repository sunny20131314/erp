define( 'mod-experience', [ 'CoverLayer', 'jquery', 'picker-date' ], function ( CoverLayer, $, pickerDate ) {
        var $modExperience = $( ".mod-experience" );
        var $modExpEdit = $( ".mod-exp-edit" );

        // 弹层联动
        var cl = new CoverLayer({
            layers : [
                {
                    tpl : $modExperience,
                    closeTrigger : '.close'
                },
                {
                    tpl : $modExpEdit,
                    closeTrigger : '.close'
                }
            ]
        });

        // "新增"或者"修改"按钮点击
        $modExperience.on("click", ".new, .change", function (e) {
            e.preventDefault();

            cl.showLayer(1);
        });

        // 有效期日期的选择
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
            show : function () {
                cl.show();
            }
        }
} );