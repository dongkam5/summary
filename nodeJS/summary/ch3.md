# 노드 기능 알아보기

## REPL
- Read
- Eval
- Print
- Loop

## 모듈화
    * 모듈 - 특정한 기능을 하는 함수나 변수들의 집합


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
    3) timer
        - setTimeOut
        - setInterval
        - setImmediate
        
        - clearTimeOut
        - clearInterval

    4) filename, dirname
        -  __filename
        - __dirname
    
    5) module, exports, require
        - module.exports 와 exports 객체는 서로 같은 곳을 참조한다.
        - 한 번 require되면, 캐시에 저장되어 다음번에 사용 될 때는 cache에서 가져온다.
        - 서로 다른 모듈이 서로를 참조하면, 순환참조 발생하여 하나의 모듈을 빈 객체로 만들어 버린다.
    
    6) process
        - process 객체--> 프로세스 정보 파악
        - process.env => 환경변수들 저장, ID or Code 저장
        - process.nextTick => 마이크로태스크 큐에서 실행 (가장 높은 우선순위)
        - process.exit => 프로세스 종료 (0은 정상종료, 1은 비정상종료)
    

## 노드내장 모듈 활용
    1) OS
        - 노드에서 OS 정보에 접근가능
    2) PATH
        - 경로와 관련된 객체
    3) URL
        - URL
        - url.parse(주소) ==> 주소를 분해
        - url.format(객체) ==> 주소를 조립
    4) querystring
        - query 부분만을 담당하는 객체
        - querystring.parse
        - querystring.stringify
    5) crypto
        - 단방향 암호화 (해시,pbkdf2(해시+솔트+반복))
        - 양방향 암호화 (AES)
    6) util
        - 편의 기능을 모아둔 객체
    7) worker thread
        - 스레드를 생성해서 프로세스를 분할하여 처리
    8) child_process
        - 새로운 프로세스를 생성하여 처리
    
## 파일 시스템 접근
    1) 파일 읽고 쓰기
    2) 동기/비동기
    3) 버퍼&스트림
      버퍼
        - from(문자열) : 문자열 -> 버퍼
        - toString(버퍼) : 버퍼 -> 문자열
        - concat(버퍼배열) : 버퍼배열 -> 하나로 합침
        - alloc (바이트) : 공간 할당
      스트림
        - 버퍼를 잘게 쪼개서 데이터 송/수신
      파이프
        - 스트림 사이 데이터를 전송
      gzip
        - 데이터 압축
      스레드
## 이벤트
    - addListner(on0)
    - emit
    - once
    - removeAllListeners(off)
    - listenerCount

## 에러처리