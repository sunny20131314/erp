
requirejs.config({
    paths:{
           jquery:[ '../lib/js/jquery-1.11.3.min'] ,
           'mod-recharge':['./mod-recharge'],
           'mod-more':['./mod-more'],
           'mod-ticket':['./mod-ticket'],
           'CoverLayer':['../common/js/CoverLayer']
    }
});

require(['jquery','mod-recharge','mod-more','mod-ticket'], function($,modRecharge,modMore,modTicket){
       $(function(){
           //显示demo
           $( ".demo-recharge" ).click(function(){
               modRecharge.show();
           });
           $( ".demo-more" ).click(function(){
               modMore.show();
           });
           $( ".demo-ticket" ).on( "click" ,function(){
               modTicket.show();
           });
       });
    }

);