document.addEventListener('DOMContentLoaded', function () {
  $('#color-picker').spectrum({
    color: '#f00'
  });

  $('.search-btn').on('click', function () {
    var color = $("#color-picker").spectrum('get');
    var searchString = $(".search-str").val();

    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.sendRequest(tab.id, {
        action: 'searchAndHighlight',
        searchString: searchString,
        color: color.toHexString()
      });
    });
  });
});
