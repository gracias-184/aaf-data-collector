AAF Data Collector

* 크롬 및 파이어폭스에서 사용가능합니다. (모바일은 불가능!)
* 파이어폭스 정식 버전에서는 브라우저 종료 시, 설치한 확장 기능이 다시 사라집니다. 영구 설치는 개발자 버전이 필요합니다.
* 크롬 시크릿 모드에서는 동작하지 않습니다.

### 설치법(chrome)
* 1. 해당 압축파일을 해제하고, manifest_chrome.json 파일을 manifest.json 파일로 이름을 변경합니다.
* 2. 크롬 > 도구 더보기 > 확장 프로그램 > 개발자 모드 ON > '압축 해제된 확장 프로그램을 로드합니다.' > 해당 파일의 폴더 내부 선택 (manifest.json 있는 위치)
* 3. 크롬 주소표시줄 옆 > 확장 프로그램 아이콘 > 'AAF Data Collector'를 고정하면 아이콘이 생성됩니다 > 던전 내에서만 아이콘 사용이 가능합니다.
* chrome://extensions/ 화면에서 해당 확장 기능을 삭제한 경우, 쌓인 모든 데이터가 삭제되니 주의해주세요.
* '쿠키 및 기타 사이트 데이터 삭제'를 하게되면 트래킹 데이터는 모두 삭제됩니다.
* 트래킹 데이터는 자신의 컴퓨터 로컬에 저장됩니다. C:\Users\{사용자명}\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb (잘 모르시면 이쪽 파일은 안 건드리시는게 낫습니다)
* 버그에 의해 확장기능이 오동작할 경우 저장된 정보에 대해서는 책임지지 않습니다. (복구가 안된다면 삭제 후 재설치를 권장합니다)

### 설치법(firefox)
* 1. 해당 압축파일을 해제하고, manifest_firefox.json 파일을 manifest.json 파일로 이름을 변경합니다.
* 2. 주소창에 about:debugging을 입력 후 엔터
* 3. 좌측 내비에서 '이 Firefox' 선택
* 4. 임시 확장 기능부분에서 임시 부가 기능 로드... 선택에서 manifest.json 파일 선택
* 5. 우측 부가기능 바에서 새로운 아이콘이 생성되고, 해당 아이콘을 클릭하면 각종 데이터를 보실 수 있습니다.
* 해당 확장 기능을 삭제할 경우 또는 정식버전에서 브라우저 종료시, 쌓인 모든 데이터가 삭제되니 주의해주세요.
* '쿠키 및 기타 사이트 데이터 삭제'를 하게되면 트래킹 데이터는 모두 삭제됩니다.
* 트래킹 데이터는 자신의 컴퓨터 로컬에 저장됩니다.
* 버그에 의해 확장기능이 오동작할 경우 저장된 정보에 대해서는 책임지지 않습니다. (복구가 안된다면 삭제 후 재설치를 권장합니다)

### 정보 업데이트 방법
* 1. 압축파일을 해제한 곳에, 다른사람에게 공유받은 js (goods, receipt, mygoods, darkmarketgoods 파일)을 덮어씁니다.
* 2. 크롬 > 도구 더보기 > 확장 프로그램 > 개발자 모드 ON > 업데이트를 눌러줍니다. (또는 개발자 모드가 아닐 경우 동그라미 화살표(?)버튼 클릭)

### 제공 기능
* 개더링 트래킹, 트래킹된 정보에서 스팟/결과물 검색
* 던전 몬스터 조우 트래킹 (돈/경험치/승리여부)
* 외부 수행 조우 트래킹 (돈/경험치/승리여부)
* 개더링 트래킹 정보 전체 삭제, 개별 삭제 기능
* 몬스터 조우 트래킹 정보 전체 삭제 (개별은 귀찮아서 미개발)
* 수동 js파일 업데이트 필요 : 내 수집품 정보보기, 암시장 수집품 보기, 레시피 보기
* 수동 코드 수정 필요 : 개더링 지역 (background.js의 GetGatheringArea 함수)
* 단축키 (Alt + O)를 통해 확장 기능 창 열고닫기 가능

### 알려진 문제점 및 주의사항
* 데이터를 얼마나 저장할수 있는지 검증되지 않았습니다. (chrome extension 문서상으로는 모든 데이터를 합쳐서 5MB)
* 아쿠 패치나 외부 요인에 의하여 저장된 데이터를 못쓰거나 플러그인이 안 되는 경우가 나올수도 있으니 트래킹 데이터는 필요하시면 주기적으로 백업해주세요.
* 수집품 및 레시피 정보는 신규 레시피 추가되기 전 목록입니다. (아마 2019년 하반기 기준 목록)
* 아쿠 창을 여러개 켜놓고 테스트를 안해봐서, 단일 창이 아닐경우 생기는 문제에 대해서는 아직 파악이 안되었습니다.
* 다양한 해상도에서 테스트가 되지 않았습니다.
* 0초에서 전투나 개더링을 해서 전투결과, 개더링결과가 안나오고 바로 메인으로 돌아올 경우 트래킹이 되지 않습니다. (결과 페이지에서 결과물을 읽어와서 그렇습니다.)

### 수정하는 개발자분들의 참고 사항
* 코드에 주석을 꼼꼼하게 달았으니 참고하시면 됩니다.
* "goods.js", "receipt.js", "mygoods.js", "darkmarketgoods.js", "gatheringarea.js" 와 같이 특정 정보를 사용하고 싶을때는 manifest.json - background - scripts 항목 에 선언해줘야합니다.
* 백그라운드에서 카운팅이 필요한 사항은 main.js에서 이벤트를 정의해서 sendMessage한 이후 background.js에서 처리합니다.
* 확장기능 아이콘을 눌러서 나오는 기능은 popup.js와 popup.html을 수정합니다.
* 던전 내에서만 사용 가능하도록 제어하는 부분은 manifest.json에 content_scripts > matches 부분과 background의 declarativeContent 부분입니다. 이 부분을 수정하면 기능들이 정상동작하지 않을수도 있습니다.
* popup.html : 확장기능 팝업 UI 구성
* popup.js : 확장기능 팝업 UI에서 발생하는 이벤트 정의
* goods.js : 수집품 정보를
* darkmarketgoods.js : 암시장 수집품 정보들
* gatheringarea.js : 개더링 스팟 지역
* receipt.js : 레시피 정보들
* mygoods.js : 내 수집품 정보들
* background.js : 메시지를 받아서 직접 localstorage에 작업하는 파일
* main.js : 트래킹할 이벤트를 필터하여 background 메시지를 전송합니다. 참고용으로 확장기능 최초 팝업시 뜨는 리스트는 DOMContentLoaded 이벤트에 정의해놓았습니다.
* 팝업의 css는 귀찮아서 정리안했으므로, 잘 꾸며주실 분이 있을겁니다.

### 제작자
원 제작자 gracias는 '아에파 공개채널 - 디스코드'를 통해서만 배포하며, github contributor 외에 다른 경로로는 배포하지 않습니다.
임의로 수정되어 재배포된 버전에 의해 생기는 어떤 문제에 대해서도 책임지지 않습니다.
제작의 목적은 AAF 게임의 원활한 정보 공유를 위한 목적이며, 상업적인 용도로는 사용하지 않습니다.

### 기타
* 브라우저에 나타나는 ICON 출처 : 상업적으로 무료로 쓸수 있는 아이콘입니다.
https://www.iconfinder.com/iconsets/summertime-6

### Release
Ver 1.0 : 2020-09-01, gracias, 최초 release  
Ver 1.1 : 2020-09-03, NOZOMI, 단축키 추가 및 외부수행 조우 트래킹 추가, 파이어폭스에서도 사용가능하도록 변경  
Ver 1.2 : 2020-09-03, gracias, 개더링 어시스트 조수가 있을 경우 개더링 결과가 깨지는 버그 수정. 일부 디버깅 로그 제거 및 일부 수집품, 레시피 정보 업데이트  