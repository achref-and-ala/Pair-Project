var hungrySound = document.getElementById('hungry-sound');
$('.container').hide()
$('.heart-life').hide()
$('.progress-hungry').hide()
$('.progress-play').hide()
$('.playwithme').hide()
$('.msg-hungry').hide()
$('.msg-play').hide()
$('.start').on('click',function(){
    $('.container').show()
    $('.home').hide()
    $('.heart-life').show()
    $('.progress-hungry').show()
    $('.progress-play').show()
    $('.playwithme').show()
    setTimeout(function(){
        $('.span1').attr('style',`width:75%`)
        },3000)
        setTimeout(function(){
            $('.span1').attr('style',`width:50%`)
            },6000)
            setTimeout(function(){
                $('.span1').attr('style',`width:25%`)
                $('.hello-cat').attr('src','img/hungry.gif')
                $('.msg-hungry').show()
                 setInterval(function(){
                    hungrySound.play();
                 },1500)
                    
            
                },8000)
})
var result=0
$('.msg-hungry').on('click',function(){
    $('#hungry-sound').attr('src','sounds/happy.wav')
    result=result+25
    $('.span1').attr('style',`width:${result}%`)
    $('.hello-cat').attr('src','img/mochi-food.gif')
    if(result===100){
        
        
        $('.hello-cat').attr('src','img/peach-goma.gif')
        $('.msg-hungry').hide()
    }
})
setTimeout(function(){
    $('.span2').attr('style',`width:75%`)
    },25000)
    setTimeout(function(){
        $('.span2').attr('style',`width:50%`)
        },30000)
        setTimeout(function(){
            $('.span2').attr('style',`width:20%`)
            $('.hello-cat').attr('src','img/sad-play.gif')
            $('#hungry-sound').attr('src','sounds/hungry.wav')
            $('.msg-play').show()
            },35000)

var result2=25
$('.msg-play').on('click',function(){
    result2=result2+25
    $('.span2').attr('style',`width:${result2}%`)
    $('.hello-cat').attr('src','img/peach-and.gif')
    $('#hungry-sound').attr('src','sounds/happy.wav')
    if(result2===100){
        $('.msg-play').hide()
        $('.hello-cat').attr('src','img/peach-tired.gif')
        $('.msg-hungry').hide()
        $('#hungry-sound').attr('src','sounds/tired.wav')
        setTimeout(function(){
            $('.hello-cat').attr('src','img/sleepingcat.gif')
            $('#hungry-sound').attr('src','sounds/sleeping.mp3')
        },5000)
    }
})





