var App = angular.module(constants.APP_NAMESPACE_NAME, ["ui.router", "appControllers"]);
var appControllers = angular.module('appControllers', []);

var appConstr = {
    initialize: function() {
        appConstr.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {

    window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
        function (fileSystem) {
            window.rootFS = fileSystem.root.nativeURL;
        },
        function fail() {
            alert("failed to get filesystem");
        });
            appConstr.bootstrapApp();
    },

    bootstrapApp: function() {
        if (navigator.splashscreen) {
            setTimeout(function() {
                navigator.splashscreen.hide();
            }, 1000);
        }
        angular.bootstrap(document, [constants.APP_NAMESPACE_NAME]);
    }
};

if (common.isDevice()) {
    document.addEventListener("deviceready", appConstr.initialize, true);
} else {
    $(document).ready(appConstr.onDeviceReady);
}
