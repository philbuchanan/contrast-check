document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	const thumbsUpPath = 'M12.596 2.043c-1.301-.092-2.303.986-2.303 2.206v1.053c0 2.666-1.813 3.785-2.774 4.2a1.866 1.866 0 01-.523.131A1.75 1.75 0 005.25 8h-1.5A1.75 1.75 0 002 9.75v10.5c0 .967.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.742-1.58c.838.06 1.667.296 2.69.586l.602.17c1.464.406 3.213.824 5.544.824 2.188 0 3.693-.204 4.583-1.372.422-.554.65-1.255.816-2.05.148-.708.262-1.57.396-2.58l.051-.39c.319-2.386.328-4.18-.223-5.394-.293-.644-.743-1.125-1.355-1.431-.59-.296-1.284-.404-2.036-.404h-2.05l.056-.429c.025-.18.05-.372.076-.572.06-.483.117-1.006.117-1.438 0-1.245-.222-2.253-.92-2.941-.684-.675-1.668-.88-2.743-.956zM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26v7.78zM3.75 20.5a.25.25 0 01-.25-.25V9.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25h-1.5z';

	const thumbsUpPath16 = 'M8.834.066C7.494-.087 6.5 1.048 6.5 2.25v.5c0 1.329-.647 2.124-1.318 2.614-.328.24-.66.403-.918.508A1.75 1.75 0 002.75 5h-1A1.75 1.75 0 000 6.75v7.5C0 15.216.784 16 1.75 16h1a1.75 1.75 0 001.662-1.201c.525.075 1.067.229 1.725.415.152.043.31.088.475.133 1.154.32 2.54.653 4.388.653 1.706 0 2.97-.153 3.722-1.14.353-.463.537-1.042.668-1.672.118-.56.208-1.243.313-2.033l.04-.306c.25-1.869.265-3.318-.188-4.316a2.418 2.418 0 00-1.137-1.2C13.924 5.085 13.353 5 12.75 5h-1.422l.015-.113c.07-.518.157-1.17.157-1.637 0-.922-.151-1.719-.656-2.3-.51-.589-1.247-.797-2.01-.884zM4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598 1.794 0 2.28-.223 2.528-.549.147-.193.276-.505.394-1.07.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.922.922 0 00-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336.023-.192.05-.39.076-.586.065-.488.13-.97.13-1.328 0-.809-.144-1.15-.288-1.316-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.861 5.861 0 01-1.567.81V13.3zM2.75 6.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1z';

	const thumbsDownPath = 'M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.864 1.864 0 00-.523-.13A1.75 1.75 0 015.25 16h-1.5A1.75 1.75 0 012 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 011.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955zM7 5.082c1.059-.064 2.079-.355 3.118-.651.188-.054.377-.108.568-.16 1.406-.392 3.006-.771 5.142-.771 2.277 0 3.004.274 3.39.781.216.283.388.718.54 1.448.136.65.242 1.45.379 2.477l.05.385c.32 2.398.253 3.794-.102 4.574-.16.352-.375.569-.66.711-.305.153-.74.245-1.365.245h-2.37c-.681 0-1.293.57-1.211 1.328.026.244.065.537.105.834l.07.527c.06.482.105.922.105 1.25 0 1.125-.213 1.617-.473 1.873-.275.27-.774.456-1.795.528-.351.024-.698-.274-.698-.71v-1.053c0-3.55-2.488-5.063-3.68-5.577A3.485 3.485 0 007 12.861V5.08zM3.75 3.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25h-1.5z';

	const thumbsDownPath16 = 'M7.083 15.986c1.34.153 2.334-.982 2.334-2.183v-.5c0-1.329.646-2.123 1.317-2.614.329-.24.66-.403.919-.508a1.75 1.75 0 001.514.872h1a1.75 1.75 0 001.75-1.75v-7.5a1.75 1.75 0 00-1.75-1.75h-1a1.75 1.75 0 00-1.662 1.2c-.525-.074-1.068-.228-1.726-.415L9.305.705C8.151.385 6.765.053 4.917.053c-1.706 0-2.97.152-3.722 1.139-.353.463-.537 1.042-.669 1.672C.41 3.424.32 4.108.214 4.897l-.04.306c-.25 1.869-.266 3.318.188 4.316.244.537.622.943 1.136 1.2.495.248 1.066.334 1.669.334h1.422l-.015.112c-.07.518-.157 1.17-.157 1.638 0 .921.151 1.718.655 2.299.512.589 1.248.797 2.011.884zm4.334-13.232c-.706-.089-1.39-.284-2.072-.479a63.914 63.914 0 00-.441-.125c-1.096-.304-2.335-.597-3.987-.597-1.794 0-2.28.222-2.529.548-.147.193-.275.505-.393 1.07-.105.502-.188 1.124-.295 1.93l-.04.3c-.25 1.882-.19 2.933.067 3.497a.921.921 0 00.443.48c.208.104.52.175.997.175h1.75c.685 0 1.295.577 1.205 1.335-.022.192-.049.39-.075.586-.066.488-.13.97-.13 1.329 0 .808.144 1.15.288 1.316.137.157.401.303 1.048.377.307.035.664-.237.664-.693v-.5c0-1.922.978-3.127 1.932-3.825a5.862 5.862 0 011.568-.809V2.754zm1.75 6.798a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1z';

	const clipboardPath = 'M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z';

	const checkPath = 'M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z';

	const foreground = document.getElementById('foreground');
	const background = document.getElementById('background');
	const contrastText = document.getElementById('contrast-ratio');
	const tests = {
		WCAG_AA_LG:  document.getElementById('AA-LG'),
		WCAG_AA:     document.getElementById('AA'),
		WCAG_AAA_LG: document.getElementById('AAA-LG'),
		WCAG_AAA:    document.getElementById('AAA'),
	};

	function isValidSixDigitColorCode(hex) {
		return /^(#)?([0-9a-fA-F]{6})?$/.test(hex);
	}

	function isValidThreeDigitColorCode(hex) {
		return /^(#)?([0-9a-fA-F]{3})?$/.test(hex);
	}

	function isValidColorCode(hex) {
		if (hex === '') {
			return false;
		}

		return isValidSixDigitColorCode(hex) || isValidThreeDigitColorCode(hex);
	}

	function getFullHexValue(hex) {
		let color = hex.replace(/\s|#/g, '');

		if (color.length === 3) {
			color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
		}

		return color;
	}

	function getRGBFromHex(color) {
		if (typeof color !== 'string') {
			throw new Error('must use string');
		}

		return {
			r: parseInt(color.slice(0, 2), 16),
			g: parseInt(color.slice(2, 4), 16),
			b: parseInt(color.slice(4, 6), 16),
		}
	}

	function calculateSRGB(rgb) {
		let sRGB = {};

		for (let key in rgb) {
			if (rgb.hasOwnProperty(key)) {
				sRGB[key] = parseFloat((rgb[key] / 255), 10);
			}
		}

		return sRGB;
	}

	function calculateLRGB(rgb) {
		const sRGB = calculateSRGB(rgb);
		let lRGB = {};
		let val = 0;

		for (let key in sRGB) {
			if (sRGB.hasOwnProperty(key)) {
				val = parseFloat(sRGB[key], 10);

				if (val <= 0.03928) {
					lRGB[key] = (val / 12.92);
				}
				else {
					lRGB[key] = Math.pow(((val + 0.055) / 1.055), 2.4);
				}
			}
		}

		return lRGB;
	}

	function calculateLuminance(lRGB) {
		return (0.2126 * lRGB.r) + (0.7152 * lRGB.g) + (0.0722 * lRGB.b);
	}

	function hexToLuminance(color) {
		if (!isValidColorCode(color)) {
			throw new Error('Invalid Color:' + color);
		}

		return calculateLuminance(calculateLRGB(getRGBFromHex(color)));
	}

	function getContrastRatio(lumA, lumB) {
		let ratio;
		let lighter;
		let darker;

		if (lumA >= lumB) {
			lighter = lumA;
			darker = lumB;
		}
		else {
			lighter = lumB;
			darker = lumA;
		}

		ratio = (lighter + 0.05) / (darker + 0.05);

		return ratio;
	}

	function verifyContrastRatio(ratio) {
		const WCAG_REQ_RATIO_AA_LG  = 3.0;
		const WCAG_REQ_RATIO_AA_SM  = 4.5;
		const WCAG_REQ_RATIO_AAA_LG = 4.5;
		const WCAG_REQ_RATIO_AAA_SM = 7.0;

		return {
			WCAG_AA:     (ratio >= WCAG_REQ_RATIO_AA_SM),
			WCAG_AA_LG:  (ratio >= WCAG_REQ_RATIO_AA_LG),
			WCAG_AAA:    (ratio >= WCAG_REQ_RATIO_AAA_SM),
			WCAG_AAA_LG: (ratio >= WCAG_REQ_RATIO_AAA_LG),
		};
	}

	function check(colorA, colorB) {
		if (!colorA || !colorB) {
			return false;
		}

		const l1 = hexToLuminance(colorA);
		const l2 = hexToLuminance(colorB);
		const contrastRatio = getContrastRatio(l1, l2);

		return verifyContrastRatio(contrastRatio);
	}

	function updateUI() {
		const colorA = getFullHexValue(foreground.value);
		const colorB = getFullHexValue(background.value);

		if (isValidColorCode(colorA) && isValidColorCode(colorB)) {
			const results = check(colorA, colorB);
			const l1 = hexToLuminance(colorA);
			const l2 = hexToLuminance(colorB);
			const contrastRatio = getContrastRatio(l1, l2);

			document.body.style.color = '#' + colorA;
			document.body.style.backgroundColor = '#' + colorB;

			for (let key in tests) {
				const icon = tests[key].querySelector('.js-pass-fail-path');

				if (results[key]) {
					tests[key].classList.add('is-pass');
					tests[key].classList.remove('is-fail');
					icon.setAttribute('d', thumbsUpPath);
				}
				else {
					tests[key].classList.add('is-fail');
					tests[key].classList.remove('is-pass');
					icon.setAttribute('d', thumbsDownPath);
				}
			}

			contrastText.innerText = Math.floor(contrastRatio * 100) / 100;
		}
	}

	function updateHash() {
		const hashValues = getHashValues();
		const colorA = getFullHexValue(foreground.value);
		const colorB = getFullHexValue(background.value);

		if (
			!isValidColorCode(colorA)
			|| !isValidColorCode(colorB)
			|| (
				colorA === hashValues.foreground
				&& colorB === hashValues.background
			)
		) {
			return;
		}

		const hash = '#f=' + colorA + ',b=' + colorB;

		document.title = 'Contrast Check (#' + colorA + ' - #' + colorB + ')';

		if (history.pushState) {
			history.pushState(null, null, hash);
		}
		else {
			location.hash = hash;
		}
	}

	function getHashValues() {
		// Get initial colours from hash
		const pairs = location.hash.slice(1).split(',');

		let result = {};

		pairs.forEach(function(pair) {
			pair = pair.split('=');

			result[pair[0]] = pair[1];
		});

		return {
			foreground: isValidColorCode(result['f']) ? getFullHexValue(result['f']) : null,
			background: isValidColorCode(result['b']) ? getFullHexValue(result['b']) : null,
		}
	}

	function updateFromHash() {
		const hashValues = getHashValues();

		foreground.value = hashValues.foreground || '333333';
		background.value = hashValues.background || 'FFFFFF';

		updateUI();
	}

	function handleOnBlur() {
		this.value = getFullHexValue(this.value.replace(/([^0-9a-fA-F])/g, '').toUpperCase());

		updateUI();
		updateHash();
	}

	function handleOnPaste(event) {
		let paste = (event.clipboardData || window.clipboardData).getData('text');

		paste = getFullHexValue(paste.replace(/([^0-9a-fA-F])/g, '').toUpperCase());

		this.value = paste;

		updateUI();
	}

	function handleOnCopy(button, text) {
		const iconPath = button.querySelector('.js-copy-color-path');

		navigator.clipboard.writeText('#' + text).then(() => {
			iconPath.setAttribute('d', checkPath);

			setTimeout(() => {
				iconPath.setAttribute('d', clipboardPath);
			}, 2000)
		}, (err) => {
			console.error('Could not copy text: ', err);
		});
	}

	foreground.addEventListener('blur', handleOnBlur.bind(foreground));
	background.addEventListener('blur', handleOnBlur.bind(background));
	foreground.addEventListener('paste', handleOnPaste.bind(foreground));
	background.addEventListener('paste', handleOnPaste.bind(background));

	const copyForegroundButton = document.getElementById('copy-foreground-color');
	const copyBackgroundButton = document.getElementById('copy-background-color');

	if (!navigator.clipboard) {
		copyForegroundButton.parentElement.removeChild(copyForegroundButton);
		copyBackgroundButton.parentElement.removeChild(copyBackgroundButton);
	}
	else {
		copyForegroundButton.addEventListener('click', function(event) {
			handleOnCopy(copyForegroundButton, getFullHexValue(foreground.value));
		});

		copyBackgroundButton.addEventListener('click', function(event) {
			handleOnCopy(copyBackgroundButton, getFullHexValue(background.value));
		});
	}

	document.getElementById('swap-colors').addEventListener('click', function(event) {
		event.preventDefault();

		const colorA = foreground.value;
		const colorB = background.value;

		foreground.value = colorB;
		background.value = colorA;

		updateUI();
		updateHash();
	});

	document.getElementById('form').addEventListener('submit', function(event) {
		event.preventDefault();
	});

	window.addEventListener('hashchange', function() {
		updateFromHash();
	});

	updateFromHash();
	foreground.select();

	function getRecentChecks() {
		const recentsJson = localStorage.getItem('recent-checks');

		return recentsJson ? JSON.parse(recentsJson) : [];
	}

	function createRecentCheck(colorA, colorB) {
		let button = document.createElement('button');
		let strong = document.createElement('strong');
		let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
		let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');

		const results = check(colorA, colorB);

		strong.innerText = 'AA';

		button.classList.add('c-test', 'c-recent-check');
		button.style.color = '#' + colorA;
		button.style.backgroundColor = '#' + colorB;

		svg.setAttribute('viewBox', '0 0 16 16');
		svg.setAttribute('width', '16');
		svg.setAttribute('height', '16');
		svg.setAttribute('fill', '#' + colorA);

		path.setAttribute('d', results.WCAG_AA ? thumbsUpPath16 : thumbsDownPath16);
		path.setAttribute('fill-rule', 'evenodd');

		svg.appendChild(path);
		button.appendChild(strong);
		button.appendChild(svg);

		button.addEventListener('click', () => {
			foreground.value = colorA;
			background.value = colorB;

			updateUI();
			updateHash();
		});

		recentChecksContainer.appendChild(button);
	}

	function addRecentCheck(colorA, colorB) {
		let recentChecks = getRecentChecks();

		recentChecks.push({
			f: colorA,
			b: colorB,
		});

		while(recentChecks.length > 6) {
			recentChecks.shift();
		}

		createRecentCheck(colorA, colorB);
		localStorage.setItem('recent-checks', JSON.stringify(recentChecks));
	}

	document.getElementById('save-check').addEventListener('click', () => {
		const recentChecks = getRecentChecks();
		const colorA = getFullHexValue(foreground.value);
		const colorB = getFullHexValue(background.value);

		const mostRecentCheck = recentChecks.length > 0
			? recentChecks[recentChecks.length - 1] : null;

		if (
			!isValidColorCode(colorA)
			|| !isValidColorCode(colorB)
			|| (
				mostRecentCheck !== null
				&& colorA === mostRecentCheck.f
				&& colorB === mostRecentCheck.b
			)
		) {
			return;
		}

		footer.removeAttribute('style');
		addRecentCheck(colorA, colorB);
	});

	let recentChecks = getRecentChecks();

	const footer = document.getElementById('footer');
	const recentChecksContainer = document.getElementById('recent-checks');

	if (recentChecks.length > 0) {
		footer.removeAttribute('style');

		recentChecks.forEach((colors) => {
			createRecentCheck(colors.f, colors.b);
		});
	}
});
