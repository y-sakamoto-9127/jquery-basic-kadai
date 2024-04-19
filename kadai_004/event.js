
$(window).on('load scroll', (e) => {

    if(e.type === 'load') {
        console.log('loadイベントが発生しました');
    }
    if(e.type === 'scroll') {
        console.log('scrollイベントが発生しました');    
    }
});


/*
// loadイベント
$(window).on('load', () => {
    console.log('loadイベントが発生しました');
});

// scrollイベント
$(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
});
*/