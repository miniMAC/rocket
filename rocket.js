function rocketcss(rocket, target, theclass) {

	var cloned = $(rocket).clone();
	
	var offset_target = $(target).offset();
	var offset_rocket = $(rocket).offset();
	
	cloned.insertAfter(rocket);
	$(rocket).css({ "opacity": "0" });
	cloned.css({ "position": "fixed", "z-index": "999999", "top": offset_rocket.top + "px", "left": offset_rocket.left + "px", "right": "auto", "bottom": "auto", "margin": "auto", "padding": "auto", "opacity": "1" }).animate({ 'top': offset_target.top + 'px', 'left': offset_target.left + 'px'}, 1500);
	cloned.addClass('mover ' + (theclass || 'rocketPulseHole') );
	setTimeout(function () {
		cloned.fadeOut(300);
	}, 1500);
	return cloned;
}
