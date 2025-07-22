// Typing animation for "My Projects" title in .work section
// Only types once, after 2s delay, when scrolled into view, no cursor effect
(function($) {
  var hasTypedProjects = false;
  var hasTypedResume = false;
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function typeText($el, text, delay, cb) {
    $el.text("");
    var i = 0;
    function typeChar() {
      if (i < text.length) {
        $el.text($el.text() + text.charAt(i));
        i++;
        setTimeout(typeChar, delay);
      } else if (cb) {
        cb();
      }
    }
    typeChar();
  }
  function triggerTyping() {
    // My Projects
    if (!hasTypedProjects) {
      var $title = $('.work h2').first();
      if ($title.length && isInViewport($title[0])) {
        hasTypedProjects = true;
        var original = $title.text();
        setTimeout(function() {
          typeText($title, original, 70);
        }, 2000);
      }
    }
    // My Resume
    if (!hasTypedResume) {
      var $resume = $('#my-resume-link');
      var $resumeText = $resume.find('.resume-typing-text');
      if ($resume.length && $resumeText.length && isInViewport($resume[0])) {
        hasTypedResume = true;
        var originalResume = $resumeText.text().trim();
        setTimeout(function() {
          typeText($resumeText, originalResume, 70);
        }, 2000);
      }
    }
  }
  $(window).on('scroll', triggerTyping);
  $(document).ready(triggerTyping);
})(jQuery);
