console.log('working')

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()

        if(email.length > 5 && email.includes)
    })
})