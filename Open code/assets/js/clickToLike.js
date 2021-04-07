function getClickToLike() {
  const assessments = [...document.querySelectorAll('ytd-toggle-button-renderer')]
  if (!assessments[0].classList.contains('style-default-active') && !assessments[1].classList.contains('style-default-active')) {
    assessments[0].click()
  }
}

setInterval(getClickToLike, 3000)
