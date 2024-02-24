# 노드 기능 알아보기

## REPL
- Read
- Eval
- Print
- Loop

## 모듈화
    * 모듈이란
        - 특정한 기능을 하는 함수나 변수들의 집합


## 내장객체

    1) global 
        - 전역객체
    
    2) console
        - 보통 디버깅을 위해 사용
        ``` JS
            console.log("로그")
            console.time("전체시간")
            console.timeEnd("전체시간")
            console.error("에러입니다")
            console.table([{name:'zero',birth:1994},{name:'hero',birth:1988}])
            console.dir(obj,{colors:false,depth:2})
            console.trace("에러 위치 추적);
        ```