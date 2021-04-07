function getClickToLike() {
  const assessments = [...document.querySelectorAll('ytd-toggle-button-renderer')]
<<<<<<< HEAD
  if (!assessments[0].classList.contains('style-default-active') && !assessments[1].classList.contains('.style-default-active')) {
=======
  if (!assessments[0].classList.contains('style-default-active') && !assessments[1].classList.contains('style-default-active')) {
>>>>>>> 8c5ec1483919c9b74f06004e480df66d9c9477ae
    assessments[0].click()
  }
}

setInterval(getClickToLike, 3000)
