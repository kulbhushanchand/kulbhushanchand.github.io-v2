/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    };

  bumpIt();
  $(window).resize(jQuery.throttle(250, function() {
    bumpIt();
  }));

  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });



  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // Smooth scrolling

  // Bind popstate event listener to support back/forward buttons.
  var smoothScrolling = false;
  $(window).bind("popstate", function (event) {
    $.smoothScroll({
      scrollTarget: decodeURI(location.hash),
      offset: -20,
      beforeScroll: function() { smoothScrolling = true; },
      afterScroll: function() { smoothScrolling = false; }
    });
  });
  // Override clicking on links to smooth scroll
  $('a[href*="#"]').bind("click", function (event) {
    if (this.pathname === location.pathname && this.hash) {
      event.preventDefault();
      history.pushState(null, null, this.hash);
      $(window).trigger("popstate");
    }
  });
  // Smooth scroll on page load if there is a hash in the URL.
  if (location.hash) {
    $(window).trigger("popstate");
  }

  // Scrollspy equivalent: update hash fragment while scrolling.
  $(window).scroll(jQuery.throttle(250, function() {
    // Don't run while smooth scrolling (from clicking on a link).
    if (smoothScrolling) return;
    var scrollTop = $(window).scrollTop() + 20 + 1;  // 20 = offset
    var links = [];
    $("nav.toc a").each(function() {
      var link = $(this);
      var href = link.attr("href");
      if (href && href[0] == "#") {
        var element = $(href);
        links.push({
          link: link,
          href: href,
          top: element.offset().top
        });
        link.removeClass('active');
      }
    });
    for (var i = 0; i < links.length; i++) {
      var top = links[i].top;
      var bottom = (i < links.length - 1 ? links[i+1].top : Infinity);
      if (top <= scrollTop && scrollTop < bottom) {
        // Mark all ancestors as active
        links[i].link.parents("li").children("a").addClass('active');
        if (links[i].href !== decodeURI(location.hash)) {
          history.replaceState(null, null, links[i].href);
        }
        return;
      }
    }
    if ('#' !== location.hash) {
      history.replaceState(null, null, '#');
    }
  }));

 // add lightbox class to all image links
 $("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']").attr("data-lity", "");

// bigfoot initialization
	var bigfoot = $.bigfoot(
	//	{
	//	actionOriginalFN: "hide",
	//	positionContent: "true"
	//	}
    );
    
  // SVG for Everybody init
  svg4everybody();

});
