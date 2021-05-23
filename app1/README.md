# Mapp now
named app1 app

# Processing
node -v 설치
10 이상
npm -v
node에 포함됨
npm i npx -g
git -v
	git --version
cocoaclone-htmlcss / vanila js-js basic
https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/
프레임워크 의존적이지 않다, js역량에 도움 될 것
create-react-app < webpack babel 대체
https://github.com/facebook/create-react-app
npx create-react-app movie_app_2019
code 앱이름 - vscode run
npm install -g npm@latest
package.json 삭제 test eject
npm start
git remote add origin [url]
git add .
git commit -m "init"
git push origin master
vdom방식 index.html에 값을 푸시, html소스에는 없음
컴포넌트 - html반환함수
	jsx 리액트 유일개념
루트에서는 App 컴포넌트 하나만 임포트 가능, index에 병행임포트 성립 x
App.js > 정보입력 <펑션명 name="asdf"/>
	asdf는 prop이름
	펑션명 반드시 첫글자대문자
	매개변수 지정 명과 받을 때 매개변수 명이 일치해야
	값만 추출 Func1({a1}){console.log(a1);
		같음 Func1(aa){console.log(aa.a1)}
	}
	html코드 사이에 변수 {}
	asdf텍스트 {asdf}자바스크립트
	html에 들어갈 js를 정의할 때 함수명, 변수넘기기가 js와 다르다
	arr.map(x=>aa(x)) 같다 arr.map(aa)
	배열인자시 key를 기입해야함
npm i prop-types
prop 미정의는 에러아님
https://reactjs.org/docs/typechecking-with-proptypes.html
---state
react는 classcomponent. render method 자동 실행
setState로만 값변경, render()가 재실행되어야 하므로, setState를 통해 연동 됨
    setState 때마다 render 재실행

https://reactjs.org/docs/react-component.html#gatsby-focus-wrapper
컴포넌트 라이프싸이클
1.constructor console.log('constructor exec 1st in page once');
2.render console.log('render exec 2nd, and every functioning');
3.componentDidMount console.log('componentDidMount exec 3rd in page once');
4.componentDidUpdate console.log('componentDidUpdate not exec 3rd, but every functioning after render')
5.componentWillUnmount   console.log('componentWillUnmount exec last in page once, but can not check in logging');





익스텐션
https://youtu.be/YjcqH027H2g

nft
https://www.bloter.net/newsView/blt202104030005

기술잡지
http://it.chosun.com/site/data/html_dir/2018/08/02/2018080201583.html
https://ko.wikipedia.org/wiki/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4




