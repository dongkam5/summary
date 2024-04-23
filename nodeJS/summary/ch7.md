# MYSQL

## CRUD

## Sequelize

## 관계
    - 1:1 = hasOne : belongsTo
    - 1:N = hasMany : belongsTo
    - N:M = belongsToMany : belongsToMany

## 쿼리
    - INSERT INTO == create
    - SELECT * from nodejs.users; == User.findall({});
    - attribute 옵션 -> 원하는 칼럼만 가져옴 (SELECT와 비슷)
    - SQL의 where 과 sequelize의 where은 같음
    - SQL의 order 와 sequelize의 order은 같음
    - SQL의 limit 과 sequelize의 limit은 같음
    - SQL의 offset 과 sequelize의 offset은 같음
    - UPDATE SET == update
    - DELETE == destroy

### 관계쿼리
    - 관계쿼리를 실행할 때는 프로미스 사용 (async/await)
    - SQL의 JOIN과 sequelize의 include은 같음
    - 관계가 맺어져있다면 get,set,add,remove + [모델명]을 사용하는 메서드 사용가능
    - as를 통하여 옵션 이름 변경가능

### SQL 쿼리사용
    - await sequelize.query('''SQL 문법''')을 통해 사용가능


