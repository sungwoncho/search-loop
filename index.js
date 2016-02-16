chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  if (request.action === 'searchAndHighlight') {
    $(document.body).removeHighlight();
    $(document.body).highlight(request.searchString);
    $('.highlight').css('background-color', request.color);

    sendResponse({done: true});
  }
});
