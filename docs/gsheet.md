# netlify function gsheet 
## 분기효과
* referer_last_element - api를 요청하는 url의 마지막 element 이름을 변수에 설정하고 해당 변수를 스프레드 시트의 탭 명으로 설정. 
* returnObject - 라는 객체와, 그 밑에 referer_last_element가 들어가는 조건문을 통해 혹시 요청하는 각각의 api마다 return값을 다르게 설정할 수 있게 처리.