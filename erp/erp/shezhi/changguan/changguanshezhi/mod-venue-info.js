requirejs.config({
    paths: {
        jquery: ['../../../lib/js/jquery-1.11.3.min'],
        'CoverLayer': ['../../../common/js/CoverLayer'],
        'CascadeDropbox' : ['./CascadeDropbox']
    }
});
require( [ 'jquery', 'CascadeDropbox' ], function ( $, CascadeDropbox ) {
    $(function () {
        var $body = $("body");
        var $modVenue = $(".mod-venue-info");

        /*
         * 三级联动
         */
        $modVenue.find('.mem-cascade').each(function () {
            var $this = $(this);

            var cd = new CascadeDropbox({
                tpl: $this,
                levSelector: '.mem-level'
            });

        });



        //region-base region区域

        var $baseItem = $modVenue.find(".region-base .area-content .item .row-content");
        var $baseContain = $baseItem.find(".contain");

        $body.on( "click", function (e) {
            var $target = $( e.target );

            // row content show or not
            var $par = $target.parents( ".region-base .item .row-content" );

            // target is children of .row-content
            if ( $par.length ) {
                $baseContain.show();
            } else {
                $baseContain.hide();
            }

            // if it the selected then remove it
            if ( $target.is( ".select .pic" ) ) {
                var $select = $target.closest( ".region-base .select" );

                $baseContain.find("[data-sport-id = '" + $select.data('sport-id') + "']").removeClass("selected");
                $select.remove();

            }

        } );


        //点击main 项目时 contain
        $baseContain.on("click", ".main", function () {
            var $this = $(this);

            $this.next(".detail").toggle();
            $this.toggleClass("clic");
        });


        //contain的 span 点击
        $baseContain.on("click", ".detail span", function () {
            var $this = $(this);

            if(!$this.hasClass("selected")){
                $this.addClass("selected");

                $baseItem.find(".show-span").append(
                    "<div class='select'>" +
                        "<span class='label'></span>" +
                        "<span class='pic'></span>" +
                    "</div>");
                var showSpan = $baseItem.find(".show-span .select").eq(-1);
                showSpan.find(".label").text($this.text());
                showSpan.data("sport-id", $this.data("sport-id"));
            }
        });






        //region-quali region 区域
        //显示 contain
        var $queLiItem = $modVenue.find(".region-quali .area-content .item");
        var $queLiContain = $queLiItem.find(".contain");

        $body.on( "click", function (e) {
            var $target = $( e.target );
            var $par = $target.parents( ".region-quali .item .row-content" );

            // target is children of .row-content
            if ( $par.length ) {
                $queLiContain.show();
            } else {
                $queLiContain.hide();
            }

            // if it the selected then remove it
            if ( $target.is( ".region-quali .select .pic" ) ) {
                var $select = $target.closest( ".select" );

                $queLiContain.find("[data-sport-id = '" + $select.data('sport-id') + "']").removeClass("selected");
                $select.remove();

            }
        } );

        //点击main 项目时 contain
        $queLiContain.on("click", ".main", function () {
            var $this = $(this);

            $this.next(".detail").toggle();
            $this.toggleClass("clic");
        });


        //contain的 span 点击
        $queLiContain.find(".detail span").on("click", function () {
            var $this = $(this);

            if(!$this.hasClass("selected")){
                $this.addClass("selected");


                $queLiItem.find(".show-span").append(
                    "<div class='select'>" +
                    "<span class='label'></span>" +
                    "<span class='pic'></span>" +
                    "</div>");
                var showSpan = $queLiItem.find(".show-span .select").eq(-1);
                showSpan.find(".label").text($this.text());
                showSpan.data("sport-id", $this.data("sport-id"));
            }
        });


    });
});