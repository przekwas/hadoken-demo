const imgSrcs = {
	standing: 'standing.gif',
	hadoken: 'hadoken.gif'
};

const elements = {
	ryuDiv: document.querySelector('#img'),
	buttonX: document.querySelector('#x'),
	buttonDown: document.querySelector('#down'),
	buttonRight: document.querySelector('#right'),
	ryuImg: document.querySelector('img'),
	animateRyu: function () {
		this.ryuImg.src = imgSrcs.hadoken;
		setTimeout(() => (this.ryuImg.src = imgSrcs.standing), 980);
	},
	buttonPress: function (buttonType) {
		this[buttonType].style.background = '#A9A9A9';
	},
	buttonRelease: function (buttonType) {
		this[buttonType].style.background = '#FFFFFF';
	}
};

elements.ryuImg.src = imgSrcs.standing;

const listener = new window.keypress.Listener();

listener.register_many([
	{
		keys: 'x',
		on_keydown: function () {
			elements.buttonPress('buttonX');
		},
		on_keyup: function () {
			elements.buttonRelease('buttonX');
		}
	},
	{
		keys: 'down',
		on_keydown: function () {
			elements.buttonPress('buttonDown');
		},
		on_keyup: function () {
			elements.buttonRelease('buttonDown');
		}
	},
	{
		keys: 'right',
		on_keydown: function () {
			elements.buttonPress('buttonRight');
		},
		on_keyup: function () {
			elements.buttonRelease('buttonRight');
		}
	}
]);

listener.sequence_combo(
	'down right x',
	function () {
		console.log('HADOKEN!');
		elements.animateRyu();
	},
	true
);
