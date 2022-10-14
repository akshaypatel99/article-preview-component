const shareBtn = document.querySelector('.share');
let shareSVG = document.getElementById('share-svg');
let svgPath = document.getElementById('share-svgPath');
let linksEl = document.querySelector('.share-links');

shareBtn.onclick = () => {
	linksEl.style.display = linksEl.style.display === 'flex' ? 'none' : 'flex';
	svgPath.style.fill =
		svgPath.style.fill === 'rgb(236, 242, 248)'
			? 'rgb(72, 85, 106)'
			: 'rgb(236, 242, 248)';
	shareBtn.style.backgroundColor =
		shareBtn.style.backgroundColor === 'rgb(108, 127, 151)'
			? 'rgb(236, 242, 248)'
			: 'rgb(108, 127, 151)';
};
