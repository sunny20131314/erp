define( 'CascadeDropbox', ['jquery'], function ( $ ) {

    /**
     * @param options
     * options.tpl String
     * options.levels String
     * options.parrentAttr
     * @constructor
     */
    function CascadeDropbox ( options ) {
        this.options = options;

        // tpl
        if ( !options.tpl ) {
            return;
        }
        this.tpl = $( options.tpl );

        // levels
        if ( !options.levSelector )
            return;
        this.levels = this.tpl.find( options.levSelector );

        // parrentAttr
        !options.parrentAttr && ( options.parrentAttr = "data-parrent-val" );

        this._init();
    }

    CascadeDropbox.prototype._init = function () {
        var self = this;

        this.tpl.on( "change", "select", function () {
            var $this = $(this);
            var val = $this.children( "option:selected" ).val();
            var $nowLev = $this.closest( self.options.levSelector );
            var levIndex = self.levels.index( $nowLev );
            var len = self.levels.length;
            console.log( val );

            // 修改之后的每个level
            var id = val;
            var $selects, $select;
            for ( var i = levIndex + 1; i < len; i++ ) {
                $selects = self.levels.eq(i).find("select");
                $select = $selects.filter( '[' + self.options.parrentAttr + '="' + id + '"]' );

                $selects.hide();
                $select.show();

                id = ( $select.find( "option:selected" ) || $select.find( "option:first" ) ).val();
            }
        } );
    };

    return CascadeDropbox;
} );