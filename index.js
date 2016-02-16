var intervalIds = [];

function flush() {
  intervalIds.forEach(function (iid) {
    window.clearInterval(iid);
  });
}

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  if (request.action === 'searchAndHighlight') {
    var searchString = request.searchString;
    var color = request.color;

    var run = function (cb) {
      $(document.body).removeHighlight();
      $(document.body).highlight(searchString);
      $('.highlight').css('background-color', color);
    };

    if (intervalIds.length) {
      flush();
    }

    var intervalId = window.setInterval(function () {
      run();
    }, 1000);

    intervalIds.push(intervalId);

    sendResponse({done: true});
  }
});
