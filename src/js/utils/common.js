var common = {
    showMessage: function(message) {
        if (common.isDevice() && navigator.notification) {
            navigator.notification.alert(message, null, "      ");
        } else {
            alert(message);
        }
    },

    isDevice: function() {
        return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
    }
};
