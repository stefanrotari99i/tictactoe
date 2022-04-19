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
        $('#won-alert').fadeIn(200);
        return;
    }
    if(array[3]==1 && array[4]==1 && array[5]==1){
        $('#won-alert').fadeIn(200);
        return;
    }
    
    if(array[6]==1 && array[7]==1 && array[8]==1){
        $('#won-alert').fadeIn(200);
        return;
    }

    if(array[0]==1 && array[3]==1 && array[6]==1){
        $('#won-alert').fadeIn(200);
        return;
    }

    if(array[1]==1 && array[4]==1 && array[7]==1){
        $('#won-alert').fadeIn(200);
        return;
    }

    if(array[2]==1 && array[5]==1 && array[8]==1){
        $('#won-alert').fadeIn(200);
        return;
    }
    
    if(array[0]==1 && array[4]==1 && array[8]==1){
        $('#won-alert').fadeIn(200);
        return;
    }

    if(array[2]==1 && array[4]==1 && array[6]==1){
        $('#won-alert').fadeIn(200);
        return;
    }

    if(array[0]!=0 && array[1]!=0 && array[2]!=0 && array[3]!=0 && array[4]!=0 && array[5]!=0 && array[6]!=0 && array[7]!=0 && array[8]!=0){
        $('#draw-alert').fadeIn(200);
        return;
    }

}
if(state==2){
  if(array[0]==2 && array[1]==2 && array[2]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[3]==2 && array[4]==2 && array[5]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[6]==2 && array[7]==2 && array[8]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[0]==2 && array[3]==2 && array[6]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[1]==2 && array[4]==2 && array[7]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[2]==2 && array[5]==2 && array[8]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[0]==2 && array[4]==2 && array[8]==2){
        $('#lose-alert').fadeIn(200);
        return;
    }

    if(array[2]==2 && array[4]==2 && array[6]==2){
        $('#lose-alert').fadeIn(200);
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
        $("#"+i+" .game__item").removeClass("game__item game__item-x game__item-o");
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
