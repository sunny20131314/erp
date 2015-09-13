
requirejs.config({
    paths:{
        jquery: ['../../lib/js/jquery-1.11.3.min'],
        'picker': ['../../lib/datetimepicker/picker'],
        'picker-date': ['../../lib/datetimepicker/picker.date'],
        'mod-member':['./mod-member'],
        'CoverLayer': ['../../common/js/CoverLayer']

    }
});

require( [ 'mod-member', 'jquery' ], function (modMember, $ ) {
        $(function(){
            //显示demo
            $( ".demo-member" ).click(function(){
                modMember.show();
            });
        });
    }

);