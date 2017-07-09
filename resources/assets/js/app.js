const $ = require('jquery');

$(function () {
    $('#login-form').on('submit', function (e) {
        e.preventDefault();

        var postData = {
            'email': $('input [name=email]').val(),
            'password': $('input [name=password]').val()
        };
        $.ajax({
            type: 'POST',
            url: '/login',
            data: postData,
            success: function (response) {
                window.location.href = response.redirect
            },

            error: function (response) {
                console.log(response)
            }

        })
    });
});
