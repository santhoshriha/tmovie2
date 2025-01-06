// main.js
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("POST", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                movies = JSON.parse(allText);
            }
        }
    }
    rawFile.send(null);
}

$(document).ready(function () {
    var movies;
    readTextFile("https://multicinema.in/movielist.json");
    jQuery.each(movies, function (inData) {
        var row = movies[inData];
        var Mdiv = '<div class="col-6 col-sm-4 col-lg-2"><div class="album"><div class="album__cover"><img src="' + row.pic + '" alt="" style="width: 220px; height: 200px;"><a href="https://peipadam.com/tml/release.php?id=' + row.id + '&target=external" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg></a></div><div class="album__title"><h3><a href="https://peipadam.com/tml/release.php?id=' + row.id + '&target=external" target="_blank">' + row.title + '</a></h3><span><a href="https://peipadam.com/tml/release.php?id=' + row.id + '&target=external" target="_blank">Tamil List</a></span></div></div></div>';
        $("#test").append(Mdiv);
    });
});