// $('h1').css('font-size','5rem');
// $('h1').addClass('big-title margin-50');
// $('h1').text('Bye');

// $('button').text('Don\'t click me');
// $('button').html('<em>Click</em>')
$('h1').addClass('big-title');
$('a').attr("href","https://www.yahoo.com");
// $('h1').click(function(){
//     $('h1').css('color','purple');
// })


//by using js
// for(var i=0;i<5;i++)
// {
//     document.querySelectorAll('button')[i].addEventListener('click',function(){
//         document.querySelector('h1').style.color='purple';
//     })
// }

//by using JQuery
// $('button').click(function(){
//     $('h1').css('color','purple')
// })

//keypress
// $(document).keypress(function(event){
//     $('h1').text(event.key)
//     console.log(event.key)
// })

$('button').on('click',function(){
    // $('h1').css('color','purple')
    // $('h1').toggle()
    // $('h1').animate({opacity:0.5})
    // $('h1').animate({margin:20})
    $('h1').slideUp().slideDown().animate({opacity:0.5})
})