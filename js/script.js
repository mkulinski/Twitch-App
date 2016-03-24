/**
 * Created by mkulinski on 3/21/2016.
 */
$(document).ready(function(){
    var streamers = ["brunofin", "freecodecamp", "storbeck", "terakilobyte", "thomasballinger","noobs2ninjas"];

    streamers.forEach(function(channel){
        $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function (data) {
            if (data.status === 422){
                $('.streamerList').append("<li>" + "<img src=img/undefined.png" + "/>" +
                "<p class='channelName'>" + "<a href=https://secure.twitch.tv/" + channel + ">" + channel + "</a>" + "</p>" +
                "<p class='pull-right'>" + "Offline, Perminantly" + "</p>" + "</li>");
            } else if (data.stream === null){
                $('.streamerList').append("<li>" + "<img src=img/" + channel + ".png" + "/>" +
                "<p class='channelName'>" + "<a href=https://secure.twitch.tv/" + channel + ">" + channel + "</a>" + "</p>" +
                "<p class='pull-right'>" + "Offline" + "</p>" + "</li>");
            } else {
                $('.streamerList').append("<li>" + "<img src=" + data.stream.channel.video_banner + "/>" +
                "<p class='channelName'>" + "<a href=" + data.stream.channel.url + ">" + channel + "</a>" + "</p>" +
                "<p class='pull-right'>" + "Online" + "</p>" + "</li>");
            }
        });
    });
});