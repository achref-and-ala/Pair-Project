var happySound = document.getElementById('happy-sound');
var hungrySound = document.getElementById('hungry-sound');
var sleepySound = document.getElementById('sleepy-sound');
$('.container').hide()
$('.heart-life').hide()
$('.progress-hungry').hide()
$('.progress-play').hide()
$('.playwithme').hide()
$('.msg-hungry').hide()
$('.start').on('click',function(){
    $('.container').show()
    $('.home').hide()
    $('.heart-life').show()
    $('.progress-hungry').show()
    $('.progress-play').show()
    $('.playwithme').show()
    setTimeout(function(){
        $('.span1').attr('style',`width:75%`)
        },5000)
        setTimeout(function(){
            $('.span1').attr('style',`width:50%`)
            },10000)
            setTimeout(function(){
                $('.span1').attr('style',`width:25%`)
                $('.hello-cat').attr('src','img/hungry.gif')
                $('.msg-hungry').show()
                 setInterval(function(){
                    hungrySound.play();
                 },1500)
                    
            
                },15000)
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


            




