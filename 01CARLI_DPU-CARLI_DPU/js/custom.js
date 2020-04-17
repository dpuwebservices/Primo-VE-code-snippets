(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

    // Adds the chat button
    (function() {
                    var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = 'true';
                    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'v2.libanswers.com/load_chat.php?hash=5b6ccf0890ace526e5703d7f2baf7e4f';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();
    // End the chat button


})

   
