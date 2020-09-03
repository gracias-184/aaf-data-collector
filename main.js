// 여기서 pathname에 포함된 세부 경로를 파싱하여 트래킹할 정보를 구분합니다.
if( location.host == 'aquaf.ssz.kr:8888' || location.host == 'aquaf.ssz.kr') {
	if(location.pathname.includes('/dungeon/pick')) {
		chrome.runtime.sendMessage({get: 'CHECK_GATHERING'}, function(response) {
			console.log('main response = ' + response);
			//alert('main response = ' + response.CHECK_GATHERING);
		});
	}
	else if (location.pathname.includes('/dungeon/dunbattle') || location.pathname.includes('battle/monbattle')) {
		chrome.runtime.sendMessage({get: 'CHECK_DUNGEON_BATTLE'}, function(response) {
			console.log('main response = ' + response);
			//alert('main response = ' + response.CHECK_MONSTER_FIGHT);
		});
	}
}
 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(sender.tab ?
                  "main.js from a content script:" + sender.tab.url :
                  "from the extension");
    if( request ) {
        switch( request.contents ) {
            case 'CHECK_GATHERING':
            break;
			case 'CHECK_MONSTER_FIGHT':
            break;
        }
    }
});