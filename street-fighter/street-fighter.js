
$(document).ready(function() {

    $('.ryu').mouseenter(function() {
        showReadyRyu();
    })
        .mouseleave(function() {
            showStillRyu();
        })

        .mousedown(function() {
            playHadouken();
            $('.ryu-action').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show()
                .animate({'left': '300px'},
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '-212px');
                });
        })
        .mouseup(function() {
            showReadyRyu();
        });

    $('body').keydown(function(event) {
        if (event.keyCode == 88){
            showCoolRyu();
        }
    })
        .keyup(function(event) {
            if (event.keyCode==88){
                showStillRyu();
            }
        });

    function showStillRyu(){
        $('.ryu-action').hide();
        $('.ryu-still').show();
    }
    function showCoolRyu(){
        $('.ryu-action').hide();
        $('.ryu-cool').show();
    }
    function showReadyRyu(){
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    }

    function playHadouken () {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
});
/**
 * Created by kogata on 9/30/14.
 */
