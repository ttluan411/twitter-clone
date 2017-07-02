$(document).ready(function(){





$('.tweet-compose').on("click", function(){
    $('#tweet-controls').show();
    $(this).css('height', '64px');
});

$('.tweet-compose').keyup(function(){
    var length = $(this).val().length;
   var count = $('#char-count').text(140 - length);
   if (length >= 130){
        $('#char-count').css('color','red');
   } else{
       $('#char-count').css('color','gray')
   }
   if (length >= 140){
       $('.button').prop('disabled', true)
       count = 0;
   } else{
        $('.button').prop('disabled', false)
   }
});

$('.button').on('click',function(){
    $('#stream').prepend(
        '<div class="tweet">' +
						'<div class="content">'+
							'<img class="avatar" src="img/alagoon.jpg" />'+
							'<strong class="fullname">Majestic Corgi</strong>' +
						    	'<span class="username">@TheCorgi/span>' +

							
							'<p class="tweet-text"> </p>' +

							
							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
								'</ul>' +
							'</div>' +

							
							'<div class="stats">'+
                            '<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +

										
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +

								
								'<div class="time">' +
									'1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @ThatCorgi"/></textarea>' +
							'</div>' +
						'</div>' +
                   ' </div>'
    )
})










})

