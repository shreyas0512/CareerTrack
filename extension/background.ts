export{}

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      title: 'Add your job',
      contexts: ["all"],
      id: "myContextMenuId"
    })
  })
  type WikiTldrThumbnail = {
    source: string
    width: number
    height: number
  }
  
  export type WikiTldr = {
    query: string
    type: string
    title: string
    displaytitle: string
    thumbnail: WikiTldrThumbnail
    originalimage: WikiTldrThumbnail
    lang: string
    description: string
    extract: string
    extract_html: string
  }
  
  export type WikiMessage = {
    type: string
    text: string
  }
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    const dict = info.selectionText;
  
    chrome.storage.sync.set({ dict1: dict }, function() {
      chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: 400,
        height: 600
      }, function(popupWindow) {
        chrome.tabs.query({ active: true, windowId: popupWindow.id }, function(tabs) {
          const tabId = tabs[0].id;
          chrome.tabs.sendMessage(tabId, { type: "lookup" });
         
        });
      });
    });
  });