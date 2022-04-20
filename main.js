var array = [0,0,0,0,0,0,0,0,0];
var state=1;
var array_practice=[0,0,0,0,0,0,0,0,0];
var auto=true;
//function is move left
function is_move_left(){
    for(var i=0;i<9;i++){
        if(array[i]==0){
            return true;
        }
    }
    return false;

}
function evaluateboard(){
    if(player_winning()){
        return -10;
    }
    if(computer_winning()){
        return 10;
    }
    return 0;
}

function minimax(depth, isMax)
{
	let score = evaluateboard();
	if (score == 10)
		return score;
	if (score == -10)
		return score;

	if (is_move_left() == false)
		return 0;

	
	if (isMax)
	{
		let best = -1000;

		// Traverse all cells
		for(let i = 0; i < 9; i++)
		{
				if (array[i]==0)
				{
					
					// Make the move
					array[i]= isMax?2:1;

					// Call minimax recursively
					// and choose the maximum value
					best = Math.max(best, minimax(depth + 1, !isMax));

					// Undo the move
					array[i] = 0;
				}
			}
		return best;
	}
	else
	{
		let best = 1000;

		// Traverse all cells
		for(let i = 0; i < 9; i++)
		{
				// Check if cell is empty
				if (array[i] == 0)
				{
					
					// Make the move
					array[i]= isMax?2:1;

					best = Math.min(best, minimax(depth + 1, !isMax));

					// Undo the move
					array[i]= 0;
				}
			}
		return best;
	}
}

function findBestMove()
{
	let bestVal = -1000;
	let bestMove = -1;
	for(let i = 0; i < 9; i++)
	{
			// Check if cell is empty
			if (array[i] == 0)
			{
				
				// Make the move
				array[i] = 2;

				let moveVal = minimax(0, false);

				array[i] = 0;
				if (moveVal > bestVal)
				{
					bestVal = moveVal;
                    bestMove = i;
				}
			}
		}
	return bestMove;
}

function player_winning(){
        if(array[0]==1 && array[1]==1 && array[2]==1){
            return 1;
        }
        if(array[3]==1 && array[4]==1 && array[5]==1){
            return 1;
        }
        if(array[6]==1 && array[7]==1 && array[8]==1){
            return 1;
        }
        if(array[0]==1 && array[3]==1 && array[6]==1){
            return 1;
        }
        if(array[1]==1 && array[4]==1 && array[7]==1){
            return 1;
        }
        if(array[2]==1 && array[5]==1 && array[8]==1){
            return 1;
        }
        if(array[0]==1 && array[4]==1 && array[8]==1){
            return 1;
        }
        if(array[2]==1 && array[4]==1 && array[6]==1){
            return 1;
        }
        if(array[0]!=0 && array[1]!=0 && array[2]!=0 && array[3]!=0 && array[4]!=0 && array[5]!=0 && array[6]!=0 && array[7]!=0 && array[8]!=0){
            return 0;
        }
        return 0;
    }
function computer_winning(){
        if(array[0]==2 && array[1]==2 && array[2]==2){
              return 1;
          }
      
          if(array[3]==2 && array[4]==2 && array[5]==2){
              return 1;
          }
      
          if(array[6]==2 && array[7]==2 && array[8]==2){
              return 1;
          }
      
          if(array[0]==2 && array[3]==2 && array[6]==2){
              return 1;
          }
      
          if(array[1]==2 && array[4]==2 && array[7]==2){
              return 1;
          }
      
          if(array[2]==2 && array[5]==2 && array[8]==2){
              return 1;
          }
      
          if(array[0]==2 && array[4]==2 && array[8]==2){
              return 1;
          }
      
          if(array[2]==2 && array[4]==2 && array[6]==2){
              return 1;
          }
          if(array[0]!=0 && array[1]!=0 && array[2]!=0 && array[3]!=0 && array[4]!=0 && array[5]!=0 && array[6]!=0 && array[7]!=0 && array[8]!=0){
              return 0;
          }
      return 0;   
}    


function checkState(){
if(state==1){
    if(array[0]==1 && array[1]==1 && array[2]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }
    if(array[3]==1 && array[4]==1 && array[5]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }
    
    if(array[6]==1 && array[7]==1 && array[8]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }

    if(array[0]==1 && array[3]==1 && array[6]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }

    if(array[1]==1 && array[4]==1 && array[7]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }

    if(array[2]==1 && array[5]==1 && array[8]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }
    
    if(array[0]==1 && array[4]==1 && array[8]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }

    if(array[2]==1 && array[4]==1 && array[6]==1){
        $('#won-alert').fadeIn(200).css('display','flex');;
        return;
    }

    if(array[0]!=0 && array[1]!=0 && array[2]!=0 && array[3]!=0 && array[4]!=0 && array[5]!=0 && array[6]!=0 && array[7]!=0 && array[8]!=0){
        $('#draw-alert').fadeIn(200).css('display','flex');;
        return;
    }

}
if(state==2){
  if(array[0]==2 && array[1]==2 && array[2]==2){
    $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[3]==2 && array[4]==2 && array[5]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[6]==2 && array[7]==2 && array[8]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[0]==2 && array[3]==2 && array[6]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[1]==2 && array[4]==2 && array[7]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[2]==2 && array[5]==2 && array[8]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[0]==2 && array[4]==2 && array[8]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }

    if(array[2]==2 && array[4]==2 && array[6]==2){
        $('#lose-alert').fadeIn(200).css('display','flex');
        return;
    }
    if(array[0]!=0 && array[1]!=0 && array[2]!=0 && array[3]!=0 && array[4]!=0 && array[5]!=0 && array[6]!=0 && array[7]!=0 && array[8]!=0){
        $('#draw-alert').fadeIn(200);
        return;
    }

}


}

function change_sta(id){
    if(array[id]!=0){
        return;
    }
    if(state==1){
        array[id]=1;
        $('#'+id+" .game__item").addClass("game__item game__item-x");
        checkState();
        state=2;
        if(auto){
        let id_= findBestMove();
        array[id_]=2;

        $('#'+id_+" .game__item").addClass("game__item game__item-o");
        checkState();
        state=1;}
            return;
    }
    if(state==2){
        array[id]=2;
        $('#'+id+" .game__item").addClass("game__item game__item-o");
        checkState();
        state=1;
    return;
    }
}
$(document).ready(function(){

    $(".btn--play").click(function(){
    state=1;
    for(let i=0;i<9;i++)
        $("#"+i+" .game__item").removeClass("game__item-x game__item-o");
    array=[0,0,0,0,0,0,0,0,0];
    $("#draw-alert").is(":visible")?$("#draw-alert").fadeOut(200):"";
    $("#won-alert").is(":visible")?$("#won-alert").fadeOut(200):"";
    $("#lose-alert").is(":visible")?$("#lose-alert").fadeOut(200):"";
    });


   $("#0").click(function(){
       change_sta(0);
   });
   $("#1").click(function(){
         change_sta(1);
    });

    $("#2").click(function(){
        change_sta(2);
   });

   $("#3").click(function(){
    change_sta(3);
    });

    $("#4").click(function(){
        change_sta(4);
    });

    $("#5").click(function(){
        change_sta(5);
    });

    $("#6").click(function(){
        change_sta(6);
    });

    $("#7").click(function(){
        change_sta(7);
    });

    $("#8").click(function(){
        change_sta(8);
    });

    if($.cookie('game__username') == null) {
        $('.alert--username').fadeIn(200);
    } else {
        let username = $.cookie('game__username');
        $('#player-name-1').text(username);
    }


    $('#username-submit').on('click', function(){
        let username = $('#username-input').val();
        $.cookie('game__username', username);
        $('#player-name-1').text(username);
        $('.alert--username').fadeOut(200);
    });

    $('#change-username').on('click', function(){
        $('.alert--username').fadeIn(200);
    });

    $('#user-avatar').on('click', function(){
        $('.alert--file').fadeIn(200);
    })

    if($.cookie('user__avatar') == null) {
        $("#player-avatar").attr("src", "/avatar.jpg");
    } else {
        $("#player-avatar").attr("src", $.cookie('user__avatar').substring(11));
    }
    

    $('#photo-submit').on('click', function(){
        let file = $('#photo-avatar').get(0).files[0];

        if(file){
            var reader = new FileReader();
 
            reader.onload = function(){
                $("#player-avatar").attr("src", reader.result);
                let avatar = btoa(reader.result);
                alert(avatar);
                $.cookie('user__avatar', avatar);
            }
 
            reader.readAsDataURL(file);
        }
        $('.alert--file').fadeOut(200);
    });

    
});


// START OF UNSURE PART

$('document').ready(function() {
    var lastScrollTop = 0;
    //Set the initial state of window.p0 so that scrolling works without clicking
    window.p0 = {
      'x': 0,
      'y': 0
    };
    $(window).scroll(function trucenscroll(event) {
      var st = $(this).scrollTop();
      var sl = $(this).scrollLeft();
      if (st > lastScrollTop) {
  
        //Le cube tourne
        var p1, angle, i, tmp;
  
        p1 = {
            'x': sl - p0.x,
            'y': st - p0.y
          },
          angle = {
            'x': -p1.y * unit,
            'y': p1.x * unit
          };
        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
          //Save the state of the style of the cube faces. This ensures that if you switch to dragging, then there will be no jumps because all of the transforms will still be correctly applied.
          style = faces[i].style;
          var tmpStyle = style.transform || style['-webkit-transform'];
          styles[i] = tmpStyle.replace('perspective(1600px) ', '');
        }
      } else if (st == lastScrollTop) {
        //do nothing 
        //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
      } else {
        var p1, angle, i, tmp;
        p1 = {
            'x': sl - p0.x,
            'y': st - p0.y
          },
          angle = {
            'x': -p1.y * unit,
            'y': p1.x * unit
          };
  
        for (i = 0; i < faces.length; i++) {
          tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
          faces[i].style.transform = p + tmp;
          faces[i].style['-webkit-transform'] = p + tmp;
          //Save the state of the style of the cube faces. This ensures that if you switch to dragging, then there will be no jumps because all of the transforms will still be correctly applied.
          style = faces[i].style;
          var tmpStyle = style.transform || style['-webkit-transform'];
          styles[i] = tmpStyle.replace('perspective(1600px) ', '');
        }
      }
      lastScrollTop = st;
    });
  });
  
  
  // END OF UNSURE PART
  
  
  init();
  //===========================================================
  //			onMouseMove
  //===========================================================
  function onMouseMove(e) {
    var p1, angle, i, tmp;
  
    if (!dragging) return;
  
    p1 = {
        'x': e.clientX - p0.x,
        'y': e.clientY - p0.y
      },
      angle = {
        'x': -p1.y * unit,
        'y': p1.x * unit
      };
    for (i = 0; i < faces.length; i++) {
      tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];
      faces[i].style.transform = p + tmp;
      faces[i].style['-webkit-transform'] = p + tmp;
    }
  }
  //===========================================================
  //			onMouseDown
  //===========================================================
  function onMouseDown(e) {
    var element;
  
    onMouseUp(); // disable if dragging
  
    element = e.target;
    //if (! element.classList.contains('face')) return false;
  
    e.preventDefault();
    window.p0 = {
      'x': e.clientX,
      'y': e.clientY
    };
    dragging = true;
    return false;
  }
  //===========================================================
  //			onMouseUp
  //===========================================================
  function onMouseUp(e) {
    var i, tmp, style;
  
    if (!dragging) return;
    dragging = false;
  
    //Save the state of the style of the cube faces. This ensures that if you switch to dragging, then there will be no jumps because all of the transforms will still be correctly applied.
    for (i = 0; i < faces.length; i++) {
      style = faces[i].style;
      tmp = style.transform || style['-webkit-transform'];
      styles[i] = tmp.replace('perspective(1600px) ', '');
    }
    //Reset the window.p0 variable back for scrolling to work
    window.p0 = {
      'x': 0,
      'y': 0
    };
  
  }
  //=====================================================================
  //			initializeCube
  //=====================================================================
  function initializeCube() {
    var i, tmp;
  
    for (i = 0; i < faces.length; i++) {
      if (i < 4) tmp = 'rotateY(' + i * 90 + 'deg)';
      if (i >= 4) tmp = 'rotateX(' + Math.pow(-1, i) * 90 + 'deg)';
      tmp += ' translateZ(' + side / 2 + 'px)';
  
      faces[i].style.transform = p + tmp;
      faces[i].style['-webkit-transform'] = p + tmp;
      styles.push(tmp);
    }
  }
  //=====================================================================
  //			init
  //=====================================================================
  function init() {
    window.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('mousemove', onMouseMove, false);
  
    window.faces = document.querySelectorAll('.face');
    window.styles = new Array();
    window.style = getComputedStyle(faces[0]);
    window.factor = 3;
    window.side = parseInt(style.width.split('px')[0], 10);
    window.max_amount = factor * side;
    window.unit = 360 / max_amount;
    window.dragging = false;
    window.scrolling = false;
    window.p = 'perspective(1600px)';
  
    initializeCube();
  }