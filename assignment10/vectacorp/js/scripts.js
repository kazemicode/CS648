$(document).ready(function(){
    $('#responsive-menu').mobileMenu();
    // tooltips for navbar
    $('nav ul li a').prop('title','navItem'); 

    $('nav ul li a:first').tooltip({
        content : "Return home"
    })

    $('nav ul li a').eq(1).tooltip({
        content : "Learn more all about VectaCorp"
    })

    $('nav ul li a').eq(2).tooltip({
        content : "Vecta Corp. offers 3 solutions for prospecting, converting, and retaining customers."
    })

    $('nav ul li a').eq(3).tooltip({
        content : "Access technical resources and documentation"
    })

    $('nav ul li a:last').tooltip({
        content : "Contact us for additional information"
    })

    // tabs for solutions (homepage)
    $("#solution-tabs").tabs();

    // accordion for testimonials (homepage)
    $("#testimonial-accordion").accordion({
        collapsible: true
    });

    // tabs for management team section (aboutus)
    $("#management").tabs().addClass("ui-tabs-vertical")

    // sticky navbar (solutions)
    $("#sticky-nav").sticky({topSpacing:0});

    // scroll to top (solutions)
    $(".top").on('click', function(){
        $.smoothScroll()
        return false
    })
    
    // Quick nav links (solutions)
    $('#solution-1-link').on('click', function () {
        $.smoothScroll({
          scrollTarget: '#solution-1'
        })
        return false
      })
      $('#solution-2-link').on('click', function () {
        $.smoothScroll({
          scrollTarget: '#solution-2'
        })
        return false
      })
      $('#solution-3-link').on('click', function () {
        $.smoothScroll({
          scrollTarget: '#solution-3'
        })
        return false
      })

      // Convert all checkboxes and radios to JQuery UI versions (contactus) 
      $("input[type=checkbox], input[type=radio]").checkboxradio()
      // Convert dropdown to JQuery UI version (contactus)
      $("[name='companysize']").selectmenu()
      // Convert submit button to JQuery UI version (contactus)
      $("[name='submit']").button()
    

});
