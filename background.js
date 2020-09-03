var agent = navigator.userAgent.toLowerCase();
if (agent.indexOf("chrome") != -1) {
	chrome.runtime.onInstalled.addListener(function() {
		chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	      chrome.declarativeContent.onPageChanged.addRules([{
	        conditions: [new chrome.declarativeContent.PageStateMatcher({
	          pageUrl: {hostEquals: 'aquaf.ssz.kr', schemes: ['http']},
	        })
	        ],
	            actions: [new chrome.declarativeContent.ShowPageAction()]
	      }]);
	    });
	});
}
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	//console.log( request, sender, sendResponse );
	//console.log(sender.tab ?
    //              "background from a content script:" + sender.tab.url :
    //              "background from the extension");
    switch( request.get ) {
		case 'CHECK_GATHERING':
			//chrome.pageAction.show(sender.tab.id);
			if(sender.tab.url.includes('dungeon/pick')) {
				AddGatheringDataVer2(sender.tab.url, sendResponse);
			}
			break;
		case 'LIST_GATHERING':
			var targetSearch = request.targetSearch;
			ListGatheringDataVer2(sendResponse, targetSearch);
			break;
		case 'DELETE_GATHERING':
		    var targetSpot = request.targetSpot;
			DeleteGatheringSpotOutputVer2(sendResponse, targetSpot);
			break;
		case 'DELETE_GATHERING_ALL':
			DeleteGatheringDataVer2(sendResponse);
			break;
		case 'GET_GATHERING':
		    var targetSpot = request.targetSpot;
			GetGatheringDataVer2(sendResponse, targetSpot);
			break;
		case 'GET_GATHERING_OUTPUT':
			var targetOutput = request.targetOutput;
			GetGatheringOutputVer2(sendResponse, targetOutput);
			break;
		case 'GET_GOODS':
		    var targetGoods = request.targetGoods;
			GetGoodsData(sendResponse, targetGoods);
			break;
		case 'GET_MY_GOODS':
			GetMyGoodsData(sendResponse);
			break;
		case 'GET_DARK_MARKET_GOODS':
			var targetGoods = request.targetGoods;
			GetDarkMarketGoodsData(sendResponse, targetGoods);
			break;
		case 'GET_RECECIPT':
		    var targetReceipts = request.targetReceipts;			
			GetReceiptByReceiptId(sendResponse, targetReceipts == undefined ? -1 : targetReceipts);
			break;
		case 'CHECK_DUNGEON_BATTLE':
			//chrome.pageAction.show(sender.tab.id);
			if(sender.tab.url.includes('dungeon/dunbattle') || sender.tab.url.includes('battle/monbattle')) {
				AddDungeonBattleData(sender.tab.url, sendResponse);
			}
			break;
		case 'CALCULATE_DUNGEON_BATTLE':
			CalculateDungeonBattleData(sendResponse);
			break;
		case 'LIST_DUNGEON_BATTLE':
			ListDungeonBattleData(sendResponse);
			break;
		case 'DELETE_DUNGEON_BATTLE_ALL':
			DeleteDungeonBattleDataAll(sendResponse);
			break;
		default:
		break;		
	}
	// return true 해줘야 response를 받는 쪽에서 async라는걸 알 수 있음
	return true;
});

function AddDungeonBattleData(tablink, sendResponse) {
    var resultText = '';  // 몬스터 정보가 담긴 1줄
//	console.log(tablink);
	chrome.tabs.executeScript({
		code: 'document.querySelector("body").innerText'
    }, function (result) {
		// 던전 전투 결과 화면에서 body text를 가져옴. 단 전투 세부결과는 가지고 오지 못해서, 몬스터 속성까지는 가지고 오지 못했음.
		// 지금 상태에서 굳이 추가한다면 수집품, 보석, 루엘정도가 추가가능 할듯함
		var bodyText = result[0];
		//console.log(bodyText);
		if (bodyText.includes(' 와(/과) 조우하였다!!') || bodyText.includes(' 에게 도전합니다!!')) {
			// body text parsing
			if (bodyText.includes(' 와(/과) 조우하였다!!')) var monsterJowText = bodyText.split(' 와(/과) 조우하였다!!');
			else var monsterJowText = bodyText.split(' 에게 도전합니다!!');
			var resultText = monsterJowText[0].split('(은)/는 ');
			var monsterName = resultText[1];
			var battleResult = bodyText.includes('전투에서 승리했습니다!!') ? 1 : 0;
			
			// TimeZone 보정 - client side라 timezone 보정이 필요함 (+09:00)
			var nowIsoString = new Date();			
			//console.log("nowIsoString : ", nowIsoString);
			var timeKeyMonthStr = '' + (nowIsoString.getMonth()+1);
			var timeKeyDateStr = '' + nowIsoString.getDate();
			var timeKeyHourStr = '' + nowIsoString.getHours();
			var timeKeyMinStr = '' + nowIsoString.getMinutes();
			var timeKeySecStr = '' + nowIsoString.getSeconds();
			var timeKeyMSecStr = '' + nowIsoString.getMilliseconds();
			
			if (timeKeyMonthStr.length < 2) timeKeyMonthStr = '0' + timeKeyMonthStr;
			//console.log("timeKeyMonthStr : ", timeKeyMonthStr.length);
			if (timeKeyDateStr.length < 2) timeKeyDateStr = '0' + timeKeyDateStr;
			//console.log("timeKeyDateStr : ", timeKeyDateStr.length);
			if (timeKeyHourStr.length < 2) timeKeyHourStr = '0' + timeKeyHourStr;
			if (timeKeyMinStr.length < 2) timeKeyMinStr = '0' + timeKeyMinStr;
			if (timeKeySecStr.length < 2) timeKeySecStr = '0' + timeKeySecStr;
			// 두번수행
			if (timeKeyMSecStr.length < 3) timeKeyMSecStr = '0' + timeKeyMSecStr;
			if (timeKeyMSecStr.length < 3) timeKeyMSecStr = '0' + timeKeyMSecStr;
			
			var timeKeyStr = nowIsoString.getFullYear() + '-' + timeKeyMonthStr + '-' + timeKeyDateStr + ' ' + timeKeyHourStr + ':' + timeKeyMinStr + ':' + timeKeySecStr + '.' + timeKeyMSecStr;
			
			var expRegexResult = bodyText.match( /당신은 (\d+) 의 경험치를 얻었습니다./ );
			var moneyRegexResult = bodyText.match(/당신은 (\d+) 원을 얻었습니다./);
			var exp = 0, money = 0;
			//console.log('exp : ', expRegexResult, ' money : ', moneyRegexResult);
			if (battleResult == 1) {
				if (expRegexResult != null) {
					exp = parseInt(expRegexResult[1]);
				}
				if (moneyRegexResult != null) {
					money = parseInt(moneyRegexResult[1]);
				}
			}
			//console.log('resultText is ', resultText);
			
			// 몬스터 정보의 최상위 카는 monster이며 
			// 최상위 key : DataType : 'monster' , value (MAP(몬스터명))
			// key(몬스터명) : value(MAP(전투정보)) 형태로 저장되며 모두 map to json 형태로 변환해서 저장한다.
			var addKey = JSON.stringify({DataType : 'monster'});
			// 추가할 데이터 포맷			
			var addValue = JSON.stringify({exp: exp, money: money, win : battleResult});
			// 중복 체크 후 존재여부에 따라 추가 형태가 달라짐
			chrome.storage.local.get([addKey], function(results) {
				var allKeys = Object.keys(results)
				var subValueMap = new Map();
				subValueMap.set([timeKeyStr], addValue);
				if (allKeys.length <= 0) {
					// 첫 신규 등록 (localstorage에 아무것도 없을 경우)
					var valueMap = new Map();
					valueMap.set(monsterName, JSON.stringify(Array.from(subValueMap.entries())));
					var addValueMap = JSON.stringify(Array.from(valueMap.entries()));
					//console.log('[Monster] addKey json is ' + addKey + ' ' + addValueMap);
					chrome.storage.local.set({[addKey]:addValueMap}, function() {
						//console.log('First Added Value is set to ',addValueMap);
						if(!chrome.runtime.lastError){
							//console.log('Monster Init Data Saved');
						}
					}); 
				}
				else {
					var existMonsterMap = new Map(JSON.parse(results[addKey]));
					
					if(existMonsterMap.has(monsterName) == false) {
						// 현재 몬스터 정보가 없는 경우 신규 추가
						existMonsterMap.set(monsterName, JSON.stringify(Array.from(subValueMap.entries())));
						var addValueMap = JSON.stringify(Array.from(existMonsterMap.entries()));
						//console.log('[Monster] addKey json is ' + addKey + ' ' + addValueMap);
						chrome.storage.local.set({[addKey]:addValueMap}, function() {
							//console.log('Not Exist Value is set to ',addValueMap);
							if(!chrome.runtime.lastError){
								//console.log('Monster Data Saved');
							}
						});
					}
					else {
						// 몬스터 정보가 이미 존재하는 경우 전투 결과만 추가
						var existSubValueMap = new Map(JSON.parse(existMonsterMap.get(monsterName)));
						existSubValueMap.set([timeKeyStr], addValue);
						var addSubValueMap = JSON.stringify(Array.from(existSubValueMap.entries()));
						existMonsterMap.set(monsterName, addSubValueMap);
						var addValueMap = JSON.stringify(Array.from(existMonsterMap.entries()));
						//console.log('[Monster] addKey json is ' + addKey + ' ' + addValueMap);
						chrome.storage.local.set({[addKey]:addValueMap}, function() {
							//console.log('Exist Value is set to ',addValueMap);
							if(!chrome.runtime.lastError){
								//console.log('Monster Existed Data Saved');
							}
						});
					}
				}
			});
		}
		else {
			
		}
		sendResponse( { 'CHECK_DUNGEON_BATTLE' : 'ok' } );
    });
}

function ListDungeonBattleData(sendResponse) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var responseHtml = '';
		var searchKey = JSON.stringify({DataType : 'monster'});
		chrome.storage.local.get(searchKey, function(results) {
			responseHtml += '<b>몬스터 조우 전체 목록</b><br />';
			var allKeys = Object.keys(results)
			if (allKeys.length > 0) {
				var existValueMap = new Map(JSON.parse(results[searchKey]));
				//console.log( 'Monster Map : ', existValueMap);
				// value도 map으로 구성되어 있음.
				existValueMap.forEach((value, key, mapObject) => {
					var subValueMap = new Map(JSON.parse(value));
					responseHtml += '<b>' + key + '</b><br />';
					subValueMap.forEach((datavalue, datakey, mapObject) => {
						// {exp: exp, money: money, win : battleResult}
						//console.log( datakey, ',', datavalue);
						var jData = JSON.parse(datavalue);
						responseHtml += ' (' + datakey + ') ,' + jData["exp"] + ' 경험치 , ' + jData["money"] + ' 원, ' + (jData["win"] == 1 ? '<font color=\'blue\'> (승리)</font>':'<font color=\'red\'> (패배)</font>');
						responseHtml += '<br />';
					});
				});	
			}
			//console.log( 'responseHtml : ', responseHtml);
			var views = chrome.extension.getViews({
				type: "popup"
			});
			for (var i = 0; i < views.length; i++) {
				views[i].document.getElementById('result').innerHTML = responseHtml;
			}
			
		    sendResponse( { 'LIST_DUNGEON_BATTLE' : 'ok' } );
		});
	 });
}

function CalculateDungeonBattleData(sendResponse) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var responseHtml = '';
		var searchKey = JSON.stringify({DataType : 'monster'});
		var totalBattleCount = 0;
		var resultCalculateMap = new Map();
		
		chrome.storage.local.get(searchKey, function(results) {
			responseHtml += '<b>몬스터 조우율(현재까지 수집된 데이터 기준)</b><br />';
			var allKeys = Object.keys(results)
			if (allKeys.length > 0) {
				var existValueMap = new Map(JSON.parse(results[searchKey]));
				//console.log( 'Monster Map : ', existValueMap);
				// value도 map으로 구성되어 있음.
				existValueMap.forEach((value, key, mapObject) => {
					var subValueMap = new Map(JSON.parse(value));
					var sumOfWin = 0, sumOfLose = 0, sumOfExp = 0, sumOfMoney = 0;
					subValueMap.forEach((datavalue, datakey, mapObject) => {
						// {exp: exp, money: money, win : battleResult}
						//console.log( datakey, ',', datavalue);
						var jData = JSON.parse(datavalue);
						sumOfExp += parseInt(jData["exp"]);
						sumOfMoney += parseInt(jData["money"]);
						(jData["win"] == 1 ? sumOfWin++ : sumOfLose++);
					});
					var subValueMapSize = subValueMap.size;
					var avgexp = 0, avgmoney = 0;
					if(subValueMapSize > 0) {
						avgexp = Math.round(sumOfExp/subValueMapSize);
						avgmoney = Math.round(sumOfMoney/subValueMapSize);
					}
					
					var subResultMapValue = {'cnt': subValueMapSize, 'avgexp' : avgexp, 'avgmoney' : avgmoney , 'totalwin' : sumOfWin, 'totallose' : sumOfLose};
					resultCalculateMap.set(key, JSON.stringify(subResultMapValue));
					totalBattleCount += subValueMapSize;
				});
				
			}
			
			// resultCalculateMap에 대해서 확률 계산
			responseHtml += '<b><font color=\'blue\'>총 ' + totalBattleCount + '전</font></b><br />';
			resultCalculateMap.forEach((calculateValue, key, mapObject) => {
				var jData = JSON.parse(calculateValue);
				// 조우율은 소수 셋째자리 나타내주고, 퍼센트로 환산해주기 위해 100을 곱합니다.
				responseHtml += '<b>[' + key + '] <font color=\'red\'>(조우율 ' + (totalBattleCount > 0 ? (jData["cnt"]/totalBattleCount * 100).toFixed(3) : 0) + '%)</font></b>';
				responseHtml += ' ' + (jData["totalwin"]+jData["totallose"]) + '전 ' + jData["totalwin"] + '승 ' + jData["totallose"] + '패, 평균 경험치 : ' + jData["avgexp"] + ', 평균 소지금 ' + jData["avgmoney"];
				responseHtml += '<br />';
			});
			
			//console.log( 'responseHtml : ', responseHtml);
			var views = chrome.extension.getViews({
				type: "popup"
			});
			for (var i = 0; i < views.length; i++) {
				views[i].document.getElementById('result').innerHTML = responseHtml;
			}
			
		    sendResponse( { 'CALCULATE_DUNGEON_BATTLE' : 'ok' } );
		});
	 });
}

function DeleteDungeonBattleDataAll(sendResponse) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var deleteTargetKey = JSON.stringify({DataType : 'monster'});
		chrome.storage.local.remove(deleteTargetKey, function(results) {	
			sendResponse( { 'DELETE_DUNGEON_BATTLE_ALL' : 'ok' } );
		});
	 });
}

function AddGatheringDataVer2(tablink, sendResponse) {
	var urlNumber = '';  // 지역번호
    var resultText = '';  // 개더링 결과물
    var gatheringType = ''; // 개더링 타입
	console.log(tablink);
	// 채광 : http://aquaf.ssz.kr:8888/dungeon/pickmineral.php?plnum=3449
	// 채굴 : http://aquaf.ssz.kr:8888/dungeon/pickgem.php?plnum=3503
	// 채집 : http://aquaf.ssz.kr:8888/dungeon/pickgather.php?plnum=6107
	// 발굴 : http://aquaf.ssz.kr:8888/dungeon/pickdig.php?plnum=3535
	var urlText = tablink.split('?plnum=')
	urlNumber = urlText[1].replace(/\r\n/g,'');
	
	if (tablink.includes('pickmineral')) {gatheringType = 1;} // 채광
	else if (tablink.includes('pickgem')) {gatheringType = 2;} // 채굴
	else if (tablink.includes('pickgather')) {gatheringType = 3;} // 채집
	else if (tablink.includes('pickdig')) {gatheringType = 4;} // 발굴
	
	chrome.tabs.executeScript({
		code: 'document.querySelector("body").innerText'
    }, function (result) {
		// 개더링 결과 화면에서 body text를 모두 가져옴 (body text를 기준으로 파싱함)
		var bodyText = result[0];
		
		if (bodyText.includes('그러나 이미 누군가 이곳에서')) {
			// 이미 개더링 한 곳이므로 해당 지점의 그동안의 이력만 보여준다.
		}
		else if (bodyText.includes('하지만 당신은 ')) {
			// 도구가 없을 경우
		}
		else if (bodyText.includes('하지만 당신이 가진 배낭이 가득 차서 ')) {
			// 배낭이 가득찬 경우
		}
		else if (bodyText.includes(' (으)로부터 !!')){
			// body text parsing
			//var bodyNum = bodyText.split('(/');
			var bodyNum = bodyText.split(' (으)로부터 !!');
			var tempText = bodyNum[1].split(' 을(/를)')
			//resultText = tempText[tempText.length - 1].split(' 을')
			//var resultMaterial = resultText[0].replace(/\n/g,'')  // 줄바꿈 제거
			var resultMaterial = tempText[0];
			
			// 개더링 정보의 최상위 카는 gathering이며 
			// 최상위 key : DataType : 'gathering' , value (MAP(개더링 스팟 번호))
			// key(개더링 스팟 번호) : value(MAP(개더링 정보)) 형태로 저장되며 모두 map to json 형태로 변환해서 저장한다.
			var addKey = JSON.stringify({DataType : 'gathering'});
			var addGatheringKey = urlNumber;
			// 추가할 데이터 포맷
			var addGatheringValue = JSON.stringify({gatheringType: gatheringType, count: 1});
			
			//var searchKey = JSON.stringify({spotNumber : urlNumber, output : resultString, gatheringType : gatheringType});
			//console.log('searchKey json is ' + addKey);
			
			// 중복 체크 후 존재여부에 따라 추가 형태가 달라짐
			chrome.storage.local.get([addKey], function(results) {
				var allKeys = Object.keys(results)
				// 하위 데이터
				var subValueMap = new Map();
				subValueMap.set(resultMaterial, addGatheringValue);				
				
				if (allKeys.length <= 0) {
					// 첫 신규 등록 (localstorage에 아무것도 없을 경우)
					var valueMap = new Map();
					valueMap.set(addGatheringKey, JSON.stringify(Array.from(subValueMap.entries())));
					var addValueMap = JSON.stringify(Array.from(valueMap.entries()));
					//console.log('[Gathering] addKey json is ' + addKey + ' ' + addValueMap);
					chrome.storage.local.set({[addKey]:addValueMap}, function() {
						//console.log('First Added Value is set to ',addValueMap);
						if(!chrome.runtime.lastError){
							//console.log('Gathering Init Data Saved');
						}
					}); 
				}
				else {
					//console.log('add ', results);
					// Gathering 키 내의 모든 spot 번호를 가져온다
					var existGatheringMap = new Map(JSON.parse(results[addKey]));					
					
					if(existGatheringMap.has(addGatheringKey) == false) {
						// Spot 번호 리스트에 해당 스팟번호가 없다면 신규 추가
						existGatheringMap.set(addGatheringKey, JSON.stringify(Array.from(subValueMap.entries())));
						var addValueMap = JSON.stringify(Array.from(existGatheringMap.entries()));
						//console.log('[Gathering] addKey json is ' + addKey + ' ' + addValueMap);
						chrome.storage.local.set({[addKey]:addValueMap}, function() {
							//console.log('Not Exist Value is set to ',addValueMap);
							if(!chrome.runtime.lastError){
								//console.log('Gathering Data Saved');
							}
						});
					}
					else {
						// 스팟 번호가 이미 존재하는 경우, 결과물 중복 체크
						// existSubValueMap = 동일 스팟번호에 결과물 리스트
						var existSubValueMap = new Map(JSON.parse(existGatheringMap.get(addGatheringKey)));
						
						if (existSubValueMap.has(resultMaterial) == false) {
							// 결과물 없으면 신규
							existSubValueMap.set(resultMaterial, addGatheringValue);
						}
						else {
							// 있으면 업데이트
							var existSubValue = JSON.parse(existSubValueMap.get(resultMaterial));
							existSubValue.count += 1;
							existSubValueMap.delete(resultMaterial);
							existSubValueMap.set(resultMaterial, JSON.stringify(existSubValue));							
						}
						var addSubValueMap = JSON.stringify(Array.from(existSubValueMap.entries()));
						//existGatheringMap.delete([addGatheringKey]);
						existGatheringMap.set(addGatheringKey, addSubValueMap);
						var addValueMap = JSON.stringify(Array.from(existGatheringMap.entries()));
						//console.log('[Gathering] addKey json is ' + addKey + ' ' + addValueMap);
						chrome.storage.local.set({[addKey]:addValueMap}, function() {
							//console.log('Exist Value is set to ',addValueMap);
							if(!chrome.runtime.lastError){
								//console.log('Gathering Existed Data Saved');
							}
						});
					}
				}
			});	
		}
		else {}
		sendResponse( { 'CHECK_GATHERING' : 'gather' } );
 });
}

function ListGatheringDataVer2(sendResponse, targetSearch) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var responseHtml = '';
		var searchKey = JSON.stringify({DataType : 'gathering'});
		chrome.storage.local.get(searchKey, function(results) {
			responseHtml += '<b>개더링 전체 목록</b>';
			if (targetSearch == 1) responseHtml += ' - 채광';
			else if (targetSearch == 2) responseHtml += ' - 채굴';
			else if (targetSearch == 3) responseHtml += ' - 채집';
			else if (targetSearch == 4) responseHtml += ' - 발굴';
			responseHtml += '<br />';
			
			var allKeys = Object.keys(results)
			if (allKeys.length > 0) {
				var existValueMap = new Map(JSON.parse(results[searchKey]));
				//console.log( 'Gathering Map : ', existValueMap);
				// value도 map으로 구성되어 있음.
				
				let keys = Array.from( existValueMap.keys() ).sort();
				keys.forEach(function (key, index) {  // array로 변경하여 spot number로 정렬해서 출력함
				//existValueMap.forEach((value, key, mapObject) => { // 정렬이 안되어 출력됨 (아래 주석 친부분)
					//console.log( 'Gathering Map : ', existValueMap);
					//console.log( 'key : ', key);
					//console.log( 'existValueMap(sort) : ', existValueMap.get(key));
					//console.log( 'existValueMap(no sort) : ', value);
					var subValueMap = new Map(JSON.parse(existValueMap.get(key)));
					//var subValueMap = new Map(JSON.parse(value));  // no sort
					var tempResponseHtml = '';
					var dataExist = false;
					if(subValueMap.size > 0 ) tempResponseHtml += GetGatheringArea(key) + '<b>[' + key + ']</b><br />';
					
					subValueMap.forEach((datavalue, datakey, mapObject) => {
						// {gatheringType, count}
						//console.log( datakey, ',', datavalue);
						var jData = JSON.parse(datavalue);
						if (targetSearch == jData["gatheringType"]) {
							dataExist = true;
							if (jData["gatheringType"] == 1) {  // 채광
								tempResponseHtml += '<b><font color=\'red\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
							}
							else if (jData["gatheringType"] == 2) {  // 채굴
								tempResponseHtml += '<b><font color=\'blue\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
							}
							else if (jData["gatheringType"] == 3) {   // 채집
								tempResponseHtml += '<b><font color=\'green\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
							}
							else if (jData["gatheringType"] == 4) {   // 발굴
								tempResponseHtml += '<b><font color=\'brown\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
							}
						}						
						
						tempResponseHtml += '<br />';						
					});
					if (dataExist) responseHtml += tempResponseHtml;
				});	
			}

			//console.log( 'responseHtml : ', responseHtml);
			
			var views = chrome.extension.getViews({
				type: "popup"
			});
			for (var i = 0; i < views.length; i++) {
				views[i].document.getElementById('result').innerHTML = responseHtml;
			}
			
		    sendResponse( { 'LIST_GATHERING' : 'ok' } );
		});
	 });
	
}

function DeleteGatheringDataVer2(sendResponse) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var searchKey = JSON.stringify({DataType : 'gathering'});
		chrome.storage.local.remove(searchKey, function(results) {
			sendResponse( { 'DELETE_GATHERING_ALL' : 'ok' } );
		});
	 });
}

function DeleteGatheringSpotOutputVer2(sendResponse, targetSpot) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var searchKey = JSON.stringify({DataType : 'gathering'});
		chrome.storage.local.get(searchKey, function(results) {			
			var allKeys = Object.keys(results)
			if (allKeys.length > 0) {
				// 삭제 방식 : json을 map으로 변환후 -> 해당 spot key를 삭제 -> 삭제한 map에 대해서 다시 json -> 저장한다.
				var existValueMap = new Map(JSON.parse(results[searchKey]));
				existValueMap.delete(targetSpot);
				var addValueMap = JSON.stringify(Array.from(existValueMap.entries()));
				chrome.storage.local.set({[searchKey]:addValueMap}, function() {
					//console.log('Exist Value is set to ',addValueMap);
					if(!chrome.runtime.lastError){
						console.log('Gathering Data Deleted ', targetSpot);
					}
				});
			}
		});
		sendResponse( { 'DELETE_GATHERING' : 'ok' } );
	});
}

function GetGatheringDataVer2(sendResponse, targetSpot) {
	chrome.tabs.executeScript({
		code: 'document.querySelector("body").innerText'
	}, function (result) {
		var responseHtml = '';
		var searchKey = JSON.stringify({DataType : 'gathering'});
		chrome.storage.local.get(searchKey, function(results) {
			responseHtml += '<b>개더링 스팟 정보</b><br />';
			
			var allKeys = Object.keys(results)
			if (allKeys.length > 0) {
				//console.log( 'Gathering Map : ', JSON.parse(results[searchKey]));
				var existValueJson = JSON.parse(results[searchKey]).filter(function(item){    
				    return parseInt(item[0]) == targetSpot;
				});  
				var existValueMap = new Map(existValueJson);
				
				// value도 map으로 구성되어 있음.
				existValueMap.forEach((value, key, mapObject) => {
					var subValueMap = new Map(JSON.parse(value));
					
					responseHtml += '[' + GetGatheringArea(key) + ']<b>[' + key + ']</b><br />';
					subValueMap.forEach((datavalue, datakey, mapObject) => {
						// {gatheringType, count}
						//console.log( datakey, ',', datavalue);
						var jData = JSON.parse(datavalue);
						if (jData["gatheringType"] == 1) {
							responseHtml += '<b><font color=\'red\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						else if (jData["gatheringType"] == 2) {
							responseHtml += '<b><font color=\'blue\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						else if (jData["gatheringType"] == 3) {
							responseHtml += '<b><font color=\'green\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						else if (jData["gatheringType"] == 4) {
							responseHtml += '<b><font color=\'brown\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						responseHtml += '<br />';
					});
				});	
			}
			//console.log( 'responseHtml : ', responseHtml);
			
			var views = chrome.extension.getViews({
				type: "popup"
			});
			for (var i = 0; i < views.length; i++) {
				views[i].document.getElementById('result').innerHTML = responseHtml;
			}
			
		    sendResponse( { 'GET_GATHERING' : 'ok' } );
		});
	 });
}

function GetGatheringOutputVer2(sendResponse, targetOutput) {
	chrome.tabs.executeScript({
		code: 'document.querySelector("body").innerText'
	}, function (result) {
		var responseHtml = '';
		var searchKey = JSON.stringify({DataType : 'gathering'});
		chrome.storage.local.get(searchKey, function(results) {
			responseHtml += '<b>개더링 결과물 정보</b><br />';
			
			var allKeys = Object.keys(results)
			if (allKeys.length > 0) {
				console.log( 'Gathering Map : ', JSON.parse(results[searchKey]));
				var existValueMap = new Map(JSON.parse(results[searchKey]));
				
				// value도 map으로 구성되어 있음.
				existValueMap.forEach((value, key, mapObject) => {
					var subValueJson = JSON.parse(value);
					var existSubValueJson = subValueJson.filter(function(item){    
						return item[0] == targetOutput;
					});  
					var subValueMap = new Map(existSubValueJson);
					if (subValueMap.size > 0)	responseHtml += '[' + GetGatheringArea(key) + ']<b>[' + key + ']</b><br />';
					subValueMap.forEach((datavalue, datakey, mapObject) => {
						// {gatheringType, count}
						//console.log( datakey, ',', datavalue);
						var jData = JSON.parse(datavalue);
						if (jData["gatheringType"] == 1) {
							responseHtml += '<b><font color=\'red\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						else if (jData["gatheringType"] == 2) {
							responseHtml += '<b><font color=\'blue\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						else if (jData["gatheringType"] == 3) {
							responseHtml += '<b><font color=\'green\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						else if (jData["gatheringType"] == 4) {
							responseHtml += '<b><font color=\'brown\'>' + datakey + '</font></b> (' + jData["count"] + ' 번)';
						}
						responseHtml += '<br />';
					});
				});	
			}
			//console.log( 'responseHtml : ', responseHtml);
			
			var views = chrome.extension.getViews({
				type: "popup"
			});
			for (var i = 0; i < views.length; i++) {
				views[i].document.getElementById('result').innerHTML = responseHtml;
			}
			
		    sendResponse( { 'GET_GATHERING_OUTPUT' : 'ok' } );
		});
	 });
}

function GetReceiptByReceiptId(sendResponse, targetReceipt) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var responseHtml = '';
		if (targetReceipt <= -1) {
			responseHtml += '<b> ' + Math.abs(targetReceipt) + '단 전체 레시피 정보</b> (';
			responseHtml += '<b><font color=\'#ffa07a\'>암시장+수집품</font>, <font color=\'#ff1493\'>암시장</font>, <font color=\'#87ceeb\'>수집품</font>)</b><br /><br />';
			var receiptDataList;
			if (targetReceipt == -2) receiptDataList = getReceipts2List();
			else if (targetReceipt == -3) receiptDataList = getReceipts3List();
			else if (targetReceipt == -4) receiptDataList = getReceipts4List();
			else if (targetReceipt == -5) receiptDataList = getReceipts5List();
			else if (targetReceipt == -6) receiptDataList = getReceipts6List();
			else if (targetReceipt == -1) receiptDataList = getReceipts1List();
			else receiptDataList = getReceipts2List();
			// object는 아래와 같이 iteration
			for (const [key, value] of Object.entries(receiptDataList)) {
				responseHtml += '<b><' + key + '></b> ';

				var check0 = CheckGoodsExist(value.output);
				if (check0 == 1) responseHtml += '<b><font color=\'#ffa07a\'>[' + value.output + '] ' + getGoodsByGoodsId(value.output) + '</font></b> ';
				else if (check0 == 2) responseHtml += '<b><font color=\'#ff1493\'>[' + value.output + '] ' + getGoodsByGoodsId(value.output) + '</font></b> ';
				else if (check0 == 3) responseHtml += '<b><font color=\'#87ceeb\'>[' + value.output + '] ' + getGoodsByGoodsId(value.output) + '</font></b> ';
				else responseHtml += '<b>[' + value.output + '] ' + getGoodsByGoodsId(value.output) + '</b> ';

				var check1 = CheckGoodsExist(value.goods1);
				if (check1 == 1) responseHtml += '= <b><font color=\'#ffa07a\'>[' + value.goods1 + '] ' + getGoodsByGoodsId(value.goods1) + '</font></b> (x' +	value.goods1cnt + ')';
				else if (check1 == 2) responseHtml += '= <b><font color=\'#ff1493\'>[' + value.goods1 + '] ' + getGoodsByGoodsId(value.goods1) + '</font></b> (x' +	value.goods1cnt + ')';
				else if (check1 == 3) responseHtml += '= <b><font color=\'#87ceeb\'>[' + value.goods1 + '] ' + getGoodsByGoodsId(value.goods1) + '</font></b> (x' +	value.goods1cnt + ')';
				else responseHtml += '= [' + value.goods1 + '] ' + getGoodsByGoodsId(value.goods1) + ' (x' +	value.goods1cnt + ')';
				
				if (targetReceipt <= -2) {
					var check2 = CheckGoodsExist(value.goods2);
					if (check2 == 1) responseHtml += '+ <b><font color=\'#ffa07a\'>[' + value.goods2 + '] ' + getGoodsByGoodsId(value.goods2) + '</font></b> (x' +	value.goods2cnt + ')';
					else if (check2 == 2) responseHtml += '+ <b><font color=\'#ff1493\'>[' + value.goods2 + '] ' + getGoodsByGoodsId(value.goods2) + '</font></b> (x' +	value.goods2cnt + ')';
					else if (check2 == 3) responseHtml += '+ <b><font color=\'#87ceeb\'>[' + value.goods2 + '] ' + getGoodsByGoodsId(value.goods2) + '</font></b> (x' +	value.goods2cnt + ')';
					else responseHtml += '+ [' + value.goods2 + '] ' + getGoodsByGoodsId(value.goods2) + ' (x' +	value.goods2cnt + ')';
				}
				
				if (targetReceipt <= -3) {
					var check3 = CheckGoodsExist(value.goods3);
					if (check3 == 1) responseHtml += '+ <b><font color=\'#ffa07a\'>[' + value.goods3 + '] ' + getGoodsByGoodsId(value.goods3) + '</font></b> (x' +	value.goods3cnt + ')';
					else if (check3 == 2) responseHtml += '+ <b><font color=\'#ff1493\'>[' + value.goods3 + '] ' + getGoodsByGoodsId(value.goods3) + '</font></b> (x' +	value.goods3cnt + ')';
					else if (check3 == 3) responseHtml += '+ <b><font color=\'#87ceeb\'>[' + value.goods3 + '] ' + getGoodsByGoodsId(value.goods3) + '</font></b> (x' +	value.goods3cnt + ')';
					else responseHtml += '+ [' + value.goods3 + '] ' + getGoodsByGoodsId(value.goods3) + ' (x' +	value.goods3cnt + ')';
				}
				
				if (targetReceipt <= -4) {
					var check4 = CheckGoodsExist(value.goods4);
					if (check4 == 1) responseHtml += '+ <b><font color=\'#ffa07a\'>[' + value.goods4 + '] ' + getGoodsByGoodsId(value.goods4) + '</font></b> (x' +	value.goods4cnt + ')';
					else if (check4 == 2) responseHtml += '+ <b><font color=\'#ff1493\'>[' + value.goods4 + '] ' + getGoodsByGoodsId(value.goods4) + '</font></b> (x' +	value.goods4cnt + ')';
					else if (check4 == 3) responseHtml += '+ <b><font color=\'#87ceeb\'>[' + value.goods4 + '] ' + getGoodsByGoodsId(value.goods4) + '</font></b> (x' +	value.goods4cnt + ')';
					else responseHtml += '+ [' + value.goods4 + '] ' + getGoodsByGoodsId(value.goods4) + ' (x' +	value.goods4cnt + ')';
				}
				
				if (targetReceipt <= -5) {
					var check5 = CheckGoodsExist(value.goods5);
					if (check5 == 1) responseHtml += '+ <b><font color=\'#ffa07a\'>[' + value.goods5 + '] ' + getGoodsByGoodsId(value.goods5) + '</font></b> (x' +	value.goods5cnt + ')';
					else if (check5 == 2) responseHtml += '+ <b><font color=\'#ff1493\'>[' + value.goods5 + '] ' + getGoodsByGoodsId(value.goods5) + '</font></b> (x' +	value.goods5cnt + ')';
					else if (check5 == 3) responseHtml += '+ <b><font color=\'#87ceeb\'>[' + value.goods5 + '] ' + getGoodsByGoodsId(value.goods5) + '</font></b> (x' +	value.goods5cnt + ')';
					else responseHtml += '+ [' + value.goods5 + '] ' + getGoodsByGoodsId(value.goods5) + ' (x' +	value.goods5cnt + ')';
				}
				
				if (targetReceipt <= -6) {
					var check6 = CheckGoodsExist(value.goods6);
					if (check6 == 1) responseHtml += '+ <b><font color=\'#ffa07a\'>[' + value.goods6 + '] ' + getGoodsByGoodsId(value.goods6) + '</font></b> (x' +	value.goods6cnt + ')';
					else if (check6 == 2) responseHtml += '+ <b><font color=\'#ff1493\'>[' + value.goods6 + '] ' + getGoodsByGoodsId(value.goods6) + '</font></b> (x' +	value.goods6cnt + ')';
					else if (check6 == 3) responseHtml += '+ <b><font color=\'#87ceeb\'>[' + value.goods6 + '] ' + getGoodsByGoodsId(value.goods6) + '</font></b> (x' +	value.goods6cnt + ')';
					else responseHtml += '+ [' + value.goods6 + '] ' + getGoodsByGoodsId(value.goods6) + ' (x' +	value.goods6cnt + ')';
				}
				responseHtml += '<br /><br />';
			}
		}
		else {
			var receiptData = getReceipts2ByReceiptId(targetReceipt);
			console.log(receiptData);
			
			responseHtml += '<b>' + targetReceipt + '의 레시피 정보</b><br />';
			responseHtml += '<b><font color=\'red\'>[' + receiptData.output + '] ' + getGoodsByGoodsId(receiptData.output) + '</font></b> ';
			responseHtml += '= <br /><b>[' + receiptData.goods1 + '] ' + getGoodsByGoodsId(receiptData.goods1) + '</b> (x' +	receiptData.goods1cnt + ')';
			responseHtml += '<br />+ <b>[' + receiptData.goods2 + '] ' + getGoodsByGoodsId(receiptData.goods2) + '</b> (x' +	receiptData.goods2cnt + ')';
			responseHtml += '<br />';
		}
		//console.log( 'responseHtml : ', responseHtml);

		
		var views = chrome.extension.getViews({
			type: "popup"
		});
		for (var i = 0; i < views.length; i++) {
			views[i].document.getElementById('result').innerHTML = responseHtml;
		}
		
		sendResponse( { 'GET_GOODS' : 'ok' } );
	});	
}

function GetGoodsData(sendResponse, targetGoods) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var goodsData = getGoodsByGoodsId(targetGoods);
		
		var responseHtml = '';
		responseHtml += '<h4>[' + targetGoods + ']의 수집품 정보</h4><br />';
		responseHtml += '<b>' + goodsData + '</b><br />';
		//console.log( 'responseHtml : ', responseHtml);
		
		var views = chrome.extension.getViews({
			type: "popup"
		});
		for (var i = 0; i < views.length; i++) {
			views[i].document.getElementById('result').innerHTML = responseHtml;
		}
		
		sendResponse( { 'GET_GOODS' : 'ok' } );
	});	
}

function GetDarkMarketGoodsData(sendResponse, targetGoods) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var darkMarketGoodsDataList = getDarkMarketGoodsList();
		//console.log(myGoodsDataList);
		
		var responseHtml = '';
		responseHtml += '<b>암시장 수집품 정보</b><br />';
		responseHtml += '<b><font color=\'red\'>[' + getDarkMarketLastUpdated() + '에 마지막 업데이트 됨]</font></b><br />';
		// object는 아래와 같이 iteration
		for (const [key, value] of Object.entries(darkMarketGoodsDataList)) {
			responseHtml += '<b>[' + key + '] ' + getGoodsByGoodsId(key) + '</b> ' + value.cnt + '개<br />';
		}
		
		//console.log( 'responseHtml : ', responseHtml);
		
		var views = chrome.extension.getViews({
			type: "popup"
		});
		for (var i = 0; i < views.length; i++) {
			views[i].document.getElementById('result').innerHTML = responseHtml;
		}
		
		sendResponse( { 'GET_DARK_MARKET_GOODS' : 'ok' } );
	});	
}

function GetMyGoodsData(sendResponse) {
	chrome.tabs.executeScript({
		code: ''
	}, function (result) {
		var myGoodsDataList = getMyGoodsList();
		//console.log(myGoodsDataList);
		
		var responseHtml = '';
		responseHtml += '<b>내가 가진 수집품 정보</b><br />';
		responseHtml += '<b><font color=\'red\'>[' + getMyGoodsLastUpdated() + '에 마지막 업데이트 됨]</font></b><br />';
		// object는 아래와 같이 iteration
		for (const [key, value] of Object.entries(myGoodsDataList)) {
			responseHtml += '<b>[' + key + '] ' + getGoodsByGoodsId(key) + '</b> ' + value.cnt + '개<br />';
		}
		
		//console.log( 'responseHtml : ', responseHtml);
		
		var views = chrome.extension.getViews({
			type: "popup"
		});
		for (var i = 0; i < views.length; i++) {
			views[i].document.getElementById('result').innerHTML = responseHtml;
		}
		
		sendResponse( { 'GET_MY_GOODS' : 'ok' } );
	});	
}

function CheckGoodsExist(goodsId) {
	var darkMarketCheck = checkDarkMarketGoodsByGoodsId(goodsId);
	var myGoodsCheck = checkMyGoodsByGoodsId(goodsId);
	if ( darkMarketCheck) {
		if( myGoodsCheck) return 1;  // 암시장에도 있고 나한테도 있는거
		else return 2;  // 암시장에 있고, 나한테 없는거
	}
	else {
		if( myGoodsCheck) return 3;  // 암시장엔 없고 나한테는 있는거
		else return 4;		  // 둘다 없음
	}
}
