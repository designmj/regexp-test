const str = `
010-1234-5678
mingss02@gmail.com
the fox 
The.
abbcccdddd
d
https://www.naver.com
http://www.naver.com
동해물과 백두산이 마르고 닳도록
`

//const regExp = new RegExp('the','gi')
//const regExp = /fox/gi
//console.log(str.match(/http|the/g))
//console.log(str.match(/\b\w{2,3}\b/g))
//console.log(str.match(/[가-힣]{1,}/g))
//console.log(str.match(/\w/g))
//console.log(str.match(/\bf\w{1,}\b/g))
//console.log(str.match(/\d{1,}/g))
//const h = `  the hello  word  !`
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))