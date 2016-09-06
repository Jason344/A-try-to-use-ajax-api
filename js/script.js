
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var urlPhoto = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=";
    var street = $('#street').val();
    var city = $('#city').val();
    var location = street +", " + city;
    urlPhoto += location;
    $greeting.text('So, you want to live at ' + location + '?');
    $body.append('<img class="bgimg" src="'+urlPhoto+'">');

    // Search article from New York Times
    var urlSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    urlSearch += "?q="+location;
    $.getJSON(urlSearch,function(data){
      var items = [];
      var docs = data["response"]["docs"];
      $.each(docs,function(key,val){
          var urlArticle = val["web_url"];
          var headline = val["headline"]["main"];
          var lead_paragraph = val["lead_paragraph"];
          items.push('<li class="article"><a href="'+urlArticle+'">'+
              headline+'</a><p>'+lead_paragraph+'</p></li>');
      })
      $('#nytimes-articles').append(items);
      console.log(docs);
    })
    return false;
};

$('#form-container').submit(loadData);
