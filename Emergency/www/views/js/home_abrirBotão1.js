/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* graphic button  Button */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
