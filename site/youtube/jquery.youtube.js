(function ($) {

    var defaults = {
        'query':'blues',
        'results_count':5
    };

    var playlist = [];
    var cur_index = 0;
    var tracks_played = 0;
    var player = null;
    var player_is_loaded = false;
    var container_id = null;

    var opts = {};
    var url = 'http://gdata.youtube.com/feeds/api/videos/-/%7Bhttp%3A%2F%2Fgdata.youtube.com%2Fschemas%2F2007%2Fcategories.cat%7DMusic?';

    var shuffle = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var loadPlaylist = function (cbk, from) {

        var url_params = {
            'q' : opts.query,
            'max-results' : opts.results_count,
            'alt' : 'json'
        };

        if (from) {
            url_params['start-index'] = from;
        }

        var r_url = url + $.param(url_params);

        $.getJSON(r_url, function (json) {
            var entries = json.feed.entry;

            for (var i = 0; i < entries.length; i++) {
                var obj = entries[i];
                playlist.push({
                    'id':getVideoId(obj.id.$t),
                    'title':obj.title.$t
                });
            }

            playlist = shuffle(playlist);
            cbk();
        });
    };

    var getVideoId = function (str) {
        var matches = /videos\/([\S]+)/.exec(str);
        var video_id = matches[1];

        return video_id;
    };

    var playerCallback = function () {
        var state = player.getPlayerState();
        if (0 == state) {
            cur_index++;

            if (cur_index >= opts.results_count) {
                tracks_played += opts.results_count;
                cur_index = 0;
                loadPlaylist(function() {
                    goTo(cur_index);
                }, tracks_played);
                return false;
            }
            goTo(cur_index);
        }
    };

    var initPlayer = function (video_id, callback) {
        var params = { allowScriptAccess:"always" };
        var player_id = 'youtube-' + container_id;
        var atts = { id:player_id, 'wmode' : 'transparent' };

        swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer&version=3",
            container_id, "1", "1", "8", null, null, params, atts);

        var player = document.getElementById(player_id);

        var interval = window.setInterval(function () {

            try {
                if (player_is_loaded) {
                    callback();
                    player.addEventListener("onStateChange", "playerCallback");
                    window.clearInterval(interval);
                }
                player_is_loaded = player.getVideoEmbedCode();

            } catch (e) {
            }
        }, 100);

        return player;
    };

    var goTo = function (index) {
        var video_id = playlist[index].id;
        player.loadVideoById(video_id);
    };

    var methods = {
        init : function (options) {

            opts = $.extend(options, defaults);
            container_id = $(this).attr('id');

            return this.each(function () {
                loadPlaylist(function () {
                    player = initPlayer(playlist[0].id, function () {
                        goTo(0);

                        window.setInterval(playerCallback, 1000);
                    });
                });
            });

        },
        next : function() {
            cur_index++;
            if (cur_index >= opts.results_count) {
                tracks_played += opts.results_count;
                cur_index = 0;
                loadPlaylist(function() {
                    goTo(cur_index);
                }, tracks_played);
                return false;
            }
            goTo(cur_index);
        },
        prev : function() {
            if (cur_index > 0) {
                cur_index--;
                goTo(cur_index);
            }
        },
        toggleplay : function() {
            if (2 == player.getPlayerState()) {
                player.playVideo();
            }
            else {
                player.pauseVideo();
            }
        },
        destroy : function () {

            return this.each(function () {

            })

        }
    };

    $.fn.youtube = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.youtube');
        }

    };

})(jQuery);