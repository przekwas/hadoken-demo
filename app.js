const STANDING = 'standing.gif';
const HADOKEN = 'hadoken.gif';

const RYU = document.createElement('img');
RYU.src = STANDING;

const listener = new window.keypress.Listener();
document.body.appendChild(RYU);

listener.sequence_combo(
	'down right x',
	function (evy) {
		console.log('HADOKEN!');
		RYU.src = HADOKEN;
		setTimeout(() => (RYU.src = STANDING), 980);
	},
	true
);
