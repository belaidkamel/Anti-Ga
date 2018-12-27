jQuery.noConflict();

(function($) { 
  $(function() {
  	var l = function(message) {
      console.log('Log:', message);
    }
    $('#main-nav a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });
    var text = ['Anti google analytics', 'vous est presente par', 'Belaid Kamel & Chetti Massinissa'];
    var show = function(text, index) {
      if(index >= text.length) return;
      $('#home').append($('<div class="line">' + text[index] + '</div>').fadeIn(2000, function(){
        show(text, index+1);
      }));
    }
   
    
    show(text, 0);
  });
})(jQuery);
