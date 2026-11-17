const confirmEnding = (mainStr,matchStr) => {
  return mainStr.substring(mainStr.length-matchStr.length,mainStr.length)===matchStr ? true : false
}

console.log(confirmEnding("Bastian", "n"))
