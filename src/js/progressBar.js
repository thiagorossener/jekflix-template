(function () {
    'use strict';

    var post = document.querySelector('.post-content');
    var progressBar = document.querySelector('.progress-bar');

    if (post && progressBar) {
        var lastScrollTop = 0;
        var maxScrollTop = post.scrollHeight;
        
        var completed = progressBar.querySelector('.completed');
        var remaining = progressBar.querySelector('.remaining');
        var timeCompleted = progressBar.querySelector('.time-completed');
        var timeRemaining = progressBar.querySelector('.time-remaining');

        document.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                progressBar.style.bottom = '0%';
            } else {
                progressBar.style.bottom = '-100%';
            }

            if (scrollTop <= maxScrollTop) {
                var percentage = scrollTop/maxScrollTop;

                var completedVal = (percentage * 100).toFixed(2);
                var remainingVal = 100 - parseFloat(completedVal);
                completed.style.width = completedVal.toString() + '%';
                remaining.style.width = remainingVal.toString() + '%';

                var totalSeconds = parseInt(progressBar.getAttribute('data-minutes')) * 60;

                var completedTime = parseInt(percentage * totalSeconds);
                var completedMin = parseInt(completedTime/60);
                var completedSec = parseInt((completedTime/60 - completedMin) * 60);

                var remainingTime = totalSeconds - completedTime;
                var remainingMin = parseInt(remainingTime/60);
                var remainingSec = parseInt((remainingTime/60 - remainingMin) * 60);

                completedMin = (completedMin < 10) ? '0' + completedMin : completedMin;
                completedSec = (completedSec < 10) ? '0' + completedSec : completedSec;
                remainingMin = (remainingMin < 10) ? '0' + remainingMin : remainingMin;
                remainingSec = (remainingSec < 10) ? '0' + remainingSec : remainingSec;

                timeCompleted.innerText = completedMin + ':' + completedSec;
                timeRemaining.innerText = remainingMin + ':' + remainingSec;
            } else {
                completed.style.width = '100%';
                remaining.style.width = '0%';

                var minutes = parseInt(progressBar.getAttribute('data-minutes'));
                minutes = (minutes < 10) ? '0' + minutes : minutes;

                timeCompleted.innerText = '00:00';
                timeRemaining.innerText = minutes + ':00';
            }

            lastScrollTop = scrollTop;
        });
    }
})();
