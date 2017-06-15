$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr("data-filter");
        
        if(value == "all")
        {
            $(".filter").show("1000");
        }
        else
        {
            $(".filter").not('.'+value).hide("3000");
            $(".filter").filter('.'+value).show("3000");
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// Modal open and close options
function openModal(m) {
  document.getElementById(m).style.display = "block";
};

function closeModal(m) {
  document.getElementById(m).style.display = "none";
};

// Email submit form handler
$(document).ready(function() {
  $("#contact-form").submit(function(e) {
    var name    = document.getElementById("inputName")
    var email   = document.getElementById("inputEmail")
    var message = document.getElementById("inputMessage")

    if (!name.value || !email.value || !message.value) {
      alert("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: "POST",
        url: "https://formspree.io/thelord990@hotmail.com",
        data: $("#contact-form").serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alert("Message sent");
    }
  });
});