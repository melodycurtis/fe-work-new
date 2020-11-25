/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


  $("#choice-button").bind("click", function() {
    if ($('#radio-1').is(':checked')) {
                    window.location.replace("add");
                }
                else if ($('#radio-2').is(':checked')) {
                    window.location.replace("template");
                }
                else if ($('#radio-3').is(':checked')) {
                    window.location.replace("upload");
                }
                
  });

  $("#choice-button").bind("click", function() {
    if ($('#radio-teach1').is(':checked')) {
                    window.location.replace("academic");
                }
                else if ($('#radio-teach2').is(':checked')) {
                    window.location.replace("vocational");
                }
                else if ($('#radio-teach3').is(':checked')) {
                    window.location.replace("other");
                }
                
  });

  $("#choice-button").bind("click", function() {
    if ($('#radio-leader1').is(':checked')) {
                    window.location.replace("complete-john-four");
                }
                else if ($('#radio-leader2').is(':checked')) {
                    window.location.replace("complete-john-four");
                }
                
                
  });

  

  

})
