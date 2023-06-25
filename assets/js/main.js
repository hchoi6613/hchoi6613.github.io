(function($) {

	var	$window = $(window),
		$body = $('body');

	//cursor
	const cursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', e=> {
	  cursor.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left:" +(e.pageX)+"px")
	  //cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px")
	})
  
	document.addEventListener('click', () => {
	  cursor.classList.add("expand");
  
	  setTimeout(() => {
		cursor.classList.remove("expand");
	  }, 500)
	})
	
	//slideshows
	const slideshowContainers = document.querySelectorAll('.slideshow-container');
	
	slideshowContainers.forEach((container, index) => {
		let slideIndex = 0;
	const slides = container.querySelectorAll('.slide-image');
	const prevButton = container.querySelector('.prev');
	const nextButton = container.querySelector('.next');
	showSlide(slideIndex);

	function showSlide(index) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[index].style.display = 'block';
	}

	function changeSlide(n, containerIndex) {
		slideIndex += n;

		if (slideIndex < 0) {
			slideIndex = slides.length - 1;
		} else if (slideIndex >= slides.length) {
			slideIndex = 0;
		}

		showSlide(slideIndex);
	}

	prevButton.addEventListener('click', () => {
		changeSlide(-1, index);
	});

	nextButton.addEventListener('click', () => {
		changeSlide(1, index);
	});
});

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	
	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});


	//darkmode
	const darkModeToggle = document.getElementById('darkModeToggle');
	const body = document.body;
	const footer = document.getElementById('footer');
	const DARK_MODE_KEY = 'darkModeEnabled';
	
	// Check if user's preference is stored in localStorage
	const isDarkModeEnabled = localStorage.getItem(DARK_MODE_KEY) === 'true';
	darkModeToggle.checked = isDarkModeEnabled;
	
	// Apply the stored preference on page load
	if (isDarkModeEnabled) {
	  enableDarkMode();
	} else {
	  disableDarkMode();
	}
	
	darkModeToggle.addEventListener('change', function () {
	  if (darkModeToggle.checked) {
		enableDarkMode();
	  } else {
		disableDarkMode();
	  }
	});
	
	function enableDarkMode() {
	  body.classList.add('dark-mode');
	  footer.classList.add('dark-mode');
	  localStorage.setItem(DARK_MODE_KEY, 'true'); // Store the preference
	}
	
	function disableDarkMode() {
	  body.classList.remove('dark-mode');
	  footer.classList.remove('dark-mode');
	  localStorage.setItem(DARK_MODE_KEY, 'false'); // Store the preference
	}
	


})(jQuery);
