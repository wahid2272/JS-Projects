(function($){
    console.log($.fn.jquery)

    // $('#movieName').on('change', function(e){
    //     console.log(e.target.value)
    // })

    $('#search').on('click', function(){
        var input = $('#movieName').val()
        
        if (input === ''){
            return;
        }
        
        //API will be called upon search button click
        $.ajax('http://www.omdbapi.com/?t=' + input + '&apikey=97f66cc7')
            .done(function(resp){
                var formattedRating = resp.imdbRating*10 + '%';

                var{ Poster, Title, Plot, imdbRating } = resp; //if user type with wrong spelling

                if (Poster && Title && Plot && imdbRating) {
                    $('#searchResult').html(`
                    <div class="col-sm-6">
                      <div class="card" style="width: 18rem;">
                       <img src="${Poster}" class="card-img-top" alt="...">
                       <div class="card-body">
                       <h5 class="card-title">${Title}</h5>
                       <p class="card-text">${Plot}</p>
                       <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: ${formattedRating};" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${resp.imdbRating}</div>
                    </div>
                  </div>
                </div>
             `)
            } else {
                $('#searchResult').html('<div>Oops, Nothing atches with your search!</div>')
            }

                
            })
            .fail(function(err){
                console.log(err)
            })
            .always(function(){
                console.log('API call done')
            })
    })






    // $.ajax('http://www.omdbapi.com/?t=wall-e&apikey=97f66cc7')
    // .done(function(resp){
    //     console.log(resp);
    // })
    // .fail(function(err){
    //     console.log(err)
    // })
    // .always(function(){
    //     console.log('API call done')
    // })

    // Fetch 
    // fetch('http://www.omdbapi.com/?t=inception&apikey=97f66cc7')
    // .then(function(resp){
    //     return resp.json()
    // })
    // .then(function(json){
        // console.log(json)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })
})(window.jQuery) 