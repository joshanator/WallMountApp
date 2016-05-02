chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: window.screen.availWidth, height: window.screen.availHeight }
  });
});