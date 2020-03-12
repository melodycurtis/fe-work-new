/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


  $("#choice-button").bind("click", function() {
    if ($('#radio-1').is(':checked')) {
                    window.location.replace("current-dle.html");
                }
                else if ($('#radio-2').is(':checked')) {
                    window.location.replace("add-staff");
                }
                else if ($('#radio-3').is(':checked')) {
                    window.location.replace("upload");
                }
                
  });

})
