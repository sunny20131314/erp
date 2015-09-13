requirejs.config({
    paths: {
        'jquery': ['../lib/js/jquery-1.11.3.min'],
        'CoverLayer': ['../common/js/CoverLayer']
    }
});
require( [ 'jquery', 'CoverLayer' ], function ( $, CoverLayer ) {
    $(function(){
        var $modHour = $(".mod-hour");
        var $less = $modHour.find(".place-time .less");
        var $modPackage = $(".mod-package");
        var $modPrice = $(".mod-price");


        var clPackage = new CoverLayer({
            layers : [
                {
                    tpl : $modPackage,
                    closeTrigger : '.close ,.submit'
                }
            ]
        });

        var clPrice = new CoverLayer({
            layers : [
                {
                    tpl : $modPrice,
                    closeTrigger : '.close ,.submit'
                }
            ]
        });


        $modHour.on("click",".week li",function(){
            var $this = $(this);
            $this.toggleClass("selected");
        });

        // set object to show placeVal & timeVal
        var dataVal = {};
        $less.click(function(){
            var $this = $(this);
            var placeVal = $this.prevAll(".width").text();
            var timeVal = $this.data("start-time");

            $this.toggleClass("selected");

            if(!dataVal[placeVal]){
                dataVal[placeVal] = {};
                dataVal[placeVal][timeVal] = 1;
            }else{
                var exsited = false;
                for(var i in dataVal[placeVal] ){
                    if ( i == timeVal){
                        delete dataVal[placeVal][i];
                        exsited = true;
                        break;
                    }
                }
                if ( !exsited) {
                    dataVal[placeVal][timeVal] = 1;
                }
            }
            console.log(dataVal)
        });

        //set background-color
        $modPackage.on("click",".header .submit",function(e){
            $modHour.find(".place-time .selected").css("backgroundColor",createColor());
            $less.removeClass("selected");

            dataVal = {};
        });

        var createColor=function(){
            var color = new Array(6);
            for (var i = 0;i < 6;i++){
                color[i] = Math.round(Math.random()*15).toString(16);
            }
            var bgColor = "#";
            var ColorLen = color.length;
            for ( var  k= 0; k != ColorLen; k++ ) {
                bgColor += color[ k ];
            }
            return bgColor;
        };

        //show package
        $modHour.on("click",".header .package",function(){
            clPackage.show();

            $modPackage.find(".content").empty();

            for( var i in dataVal ){
                var isFirst = true;
                for( var k in dataVal[i] ){
                    if (isFirst) {
                        $modPackage.find(".content").append( $(
                                "<div class='set-place'>" +
                                "确定将羽毛球vip场地" + i + "场" +
                                "</div>")
                        );
                        var $setTime = $("<div class='set-time'></div>");
                        $modPackage.find(".content").append(
                            $setTime
                        );

                        isFirst = false;
                    }
                    $setTime.append(
                        "<div>" + k + "</div>"
                    );
                }
            }
        });

        //show price
        $modHour.on("click",".header .price",function() {
            clPrice.show();
        });

        //set val of online & offline
        $modPrice.on("click",".header .submit",function( ){
            var onlineVal = $modPrice.find(".online input").val();
            var offlineVal = $modPrice.find(".offline input").val();

            $modHour.find(".place-time .selected").text( onlineVal + " | " + offlineVal);
            $less.removeClass("selected");
            $modPrice.find(".content input").val("");
            dataVal = {};
        });

        // place-close
        $modHour.on("click",".header .place-close",function() {
            $modHour.find(".place-time .selected").toggleClass("select").text("");
            $less.removeClass("selected");
            dataVal = {};
        });


    });
});

