google.setOnLoadCallback(
  function() {
    $(function() {
      /* position of the <li> that is currently shown */
      var current = 0;
      
      var loaded  = 0;

      var image_urls = ['http://lh3.ggpht.com/_aUeHSbJneFc/TPoxM6AVMGI/AAAAAAAADH0/Kr7iHDTr4E0/s830/consult1.jpg',
		'http://lh4.ggpht.com/_aUeHSbJneFc/TPo5CVrIJyI/AAAAAAAADIY/d7AIU5jvf6I/s830/consult2.jpg',
		'http://lh6.ggpht.com/_aUeHSbJneFc/TPlIYHMgP8I/AAAAAAAADHg/k4ajhekdFQ4/s830/consult3.jpg']
	  
      for(var i = 0; i < 3; i++)
        $('<img />').load(function(){
          ++loaded;
          if(loaded == 3){
            $('#bg1,#bg2,#bg3').mouseover(function(e){
              alert('st1')
              var $this = $(this);
              /* if we hover the current one, then don't do anything */
              if($this.parent().index() == current)
                return;

              alert('st2')
              /* item is bg1 or bg2 or bg3, depending where we are hovering */
              var item = e.target.id;

              /*
              this is the sub menu overlay. Let's hide the current one
              if we hover the first <li> or if we come from the last one,
              then the overlay should move left -> right,
              otherwise right->left
               */
              alert('st3')
              if(item == 'bg1' || current == 2)
                $('#menu .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(-277px 0)"},300,function(){
                  $(this).find('li').hide();
                });
              else
                $('#menu .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(277px 0)"},300,function(){
                  $(this).find('li').hide();
                });

              alert('st4')
              if(item == 'bg1' || current == 2){
                /* if we hover the first <li> or if we come from the last one, then the images should move left -> right */
                $('#menu > li').animate({backgroundPosition:"(-830px 0)"},0).removeClass('bg1 bg2 bg3').addClass(item);
                move(1,item);
              }
              else{
                /* if we hover the first <li> or if we come from the last one, then the images should move right -> left */
                $('#menu > li').animate({backgroundPosition:"(830px 0)"},0).removeClass('bg1 bg2 bg3').addClass(item);
                move(0,item);
              }

              alert('st5')
              /*
              We want that if we go from the first one to the last one (without hovering the middle one),
              or from the last one to the first one, the middle menu's overlay should also slide, either
              from left to right or right to left.
               */
              if(current == 2 && item == 'bg1'){
                $('#menu .sub'+parseInt(current)).stop().animate({backgroundPosition:"(-277px 0)"},300);
              }
              if(current == 0 && item == 'bg3'){
                $('#menu .sub'+parseInt(current+2)).stop().animate({backgroundPosition:"(277px 0)"},300);
              }

              
              alert('st6')
              /* change the current element */
              current = $this.parent().index();
              
              /* let's make the overlay of the current one appear */
               
              alert('st7')
              $('#menu .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(0 0)"},300,function(){
                $(this).find('li').fadeIn();
              });

              alert('st8')
              
            });
          }  
        }).attr('src', image_urls[i]);
      
            
      /*
      dir:1 - move left->right
      dir:0 - move right->left
       */
      function move(dir,item){
        if(dir){
          $('#bg1').parent().stop().animate({backgroundPosition:"(0 0)"},200);
          $('#bg2').parent().stop().animate({backgroundPosition:"(-277px 0)"},300);
          $('#bg3').parent().stop().animate({backgroundPosition:"(-554px 0)"},400,function(){
            $('#menuWrapper').removeClass('bg1 bg2 bg3').addClass(item);
          });
        }
        else{
          $('#bg1').parent().stop().animate({backgroundPosition:"(0 0)"},400,function(){
            $('#menuWrapper').removeClass('bg1 bg2 bg3').addClass(item);
          });
          $('#bg2').parent().stop().animate({backgroundPosition:"(-277px 0)"},300);
          $('#bg3').parent().stop().animate({backgroundPosition:"(-554px 0)"},200);
        }
      }
    });
  }
);

