var sourceArray = [
        {  id: "http",  ref:  "https://www.w3schools.com/" },
        {  id: "translate",  ref:  "https://translate.google.com" },
        {  id: "develop",  ref:  "https://stackoverflow.com/questions" },
        {  id: "vue",  ref:  "https://garevna.github.io/vue-course.github.io/#/" },
        {  id: "W3C",  ref:  "https://www.w3.org/" },
        {  id: "JS",  ref:  "https://www.w3schools.com/js/default.asp" },
        {  id: "git",  ref:  "https://github.com" },
]
var idArr = sourceArray.map ( function ( ident ) {
        return ident.id
})

console.log (idArr)
