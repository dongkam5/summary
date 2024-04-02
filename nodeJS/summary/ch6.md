# 익스프레스

## 익스프레스
    - npm에서 제공하는 웹 서버 프레임워크

## 미들웨어
    - app.use/get/post 에 매개변수가 req,res,next인 함수 사용
    - next는 다음 미들웨어로 넘어가는 함수
    - 미들웨어끼리 중첩가능, 분기도 가능

    - morgan
        - 로그 이외의 추가적인 로그 제공
    
    - static
        - 정적인 파일들을 제공하는 라우터 역할 제공
        - 사용자가 파일의 위치를 파악할 수 없기 때문에 보안측면에서 도움
    
    - body-parser
        - 전송 데이터를 해석하여, req.body 생성
    
    - cookie-parser
        - 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 생성
        - 서명한 쿠키는 req.signedCookies 객체로 생성

    - multer
        - 여러가지 파일들을 멀티파트 형식으로 업로드 할 때 사용하는 미들웨어
        - single (이미지 하나는 req.file로, 나머지 정보는 req.body로)
        - array, fields (이미지들을 req.files 로 나머지 정보는 req.body 로)
        - none (모든 정보를 req.body로)

## Router
    - 라우팅을 관리해주는 모듈
    - 장고의 url.py 같은 역할

## Express의 req,res 객체
    - req.app, req.body , req.cookies, req.ip, req.params, req.qurey, req.signedCookies, req.get(헤더 이름)
    - res.app, res.cookie(키, 값, 옵션), res.clearCookie(키, 값 옵션), res.end, res.json(JSON), res.redirect(주소), res.render(뷰, 데이터) , res.send(데이터), res.sendFile, res.set, res.status
    