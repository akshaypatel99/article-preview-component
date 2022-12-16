const shareBtn = document.querySelector('.share-button');
let shareSVG = document.getElementById('share-svg');
let svgPath = document.getElementById('share-svgPath');
let linksContainer = document.querySelector('.share-links');

shareBtn.addEventListener('click', () => {
	const visibility = linksContainer.getAttribute('data-visible');

	if (visibility === 'false') {
		linksContainer.setAttribute('data-visible', true);
		shareBtn.setAttribute('aria-expanded', true);
		svgPath.style.fill = 'rgb(236, 242, 248)';
		shareBtn.style.backgroundColor = 'rgb(108, 127, 151)';
	} else {
		linksContainer.setAttribute('data-visible', false);
		shareBtn.setAttribute('aria-expanded', false);
		svgPath.style.fill = 'rgb(72, 85, 106)';
		shareBtn.style.backgroundColor = 'rgb(236, 242, 248)';
	}
});
