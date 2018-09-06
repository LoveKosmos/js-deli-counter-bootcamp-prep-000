function takeANumber(line, curr){
  line.push(curr);
  for ( let i=0; i<=line.length; i++){
     return (`Welcome,`+ ` ${curr}`+`. You are number` + ` ${line.length} `+`in line.`);
  }
}
function nowServing(line){
  for ( let i=0; i<line.length; i++){
     var next = (`Currently serving `+`${line[i]}`+ `.`)
  } 
  line.shift(line[i]);
  if (line.length<=0){
  next = "There is nobody waiting to be served!"
}
return next
}

function currentLine(line){
  if (line.length>0){
    "The line is currently:" + line.join(i+1,line[i])
  }else{
    "The line is currently empty."
  }
  
}