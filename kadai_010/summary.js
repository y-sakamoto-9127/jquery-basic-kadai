$(function() {
    // 文字色変化がクリックされたら
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });

    // 文字内容変化がクリックされたら
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });

    // フェードアウトがクリックされたら
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // フェードインがクリックされたら
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});