/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // Sticky footer
  var bumpIt = function() {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  };

  bumpIt();
  $(window).resize(
    jQuery.throttle(250, function() {
      bumpIt();
    })
  );

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
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });
  
  // Gumshoe scroll spy init
  var spy = new Gumshoe("nav.toc a", {
    // Active classes
    navClass: "active", // applied to the nav list item
    contentClass: "active", // applied to the content

    // Nested navigation
    nested: false, // if true, add classes to parents of active link
    nestedClass: "active", // applied to the parent items

    // Offset & reflow
    offset: 20, // how far from the top of the page to activate a content area
    reflow: true, // if true, listen for reflows

    // Event support
    events: true // if true, emit custom events
  });
  

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
