define( 'mod-place-edit', [ 'CoverLayer', 'jquery', 'picker-date' ], function ( CoverLayer, $, pickerDate ) {
        var $modPlaceEdit = $( ".mod-place-edit" );

        // 弹层联动
        var cl = new CoverLayer({
            layers : [
                {
                    tpl : $modPlaceEdit,
                    closeTrigger : '.close'
                }
            ]
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