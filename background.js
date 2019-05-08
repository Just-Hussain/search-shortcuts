chrome.omnibox.onInputEntered.addListener(
    function(text) {
        const key = text.substring(0, 2);

        switch(key)
        {
            case "y ": open('https://www.youtube.com/results?search_query=', text); break;
            case "t ": open('https://twitter.com/search?q=', text); break;
            case "w ": open('https://en.wikipedia.org/wiki/', text); break;
            case "s ": open('https://stackoverflow.com/search?q=', text); break;
        }
    });

function open(url, text) {
    var newURL = url + text.substring(2);
    chrome.tabs.update({ url: newURL });
}