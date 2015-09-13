requirejs.config({
    paths: {
        jquery: ['../lib/js/jquery-1.11.3.min'],
        'module1': ['./module1'],
        'module2': ['./module2']
    }
});

require( [ 'module1', 'module2' ], function ( module1, module2 ) {

} );
