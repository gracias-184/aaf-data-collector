// darkmarketgoods.js 
// 내 수집품 목록입니다. darkMarketGoodsList에 번호 : {'cnt':'수량'}, 의 형태로 넣어줍니다.
// Google Docs를 이용해서 추가하시면 편합니다. 비개발자분은 에러가 나면 감당이 안될 수 있으므로 이전 잘되는 파일을 백업해두시길 바랍니다.
// 아래 darkMarketGoodsList는 array, list, map이 아닌 object타입 입니다.
// darkMarketGoodsListUpdated 변수는 참고용도로, 자신이 업데이트 한 시간을 남겨놓기 위한 변수입니다. (형태는 자유롭게 쓰시면 됩니다)

var darkMarketGoodsList = {
1:{'cnt':'657'},
2:{'cnt':'123'},
3:{'cnt':'1004'},
5:{'cnt':'835'},
8:{'cnt':'1001'},
9:{'cnt':'1000'},
10:{'cnt':'1017'},
11:{'cnt':'1007'},
12:{'cnt':'1005'},
13:{'cnt':'767'},
14:{'cnt':'1000'},
15:{'cnt':'1001'},
17:{'cnt':'945'},
19:{'cnt':'1003'},
20:{'cnt':'1000'},
21:{'cnt':'1010'},
22:{'cnt':'1000'},
23:{'cnt':'649'},
25:{'cnt':'1000'},
26:{'cnt':'506'},
27:{'cnt':'862'},
28:{'cnt':'1008'},
31:{'cnt':'242'},
32:{'cnt':'1000'},
33:{'cnt':'874'},
34:{'cnt':'1001'},
35:{'cnt':'1000'},
36:{'cnt':'1000'},
37:{'cnt':'1008'},
39:{'cnt':'1000'},
40:{'cnt':'633'},
41:{'cnt':'1008'},
42:{'cnt':'1092'},
43:{'cnt':'198'},
44:{'cnt':'105'},
45:{'cnt':'972'},
46:{'cnt':'1001'},
47:{'cnt':'181'},
48:{'cnt':'1001'},
49:{'cnt':'1005'},
50:{'cnt':'1001'},
51:{'cnt':'874'},
52:{'cnt':'1001'},
54:{'cnt':'1004'},
56:{'cnt':'1000'},
57:{'cnt':'302'},
58:{'cnt':'1002'},
60:{'cnt':'1000'},
62:{'cnt':'1003'},
65:{'cnt':'1004'},
67:{'cnt':'1002'},
74:{'cnt':'415'},
75:{'cnt':'1019'},
76:{'cnt':'951'},
77:{'cnt':'638'},
78:{'cnt':'1010'},
80:{'cnt':'1006'},
82:{'cnt':'981'},
83:{'cnt':'250'},
84:{'cnt':'1001'},
86:{'cnt':'436'},
88:{'cnt':'1005'},
92:{'cnt':'334'},
93:{'cnt':'391'},
94:{'cnt':'1006'},
95:{'cnt':'316'},
97:{'cnt':'602'},
98:{'cnt':'1001'},
100:{'cnt':'1001'},
101:{'cnt':'322'},
103:{'cnt':'1000'},
104:{'cnt':'918'},
105:{'cnt':'245'},
107:{'cnt':'1001'},
108:{'cnt':'283'},
110:{'cnt':'788'},
112:{'cnt':'1005'},
113:{'cnt':'493'},
115:{'cnt':'615'},
122:{'cnt':'667'},
124:{'cnt':'74'},
132:{'cnt':'67'},
134:{'cnt':'1001'},
135:{'cnt':'591'},
136:{'cnt':'1000'},
137:{'cnt':'992'},
139:{'cnt':'1019'},
140:{'cnt':'1001'},
141:{'cnt':'1003'},
142:{'cnt':'568'},
143:{'cnt':'950'},
144:{'cnt':'353'},
145:{'cnt':'850'},
146:{'cnt':'1055'},
147:{'cnt':'1004'},
148:{'cnt':'1000'},
150:{'cnt':'972'},
151:{'cnt':'1001'},
152:{'cnt':'1001'},
153:{'cnt':'1000'},
154:{'cnt':'722'},
155:{'cnt':'1014'},
158:{'cnt':'1015'},
159:{'cnt':'1000'},
160:{'cnt':'1032'},
162:{'cnt':'65'},
163:{'cnt':'1000'},
169:{'cnt':'7'},
171:{'cnt':'576'},
172:{'cnt':'1000'},
173:{'cnt':'1000'},
174:{'cnt':'998'},
175:{'cnt':'1005'},
176:{'cnt':'1010'},
177:{'cnt':'1002'},
178:{'cnt':'255'},
179:{'cnt':'1001'},
180:{'cnt':'451'},
182:{'cnt':'1009'},
183:{'cnt':'517'},
184:{'cnt':'35'},
187:{'cnt':'1066'},
192:{'cnt':'595'},
193:{'cnt':'1210'},
194:{'cnt':'1004'},
195:{'cnt':'1170'},
196:{'cnt':'1003'},
197:{'cnt':'857'},
198:{'cnt':'260'},
199:{'cnt':'1045'},
200:{'cnt':'1002'},
201:{'cnt':'200'},
202:{'cnt':'1007'},
203:{'cnt':'258'},
204:{'cnt':'1267'},
205:{'cnt':'1000'},
207:{'cnt':'1026'},
208:{'cnt':'1000'},
211:{'cnt':'1000'},
212:{'cnt':'1000'},
217:{'cnt':'54'},
218:{'cnt':'1007'},
219:{'cnt':'983'},
230:{'cnt':'1145'},
232:{'cnt':'1010'},
233:{'cnt':'398'},
234:{'cnt':'994'},
235:{'cnt':'1000'},
236:{'cnt':'1000'},
238:{'cnt':'1023'},
245:{'cnt':'999'},
247:{'cnt':'1000'},
248:{'cnt':'1001'},
249:{'cnt':'610'},
250:{'cnt':'837'},
251:{'cnt':'303'},
252:{'cnt':'246'},
253:{'cnt':'1000'},
255:{'cnt':'135'},
256:{'cnt':'1009'},
258:{'cnt':'1007'},
259:{'cnt':'1008'},
260:{'cnt':'1000'},
261:{'cnt':'1002'},
262:{'cnt':'1000'},
265:{'cnt':'1000'},
266:{'cnt':'989'},
268:{'cnt':'1015'},
269:{'cnt':'1012'},
270:{'cnt':'341'},
271:{'cnt':'1000'},
272:{'cnt':'1000'},
273:{'cnt':'1000'},
274:{'cnt':'1004'},
275:{'cnt':'1006'},
276:{'cnt':'1065'},
284:{'cnt':'29'},
288:{'cnt':'815'},
289:{'cnt':'241'},
290:{'cnt':'1000'},
291:{'cnt':'1000'},
293:{'cnt':'1000'},
294:{'cnt':'1000'},
296:{'cnt':'91'},
297:{'cnt':'119'},
300:{'cnt':'1000'},
302:{'cnt':'857'},
305:{'cnt':'155'},
3001:{'cnt':'2'},
3004:{'cnt':'1002'},
3005:{'cnt':'1004'},
3007:{'cnt':'1001'},
3011:{'cnt':'989'},
3013:{'cnt':'1001'},
3015:{'cnt':'1001'},
3017:{'cnt':'1019'},
3018:{'cnt':'1003'},
3019:{'cnt':'1001'},
3020:{'cnt':'1002'},
3021:{'cnt':'1000'},
3022:{'cnt':'669'},
3023:{'cnt':'1000'},
3024:{'cnt':'837'},
3025:{'cnt':'628'},
3027:{'cnt':'996'},
3028:{'cnt':'950'},
3029:{'cnt':'1003'},
3032:{'cnt':'292'},
3034:{'cnt':'303'},
3035:{'cnt':'367'},
3036:{'cnt':'267'},
3037:{'cnt':'985'},
3038:{'cnt':'1006'},
3039:{'cnt':'136'},
3040:{'cnt':'1001'},
3041:{'cnt':'1001'},
3043:{'cnt':'1005'},
3044:{'cnt':'1008'},
3045:{'cnt':'221'},
3047:{'cnt':'600'},
3048:{'cnt':'1002'},
3053:{'cnt':'1003'},
3054:{'cnt':'1000'},
3055:{'cnt':'1000'},
3057:{'cnt':'1004'},
3058:{'cnt':'1003'},
3060:{'cnt':'701'},
3061:{'cnt':'179'},
3065:{'cnt':'827'},
3067:{'cnt':'229'},
3068:{'cnt':'285'},
3072:{'cnt':'361'},
3073:{'cnt':'1001'},
3074:{'cnt':'961'},
3075:{'cnt':'405'},
3076:{'cnt':'764'},
3077:{'cnt':'293'},
3078:{'cnt':'1001'},
3080:{'cnt':'226'},
3082:{'cnt':'1000'},
3085:{'cnt':'259'},
3086:{'cnt':'628'},
3089:{'cnt':'443'},
3093:{'cnt':'161'},
3094:{'cnt':'1000'},
3096:{'cnt':'218'},
3099:{'cnt':'1000'},
3100:{'cnt':'370'},
3102:{'cnt':'961'},
3103:{'cnt':'1004'},
3104:{'cnt':'509'},
3108:{'cnt':'1010'},
3110:{'cnt':'873'},
3111:{'cnt':'1000'},
3112:{'cnt':'565'},
3113:{'cnt':'966'},
3114:{'cnt':'714'},
3116:{'cnt':'1000'},
3117:{'cnt':'1007'},
3118:{'cnt':'1005'},
3120:{'cnt':'993'},
3121:{'cnt':'888'},
3122:{'cnt':'21'},
3123:{'cnt':'51'},
3124:{'cnt':'244'},
3126:{'cnt':'1000'},
3128:{'cnt':'17'},
3131:{'cnt':'1000'},
3134:{'cnt':'1000'},
3138:{'cnt':'869'},
3146:{'cnt':'717'},
3147:{'cnt':'1002'},
3149:{'cnt':'1003'},
3150:{'cnt':'1005'},
3151:{'cnt':'1003'},
3153:{'cnt':'120'},
3155:{'cnt':'1003'},
3156:{'cnt':'1000'},
3160:{'cnt':'1011'},
3161:{'cnt':'747'},
3163:{'cnt':'52'},
3164:{'cnt':'1000'},
3165:{'cnt':'1000'},
3167:{'cnt':'36'},
3168:{'cnt':'790'},
3169:{'cnt':'8'},
3170:{'cnt':'1000'},
3173:{'cnt':'1000'},
3174:{'cnt':'19'},
3175:{'cnt':'37'},
3177:{'cnt':'18'},
3179:{'cnt':'333'},
3180:{'cnt':'218'},
3181:{'cnt':'192'},
3186:{'cnt':'379'},
3187:{'cnt':'595'},
3191:{'cnt':'16'},
3193:{'cnt':'1006'},
3200:{'cnt':'1'},
3205:{'cnt':'1000'},
3206:{'cnt':'750'},
3208:{'cnt':'518'},
3210:{'cnt':'708'},
3211:{'cnt':'678'},
3212:{'cnt':'709'},
3213:{'cnt':'171'},
3214:{'cnt':'753'},
3215:{'cnt':'1000'},
3216:{'cnt':'68'},
3217:{'cnt':'1000'},
3218:{'cnt':'1031'},
3219:{'cnt':'1000'},
3220:{'cnt':'66'},
3221:{'cnt':'1028'},
3222:{'cnt':'184'},
3231:{'cnt':'332'},
3233:{'cnt':'51'},
3235:{'cnt':'724'},
3237:{'cnt':'385'},
3238:{'cnt':'32'},
3243:{'cnt':'1000'},
3245:{'cnt':'69'},
3247:{'cnt':'42'},
3248:{'cnt':'267'},
3249:{'cnt':'16'},
3252:{'cnt':'1003'},
3253:{'cnt':'162'},
3254:{'cnt':'738'},
3255:{'cnt':'386'},
3256:{'cnt':'33'},
3257:{'cnt':'66'},
3258:{'cnt':'134'},
3261:{'cnt':'823'},
3262:{'cnt':'791'},
3263:{'cnt':'313'},
3264:{'cnt':'300'},
3265:{'cnt':'486'},
3266:{'cnt':'236'},
3267:{'cnt':'1000'},
3269:{'cnt':'1000'},
3270:{'cnt':'1000'},
3271:{'cnt':'1000'},
3272:{'cnt':'1000'},
3273:{'cnt':'994'},
3274:{'cnt':'517'},
3275:{'cnt':'184'},
3276:{'cnt':'20'},
3277:{'cnt':'459'},
3278:{'cnt':'141'},
3279:{'cnt':'28'},
3283:{'cnt':'28'},
3288:{'cnt':'1000'},
3291:{'cnt':'498'},
3292:{'cnt':'1000'},
3297:{'cnt':'614'},
3300:{'cnt':'891'},
3303:{'cnt':'32'},
3304:{'cnt':'20'},
3310:{'cnt':'50'},
3312:{'cnt':'2'},
3318:{'cnt':'888'},
3321:{'cnt':'384'},
3344:{'cnt':'196'},
3348:{'cnt':'647'},
3350:{'cnt':'1023'},
3351:{'cnt':'1016'},
3352:{'cnt':'1013'},
3354:{'cnt':'1000'},
3359:{'cnt':'1003'},
3360:{'cnt':'1000'},
3361:{'cnt':'1028'},
3362:{'cnt':'1004'},
3363:{'cnt':'1061'},
3364:{'cnt':'766'},
3365:{'cnt':'915'},
3366:{'cnt':'583'},
3367:{'cnt':'61'},
3373:{'cnt':'630'},
3376:{'cnt':'969'},
3377:{'cnt':'732'},
3378:{'cnt':'936'},
3379:{'cnt':'1002'},
3382:{'cnt':'424'},
3386:{'cnt':'92'},
3387:{'cnt':'1009'},
3388:{'cnt':'1000'},
3389:{'cnt':'162'},
3390:{'cnt':'1165'},
3393:{'cnt':'480'},
3394:{'cnt':'165'},
3395:{'cnt':'116'},
3396:{'cnt':'724'},
3399:{'cnt':'36'},
3404:{'cnt':'117'},
3406:{'cnt':'1001'},
3407:{'cnt':'1001'},
3410:{'cnt':'995'},
3411:{'cnt':'53'},
3412:{'cnt':'985'},
3414:{'cnt':'916'},
3415:{'cnt':'1000'},
3416:{'cnt':'992'},
3417:{'cnt':'156'},
3418:{'cnt':'457'},
3419:{'cnt':'1000'},
3422:{'cnt':'231'},
3423:{'cnt':'88'},
3424:{'cnt':'150'},
3425:{'cnt':'1000'},
3426:{'cnt':'583'},
3427:{'cnt':'322'},
3428:{'cnt':'545'},
3431:{'cnt':'38'},
3442:{'cnt':'733'},
3443:{'cnt':'1002'},
3444:{'cnt':'1001'},
3445:{'cnt':'1006'},
3446:{'cnt':'1011'},
3447:{'cnt':'953'},
3448:{'cnt':'1001'},
3449:{'cnt':'1000'},
3450:{'cnt':'1000'},
3452:{'cnt':'1078'},
3478:{'cnt':'140'},
3480:{'cnt':'731'},
3481:{'cnt':'227'},
3489:{'cnt':'1046'},
3490:{'cnt':'558'},
3491:{'cnt':'1000'},
3492:{'cnt':'333'},
3493:{'cnt':'512'},
3494:{'cnt':'169'},
3498:{'cnt':'417'},
3499:{'cnt':'716'},
3500:{'cnt':'715'},
3501:{'cnt':'790'},
3502:{'cnt':'1001'},
3503:{'cnt':'1000'},
3515:{'cnt':'338'},
3517:{'cnt':'760'},
3518:{'cnt':'511'},
3522:{'cnt':'286'},
3523:{'cnt':'365'},
3526:{'cnt':'172'},
3527:{'cnt':'67'},
3528:{'cnt':'1000'},
3530:{'cnt':'1000'},
3531:{'cnt':'1000'},
3532:{'cnt':'1000'},
3534:{'cnt':'21'},
3546:{'cnt':'806'},
3547:{'cnt':'132'},
3548:{'cnt':'238'},
3549:{'cnt':'223'},
3553:{'cnt':'48'},
3554:{'cnt':'64'},
3555:{'cnt':'495'},
3556:{'cnt':'929'},
3557:{'cnt':'38'},
6001:{'cnt':'1000'},
6002:{'cnt':'303'},
6005:{'cnt':'1001'},
6007:{'cnt':'477'},
6010:{'cnt':'88'},
6011:{'cnt':'452'},
6015:{'cnt':'1000'},
6017:{'cnt':'1001'},
6018:{'cnt':'60'},
6020:{'cnt':'1002'},
6023:{'cnt':'1001'},
6025:{'cnt':'476'},
6028:{'cnt':'1001'},
6029:{'cnt':'518'},
6030:{'cnt':'1000'},
6037:{'cnt':'1000'},
6040:{'cnt':'1001'},
6044:{'cnt':'1017'},
6045:{'cnt':'1002'},
6046:{'cnt':'539'},
6047:{'cnt':'1046'},
6050:{'cnt':'374'},
6051:{'cnt':'246'},
6052:{'cnt':'566'},
6053:{'cnt':'640'},
6055:{'cnt':'541'},
6058:{'cnt':'1000'},
6064:{'cnt':'254'},
6065:{'cnt':'1000'},
6068:{'cnt':'845'},
6070:{'cnt':'303'},
6071:{'cnt':'326'},
6072:{'cnt':'614'},
6074:{'cnt':'1001'},
6075:{'cnt':'569'},
6077:{'cnt':'1000'},
6083:{'cnt':'991'},
6085:{'cnt':'210'},
6087:{'cnt':'827'},
6096:{'cnt':'1021'},
6098:{'cnt':'613'},
6100:{'cnt':'942'},
6102:{'cnt':'1001'},
6103:{'cnt':'529'},
6105:{'cnt':'1000'},
6107:{'cnt':'990'},
6109:{'cnt':'91'},
6114:{'cnt':'726'},
6116:{'cnt':'639'},
6118:{'cnt':'258'},
6119:{'cnt':'718'},
6120:{'cnt':'262'},
6121:{'cnt':'995'},
6122:{'cnt':'314'},
6126:{'cnt':'230'},
6130:{'cnt':'772'},
6133:{'cnt':'394'},
6134:{'cnt':'587'},
6136:{'cnt':'127'},
6137:{'cnt':'473'},
6138:{'cnt':'789'},
6141:{'cnt':'994'},
6145:{'cnt':'88'},
6153:{'cnt':'1032'},
6155:{'cnt':'456'},
6161:{'cnt':'357'},
6167:{'cnt':'72'},
6168:{'cnt':'561'},
6170:{'cnt':'1001'},
6173:{'cnt':'81'},
6174:{'cnt':'5'},
6180:{'cnt':'1000'},
6182:{'cnt':'1015'},
6183:{'cnt':'709'},
6189:{'cnt':'996'},
6195:{'cnt':'759'},
6196:{'cnt':'83'},
6199:{'cnt':'946'},
6204:{'cnt':'1000'},
6213:{'cnt':'295'},
6225:{'cnt':'1000'},
6234:{'cnt':'492'},
6235:{'cnt':'161'},
6237:{'cnt':'999'},
6239:{'cnt':'495'},
6240:{'cnt':'1004'},
6241:{'cnt':'182'},
6243:{'cnt':'609'},
6245:{'cnt':'192'},
6253:{'cnt':'527'},
6254:{'cnt':'167'},
6256:{'cnt':'56'},
6266:{'cnt':'762'},
6278:{'cnt':'156'},
6279:{'cnt':'133'},
6280:{'cnt':'664'},
6286:{'cnt':'47'},
6287:{'cnt':'121'},
6288:{'cnt':'1010'},
6289:{'cnt':'34'},
6290:{'cnt':'177'},
6291:{'cnt':'226'},
6294:{'cnt':'1007'},
6296:{'cnt':'670'},
6301:{'cnt':'442'},
6305:{'cnt':'677'},
6312:{'cnt':'201'},
6334:{'cnt':'553'},
6349:{'cnt':'411'},
6350:{'cnt':'502'},
6351:{'cnt':'1010'},
6359:{'cnt':'778'},
6360:{'cnt':'570'},
6361:{'cnt':'1006'},
6387:{'cnt':'970'},
6390:{'cnt':'1018'},
6391:{'cnt':'1000'},
6392:{'cnt':'217'},
6393:{'cnt':'626'},
6394:{'cnt':'3'},
6395:{'cnt':'835'},
6397:{'cnt':'279'},
6401:{'cnt':'463'},
6402:{'cnt':'435'},
6403:{'cnt':'602'},
6425:{'cnt':'258'},
6428:{'cnt':'998'},
6429:{'cnt':'992'},
6433:{'cnt':'414'},
6434:{'cnt':'860'},
6435:{'cnt':'223'},
6436:{'cnt':'153'},
6446:{'cnt':'1000'},
6447:{'cnt':'571'},
6448:{'cnt':'396'},
6449:{'cnt':'91'},
6450:{'cnt':'23'},
6454:{'cnt':'586'},
6476:{'cnt':'13'},
6481:{'cnt':'1006'},
6482:{'cnt':'1021'},
6483:{'cnt':'928'},
6484:{'cnt':'440'},
6485:{'cnt':'952'},
6486:{'cnt':'1000'},
6487:{'cnt':'973'},
6488:{'cnt':'1010'},
6489:{'cnt':'1005'},
6490:{'cnt':'1005'},
6491:{'cnt':'1007'},
6535:{'cnt':'45'},
6547:{'cnt':'58'},
6561:{'cnt':'1000'},
6563:{'cnt':'45'},
6564:{'cnt':'239'},
6570:{'cnt':'16'},
6603:{'cnt':'463'},
6609:{'cnt':'117'},
6611:{'cnt':'8'},
6613:{'cnt':'336'},
6619:{'cnt':'341'},
6620:{'cnt':'66'},
6621:{'cnt':'239'},
6626:{'cnt':'388'},
6634:{'cnt':'33'},
6637:{'cnt':'98'},
6647:{'cnt':'744'},
6652:{'cnt':'124'},
6653:{'cnt':'132'},
6654:{'cnt':'152'},
6658:{'cnt':'108'},
6659:{'cnt':'256'},
6660:{'cnt':'154'},
6661:{'cnt':'145'},
6662:{'cnt':'41'},
6664:{'cnt':'28'},
9007:{'cnt':'860'},
9010:{'cnt':'1010'},
9012:{'cnt':'1006'},
9013:{'cnt':'1000'},
9026:{'cnt':'191'},
9030:{'cnt':'521'},
9040:{'cnt':'315'},
9045:{'cnt':'371'},
9050:{'cnt':'162'},
9054:{'cnt':'794'},
9057:{'cnt':'991'},
9062:{'cnt':'526'},
9068:{'cnt':'550'},
9073:{'cnt':'474'},
9079:{'cnt':'50'},
9129:{'cnt':'14'},
9142:{'cnt':'47'},
9151:{'cnt':'19'},
9157:{'cnt':'5'},
9162:{'cnt':'182'},
9169:{'cnt':'325'},
9189:{'cnt':'82'},
9221:{'cnt':'24'},
9224:{'cnt':'506'},
9226:{'cnt':'182'},
9227:{'cnt':'190'},
9228:{'cnt':'719'},
9231:{'cnt':'233'},
9234:{'cnt':'1000'},
9242:{'cnt':'109'},
9251:{'cnt':'188'},
9263:{'cnt':'849'},
9264:{'cnt':'434'},
9268:{'cnt':'31'},
9270:{'cnt':'31'},
9273:{'cnt':'63'},
9275:{'cnt':'390'},
9280:{'cnt':'404'},
9283:{'cnt':'232'},
9284:{'cnt':'549'},
9286:{'cnt':'38'},
9360:{'cnt':'299'},
9375:{'cnt':'182'},
9380:{'cnt':'377'},
9386:{'cnt':'149'},
9405:{'cnt':'83'},
9407:{'cnt':'280'},
9408:{'cnt':'58'},
9411:{'cnt':'589'},
9412:{'cnt':'115'},
9413:{'cnt':'131'},
9416:{'cnt':'194'},
9418:{'cnt':'54'},
9423:{'cnt':'8'},
9441:{'cnt':'212'},
9445:{'cnt':'354'},
9448:{'cnt':'1000'},
9451:{'cnt':'254'},
9454:{'cnt':'107'},
9475:{'cnt':'40'},
9476:{'cnt':'169'},
9480:{'cnt':'340'},
9512:{'cnt':'1000'},
9513:{'cnt':'692'},
9515:{'cnt':'1001'},
9516:{'cnt':'534'},
9517:{'cnt':'1002'},
9518:{'cnt':'1001'},
9519:{'cnt':'1001'},
9520:{'cnt':'251'},
9521:{'cnt':'1000'},
9523:{'cnt':'1005'},
9524:{'cnt':'589'},
9525:{'cnt':'898'},
9526:{'cnt':'1009'},
9527:{'cnt':'1000'},
9528:{'cnt':'1000'},
9529:{'cnt':'1000'},
9530:{'cnt':'423'},
9621:{'cnt':'88'},
9622:{'cnt':'10'},
9624:{'cnt':'212'},
9625:{'cnt':'128'},
9626:{'cnt':'115'},
9628:{'cnt':'150'},
9655:{'cnt':'293'},
9662:{'cnt':'193'},
9664:{'cnt':'245'},
9665:{'cnt':'165'},
9666:{'cnt':'96'},
9729:{'cnt':'132'},
9751:{'cnt':'30'},
9752:{'cnt':'44'},
12026:{'cnt':'1000'},
12086:{'cnt':'58'},
12137:{'cnt':'120'},
12148:{'cnt':'43'},
12149:{'cnt':'671'},
12150:{'cnt':'245'},
12151:{'cnt':'499'},
12152:{'cnt':'215'},
12227:{'cnt':'11'},
12279:{'cnt':'5'},
12352:{'cnt':'139'},
12359:{'cnt':'570'},
12448:{'cnt':'793'},
12451:{'cnt':'333'},
12452:{'cnt':'1003'},
12453:{'cnt':'821'},
12454:{'cnt':'1002'},
12455:{'cnt':'605'},
12456:{'cnt':'229'},
12457:{'cnt':'833'},
12611:{'cnt':'36'},
12627:{'cnt':'195'},
12628:{'cnt':'27'},
12637:{'cnt':'27'}
};

var darkMarketGoodsListUpdated = '2020년 08월 30일 21시 00분';

function getDarkMarketLastUpdated() {
	return darkMarketGoodsListUpdated;
}

function getDarkMarketGoodsList() {
	return darkMarketGoodsList;
}

function getDarkMarketGoodsByGoodsId(goodsId) {
	return darkMarketGoodsList[parseInt(goodsId)] ? darkMarketGoodsList[parseInt(goodsId)].name : '없음';
}

function checkDarkMarketGoodsByGoodsId(goodsId) {
	return darkMarketGoodsList[parseInt(goodsId)] ? true : false;
}