(function ($) {
	var popupIsActive = false;

  var popupBtn = $('#popup-form .button');
  popupBtn.attr('disabled', true);
  popupBtn.addClass('disabled');

  var contactsBtn = $('#contacts-form .button');
  contactsBtn.attr('disabled', true);
  contactsBtn.addClass('disabled');

  $('#cbx').on('change', function() {
    // console.log(this.checked);
    // var btn = $('#popup-form .button');
    if(!this.checked) {
      contactsBtn.attr('disabled', true);
      contactsBtn.addClass('disabled');
    } else {
      // console.log(contactsBtn);
      contactsBtn.attr('disabled', false);
      contactsBtn.removeClass('disabled');
    }
  });

	$('#cbx2').on('change', function() {
	  // console.log(this.checked);
	  // var btn = $('#popup-form .button');
	  if(!this.checked) {
      popupBtn.attr('disabled', true);
      popupBtn.addClass('disabled');
    } else {
      // console.log(popupBtn);
      popupBtn.attr('disabled', false);
      popupBtn.removeClass('disabled');
    }
  });

	//magnificPopup**************************************************************************
	$(".callback-link").magnificPopup({
    src: '.popup-form',
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: false,
		overflowY: 'hidden',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',

		callbacks: {
			open: function () {
				popupIsActive = true;
				// $('body').toggleClass('stop-scrolling');
			},
			close: function () {
				popupIsActive = false;
        $.magnificPopup.close();
				// $('body').toggleClass('stop-scrolling');
			}
		}

	});
  $(".confident-link").magnificPopup({
    src: '.popup-confident',
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: false,
    overflowY: 'scroll',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',

    callbacks: {
      open: function () {
        popupIsActive = true;
        // $('body').toggleClass('stop-scrolling');
      },
      close: function () {
        popupIsActive = false;
        $.magnificPopup.close();
        // $('body').toggleClass('stop-scrolling');
      }
    }

  });
  //slick slider*********************************************************************************************
  $('.section-otzyv .row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<i class="fas fa-angle-right"></i>',
    prevArrow: '<i class="fas fa-angle-left"></i>',
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    draggable: false,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          arrows: false,
          draggable: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          draggable: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          draggable: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          draggable: true
        }
      }
    ]
  });

	//E-mail Ajax Send*****************************************************************************************
	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('visible').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('visible').fadeOut();
        $(th).find('.button').attr('disabled', true).addClass('disabled');
        $(th).find('input[type="text"]').val('');
        $(th).find('input[type="checkbox"]').attr('checked', false);
        // console.log(th);
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


})(jQuery);