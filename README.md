:rocket: rocket
=====

Rocket creates an animation when an item is moved to another element.
Take a look: [DEMO PAGE](http://minimamente.com/example/rocket/)

Include the CSS style: rocket.css or rocket.min.css
and
include the JS file: rocket.js or rocket.min.js

Example:
```html
<link rel="stylesheet" href="rocket.min.css">
<script src="rocket.min.js"></script>
```

##Usage

Use this function on your javascript file: `rocketcss(rocket, target, theclass)`

1. Replace `rocket` with the class item that you want to move.
2. Replace `target` with the class item that you want to use as target.
3. Replace `theclass` with one of those available animations: rocketPulse, rocketPulseHole, rocketRotate, rocketRotateHole, rocketRotateGo, rocketGost, rocketFlip, rocketCircle

##Extra

You can add a special class targetPulse to the target element in your custom script file action.

##Basic Example

Simple example on click

```js
$('.yourBtnClass').on('click', function() {
	rocketcss(this,'.yourTargetClass', 'rocketPulse');
	$('.yourTargetClass').addClass('targetPulse');
});
```
