const showBtn = document.getElementById('#showBtn');
const hiddenText = document.getElementById('#hiddenText');

showBtn.addEventListener('click', function() {
	hiddenText.classList.toggle('hide');
});
