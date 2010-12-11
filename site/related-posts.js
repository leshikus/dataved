google.setOnLoadCallback( function() {
(function (c) {
  c.fn.relatedPostsWidget = function (s) {
    if (!this.size()) return this;
    s = c.extend({}, c.fn.relatedPostsWidget.defaults, s);
    return this.each(function () {
      var k = c(this),
          z = 0,
          g = null,
          p = null,
          t = 0,
          q = 0,
          l = -1,
          n = -1,
          u = -1,
          r = null,
          v = 0,
          w = null,
          A = "",
          b = s,
          F = function () {
          if (!((l + 1) * b.show_n >= q && !b.animate_loop)) if (!v) {
            c("li", g).eq(n).fadeOut(b.exit_time, B);
            b.show_n > 1 && c("li", g).slice(n + 1, u).fadeOut(b.exit_time)
          }
          },
          B = function () {
          if (g.parent().size()) {
            l++;
            if (l * b.show_n >= q) l = 0;
            n = l * b.show_n;
            u = (l + 1) * b.show_n;
            c("li", g).eq(n).animate(r, b.enter_time, "linear", C);
            b.show_n > 1 && c("li", g).slice(n + 1, u).animate(r, b.enter_time)
          }
          },
          C = function () {
          w && clearTimeout(w);
          w = setTimeout(F, b.stay_time)
          },
          G = function () {
          r = {};
          r[b.animate] = "show";
          g.mouseenter(function () {
            v = 1
          }).mouseleave(function () {
            v = 0;
            C()
          });
          B()
          },
          x = function () {
          if (!(t || !g)) {
            b.loading_class && g.removeClass(b.loading_class);
            b.max_posts && b.tags.length && c("li:gt(" + (b.max_posts - 1) + ")", g).remove();
            q = c("li", g).size();
            b.tags.length && b.timeout && b.max_posts && c("img", g).each(function () {
              var d = c(this);
              d.attr("rel") && d.attr("src", d.attr("rel"))
            });
            if (b.show_n == 0) c("li", g).show();
            else q && G();
            t = 1
          }
          },
          E = function (d) {
          if (!t) {
            z++;
            if (d.feed.entry) {
              if (!g) {
                k.html("");
                if (b.tags.length == 0) b.recent_title && c("<h2>" + b.recent_title + "</h2>").appendTo(k);
                else b.related_title && c("<h2>" + b.related_title + "</h2>").appendTo(k);
                g = c('<ul class="rpw ' + b.loading_class + '"></ul>').appendTo(k)
              }
              for (var i = 0, o = d.feed.entry.length; i < o; i++) {
                var e = d.feed.entry[i],
                    h;
                a: {
                  var f = 0;
                  for (h = e.link.length; f < h; f++) if (e.link[f].rel == "alternate") {
                    h = e.link[f].href;
                    break a
                  }
                  h = ""
                }
                f = e.title.$t;e = e.media$thumbnail ? e.media$thumbnail.url : b.thumb_default;
                if (h != A || b.tags.length == 0) a: {
                  var j = h,
                      m = f,
                      H = e;
                  if (b.tags.length > 0) {
                    e = c("li", g);
                    f = 0;
                    for (var I = e.length; f < I; f++) {
                      var y = c("a", e.eq(f));
                      h = D(y);
                      if (y.attr("href") == j) {
                        j = y;
                        m = ++h;
                        j.attr("score", m);
                        b.post_score_class && j.attr("class", b.post_score_class + m);
                        for (j = f - 1; j >= 0; j--) {
                          m = c("a", e.eq(j));
                          if (D(m) > h) {
                            f - j > 1 && e.eq(j).after(e.eq(f));
                            break a
                          }
                        }
                        f > 0 && e.eq(0).before(e.eq(f));
                        break a
                      }
                    }
                  }
                  e = j;
                  f = m;
                  h = H;
                  if (b.thumb_size != "s72-c") h = h.replace("/s72-c/", "/" + b.thumb_size + "/");
                  j = b.tags.length && b.timeout && b.max_posts ? "rel" : "src";
                  g.append('<li style="display:none"><a href="' + e + '">' + (b.thumbs && h ? "<span><img " + j + '="' + h + '" title="' + (b.titles ? "" : f) + '" border="0"/></span>' : "") + (b.titles ? "<strong>" + f + "</strong>" : "") + "</a></li>")
                }
              }
            }
            if (z >= b.tags.length) {
              p && clearTimeout(p);
              x()
            }
          }
          },
          D = function (d) {
          d = parseInt(d.attr("score"));
          return d > 0 ? d : 1
          },
          J = function () {
          if (!b.tags) {
            b.tags = [];
            c('a[rel="tag"]:lt(' + b.max_tags + ")").each(function () {
              var e = c.trim(c(this).text().replace(/\n/g, ""));
              if (c.inArray(e, b.tags) == -1) b.tags[b.tags.length] = e
            })
          }
          var d = b.blog_url + "/feeds/posts/summary/";
          if (b.tags.length == 0) {
            if (b.timeout) p = setTimeout(x, b.timeout);
            c.ajax({
              url: d,
              data: {
                "max-results": b.max_posts,
                alt: "json-in-script"
              },
              success: E,
              dataType: "jsonp",
              cache: true
            })
          } else {
            if (b.timeout) p = setTimeout(x, b.timeout * b.tags.length);
            for (var i = 0, o = b.tags.length; i < o; i++) c.ajax({
              url: d,
              data: {
                category: b.tags[i],
                "max-results": b.posts_per_tag,
                alt: "json-in-script"
              },
              success: E,
              dataType: "jsonp",
              cache: true
            })
          }
          };
      (function () {
        var d = k.attr("data-options");
        if (!d) {
          var i = k.html().replace(/\n|\r\n/g, "");
          if (i) if ((i = i.match(/<!--\s*(\{.+\});?\s*--\>/)) && i.length == 2) d = i[1]
        }
        if (d) {
          if (d.indexOf("{") < 0) d = "{" + d + "}";
          try {
            b = eval("(" + d + ")")
          } catch (o) {
            a.html('<b style="color:red">' + o + "</b>");
            return null
          }
          b = c.extend({}, c.fn.relatedPostsWidget.defaults, b)
        }
        if (b.post_page_only ? location.pathname.match(/^\/\d{4}\/\d\d\/[\w\-\_]+\.html/) : true) {
          A = location.protocol + "//" + location.host + location.pathname + (b.url_querystring ? location.search : "");
          J()
        }
      })()
    })
  };
  c.fn.relatedPostsWidget.defaults = {
    blog_url: "",
    max_posts: 5,
    max_tags: 5,
    posts_per_tag: 5,
    tags: false,
    loading_class: "rpw-loading",
    related_title: "Related Posts",
    recent_title: "Recent Posts",
    post_score_class: "",
    post_page_only: 0,
    thumb_default: "",
    thumb_size: "s72-c",
    thumbs: 1,
    titles: 1,
    url_querystring: 0,
    timeout: 1500,
    show_n: 0,
    stay_time: 5E3,
    enter_time: 200,
    exit_time: 200,
    animate: "opacity",
    animate_loop: 1
  }
})($);
$(document).ready(function () {
  $("div.related-posts-widget").relatedPostsWidget()
});
})