## ES2015+

### const, let

```javascript
if (true){
    var x=3;
}
console.log(x); //3

if (true){
    const y=3;
}
console.log(y); // Uncaught ReferenceError: y is not defined
```


* var는 전역적으로 스코프를 가짐
* const, let 는 블록 스코프를 가짐
* const는 값 변경 불가, let은 변경 가능


### 템플릿 문자열

```JS
const num3=1;
const num4=2;
const result2=3;
const string2 = `${num3} 더하기 ${num4}는 ${result2}`;
console.log(string2); // 1더하기 2는 3
```

### 객체 리터럴
```JS
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es+6]: 'Fantastic',
}

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

```

### 화살표 함수

```JS
function add1(x,y){
    return x+y;
}

function add2 = (x,y) = >{
    return x+y;
};

const add3 = (x,y) => (x+y);


function not1(x){
    return !x;
}

const not2 = x => !x;

```

### this 바인딩

```JS
const relationship2 = {
name: 'zero';
friends:['nero','hero','xero'],
logFriends(){
    this.friends.forEach(friend=>{
        console.log(this.name,friend);
    });
},
};

```
- this는 블록 상위의 객체를 뜻함

### 구조분해 할당

- 생각보다 헷갈리니 주의

``` JS
const candyMachine = {
    status: {
        name: 'node',
        count:5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy,status:{count}} = candyMachine;

```

### 클래스

```JS

class Human{
    constructor (type='human'){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breath(){
        alert('h-a-a-a-a');

    }
}

class Zero extends Human{
    constructor(type,firstName,lastName){
        super(type)
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`)
    };
}
```


### 프로미스

```JS

const condition = true;
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }
    else{
        reject('실패');
    }
});

promise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log('무조건');
})
```

### asnyc/await

```JS
async function findAndSaveUser(Users){
    try{
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({'gender':'m'});
    }
    catch(error){
        console.error(error);
    }
}
// 비동기 적으로 실행하지만, await 부분에서는 동기적으로 실행
```

### FrontEnd에서 JS

1.  AJAX (Asyncronous JavaScript and XML)
1. FomrData (이거는 장고에서도 이용),
    - 사용하는 이유는 전송 데이터를 한번에 묶어서 관리/전송 하기 쉽게하기 위함
1. encodeURIComponent, decodeURIComponent
    ```JS
    (async ()=>{
        try{
            const result = await axios.get(`https:/www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
            console.log(result);
            console.log(result.data);
        }
        catch(error){
            console.error(error);
        }
    })();
    ```

### 데이터속성과 dataset

```html
<ul>
    <li data-id="1" data-user-job="programmer">Zero</li>
    <li data-id="2" data-user-job="designer">Nero</li>
    <li data-id="3" data-user-job="designer">Hero</li>
    <li data-id="4" data-user-job="designer">Kero</li>
</ul>
<script>
    console.log(docment.querySelector('li').dataset);
</script>
```
// 나중에 node에서 접근할 때, ''~.dataset.id'' 이런식으로 불러올 수 있다.