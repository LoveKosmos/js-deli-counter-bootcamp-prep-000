function takeANumber(line, curr){
  line.push(curr);
  for ( let i=0; i<=line.length; i++){
     return (`Welcome,`+ ` ${curr}`+`. You are number` + ` ${line.length} `+`in line.`);
  }
}
function nowServing(line){
  for ( let i=0; i<line.length; line.shift(i)){
     var next = (`Currently serving `+`${line[i]}`+ `.`)
  } while (line.length<0){
  next = "There is nobody waiting to be served!"
}
return next
}