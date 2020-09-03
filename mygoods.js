// myGoods.js 
// 내 수집품 목록입니다. myGoodsList에 번호 : {'cnt':'수량','extra1':'','extra2':''}, 의 형태로 넣어줍니다.
// Google Docs를 이용해서 추가하시면 편합니다.
// 아래 myGoodsList는 array, list, map이 아닌 object타입 입니다.
// myGoodsListUpdated 변수는 참고용도로, 자신이 업데이트 한 시간을 남겨놓기 위한 변수입니다. (형태는 자유롭게 쓰시면 됩니다)
// extra 필드는 설명등을 추가할 수 있는 필드로 사용하지 않는 임시 공간입니다.

var myGoodsList = {
4:{'cnt':'1','extra1':'','extra2':''},
6:{'cnt':'8','extra1':'','extra2':''},
7:{'cnt':'5','extra1':'','extra2':''},
16:{'cnt':'27','extra1':'','extra2':''},
17:{'cnt':'1','extra1':'','extra2':''},
18:{'cnt':'6','extra1':'','extra2':''},
24:{'cnt':'13','extra1':'','extra2':''},
29:{'cnt':'8','extra1':'','extra2':''},
30:{'cnt':'1','extra1':'','extra2':''},
38:{'cnt':'3','extra1':'','extra2':''},
44:{'cnt':'1','extra1':'','extra2':''},
3002:{'cnt':'1','extra1':'','extra2':''},
3003:{'cnt':'7','extra1':'','extra2':''},
3009:{'cnt':'3','extra1':'','extra2':''},
3010:{'cnt':'4','extra1':'','extra2':''},
3012:{'cnt':'10','extra1':'','extra2':''},
3016:{'cnt':'2','extra1':'','extra2':''},
3026:{'cnt':'2','extra1':'','extra2':''},
3030:{'cnt':'4','extra1':'','extra2':''},
3031:{'cnt':'4','extra1':'','extra2':''},
3033:{'cnt':'3','extra1':'','extra2':''},
3042:{'cnt':'1','extra1':'','extra2':''},
3046:{'cnt':'1','extra1':'','extra2':''},
3049:{'cnt':'6','extra1':'','extra2':''},
6069:{'cnt':'1','extra1':'','extra2':''},
6078:{'cnt':'1','extra1':'','extra2':''},
6079:{'cnt':'2','extra1':'','extra2':''},
6082:{'cnt':'3','extra1':'','extra2':''},
6086:{'cnt':'4','extra1':'','extra2':''},
6087:{'cnt':'1','extra1':'','extra2':''},
6088:{'cnt':'3','extra1':'','extra2':''},
6091:{'cnt':'1','extra1':'','extra2':''},
6093:{'cnt':'5','extra1':'','extra2':''},
6094:{'cnt':'1','extra1':'','extra2':''},
6095:{'cnt':'1','extra1':'','extra2':''},
6097:{'cnt':'4','extra1':'','extra2':''},
6099:{'cnt':'3','extra1':'','extra2':''},
6104:{'cnt':'4','extra1':'','extra2':''},
6106:{'cnt':'2','extra1':'','extra2':''},
6108:{'cnt':'1','extra1':'','extra2':''},
6112:{'cnt':'2','extra1':'','extra2':''},
6113:{'cnt':'11','extra1':'','extra2':''},
6115:{'cnt':'4','extra1':'','extra2':''},
6117:{'cnt':'3','extra1':'','extra2':''},
6121:{'cnt':'1','extra1':'','extra2':''},
6123:{'cnt':'11','extra1':'','extra2':''},
6124:{'cnt':'5','extra1':'','extra2':''},
6125:{'cnt':'4','extra1':'','extra2':''},
6126:{'cnt':'6','extra1':'','extra2':''},
6127:{'cnt':'4','extra1':'','extra2':''},
6128:{'cnt':'2','extra1':'','extra2':''},
6129:{'cnt':'3','extra1':'','extra2':''},
6132:{'cnt':'2','extra1':'','extra2':''},
6139:{'cnt':'3','extra1':'','extra2':''},
6142:{'cnt':'5','extra1':'','extra2':''},
9051:{'cnt':'2','extra1':'','extra2':''},
9052:{'cnt':'1','extra1':'','extra2':''},
9053:{'cnt':'2','extra1':'','extra2':''},
9055:{'cnt':'1','extra1':'','extra2':''},
9056:{'cnt':'4','extra1':'','extra2':''},
9058:{'cnt':'1','extra1':'','extra2':''},
9059:{'cnt':'2','extra1':'','extra2':''},
9061:{'cnt':'2','extra1':'','extra2':''},
9063:{'cnt':'2','extra1':'','extra2':''},
9064:{'cnt':'3','extra1':'','extra2':''},
9065:{'cnt':'7','extra1':'','extra2':''},
9066:{'cnt':'8','extra1':'','extra2':''},
9069:{'cnt':'1','extra1':'','extra2':''},
12016:{'cnt':'1','extra1':'','extra2':''},
12019:{'cnt':'5','extra1':'','extra2':''},
12020:{'cnt':'4','extra1':'','extra2':''},
12021:{'cnt':'3','extra1':'','extra2':''},
12022:{'cnt':'3','extra1':'','extra2':''},
12024:{'cnt':'1','extra1':'','extra2':''},
15003:{'cnt':'3','extra1':'','extra2':''},
15005:{'cnt':'1','extra1':'','extra2':''}
};

var myGoodsListUpdated = '2020년 08월 30일 21시 00분';

function getMyGoodsLastUpdated() {
	return myGoodsListUpdated;
}

function getMyGoodsList() {
	return myGoodsList;
}

function getMyGoodsByGoodsId(goodsId) {
	return myGoodsList[parseInt(goodsId)] ? myGoodsList[parseInt(goodsId)].name : '없음';
}

function checkMyGoodsByGoodsId(goodsId) {
	return myGoodsList[parseInt(goodsId)] ? true : false;
}