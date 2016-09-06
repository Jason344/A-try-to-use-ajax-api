
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var url = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=";
    var street = "";
    var city = "";
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $('#street').keyup(function(){
      street = $(this).val();
    }).keyup();
    $('#city').keyup(function(){
      city = $(this).val();
    }).keyup();
    $('#submit-btn').click(function(){
      var location = street +", " + city;
      url = url + location;
      $body.append('<img class="bgimg" src="'+url+'">');
    });
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
