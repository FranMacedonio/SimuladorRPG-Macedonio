let inputValue;


$('#input').focus(function () { 

    inputValue = $('#input').val();

    if (inputValue == ''){
        
        $('#input-border').stop().animate({
            width: '405px'
        })

        $('#input-label').css('color', 'red')

    }
});

$('#input').blur(function () { 

    inputValue = $('#input').val();

    if (inputValue == ''){

        $('#input-border').stop().animate({
            width: '0px'
        })

    }

});