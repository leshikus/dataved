(function ($) {

    var methods = {
        init : function (options) {

            var defaults = {
                'query' : 'blues',
                'results_count' :  25
            };

            var playlist = [];
            var cur_index = 0;
            var player = null;
            var player_is_loaded = false;

            var opts = $.extend(options, defaults);
            var url = 'http://gdata.youtube.com/feeds/api/videos?alt=json&q=' + defaults.query;

            var container_id = $(this).attr('id');

            var loadPlaylist = function(cbk) {
                $.getJSON(url, function(json) {
                    var entries = json.feed.entry;

                    for (var i = 0; i < entries.length; i++) {
                        var obj = entries[i];
                        playlist.push({
                            'id' : getVideoId(obj.id.$t),
                            'title' : obj.title.$t
                        });
                    }

                    cbk();
                });
            };

            var getVideoId = function(str) {
                var matches = /videos\/([\S]+)/.exec(str);
                var video_id = matches[1];

                return video_id;
            };

            var playerCallback = function() {
                var state = player.getPlayerState();
                if (0 == state) {
                    cur_index++;
                    goTo(cur_index);
                }
            };

            var initPlayer = function(video_id, callback) {
                var params = { allowScriptAccess: "always" };
                var player_id = 'youtube-' + container_id;
                var atts = { id: player_id };

                swfobject.embedSWF("http://www.youtube.com/v/" + video_id + "?enablejsapi=1&playerapiid=ytplayer",
                    container_id, "425", "356", "8", null, null, params, atts);

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

            var goTo = function(index) {
                var video_id = playlist[index].id;
                player.loadVideoById(video_id);
            };

            return this.each(function () {
                loadPlaylist(function() {
                    player = initPlayer(playlist[0].id, function() {
                        goTo(0);

                        window.setInterval(playerCallback, 1000);
                    });
                });
            });

        },
        destroy : function () {

            return this.each(function () {

            })

        }
    };

    $.fn.youtube = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.youtube');
        }

    };

})(jQuery);