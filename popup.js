// 참고 : 팝업에서는 현재 아쿠의 url을 알수있는 쉬운 방법을 못찾았음.

document.addEventListener( 'DOMContentLoaded', function() {
    console.log('start popup');
    // To background
	// extension 팝업이 뜨면 호출되는 리스너입니다. 아래는 첫 화면에 채광 개더링 목록을 표시할수 있게 만들어 놓은 예제입니다.
   /* chrome.runtime.sendMessage({get: 'LIST_GATHERING', targetSearch : 1}, function(response) {
        console.log(response);
    }); */
  
});

document.querySelector('#searchGatheringData').addEventListener('click', function () {
  var targetSpot = document.querySelector('#targetSpot').value;
    // To background
    chrome.runtime.sendMessage({get: 'GET_GATHERING', targetSpot : targetSpot}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchGatheringOutput').addEventListener('click', function () {
  var targetOutput = document.querySelector('#targetSpot').value;
    // To background
    chrome.runtime.sendMessage({get: 'GET_GATHERING_OUTPUT', targetOutput : targetOutput}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#deleteGatheringData').addEventListener('click', function () {
  var targetSpot = document.querySelector('#targetSpot').value;
    // To background
    chrome.runtime.sendMessage({get: 'DELETE_GATHERING', targetSpot : targetSpot}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#deleteGatheringDataAll').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'DELETE_GATHERING_ALL'}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#listGatheringDataMineral').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'LIST_GATHERING', targetSearch : 1}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#listGatheringDataGem').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'LIST_GATHERING', targetSearch : 2}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#listGatheringDataGather').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'LIST_GATHERING', targetSearch : 3}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#listGatheringDataDig').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'LIST_GATHERING', targetSearch : 4}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#searchGoods').addEventListener('click', function () {
  var targetGoods = document.querySelector('#targetSpot').value;
    // To background
    chrome.runtime.sendMessage({get: 'GET_GOODS', targetGoods : targetGoods}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchMyGoods').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'GET_MY_GOODS'}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#searchDarkMarketGoods').addEventListener('click', function () {
    // To background
	var targetGoods = document.querySelector('#targetSpot').value;
    chrome.runtime.sendMessage({get: 'GET_DARK_MARKET_GOODS', targetGoods : targetGoods}, function(response) {
        console.log(response);
    });
 
});

document.querySelector('#searchReceipt1').addEventListener('click', function () {
    var targetReceipts = -1;
    // To background
    chrome.runtime.sendMessage({get: 'GET_RECECIPT', targetReceipts : targetReceipts}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchReceipt2').addEventListener('click', function () {
    var targetReceipts = -2;
    // To background
    chrome.runtime.sendMessage({get: 'GET_RECECIPT', targetReceipts : targetReceipts}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchReceipt3').addEventListener('click', function () {
    var targetReceipts = -3;
    // To background
    chrome.runtime.sendMessage({get: 'GET_RECECIPT', targetReceipts : targetReceipts}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchReceipt4').addEventListener('click', function () {
    var targetReceipts = -4;
    // To background
    chrome.runtime.sendMessage({get: 'GET_RECECIPT', targetReceipts : targetReceipts}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchReceipt5').addEventListener('click', function () {
    var targetReceipts = -5;
    // To background
    chrome.runtime.sendMessage({get: 'GET_RECECIPT', targetReceipts : targetReceipts}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchReceipt6').addEventListener('click', function () {
    var targetReceipts = -6;
    // To background
    chrome.runtime.sendMessage({get: 'GET_RECECIPT', targetReceipts : targetReceipts}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#calculateMonsterJow').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'CALCULATE_DUNGEON_BATTLE'}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#searchMonsterJowList').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'LIST_DUNGEON_BATTLE'}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#deleteMonsterJowList').addEventListener('click', function () {
    // To background
    chrome.runtime.sendMessage({get: 'DELETE_DUNGEON_BATTLE_ALL'}, function(response) {
        console.log(response);
		document.querySelector('#targetSpot').value = '';
    });
 
});

document.querySelector('#clearList').addEventListener('click', function () {
    document.querySelector('#result').innerHTML = ''; 
});