/*--Refer Documentation for assistance--*/

$(document).ready(function() {  

   
 /*---Setting here ---*/


 var twitterHandle = 'quesada'; /*--Add your twitter handle here--*/

 var timerStart = 'December 10, 2012 12:35'; /*--Change date here: NOTE: Keep the format same--*/



/*--Twitter--*/

  $("#twitter").tweet({
      join_text: "auto",
      username: twitterHandle,
      template: "{join} {text}",
      count: 1,
      auto_join_text_default: "  ",
      auto_join_text_ed: " we ",
      auto_join_text_ing: " we were ",
      auto_join_text_reply: " we replied ",
      auto_join_text_url: " we were checking out ",
      loading_text: "loading tweets..."
        });

// /*--Map Settings HERE--*/
//     $('#map').gMap({ maptype: 'ROADMAP',address: "San Francisco, USA",zoom: 10,
//     controls: {
//          panControl: false,
//          zoomControl: false,
//          mapTypeControl: false,
//          scaleControl: false,
//          streetViewControl: false,
//          overviewMapControl: false
//      }
//       });

/*--Ajax Emailing--*/

$("#sendmail").click(function(){
    var valid = '';
    var isr = ' is required.';

    var mail = $("#mail").val();

    if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
      valid += '<br />A valid Email'+isr;
    }

    if (valid!='') {
      $("#response").fadeIn("slow");
      $("#response").html(valid);
    }
    else {
      var datastr = '&mail=' + mail ;
      $("#response").css("display", "block");
      $("#response").html("Sending message .... ");
      $("#response").fadeIn("slow");
      setTimeout("send('"+datastr+"')",2000);
    }
    return false;
  });



});

/*--Ajax Function --*/
function send(datastr){
  $.ajax({  
    type: "POST",
    url: "sendemail.php",
    data: datastr,
    cache: false,
    success: function(html){
    $("#response").fadeIn("slow");
    $("#response").html(html);
    setTimeout('$("#response").fadeOut("slow")',2000);
  }
  });
}


