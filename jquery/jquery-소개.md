# 강좌사이트
https://opentutorials.org/course/53/45

# test html site
https://liveweave.com/
https://www.w3schools.com/css/tryit.asp?filename=trycss_default

# jQuery - jQuery란?
공통라이브러리 모은거 추상화

메소드가 리턴될때 제어한 대상을 리턴 = 체이링

jQuery 문법
$(제어대상).method1().method2();
주어        서술어

# jQuery - javascript VS jQuery
jQuery는 javascript 비교하면 처리로직이 간단함
생산성 항상

# jQuery - wrapper
jQuery라는 함수를 호출
jQuery(엘리먼트 오브젝트 | 'CSS스타일 선택자')

엘리먼트 오브젝트 ex dom

문자열로 된 css 스타일 선택자
"#" id
"." class
"" element

jQuery에서 시작점 같은 역활

$(엘리먼트) 와 jQuery(엘리먼트)

기존의 라이브러리와 충돌을 피하기 위해
함수선언하고 바로호출


# jQuery - selector
css 스타일 선택자에 해당함 css selector
jQuery wrapper에는 CSS 선택자가 위치할 수 있는데, 이를 통해서 제어하려는 엘리먼트를 빠르고 정확하게 지정할 수 있다.


# jQuery - chain
chain 장점
  코드가 간결해짐.
  인간의 언어와 유사함
탐색 traversing
  엘리먼트 전환
  find()
  엘리먼트 종료
  end()

# jQuery - event
시스템에서 일어나는 사건
bind로 이벤트 핸들러 설치 unbind 제거
trigger 강제 설치
click, ready와 같이 다양한 이벤트 헬퍼 제공
live를 이용하면 현재 존재하지 않은 엘리먼트에 이벤트 핸들러 설치

# jQuery - element
append는 자식
after는 형재
wrap 부모
remove 삭제

attribute
trigger이벤트는 초기값시 사용 input 엘리멘트중 keyup 이름에 이벤트명의 이벤트 핸들러를 실행

# jQuery - form
http://api.jquery.com/category/forms/
focus
submit 이벤트

# jQuery - traversing
체인 컨텍스트를 유지하면서 제어의 대상이 되는 엘리먼트를 변경하는 기법
http://api.jquery.com/category/traversing/

$('#root').addClass('s').removeClass('s').children().addClass('s').removeClass('s').first().addClass('s')
.removeClass('s').next().addClass('s').removeClass('s').next().addClass('s').removeClass('s').prev().addClass('s')

filter는 선택된 부분 검색
find 현재 엘리먼트에 자식엘리먼트 검색
find가 filter보다 범주가 큼

# jQuery - animation
자바스크립트와 css를 이용해서 html엘리먼트에 동적인 효과를 줄수 있음

# jQuery - ajax
asynchronous javascript and xml
자바스크립트를 이용하여 비동기식으로 서버와 통신하는 방식
서버와 통신시 백그라운드로 동작하며 다른 작업을 할수 있음

신용카드 결재시 동기식
