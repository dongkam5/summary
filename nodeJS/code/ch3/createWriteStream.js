const fs = require('fs');

const writeStream = fs.createWriteStream('./write2.txt');
writeStream.on('finish',()=>{
    console.log('파일쓰기 완료');
})

writeStream.write('이 글을 씁니다.');
writeStream.write('한번더 씁니다.');
writeStream.end();