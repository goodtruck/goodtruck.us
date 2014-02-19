require.config({
    paths: {
        gumby: 'libs/gumby.min',
        jquery: 'libs/jquery-1.9.1.min',
        plugins: 'plugins',
        app: 'app',
        'filementgroup-responsive-carousel': 'app/components/filementgroup-responsive-carousel/Gruntfile'
    }
});

require(['jquery' ,'plugins', 'gumby', 'app'], function (app) {
    'use strict';
    // use app here
});
