# Mongo DB

## SQL vs NoSQL
    ### SQL
        - 규칙에 맞는 데이터 입력
        - 테이블 간 JOIN 지원
        - 안정성, 일관성
        - 용어 (테이블, 로우, 칼럼)
    
    ### NoSQL(몽고디비)
        - 자유로운 데이터 입력
        - 컬렉션 간 JOIN 미지원
        - 확장성, 가용성
        - 용어 (컬렉션, 다큐먼트, 필드)

## 설치
    1. 먼저 공식홈페이지에서 커뮤니티 다운로드
    2. C 드라이브 내 Program Files 폴더에 data/db data/log 폴더 생성
    3. 자동실행 등록 
    4. mongosh 파일 및 dll 파일 다운 후 사용 (mongodb 버전 6.0 이상을 사용하는 경우 mongodb 셸 에 들어가기 위해 사용해야 하는 명령이 mongo 에서 mongosh 로 변경됨... mongo 로 쳐서 들어가는게 아니라 mongosh 로 해야함..)

## MONGO DB CRUD
    - SQL 명령어와 구조는 비슷 (명령어는 확실히 다르다.)
