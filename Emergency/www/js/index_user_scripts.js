/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_gps */
    $(document).on("click", "#btn_gps", function(evt)
    {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
    
        /* button  #btn_voltar */
    $(document).on("click", "#btn_voltar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home"); 
         return false;
    });
    
        /* button  #mapa */
    
    
        /* button  #btn_sidebar */
    
    
        /* button  favoritos */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#ok"); 
         return false;
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home"); 
         return false;
    });
    
        /* button  #btn_voltar */
    $(document).on("click", "#btn_voltar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home"); 
         return false;
    });
    
        /* button  #btn_sidebar */
    
    
        /* button  #mapa */
    $(document).on("click", "#mapa", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#maps"); 
         initMap();
         //return false;
    });
    
        /* button  #btn_sidebar */
    
    
        /* button  #btn_sidebar */
    $(document).on("click", "#btn_sidebar", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar_maps"));  
         return false;
    });
    
        /* button  #btn_sidebar */
    $(document).on("click", "#btn_sidebar", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar_maps"));  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
