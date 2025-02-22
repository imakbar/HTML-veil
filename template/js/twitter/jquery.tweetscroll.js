/* 
 * TweetScroll jQuery Plugin
 * Author: Pixel Industry
 * Author URL : http://pixel-industry.com
 * Version: 1.2.6
 * 
 * jQuery plugin to load latest Twitter tweets.
 * 
 */

(function($) {
    //define the tweetable plugin
    $.fn.tweetscroll = function(options) {
        //specify the plugins defauls
        var defaults = {
            limit: 5, //number of tweets to fetch
            visible_tweets: 2, //number of tweets to be visible
            speed: 600, // scroll animation speed
            delay: 3000, // delay between animations
            username: 'm_akbarsarwar', //@username tweets to display. can be multiple usernames e.g. [philipbeel, vmrkela]
            time: false, //display date
            replies: false, //filter out @replys
            date_format: 'style1',
            animation: 'slide_up',
            url_new_window: false,
            request_url: 'twitter/tweets.php',
            logo: false,
            profile_image: false
        };
        //overwrite the defaults
        var tweetscrollOptions = $.extend({}, defaults, options);

        // verify if speed value is number
        if (isNaN(tweetscrollOptions.speed)) {
            tweetscrollOptions.speed = 600;
        }

        // verify if speed value is number
        if (isNaN(tweetscrollOptions.delay)) {
            tweetscrollOptions.delay = 3000;
        }

        // Wordpress widget change
        tweetscrollOptions['instance_id'] = $(this).attr('data-instance-id');
        if (!tweetscrollOptions['instance_id'])
            tweetscrollOptions['instance_id'] = "";
        tweetscrollOptions['action'] = 'pi_tweetscroll_ajax';

        //loop through each instance
        return this.each(function(options) {
            //assign our initial vars
            var act = $(this);
            var $allTweets;

            // Wordpress/jQuery widget difference
            if (typeof (PiTweetScroll) == 'undefined') {
                var requestURL = tweetscrollOptions.request_url;
            } else {
                var requestURL = PiTweetScroll.ajaxrequests;
            }

            if (tweetscrollOptions.animation == false) {
                tweetscrollOptions.limit = tweetscrollOptions.visible_tweets;
            }

            //do a JSON request to twitter API
            $.getJSON(requestURL, tweetscrollOptions, function(data) {
                $allTweets = createHtml(data, tweetscrollOptions);
                $($allTweets).appendTo(act);
                setInitialListHeight($allTweets);
                setTimeout(function() {
                    animateTweets($allTweets);
                }, tweetscrollOptions.delay);

            });

            function animateTweets($allTweets) {
                var scrollSpeed = tweetscrollOptions.speed;


                switch (tweetscrollOptions.animation) {
                    case 'slide_down':
                        var itemHeight = $allTweets.find('li').outerHeight();
                        var containerSize = 0;
                        var visibleItemsMax = tweetscrollOptions.visible_tweets;
                        for (var i = 1; i < visibleItemsMax; i++) {
                            var selector = $allTweets.find("li:nth-child(" + i + ")");
                            containerSize += $(selector).outerHeight();
                        }
                        var lastItemHeight = parseInt($allTweets.find("li:last").outerHeight());

                        containerSize += lastItemHeight;

                        $allTweets.parent().css({
                            'height': containerSize
                        });

                        /* animate the carousel */
                        $allTweets.animate(
                                {
                                    'bottom': -lastItemHeight
                                }, scrollSpeed, 'linear', function() {
                            /* put the last item before the first item */
                            $allTweets.find('li:first').before($allTweets.find('li:last'));

                            /* reset top position */
                            $allTweets.css({
                                'bottom': 0
                            });

                            window.setTimeout(function() {
                                animateTweets($allTweets);
                            }, tweetscrollOptions.delay);
                        });
                        break;
                    case 'slide_up':
                        var itemHeight = $allTweets.find('li').outerHeight();
                        var containerSize = 0;
                        var visibleItemsMax = tweetscrollOptions.visible_tweets + 2;
                        for (var i = 2; i < visibleItemsMax; i++) {
                            var selector = $allTweets.find("li:nth-child(" + i + ")");
                            containerSize += $(selector).outerHeight();
                        }

                        $allTweets.parent().css({
                            'height': containerSize
                        });
                        /* animate the carousel */
                        $allTweets.animate(
                                {
                                    'top': -itemHeight
                                }, scrollSpeed, 'linear', function() {
                            /* put the last item before the first item */
                            $allTweets.find('li:last').after($allTweets.find('li:first'));

                            /* reset top position */
                            $allTweets.css({
                                'top': 0
                            });

                            window.setTimeout(function() {
                                animateTweets($allTweets);
                            }, tweetscrollOptions.delay);
                        });

                        break;
                    case 'fade':
                        var itemHeight = $allTweets.outerHeight();
                        var containerSize = 0;

                        var moveFactor = parseInt($allTweets.css('top')) + itemHeight;

                        /* animate the carousel */
                        $allTweets.animate(
                                {
                                    'opacity': 0
                                }, scrollSpeed, 'linear', function() {
                            /* put the last item before the first item */
                            var selectorString = $allTweets.find('li:lt(' + tweetscrollOptions.visible_tweets + ')');
                            $allTweets.find('li:last').after($(selectorString));
                            for (var i = 1; i <= tweetscrollOptions.visible_tweets; i++) {
                                var selector = $allTweets.find("li:nth-child(" + i + ")");
                                containerSize += $(selector).outerHeight();
                            }

                            $allTweets.parent().css({
                                'height': containerSize
                            });

                            $allTweets.animate({
                                opacity: 1
                            });

                            window.setTimeout(function() {
                                animateTweets($allTweets);
                            }, tweetscrollOptions.delay);

                        });
                        break;
                }
            }

            function setInitialListHeight($allTweets) {
                var containerSize = 0;

                if (tweetscrollOptions.animation == 'slide_down') {
                    var visibleItemsMax = tweetscrollOptions.visible_tweets + 1;
                    for (var i = 1; i < visibleItemsMax; i++) {
                        var selector = $allTweets.find("li:nth-child(" + i + ")");
                        containerSize += $(selector).outerHeight();
                    }
                    $allTweets.parent().css({
                        'height': containerSize
                    });
                    $allTweets.css({
                        'bottom': 0
                    });

                } else if (tweetscrollOptions.animation == 'slide_up') {
                    var visibleItemsMax = tweetscrollOptions.visible_tweets + 1;
                    for (var i = 1; i < visibleItemsMax; i++) {
                        var selector = $allTweets.find("li:nth-child(" + i + ")");
                        containerSize += $(selector).outerHeight();
                    }
                    $allTweets.parent().css({
                        'height': containerSize
                    });
                } else if (tweetscrollOptions.animation == 'fade') {
                    var visibleItemsMax = tweetscrollOptions.visible_tweets + 1;
                    for (var i = 1; i < visibleItemsMax; i++) {
                        var selector = $allTweets.find("li:nth-child(" + i + ")");
                        containerSize += $(selector).outerHeight();
                    }
                    $allTweets.parent().css({
                        'height': containerSize
                    });

                }
            }

        });

        /**
        * relative time calculator FROM TWITTER
        * @param {string} twitter date string returned from Twitter API
        * @return {string} relative time like "2 minutes ago"
        */
        function timeAgo(dateString) {
            var rightNow = new Date();
            var then = new Date(dateString);
            
            if ($.browser.msie) {
                // IE can't parse these crazy Ruby dates
                then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
            }
            var diff = rightNow - then;
            var second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24,
            week = day * 7;
            if (isNaN(diff) || diff < 0) {
                return ""; // return blank string if unknown
            }
            if (diff < second * 2) {
                // within 2 seconds
                return "right now";
            }
            if (diff < minute) {
                return Math.floor(diff / second) + " seconds ago";
            }
            if (diff < minute * 2) {
                return "about 1 minute ago";
            }
            if (diff < hour) {
                return Math.floor(diff / minute) + " minutes ago";
            }
            if (diff < hour * 2) {
                return "about 1 hour ago";
            }
            if (diff < day) {
                return Math.floor(diff / hour) + " hours ago";
            }
            if (diff > day && diff < day * 2) {
                return "yesterday";
            }
            if (diff < day * 365) {
                return Math.floor(diff / day) + " days ago";
            }
            else {
                return "over a year ago";
            }
        }
        
        function createHtml(data, tweetscrollOptions) {
            var $tweetList;
            var tweetMonth = '';
            var shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];

            $.each(data, function(i, item) {
                var profileImage = item.user.profile_image_url;
                //check for the first loop
                if (i == 0) {
                    $tweetList = $('<ul class="tweet-list">');
                    if (tweetscrollOptions.logo)
                        $tweetList.addClass('twitter-logo');
                }

                //handle @reply filtering if required
                if (tweetscrollOptions.replies === false) {
                    if (item.in_reply_to_status_id === null) {
                        if (tweetscrollOptions.profile_image) {
                            $tweetList.append('<li class="profile-image tweet_content_' + i + '" style="background: url(' + profileImage + ') no-repeat left top;"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');

                        } else {
                            $tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');
                        }
                    }
                } else {
                    if (tweetscrollOptions.profile_image) {
                        $tweetList.append('<li class="profile-image tweet_content_' + i + '" style="background: url(' + profileImage + ') no-repeat left top;"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');
                    } else {
                        $tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');
                    }
                }
                //display the time of tweet if required
                if (tweetscrollOptions.time == true) {
                    var monthIndex = jQuery.inArray(item.created_at.substr(4, 3), shortMonths);

                    if (tweetscrollOptions.date_format == 'style1') {
                        tweetMonth = monthIndex + 1;
                        if (tweetMonth < 10) {
                            tweetMonth = '0' + tweetMonth;
                        }
                        $tweetList.find('.tweet_link_' + i).append('<small> ' + item.created_at.substr(8, 2) + '/' + tweetMonth + '/' + item.created_at.substr(26, 4) + ' ' + item.created_at.substr(11, 8) + '</small>');
                    } else if (tweetscrollOptions.date_format == 'style2') {
                        tweetMonth = allMonths[monthIndex];
                        $tweetList.find('.tweet_link_' + i).append('<small> ' + tweetMonth + ' ' + item.created_at.substr(8, 2) + ', ' + item.created_at.substr(26, 4) + ' ' + item.created_at.substr(11, 8) + '</small>');
                    } else {
                      relativeTime = timeAgo(item.created_at);
                      $tweetList.find('.tweet_link_' + i).append('<small> ' + relativeTime + '</small>');
                    }

                }

            });

            if (tweetscrollOptions.animation == 'slide_down') {
                $tweetList.find('li').each(function() {
                    $(this).prependTo($(this).parent());
                });
            }

            //check how to open link, same page or in new window                
            if (tweetscrollOptions.url_new_window == true) {
                $tweetList.find('a').each(function() {
                    $(this).attr({
                        target: '_BLANK'
                    });
                });
            }

            return $tweetList;
        }
    }
})(jQuery);

































/* <![CDATA[ */
jQuery(document).ready(function($) {
    'use strict';

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-animtion-slide-up').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'slide_up',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php"
    }); // TWEETSCROLL END


    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-animtion-slide-down').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'slide_down',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php"
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-animtion-fade').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'fade',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php"
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-animtion-no-animation').tweetscroll({
        username: 'pixel_industry',
        limit: 2,
        replies: true,
        position: 'append',
        animation: 'false',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php"
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-date-1').tweetscroll({
        username: 'pixel_industry',
        limit: 2,
        replies: true,
        position: 'append',
        animation: 'fade',
        date_format: 'style2',
        time: true,
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php"
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-date-2').tweetscroll({
        username: 'pixel_industry',
        limit: 2,
        replies: true,
        position: 'append',
        animation: 'fade',
        date_format: 'style1',
        time: true,
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php"
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-with-logo').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'slide_up',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php",
        logo: true
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-profile-image').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'slide_up',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php",
        logo: true,
        profile_image: true
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-countinuous').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'slide_up',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php",
        logo: true,
        profile_image: true,
        delay: 0
    }); // TWEETSCROLL END

    /* ================ TWEETSCROLL PLUGIN ================ */
    $('.tweets-list-container-multiple-accs').tweetscroll({
        username: ['pixel_industry', 'envatowebdesign'],
        limit: 6,
        replies: true,
        position: 'append',
        animation: 'slide_up',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/twitter/tweets.php",
        profile_image: true
    }); // TWEETSCROLL END
});
/* ]]> */