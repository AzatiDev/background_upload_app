appControllers.controller("AppLoadController", [
    "$scope", "$state", function($scope, $state) {
        $scope.selectFiles = function(){
            window.imagePicker.getPictures(
                function(results) {

                window.resolveLocalFileSystemURI(results[0], function(fileEntry) {

                    window.rootFS.fullPath + "/" + fileEntry.name;



                    //alert("fileEntry: " + JSON.stringify(fileEntry));

                    /*fileEntry.file(function(file){
                        alert("file: " + JSON.stringify(file));
                        alert("file.LocalURL:" + file.localURL);*/


                        results[0] = fileEntry.nativeURL.substring(7);/*"/storage/emulated/0/DCIM/Camera/20151110_152822.mp4"*//*window.rootFS + "/" + fileEntry.name*/;

                        /*alert(results[0]);*/
                        alert(results[0]);
                        if(navigator && navigator.background_upload) {
                            navigator.background_upload.uploadFiles(function(message){
                                alert(message);
                            },function(err){
                                alert(err);
                            },
                            {files:results, data: "la-la-la"});
                        } else {
                        alert("plugin not defined");
                        }
                    //});


                }, function(err) {
                    alert("Errore during processing file: " + JSON.stringify(err));
                });







                }, function (error) {
                    console.log('Error: ' + error);
                }
            );
        };
    }
]);
