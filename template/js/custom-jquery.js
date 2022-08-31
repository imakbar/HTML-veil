$(document).ready(function() {

/*$('.bloggallery-container').masonry({
  itemSelector: '.bloggallery-item'
});*/

/***************************************************************************
***************************************************************************/
/*============================================ IMMERSIVESOUL WINDOW RESIZE*/
/***************************************************************************
***************************************************************************/
$(window).resize(function() {	
	$('.is-fullscreen').css('height', window.innerHeight)
});

$(window).resize(function() {	
	$('.is-fullscreen-width').css('width', window.innerWidth)
});

/***************************************************************************
***************************************************************************/
/*============================================= IMMERSIVESOUL SCROL TO TOP*/
/***************************************************************************
***************************************************************************/
	$(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('#scrolltoTop').fadeIn(200);
        } else {
            $('#scrolltoTop').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('#scrolltoTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });
	
/***************************************************************************
***************************************************************************/
/*================================================ IMMERSIVESOUL ANIMATION*/
/***************************************************************************
***************************************************************************/
	// animate css + jquery inview configuration	
    $(".animate").each(function() {
        $(this).bind('inview', function(event, visible) {
            var $this = $(this),
                $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
            $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 500;

            if (visible == true) {
                setTimeout(function() {
                    $this.addClass($animation);
                }, $delay);
            }
            /*else{
            	setTimeout(function() { $this.removeClass($animation); },$delay);
            }*/
        });
    });

/***************************************************************************
***************************************************************************/
/*================================================ IMMERSIVESOUL COUNTDOWN*/
/***************************************************************************
***************************************************************************/
    $('#countdown').countdown('2020/10/10', function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="countdown_wrap"><div class="countdown_time">%w</div> <div class="countdown_text">weeks</div></div> <div class="colon">:</div> ' + '<div class="countdown_wrap"><div class="countdown_time">%D</div> <div class="countdown_text">days</div></div> <div class="colon">:</div> ' + '<div class="countdown_wrap"><div class="countdown_time">%H</div> <div class="countdown_text">hr</div></div> <div class="colon">:</div> ' + '<div class="countdown_wrap"><div class="countdown_time">%M</div> <div class="countdown_text">min</div></div> <div class="colon">:</div> ' + '<div class="countdown_wrap"><div class="countdown_time">%S</div> <div class="countdown_text">sec</div></div> '));
    });

/***************************************************************************
***************************************************************************/
/*==================================================== IMMERSIVESOUL POPUP*/
/***************************************************************************
***************************************************************************/
    $('#popup_box_1, #popup_box_2, #popup_box_3, #popup_box_4, #popup_box_5, #popup_box_6, #popup_box_7').popup({
        pagecontainer: '.container',
        transition: 'all 0.5s'
    });

/***************************************************************************
***************************************************************************/
/*============================================ IMMERSIVESOUL SINGLE SLIDER*/
/***************************************************************************
***************************************************************************/
    // Slideshow
    $(".single-slider").responsiveSlides({
        manualControls: '.slider-thumb-pager',
        auto: true,
        nav: true,
        pager: false,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event yellowd.</li>");
        },
        after: function() {
            $('.events').append("<li>after event yellowd.</li>");
        }
    });

/***************************************************************************
***************************************************************************/
/*============================================== IMMERSIVESOUL FLEX SLIDER*/
/***************************************************************************
***************************************************************************/
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        slideshowSpeed: 7000,
        animationSpeed: 600,
        pauseOnAction: true,
        pauseOnHover: true,
        pauseInvisible: true,
        useCSS: true,
        touch: true,
        video: true,
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: "Pause",
        playText: "Play",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });

/***************************************************************************
***************************************************************************/
/*============================== IMMERSIVESOUL LOADING EFFECT ON PAGE LOAD*/
/***************************************************************************
***************************************************************************/
    $(window).load(function() {
        $("#loading").fadeOut("slow");
    });

/***************************************************************************
***************************************************************************/
/*==================================== IMMERSIVESOUL TOPBAR HEADER SETTING*/
/***************************************************************************
***************************************************************************/
    $('ul.topbar-menu').slimmenuTopbar({
        animSpeed: 'slow',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });

	/* TOP SOCIAL ICONS */
    $('ul.topbar-social-links').slimmenuSocial({
        animSpeed: 'slow',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });

    /* TOP HEADER SEARCH */
    $('#header-search-input').click(function() {
        $('#search-input').slideToggle(70);
        return false;
    });
    $(window).resize(function() {
        if ($(window).width() > 1060) {
            $('#search-input').removeAttr('style');
        }
    });

/***************************************************************************
***************************************************************************/
/*===================================================== IMMERSIVESOUL MENU*/
/***************************************************************************
***************************************************************************/
    $('#main-menu > li:has(ul.sub-menu)').addClass('parent');
    $('ul.sub-menu > li:has(ul.sub-menu)').addClass('parent');
    $('ul.sub-menu > li:has(ul.sub-menu) > a').addClass('parent');

    $('.column3 li:has(ul.sub-menu)').addClass('menu-heading');

    $('.column4 li:has(ul.sub-menu)').addClass('menu-heading');
    $('.column5 li:has(ul.sub-menu)').addClass('menu-heading');
    $('.column6 li:has(ul.sub-menu)').addClass('menu-heading');

	// REMOVE STICKY HEADER CLASS WHEN USE THE LEFT HEADER TEMPLATE
    $(".is-left-header .main-header").removeClass("sticky-header");

    $(".is-right-header .main-header").removeClass("sticky-header");
	
/***************************************************************************
***************************************************************************/
/*====================================== IMMERSIVESOUL LEFT NAV, RIGHT NAV*/
/***************************************************************************
***************************************************************************/
    $(".is-left-header #main-menu li").removeClass("megamenu single-column3 single-column4 single-column5 center column3 column4 column5 column6 dropdown-left");

    $(".is-right-header #main-menu li").removeClass("megamenu single-column3 single-column4 single-column5 center column3 column4 column5 column6 dropdown-left");

/***************************************************************************
***************************************************************************/
/*======================== IMMERSIVESOUL NAVIGATION | REMOVE AND ADD CLASS*/
/***************************************************************************
***************************************************************************/
    $(window).resize(function() {
        if ($(window).width() < 943) {
            //$('.megamenu').removeAttr('style');
            $("#main-menu li").removeClass("megamenu");
			
			$("#main-menu > li > ul.sub-menu").removeClass("<div class='inner-fill'></div>");
			
        } else {
            //$("#main-menu li").removeClass("megamenu")
            $('#main-menu li.column3').addClass('megamenu');
            $('#main-menu li.column4').addClass('megamenu');
            $('#main-menu li.column5').addClass('megamenu');
            $('#main-menu li.column6').addClass('megamenu');
            $('#main-menu li.single-column3').addClass('megamenu');
            $('#main-menu li.single-column4').addClass('megamenu');
            $('#main-menu li.single-column5').addClass('megamenu');
        }
    });
	
	/*$("li.megamenu.column3.fill-bg ul.sub-menu").wrapInner("<div class='inner-fill'></div>");
	$("li.megamenu.column4.fill-bg ul.sub-menu").wrapInner("<div class='inner-fill'></div>");
	$("li.megamenu.column5.fill-bg ul.sub-menu").wrapInner("<div class='inner-fill'></div>");
	$("li.megamenu.column6.fill-bg ul.sub-menu").wrapInner("<div class='inner-fill'></div>");*/
	
	//$("li.fill-bg ul.sub-menu").wrapInner("<div class='inner-fill'></div>");
	
	$("#main-menu > li > ul.sub-menu").wrapInner("<div class='inner-fill'></div>");

/***************************************************************************
***************************************************************************/
/*================================================ IMMERSIVESOUL SLIM MENU*/
/***************************************************************************
***************************************************************************/
    $('ul.slimmenu').slimmenu({
        animSpeed: 'slow',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });
	
/***************************************************************************
***************************************************************************/
/*========================================== IMMERSIVESOUL SINGLE PAGE NAV*/
/***************************************************************************
***************************************************************************/
	//Single Page Navigation
    // Prevent console.log from generating errors in IE for the purposes of the demo
    /*if (!window.console) console = {
        log: function() {}
    };
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        updateHash: true,
        beforeStart: function() {
            console.log('begin scrolling');
        },
        onComplete: function() {
            console.log('done scrolling');
        }
    });*/
	
	
	$('.single-page-nav').onePageNav({
				filter: ':not(.external)',
	});
	
	

});

/***************************************************************************
***************************************************************************/
/*============================================ IMMERSIVESOUL STICKY HEADER*/
/***************************************************************************
***************************************************************************/
function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 30,
            header = document.querySelector(".main-header.sticky-header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });
}
window.onload = init();

/***************************************************************************
***************************************************************************/
/*================================================== IMMERSIVESOUL SIDEBAR*/
/***************************************************************************
***************************************************************************/
$(document).ready(function() {
    $(".sidebar-locker").click(function() {
        $("#sidebar").animate({
            width: 'toggle'
        }, 200);
        $(this).toggleClass("closed");
        $('#sidebar-locker-content').toggleClass('three_fourth one_one');
    });
});

/***************************************************************************
***************************************************************************/
/*===================================================== IMMERSIVESOUL TABS*/
/***************************************************************************
***************************************************************************/
/*
 * jQuery EasyTabs plugin 3.2.0
 *
 * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu May 09 17:30:00 2013 -0500
 */
(function($) {

    $.easytabs = function(container, options) {

        // Attach to plugin anything that should be available via
        // the $container.data('easytabs') object
        var plugin = this,
            $container = $(container),

            defaults = {
                animate: true,
                panelActiveClass: "active",
                tabActiveClass: "active",
                defaultTab: "li:first-child",
                animationSpeed: "normal",
                tabs: "> ul > li",
                updateHash: true,
                cycle: false,
                collapsible: false,
                collapsedClass: "collapsed",
                collapsedByDefault: true,
                uiTabs: false,
                transitionIn: 'fadeIn',
                transitionOut: 'fadeOut',
                transitionInEasing: 'swing',
                transitionOutEasing: 'swing',
                transitionCollapse: 'slideUp',
                transitionUncollapse: 'slideDown',
                transitionCollapseEasing: 'swing',
                transitionUncollapseEasing: 'swing',
                containerClass: "",
                tabsClass: "",
                tabClass: "",
                panelClass: "",
                cache: true,
                event: 'click',
                panelContext: $container
            },

            // Internal instance variables
            // (not available via easytabs object)
            $defaultTab,
            $defaultTabLink,
            transitions,
            lastHash,
            skipUpdateToHash,
            animationSpeeds = {
                fast: 200,
                normal: 400,
                slow: 600
            },

            // Shorthand variable so that we don't need to call
            // plugin.settings throughout the plugin code
            settings;

        // =============================================================
        // Functions available via easytabs object
        // =============================================================

        plugin.init = function() {

            plugin.settings = settings = $.extend({}, defaults, options);
            settings.bind_str = settings.event + ".easytabs";

            // Add jQuery UI's crazy class names to markup,
            // so that markup will match theme CSS
            if (settings.uiTabs) {
                settings.tabActiveClass = 'ui-tabs-selected';
                settings.containerClass = 'ui-tabs ui-widget ui-widget-content ui-corner-all';
                settings.tabsClass = 'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all';
                settings.tabClass = 'ui-state-default ui-corner-top';
                settings.panelClass = 'ui-tabs-panel ui-widget-content ui-corner-bottom';
            }

            // If collapsible is true and defaultTab specified, assume user wants defaultTab showing (not collapsed)
            if (settings.collapsible && options.defaultTab !== undefined && options.collpasedByDefault === undefined) {
                settings.collapsedByDefault = false;
            }

            // Convert 'normal', 'fast', and 'slow' animation speed settings to their respective speed in milliseconds
            if (typeof(settings.animationSpeed) === 'string') {
                settings.animationSpeed = animationSpeeds[settings.animationSpeed];
            }

            $('a.anchor').remove().prependTo('body');

            // Store easytabs object on container so we can easily set
            // properties throughout
            $container.data('easytabs', {});

            plugin.setTransitions();

            plugin.getTabs();

            addClasses();

            setDefaultTab();

            bindToTabClicks();

            initHashChange();

            initCycle();

            // Append data-easytabs HTML attribute to make easy to query for
            // easytabs instances via CSS pseudo-selector
            $container.attr('data-easytabs', true);
        };

        // Set transitions for switching between tabs based on options.
        // Could be used to update transitions if settings are changes.
        plugin.setTransitions = function() {
            transitions = (settings.animate) ? {
                show: settings.transitionIn,
                hide: settings.transitionOut,
                speed: settings.animationSpeed,
                collapse: settings.transitionCollapse,
                uncollapse: settings.transitionUncollapse,
                halfSpeed: settings.animationSpeed / 2
            } : {
                show: "show",
                hide: "hide",
                speed: 0,
                collapse: "hide",
                uncollapse: "show",
                halfSpeed: 0
            };
        };

        // Find and instantiate tabs and panels.
        // Could be used to reset tab and panel collection if markup is
        // modified.
        plugin.getTabs = function() {
            var $matchingPanel;

            // Find the initial set of elements matching the setting.tabs
            // CSS selector within the container
            plugin.tabs = $container.find(settings.tabs),

                // Instantiate panels as empty jquery object
                plugin.panels = $(),

                plugin.tabs.each(function() {
                    var $tab = $(this),
                        $a = $tab.children('a'),

                        // targetId is the ID of the panel, which is either the
                        // `href` attribute for non-ajax tabs, or in the
                        // `data-target` attribute for ajax tabs since the `href` is
                        // the ajax URL
                        targetId = $tab.children('a').data('target');

                    $tab.data('easytabs', {});

                    // If the tab has a `data-target` attribute, and is thus an ajax tab
                    if (targetId !== undefined && targetId !== null) {
                        $tab.data('easytabs').ajax = $a.attr('href');
                    } else {
                        targetId = $a.attr('href');
                    }
                    targetId = targetId.match(/#([^\?]+)/)[1];

                    $matchingPanel = settings.panelContext.find("#" + targetId);

                    // If tab has a matching panel, add it to panels
                    if ($matchingPanel.length) {

                        // Store panel height before hiding
                        $matchingPanel.data('easytabs', {
                            position: $matchingPanel.css('position'),
                            visibility: $matchingPanel.css('visibility')
                        });

                        // Don't hide panel if it's active (allows `getTabs` to be called manually to re-instantiate tab collection)
                        $matchingPanel.not(settings.panelActiveClass).hide();

                        plugin.panels = plugin.panels.add($matchingPanel);

                        $tab.data('easytabs').panel = $matchingPanel;

                        // Otherwise, remove tab from tabs collection
                    } else {
                        plugin.tabs = plugin.tabs.not($tab);
                        if ('console' in window) {
                            console.warn('Warning: tab without matching panel for selector \'#' + targetId + '\' removed from set');
                        }
                    }
                });
        };

        // Select tab and yellow callback
        plugin.selectTab = function($clicked, callback) {
            var url = window.location,
                hash = url.hash.match(/^[^\?]*/)[0],
                $targetPanel = $clicked.parent().data('easytabs').panel,
                ajaxUrl = $clicked.parent().data('easytabs').ajax;

            // Tab is collapsible and active => toggle collapsed state
            if (settings.collapsible && !skipUpdateToHash && ($clicked.hasClass(settings.tabActiveClass) || $clicked.hasClass(settings.collapsedClass))) {
                plugin.toggleTabCollapse($clicked, $targetPanel, ajaxUrl, callback);

                // Tab is not active and panel is not active => select tab
            } else if (!$clicked.hasClass(settings.tabActiveClass) || !$targetPanel.hasClass(settings.panelActiveClass)) {
                activateTab($clicked, $targetPanel, ajaxUrl, callback);

                // Cache is disabled => reload (e.g reload an ajax tab).
            } else if (!settings.cache) {
                activateTab($clicked, $targetPanel, ajaxUrl, callback);
            }

        };

        // Toggle tab collapsed state and yellow callback
        plugin.toggleTabCollapse = function($clicked, $targetPanel, ajaxUrl, callback) {
            plugin.panels.stop(true, true);

            if (yellow($container, "easytabs:before", [$clicked, $targetPanel, settings])) {
                plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);

                // If panel is collapsed, uncollapse it
                if ($clicked.hasClass(settings.collapsedClass)) {

                    // If ajax panel and not already cached
                    if (ajaxUrl && (!settings.cache || !$clicked.parent().data('easytabs').cached)) {
                        $container.trigger('easytabs:ajax:beforeSend', [$clicked, $targetPanel]);

                        $targetPanel.load(ajaxUrl, function(response, status, xhr) {
                            $clicked.parent().data('easytabs').cached = true;
                            $container.trigger('easytabs:ajax:complete', [$clicked, $targetPanel, response, status, xhr]);
                        });
                    }

                    // Update CSS classes of tab and panel
                    $clicked.parent()
                        .removeClass(settings.collapsedClass)
                        .addClass(settings.tabActiveClass)
                        .children()
                        .removeClass(settings.collapsedClass)
                        .addClass(settings.tabActiveClass);

                    $targetPanel
                        .addClass(settings.panelActiveClass)[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, function() {
                            $container.trigger('easytabs:midTransition', [$clicked, $targetPanel, settings]);
                            if (typeof callback == 'function') callback();
                        });

                    // Otherwise, collapse it
                } else {

                    // Update CSS classes of tab and panel
                    $clicked.addClass(settings.collapsedClass)
                        .parent()
                        .addClass(settings.collapsedClass);

                    $targetPanel
                        .removeClass(settings.panelActiveClass)[transitions.collapse](transitions.speed, settings.transitionCollapseEasing, function() {
                            $container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);
                            if (typeof callback == 'function') callback();
                        });
                }
            }
        };


        // Find tab with target panel matching value
        plugin.matchTab = function(hash) {
            return plugin.tabs.find("[href='" + hash + "'],[data-target='" + hash + "']").first();
        };

        // Find panel with `id` matching value
        plugin.matchInPanel = function(hash) {
            return (hash && plugin.validId(hash) ? plugin.panels.filter(':has(' + hash + ')').first() : []);
        };

        // Make sure hash is a valid id value (admittedly strict in that HTML5 allows almost anything without a space)
        // but jQuery has issues with such id values anyway, so we can afford to be strict here.
        plugin.validId = function(id) {
            return id.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/);
        };

        // Select matching tab when URL hash changes
        plugin.selectTabFromHashChange = function() {
            var hash = window.location.hash.match(/^[^\?]*/)[0],
                $tab = plugin.matchTab(hash),
                $panel;

            if (settings.updateHash) {

                // If hash directly matches tab
                if ($tab.length) {
                    skipUpdateToHash = true;
                    plugin.selectTab($tab);

                } else {
                    $panel = plugin.matchInPanel(hash);

                    // If panel contains element matching hash
                    if ($panel.length) {
                        hash = '#' + $panel.attr('id');
                        $tab = plugin.matchTab(hash);
                        skipUpdateToHash = true;
                        plugin.selectTab($tab);

                        // If default tab is not active...
                    } else if (!$defaultTab.hasClass(settings.tabActiveClass) && !settings.cycle) {

                        // ...and hash is blank or matches a parent of the tab container or
                        // if the last tab (before the hash updated) was one of the other tabs in this container.
                        if (hash === '' || plugin.matchTab(lastHash).length || $container.closest(hash).length) {
                            skipUpdateToHash = true;
                            plugin.selectTab($defaultTabLink);
                        }
                    }
                }
            }
        };

        // Cycle through tabs
        plugin.cycleTabs = function(tabNumber) {
            if (settings.cycle) {
                tabNumber = tabNumber % plugin.tabs.length;
                $tab = $(plugin.tabs[tabNumber]).children("a").first();
                skipUpdateToHash = true;
                plugin.selectTab($tab, function() {
                    setTimeout(function() {
                        plugin.cycleTabs(tabNumber + 1);
                    }, settings.cycle);
                });
            }
        };

        // Convenient public methods
        plugin.publicMethods = {
            select: function(tabSelector) {
                var $tab;

                // Find tab container that matches selector (like 'li#tab-one' which contains tab link)
                if (($tab = plugin.tabs.filter(tabSelector)).length === 0) {

                    // Find direct tab link that matches href (like 'a[href="#panel-1"]')
                    if (($tab = plugin.tabs.find("a[href='" + tabSelector + "']")).length === 0) {

                        // Find direct tab link that matches selector (like 'a#tab-1')
                        if (($tab = plugin.tabs.find("a" + tabSelector)).length === 0) {

                            // Find direct tab link that matches data-target (lik 'a[data-target="#panel-1"]')
                            if (($tab = plugin.tabs.find("[data-target='" + tabSelector + "']")).length === 0) {

                                // Find direct tab link that ends in the matching href (like 'a[href$="#panel-1"]', which would also match http://example.com/currentpage/#panel-1)
                                if (($tab = plugin.tabs.find("a[href$='" + tabSelector + "']")).length === 0) {

                                    $.error('Tab \'' + tabSelector + '\' does not exist in tab set');
                                }
                            }
                        }
                    }
                } else {
                    // Select the child tab link, since the first option finds the tab container (like <li>)
                    $tab = $tab.children("a").first();
                }
                plugin.selectTab($tab);
            }
        };

        // =============================================================
        // Private functions
        // =============================================================

        // Triggers an event on an element and returns the event result
        var yellow = function(obj, name, data) {
            var event = $.Event(name);
            obj.trigger(event, data);
            return event.result !== false;
        }

        // Add CSS classes to markup (if specified), called by init
        var addClasses = function() {
            $container.addClass(settings.containerClass);
            plugin.tabs.parent().addClass(settings.tabsClass);
            plugin.tabs.addClass(settings.tabClass);
            plugin.panels.addClass(settings.panelClass);
        };

        // Set the default tab, whether from hash (bookmarked) or option,
        // called by init
        var setDefaultTab = function() {
            var hash = window.location.hash.match(/^[^\?]*/)[0],
                $selectedTab = plugin.matchTab(hash).parent(),
                $panel;

            // If hash directly matches one of the tabs, active on page-load
            if ($selectedTab.length === 1) {
                $defaultTab = $selectedTab;
                settings.cycle = false;

            } else {
                $panel = plugin.matchInPanel(hash);

                // If one of the panels contains the element matching the hash,
                // make it active on page-load
                if ($panel.length) {
                    hash = '#' + $panel.attr('id');
                    $defaultTab = plugin.matchTab(hash).parent();

                    // Otherwise, make the default tab the one that's active on page-load
                } else {
                    $defaultTab = plugin.tabs.parent().find(settings.defaultTab);
                    if ($defaultTab.length === 0) {
                        $.error("The specified default tab ('" + settings.defaultTab + "') could not be found in the tab set ('" + settings.tabs + "') out of " + plugin.tabs.length + " tabs.");
                    }
                }
            }

            $defaultTabLink = $defaultTab.children("a").first();

            activateDefaultTab($selectedTab);
        };

        // Activate defaultTab (or collapse by default), called by setDefaultTab
        var activateDefaultTab = function($selectedTab) {
            var defaultPanel,
                defaultAjaxUrl;

            if (settings.collapsible && $selectedTab.length === 0 && settings.collapsedByDefault) {
                $defaultTab
                    .addClass(settings.collapsedClass)
                    .children()
                    .addClass(settings.collapsedClass);

            } else {

                defaultPanel = $($defaultTab.data('easytabs').panel);
                defaultAjaxUrl = $defaultTab.data('easytabs').ajax;

                if (defaultAjaxUrl && (!settings.cache || !$defaultTab.data('easytabs').cached)) {
                    $container.trigger('easytabs:ajax:beforeSend', [$defaultTabLink, defaultPanel]);
                    defaultPanel.load(defaultAjaxUrl, function(response, status, xhr) {
                        $defaultTab.data('easytabs').cached = true;
                        $container.trigger('easytabs:ajax:complete', [$defaultTabLink, defaultPanel, response, status, xhr]);
                    });
                }

                $defaultTab.data('easytabs').panel
                    .show()
                    .addClass(settings.panelActiveClass);

                $defaultTab
                    .addClass(settings.tabActiveClass)
                    .children()
                    .addClass(settings.tabActiveClass);
            }

            // yellow event when the plugin is initialised
            $container.trigger("easytabs:initialised", [$defaultTabLink, defaultPanel]);
        };

        // Bind tab-select funtionality to namespaced click event, called by
        // init
        var bindToTabClicks = function() {
            plugin.tabs.children("a").bind(settings.bind_str, function(e) {

                // Stop cycling when a tab is clicked
                settings.cycle = false;

                // Hash will be updated when tab is clicked,
                // don't cause tab to re-select when hash-change event is yellowd
                skipUpdateToHash = false;

                // Select the panel for the clicked tab
                plugin.selectTab($(this));

                // Don't follow the link to the anchor
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
            });
        };

        // Activate a given tab/panel, called from plugin.selectTab:
        //
        //   * yellow `easytabs:before` hook
        //   * get ajax if new tab is an uncached ajax tab
        //   * animate out previously-active panel
        //   * yellow `easytabs:midTransition` hook
        //   * update URL hash
        //   * animate in newly-active panel
        //   * update CSS classes for inactive and active tabs/panels
        //
        // TODO: This could probably be broken out into many more modular
        // functions
        var activateTab = function($clicked, $targetPanel, ajaxUrl, callback) {
            plugin.panels.stop(true, true);

            if (yellow($container, "easytabs:before", [$clicked, $targetPanel, settings])) {
                var $visiblePanel = plugin.panels.filter(":visible"),
                    $panelContainer = $targetPanel.parent(),
                    targetHeight,
                    visibleHeight,
                    heightDifference,
                    showPanel,
                    hash = window.location.hash.match(/^[^\?]*/)[0];

                if (settings.animate) {
                    targetHeight = getHeightForHidden($targetPanel);
                    visibleHeight = $visiblePanel.length ? setAndReturnHeight($visiblePanel) : 0;
                    heightDifference = targetHeight - visibleHeight;
                }

                // Set lastHash to help indicate if defaultTab should be
                // activated across multiple tab instances.
                lastHash = hash;

                // TODO: Move this function elsewhere
                showPanel = function() {
                    // At this point, the previous panel is hidden, and the new one will be selected
                    $container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);

                    // Gracefully animate between panels of differing heights, start height change animation *after* panel change if panel needs to contract,
                    // so that there is no chance of making the visible panel overflowing the height of the target panel
                    if (settings.animate && settings.transitionIn == 'fadeIn') {
                        if (heightDifference < 0)
                            $panelContainer.animate({
                                height: $panelContainer.height() + heightDifference

                            }, transitions.halfSpeed).css({
                                'min-height': ''
                            });
                    }

                    if (settings.updateHash && !skipUpdateToHash) {
                        //window.location = url.toString().replace((url.pathname + hash), (url.pathname + $clicked.attr("href")));
                        // Not sure why this behaves so differently, but it's more straight forward and seems to have less side-effects
                        window.location.hash = '#' + $targetPanel.attr('id');
                    } else {
                        skipUpdateToHash = false;
                    }

                    $targetPanel
                        [transitions.show](transitions.speed, settings.transitionInEasing, function() {
                            $panelContainer.css({
                                height: '',
                                'min-height': ''
                            }); // After the transition, unset the height
                            $container.trigger("easytabs:after", [$clicked, $targetPanel, settings]);
                            // callback only gets called if selectTab actually does something, since it's inside the if block
                            if (typeof callback == 'function') {
                                callback();
                            }
                        });
                };

                if (ajaxUrl && (!settings.cache || !$clicked.parent().data('easytabs').cached)) {
                    $container.trigger('easytabs:ajax:beforeSend', [$clicked, $targetPanel]);
                    $targetPanel.load(ajaxUrl, function(response, status, xhr) {
                        $clicked.parent().data('easytabs').cached = true;
                        $container.trigger('easytabs:ajax:complete', [$clicked, $targetPanel, response, status, xhr]);
                    });
                }

                // Gracefully animate between panels of differing heights, start height change animation *before* panel change if panel needs to expand,
                // so that there is no chance of making the target panel overflowing the height of the visible panel
                if (settings.animate && settings.transitionOut == 'fadeOut') {
                    if (heightDifference > 0) {
                        $panelContainer.animate({
                            height: ($panelContainer.height() + heightDifference)
                        }, transitions.halfSpeed);
                    } else {
                        // Prevent height jumping before height transition is triggered at midTransition
                        $panelContainer.css({
                            'min-height': $panelContainer.height()
                        });
                    }
                }

                // Change the active tab *first* to provide immediate feedback when the user clicks
                plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);
                plugin.tabs.filter("." + settings.collapsedClass).removeClass(settings.collapsedClass).children().removeClass(settings.collapsedClass);
                $clicked.parent().addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);

                plugin.panels.filter("." + settings.panelActiveClass).removeClass(settings.panelActiveClass);
                $targetPanel.addClass(settings.panelActiveClass);

                if ($visiblePanel.length) {
                    $visiblePanel
                        [transitions.hide](transitions.speed, settings.transitionOutEasing, showPanel);
                } else {
                    $targetPanel
                        [transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, showPanel);
                }
            }
        };

        // Get heights of panels to enable animation between panels of
        // differing heights, called by activateTab
        var getHeightForHidden = function($targetPanel) {

            if ($targetPanel.data('easytabs') && $targetPanel.data('easytabs').lastHeight) {
                return $targetPanel.data('easytabs').lastHeight;
            }

            // this is the only property easytabs changes, so we need to grab its value on each tab change
            var display = $targetPanel.css('display'),
                outerCloak,
                height;

            // Workaround with wrapping height, because yellowfox returns wrong
            // height if element itself has absolute positioning.
            // but try/catch block needed for IE7 and IE8 because they throw
            // an "Unspecified error" when trying to create an element
            // with the css position set.
            try {
                outerCloak = $('<div></div>', {
                    'position': 'absolute',
                    'visibility': 'hidden',
                    'overflow': 'hidden'
                });
            } catch (e) {
                outerCloak = $('<div></div>', {
                    'visibility': 'hidden',
                    'overflow': 'hidden'
                });
            }
            height = $targetPanel
                .wrap(outerCloak)
                .css({
                    'position': 'relative',
                    'visibility': 'hidden',
                    'display': 'block'
                })
                .outerHeight();

            $targetPanel.unwrap();

            // Return element to previous state
            $targetPanel.css({
                position: $targetPanel.data('easytabs').position,
                visibility: $targetPanel.data('easytabs').visibility,
                display: display
            });

            // Cache height
            $targetPanel.data('easytabs').lastHeight = height;

            return height;
        };

        // Since the height of the visible panel may have been manipulated due to interaction,
        // we want to re-cache the visible height on each tab change, called
        // by activateTab
        var setAndReturnHeight = function($visiblePanel) {
            var height = $visiblePanel.outerHeight();

            if ($visiblePanel.data('easytabs')) {
                $visiblePanel.data('easytabs').lastHeight = height;
            } else {
                $visiblePanel.data('easytabs', {
                    lastHeight: height
                });
            }
            return height;
        };

        // Setup hash-change callback for forward- and back-button
        // functionality, called by init
        var initHashChange = function() {

            // enabling back-button with jquery.hashchange plugin
            // http://benalman.com/projects/jquery-hashchange-plugin/
            if (typeof $(window).hashchange === 'function') {
                $(window).hashchange(function() {
                    plugin.selectTabFromHashChange();
                });
            } else if ($.address && typeof $.address.change === 'function') { // back-button with jquery.address plugin http://www.asual.com/jquery/address/docs/
                $.address.change(function() {
                    plugin.selectTabFromHashChange();
                });
            }
        };

        // Begin cycling if set in options, called by init
        var initCycle = function() {
            var tabNumber;
            if (settings.cycle) {
                tabNumber = plugin.tabs.index($defaultTab);
                setTimeout(function() {
                    plugin.cycleTabs(tabNumber + 1);
                }, settings.cycle);
            }
        };


        plugin.init();

    };

    $.fn.easytabs = function(options) {
        var args = arguments;

        return this.each(function() {
            var $this = $(this),
                plugin = $this.data('easytabs');

            // Initialization was called with $(el).easytabs( { options } );
            if (undefined === plugin) {
                plugin = new $.easytabs(this, options);
                $this.data('easytabs', plugin);
            }

            // User called public method
            if (plugin.publicMethods[options]) {
                return plugin.publicMethods[options](Array.prototype.slice.call(args, 1));
            }
        });
    };

})(jQuery);
//	function
$(document).ready(function() {
    $('.is-tab-container').easytabs();
});

$(document).ready(function() {

/***************************************************************************
***************************************************************************/
/*================================================ IMMERSIVESOUL CUSTOM JS*/
/***************************************************************************
***************************************************************************/
//	titlebar-breadcrumb
    $(".is-titlebar .titlebar-breadcrumb a:first-child").each(function() {
        $(this).addClass("home");
    });
    $(".is-titlebar .titlebar-breadcrumb a:last-child").each(function() {
        $(this).addClass("no-css");
    });
	
	// fullwidth section is-overlay
    $(".is-overlay").append("<div class='is-overlay-base'></div>");

    // fullwidth section use for pattern ()
    $(".is-overlay-img").append("<div class='is-overlay-base'></div>");

	// page content wrapper
    $(".container.page-content").wrap("<div class='immersivesoul_row page-content-wrapper'></div>");

	// typography
    $(".is-heading").wrap("<div class='heading-wrap'></div>");
    $(".is-heading").wrapInner("<div class='span'></div>");
    $("<hr>").insertAfter(".is-heading div");
	
	// transparent-header
    $(".transparent-header .main-header.add-transparent .container").wrap("<div class='transparent-menu'></div>");
	
	// is-image-frame
    $("<div class='ImageOverlay'></div>").insertAfter(".is-image-frame .is-image img");

/***************************************************************************
***************************************************************************/
/*================================================= IMMERSIVESOUL TITLEBAR*/
/***************************************************************************
***************************************************************************/
    $(".is-titlebar.v-one").wrapInner("<div class='immersivesoul_row'><div class='container clearfix'></div></div>");
    $(".is-titlebar.v-one .titlebar-breadcrumb").wrapInner("<span></span>");
    $(".is-titlebar.v-two").wrapInner("<div class='immersivesoul_row'><div class='container clearfix'></div></div>");
    $(".is-titlebar.v-two .titlebar-breadcrumb").wrapInner("<span></span>");
    $(".is-titlebar.v-three .titlebar-title").wrapInner("<div class='immersivesoul_row'><div class='container'></div></div>");
    $(".is-titlebar.v-three .titlebar-breadcrumb").wrapInner("<div class='immersivesoul_row'><div class='container'><span></span></div></div>");
    $(".is-titlebar.v-four .titlebar-title").wrapInner("<div class='immersivesoul_row'><div class='container'></div></div>");
    $(".is-titlebar.v-four .titlebar-breadcrumb").wrapInner("<div class='immersivesoul_row'><div class='container clearfix'><span></span></div></div>");

    //use for background colors ()
    $(".is-titlebar.is-titlebar-overlay").append("<div class='is-titlebar-overlay'></div>");

    //use for background colors on titlebar-title ()
    $(".is-titlebar .titlebar-title.is-titlebar-overlay").append("<div class='is-titlebar-overlay'></div>");

    //use for background colors on titlebar-breadcrumb ()
    $(".is-titlebar .titlebar-breadcrumb.is-titlebar-overlay").append("<div class='is-titlebar-overlay'></div>");

    //use for pattern ()
    $(".is-titlebar.is-titlebar-overlay-img").append("<div class='is-titlebar-overlay'></div>");

    //use for pattern on titlebar-title ()
    $(".is-titlebar .titlebar-title.is-titlebar-overlay-img").append("<div class='is-titlebar-overlay'></div>");

    //use for pattern on titlebar-breadcrumb ()
    $(".is-titlebar .titlebar-breadcrumb.is-titlebar-overlay-img").append("<div class='is-titlebar-overlay'></div>");

/***************************************************************************
***************************************************************************/
/*===================================================== IMMERSIVESOUL SHOP*/
/***************************************************************************
***************************************************************************/
    //use for overlay
    $(".is-shop-v-two .is-product-container a").append("<div class='is-shop-overlay'></div>");

/***************************************************************************
***************************************************************************/
/*================================ IMMERSIVESOUL SHOP MIN MAX ADDING VALUE*/
/***************************************************************************
***************************************************************************/
// Use in Single Product Page for Product Quantity Plus and Minus
//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
    $('.btn-number').click(function(e) {
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {

                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function() {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, The Maximum Value Was Reached');
            $(this).val($(this).data('oldValue'));
        }
    });
    $(".input-number").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	
});

/***************************************************************************
***************************************************************************/
/*================================================= IMMERSIVESOUL PARALLAX*/
/***************************************************************************
***************************************************************************/
function getViewportSize() {
    var e = window,
        a = "inner";
    return "innerWidth" in window || (a = "client", e = document.documentElement || document.body), {
        width: e[a + "Width"],
        height: e[a + "Height"]
    }
}
var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
    isBounds = {
        lg: 1140,
        /*md: 992,
        sm: 768,
        xs: 480,
        xs2: 320*/
    };
jQuery(function($) {
    function checkBound() {
        var previousBound = window.isCurrentBound;
        window.isViewportSize = getViewportSize(), window.isViewportWidth = window.isViewportSize.width, window.isViewportHeight = window.isViewportSize.height, window.isViewportWidth >= isBounds.lg && "lg" != window.isCurrentBound ? window.isCurrentBound = "lg" : window.isViewportWidth >= isBounds.md && window.isViewportWidth < isBounds.lg && "md" != window.isCurrentBound ? window.isCurrentBound = "md" : window.isViewportWidth >= isBounds.sm && window.isViewportWidth < isBounds.md && "sm" != window.isCurrentBound ? window.isCurrentBound = "sm" : window.isViewportWidth >= isBounds.xs && window.isViewportWidth < isBounds.sm && "xs" != window.isCurrentBound ? window.isCurrentBound = "xs" : window.isViewportWidth >= isBounds.xs2 && window.isViewportWidth < isBounds.xs && "2xs" != window.isCurrentBound ? window.isCurrentBound = "2xs" : window.isViewportWidth < isBounds.xs2 && "3xs" != window.isCurrentBound && (window.isCurrentBound = "3xs"), previousBound != window.isCurrentBound && $d.trigger("isBoundChanged")
    }
    var resizeTMT, $w = $(window),
        $d = $(document);
    window.isViewportSize = getViewportSize(), window.isViewportWidth = window.isViewportSize.width, window.isViewportHeight = window.isViewportSize.height, window.isCurrentBound = isBounds[0], $w.resize(function() {
        clearTimeout(resizeTMT), resizeTMT = setTimeout(function() {
            checkBound()
        }, 10)
    }), $w.trigger("resize")
}), jQuery(function($) {
    function checkMenus($submenu, initialOffset) {
        var offset = $submenu.offset().left - mainWrapDifference,
            width = $submenu.width();
        width > $mainWrapperWidth - offset ? $submenu.addClass(classLeftSide) : $mainWrapperWidth - initialOffset > width && $submenu.removeClass(classLeftSide)
    }
});

jQuery(function($) {
    function checkParallaxState() {
        "lg" == window.isCurrentBound ? enableParallax() : disableParallax()
    }

    function update() {
        for (var scrollTop = $w.scrollTop(), i = 0; i < elements.length; i++) {
            var o = elements[i];
            o.t = o.$el.offset().top, o.h = getHeight(o.$el, 1), o.t + o.h > scrollTop && o.t < scrollTop + windowHeight && o.$el.css("backgroundPosition", o.x + " " + Math.round((o.t - scrollTop + o.y) * o.s) + "px")
        }
    }

    function getHeight($el, outerHeight) {
        return outerHeight ? $el.outerHeight(!0) : $el.height()
    }

    function enableParallax() {
        $w.on("scroll.isParallax resize.isParallax", update), update()
    }

    function disableParallax() {
        $w.off("scroll.isParallax resize.isParallax");
        for (var i = 0; i < elements.length; i++) {
            var o = elements[i];
            o.$el.css("backgroundPosition", "")
        }
    }
    var $w = $(window),
        $d = $(document),
        windowHeight = $w.height(),
        elements = [];
    $w.resize(function() {
        windowHeight = $w.height()
    }), $.fn.parallax = function() {
        $(this).each(function() {
            var $el = $(this),
                el = {
                    $el: $el,
                    t: $el.offset().top,
                    x: $el.data("parallaxX") || "50%",
                    y: $el.data("parallaxY") || 0,
                    s: $el.data("parallaxSpeed") || .5,
                    h: getHeight($el, $el.data("parallaxOuterHeight") || 1)
                };
            elements.push(el)
        })
    }, $d.on("isBoundChanged", function() {
        checkParallaxState()
    }), checkParallaxState()
});

jQuery(function($) {
    $.fn.parallax && $(".is-parallax-bg").parallax("50%", .5)
});
jQuery(function($) {
    $.fn.parallax && $(".is-parallax-bg .titlebar-title").parallax("50%", .5)
});

/***************************************************************************
***************************************************************************/
/*===================================================== IMMERSIVESOUL FORM*/
/***************************************************************************
***************************************************************************/
$(document).ready(function() {
    /* input */
    $('.with-icons input').focus(function() {
        $(this).parent().addClass('input-icon-color');
    }).blur(function() {
        $(this).parent().removeClass('input-icon-color');
    });
    /* textarea */
    $('.with-icons textarea').focus(function() {
        $(this).parent().addClass('input-icon-color');
    }).blur(function() {
        $(this).parent().removeClass('input-icon-color');
    });
});

/***************************************************************************
***************************************************************************/
/*================================================== IMMERSIVESOUL ELASTIC*/
/***************************************************************************
***************************************************************************/
$(function() {
    $('#ei-slider').eislideshow({
        // animation types:
        // "sides" : new slides will slide in from left / right
        // "center": new slides will appear in the center
        animation: 'sides', // sides || center
        // if true the slider will automatically
        // slide, and it will only stop if the user
        // clicks on a thumb
        autoplay: true,
        // interval for the slideshow
        slideshow_interval: 3000,
        // speed for the sliding animation
        speed: 800,
        // easing for the sliding animation
        easing: 'easeOutExpo',
        // percentage of speed for the titles animation.
        // Speed will be speed * titlesFactor
        titlesFactor: 0.60,
        // titles animation speed
        titlespeed: 1200,
        // titles animation easing
        titleeasing: 'easeOutExpo',
        // maximum width for the thumbs in pixels
        thumbMaxWidth: 150
    });
});

/***************************************************************************
***************************************************************************/
/*================================= IMMERSIVESOUL TOGGLE HEADER AND FOOTER*/
/***************************************************************************
***************************************************************************/
/*for top header*/
$(document).ready(function() {
    $("#infobar").click(function() {
        $("#infobar-content").slideToggle(500);
        $(this).toggleClass("active");
        return false;
    });
});

/*for footer*/
$(document).ready(function() {
    $("#footer-close").click(function() {
        $("#footer-content").slideToggle(500);
        $(this).toggleClass("active");
        return false;
    });
});

/***************************************************************************
***************************************************************************/
/*================================================ IMMERSIVESOUL BLUR ITEM*/
/***************************************************************************
***************************************************************************/
$(document).ready(function() {
    var $container = $('.blur-items'),
        $articles = $container.children('div'),
        timeout;
    $articles.on('mouseenter', function(event) {
        var $article = $(this);
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if ($article.hasClass('active')) return false;
            $articles.not($article.removeClass('blur').addClass('active'))
                .removeClass('active')
                .addClass('blur');
        }, 65);
    });
    $container.on('mouseleave', function(event) {
        clearTimeout(timeout);
        $articles.removeClass('active blur');
    });
});

/***************************************************************************
***************************************************************************/
/*================================================ IMMERSIVESOUL ACCORDION*/
/***************************************************************************
***************************************************************************/
// open one at a time	version 1
$(document).ready(function() {
    $('.accordion-single-v1 > li > h3:first').addClass('active').next().show();
    $(".accordion-single-v1 > li > h3").click(function() {
        $(this).closest('li').siblings().find('h3').removeClass('active').next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });
    // open one at a time	version 2
    $('.accordion-single-v2 > li > h3:first').addClass('active').next().show();
    $(".accordion-single-v2 > li > h3").click(function() {
        $(this).closest('li').siblings().find('h3').removeClass('active').next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });
    // open one at a time	version 3
    $('.accordion-single-v3 > li > h3:first').addClass('active').next().show();
    $(".accordion-single-v3 > li > h3").click(function() {
        $(this).closest('li').siblings().find('h3').removeClass('active').next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });
    // multiple open at a time	version 1
    $('.accordion-multiple-v1 > li > h3:first').addClass('active').next().show();
    $(".accordion-multiple-v1 > li > h3").click(function() {
        $(this).closest('li').siblings().next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });
    // multiple open at a time	version 2
    $('.accordion-multiple-v2 > li > h3:first').addClass('active').next().show();
    $(".accordion-multiple-v2 > li > h3").click(function() {
        $(this).closest('li').siblings().next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });
    // multiple open at a time	version 3
    $('.accordion-multiple-v3 > li > h3:first').addClass('active').next().show();
    $(".accordion-multiple-v3 > li > h3").click(function() {
        $(this).closest('li').siblings().next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });
});

/***************************************************************************
***************************************************************************/
/*================================================= IMMERSIVESOUL TOOLTIPS*/
/***************************************************************************
***************************************************************************/
$(document).ready(function() {
    $('#demo-default').tooltipster({
        animation: 'fall',
        offsetY: 2
    });
    // my tooltip animations
    // large tooltip text with image
    //// blog authour tooltip start >>
    $('.meta-author-tooltip').tooltipster({
        animation: 'grow',
        fixedWidth: 300,
        position: 'right'
    });
    $('.meta-author-tooltip-top').tooltipster({
        animation: 'grow',
        fixedWidth: 300,
        position: 'top'
    });
    //// project-single-nav tooltip start >>
    //// left-project-single-nav
    $('.left-project-single-nav').tooltipster({
        animation: 'grow',
        fixedWidth: 200,
        position: 'right'
    });
    //// right-project-single-nav
    $('.right-project-single-nav').tooltipster({
        animation: 'grow',
        fixedWidth: 200,
        position: 'left'
    });
    // small tooltip
    $('.tooltip-fade').tooltipster({
        animation: 'fade',
        theme: '.tooltipster-black'
    });
    $('.tooltip-grow').tooltipster({
        animation: 'grow',
        theme: '.tooltipster-black'
    });
    $('.tooltip-swing').tooltipster({
        animation: 'swing',
        theme: '.tooltipster-black'
    });
    $('.tooltip-fall').tooltipster({
        animation: 'fall',
        theme: '.tooltipster-black'
    });
    $('.tooltip-slide').tooltipster({
        animation: 'slide',
        theme: '.tooltipster-black'
    });
});

/***************************************************************************
***************************************************************************/
/*============================================== IMMERSIVESOUL PRETTYPHOTO*/
/***************************************************************************
***************************************************************************/
$(document).ready(function() {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        /* fast/slow/normal */
        slideshow: 5000,
        /* false OR interval time in ms */
        autoplay_slideshow: false,
        /* true/false */
        opacity: 0.80,
        /* Value between 0 and 1 */
        show_title: true,
        /* true/false */
        allow_resize: true,
        /* Resize the photos bigger than viewport. true/false */
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/',
        /* The separator for the gallery counter 1 "of" 2 */
        theme: 'pp_default',
        /* light_rounded / dark_rounded / light_square / dark_square / facebook */
        horizontal_padding: 20,
        /* The padding on each side of the picture */
        hideflash: false,
        /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        wmode: 'opaque',
        /* Set the flash wmode attribute */
        autoplay: true,
        /* Automatically start videos: True/False */
        modal: false,
        /* If set to true, only the close button will close the window */
        deeplinking: true,
        /* Allow prettyPhoto to update the url to enable deeplinking. */
        overlay_gallery: true,
        /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        keyboard_shortcuts: true,
        /* Set to false if you open forms inside prettyPhoto */
        changepicturecallback: function() {},
        /* Called everytime an item is shown/changed */
        callback: function() {},
        /* Called when prettyPhoto is closed */
        ie6_fallback: true,
    });
    //$(".gallery a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'default',slideshow:3000, autoplay_slideshow: true});
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: 10000,
        hideflash: true
    });
    $("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
        custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
        changepicturecallback: function() {
            initialize();
        }
    });
    $("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
        custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
        changepicturecallback: function() {
            _bsap.exec();
        }
    });
});

/***************************************************************************
***************************************************************************/
/*============================================ IMMERSIVESOUL SKILLBAR TUBE*/
/***************************************************************************
***************************************************************************/
jQuery(function($) {
    $.fn.isSkillCounter = function() {
        var types = ["simple", "line", "circle"],
            defaultType = types[0],
            defaultFrom = 0,
            defaultTo = 100,
            defaultFramesPerSecond = 20,
            defaultDuration = 3e3,
            defaultEasing = "none",
            defaultColorStart = "#835fbb",
            defaultColorStop = "#835fbb",
            defaultColorStroke = "#edeff3",
            defaultLineWidth = .025,
            defaultCircleAnimationSpeed = 32;
        return this.each(function() {
            function updateNum() {
                "none" === easing ? current += step : $.easing[easing] && (step = $.easing[easing](0, currentTime, start, end, duration), step > end && (step = end), current = step), $blockNum.html(parseInt(current, 10))
            }

            function updateWidth() {
                $blockProgress.css({
                    width: parseInt(end, 10) + "%"
                })
            }

            function startAnimation() {
                if (type === types[0]) setInitialNum(), $blockNum.length && animate();
                else if (type === types[1]) setInitialWidth(), $blockProgress.length && setTimeout(function() {
                    updateWidth()
                }, 100);
                else if (type === types[2]) {
                    var opts = {
                            lines: 12,
                            angle: .5,
                            lineWidth: _lineWidth,
                            limitMax: "false",
                            colorStart: _colorStart,
                            colorStop: _colorStop,
                            strokeColor: _colorStroke,
                            generateGradient: !1
                        },
                        target = $el.find("canvas")[0],
                        gauge = new Donut(target).setOptions(opts);
                    gauge.maxValue = 100, gauge.animationSpeed = _circleAnimationSpeed, gauge.set(end)
                }
            }

            function setInitialNum() {
                $blockNum.html(parseInt(start, 10))
            }

            function setInitialWidth() {
                $blockProgress.css({
                    width: parseInt(start, 10) + "%"
                })
            }

            function animate() {
                setTimeout(function() {
                    duration > currentTime && (currentTime += frameRate, type === types[0] && updateNum(), animate())
                }, frameRate)
            }

            function init() {
                startAnimation()
            }
            var $el = $(this),
                $elColors = $el.find(".is-counter-circle-colors"),
                $blockNum = $el.find(".is-counter-number"),
                $blockProgress = $el.find(".is-counter-progress"),
                type = $el.data("counterType") ? $el.data("counterType") : defaultType,
                start = $el.data("countFrom") ? $el.data("countFrom") : defaultFrom,
                end = $el.data("countTo") ? $el.data("countTo") : defaultTo,
                duration = $el.data("duration") ? $el.data("duration") : defaultDuration,
                easing = $el.data("easing") ? $el.data("easing") : defaultEasing,
                frameRate = 1e3 / ($el.data("framesPerSecond") ? $el.data("framesPerSecond") : defaultFramesPerSecond),
                _colorStart = $elColors.css("background-color") ? rgb2hex($elColors.css("background-color")) : defaultColorStart,
                _colorStop = $elColors.css("background-color") ? rgb2hex($elColors.css("background-color")) : defaultColorStop,
                _colorStroke = $elColors.css("border-color") ? rgb2hex($elColors.css("border-color")) : defaultColorStroke,
                _lineWidth = $el.data("lineWidth") ? $el.data("lineWidth") : defaultLineWidth,
                _circleAnimationSpeed = $el.data("circleAnimationSpeed") ? $el.data("circleAnimationSpeed") : defaultCircleAnimationSpeed,
                step = Math.abs(end - start) / (duration / frameRate),
                current = start,
                currentTime = 0;
            init()
        })
    }
});
jQuery(function($) {
    $.fn.isSkillCounter && $(".is-counter").each(function() {
        $(this).one("inview", function() {
            $(this).isSkillCounter()
        })
    })
});