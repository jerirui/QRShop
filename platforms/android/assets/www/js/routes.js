(function() {
    'use strict';

    QRShop.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })

        .state('app.search', {
            url: "/search",
            views: {
                'menuContent': {
                    templateUrl: "templates/search-filter.html",
                    controller: 'SearchController'
                }
            }
        })

        .state('app.stock', {
            url: "/stock",
            views: {
                'menuContent': {
                    templateUrl: "templates/stock.html",
                    controller: 'StockController'
                }
            }
        })

        .state('app.settings', {
            url: "/settings",
            views: {
                'menuContent': {
                    templateUrl: "templates/settings/settings.html",
                    controller: 'SettingsController'
                }
            }
        })
            .state('app.settings-address', {
                url: "/settings/address",
                views: {
                    'menuContent': {
                        templateUrl: "templates/settings/address.html",
                        controller: 'SettingsController'
                    }
                }
            })
                .state('app.settings-address-edit', {
                    url: "/settings/address/:number",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/settings/address.html",
                            controller: 'SettingsController'
                        }
                    }
                })
            .state('app.settings-gender', {
                url: "/settings/gender",
                views: {
                    'menuContent': {
                        templateUrl: "templates/settings/gender.html",
                        controller: 'SettingsController'
                    }
                }
            })


        .state('app.browse', {
            url: "/browse",
            views: {
                'menuContent': {
                    templateUrl: "templates/browse.html"
                }
            }
        })
        .state('app.playlists', {
            url: "/playlists",
            views: {
                'menuContent': {
                    templateUrl: "templates/playlists.html",
                    controller: 'PlaylistsCtrl'
                }
            }
        })

        .state('app.single', {
            url: "/playlists/:playlistId",
            views: {
                'menuContent': {
                    templateUrl: "templates/playlist.html",
                    controller: 'PlaylistCtrl'
                }
            }
        })
        .state('app.developerinfo', {
            url: "/developerinfo",
            views: {
                'menuContent': {
                    templateUrl: "templates/linkedin.html",
                    controller: 'DeveloperInfoController'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/stock');
    });
})();