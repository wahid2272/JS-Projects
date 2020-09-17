(function($){
    console.log($.fn.jquery)

    $.ajax('http://www.omdbapi.com/?t=inception&apikey=97f66cc7')
    .done(function(resp){
        console.log(resp);
    })
    .fail(function(err){
        console.log(err)
    })
    .always(function(){
        console.log('API call done')
    })

    // Fetch 

    // fetch('http://www.omdbapi.com/?t=inception&apikey=97f66cc7')
    // .then(function(resp){
    //     return resp.json()
    // })
    // .then
})(window.jQuery) 