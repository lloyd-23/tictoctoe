function fibonacci_series(n) {  // "6" //input user number
  n = parseFloat(n)           // 6 //same lang
  
  if (n === 2) {                  // false //paulit ulit hanggang magtrue
    return [0, 1];            
  } else {
    const diminish = n - 1               // 5 
    var series = fibonacci_series(diminish);    // [0, 1, 1, 2 ,3] //galing sa return
    
    const seriesLength = series.length          // 5 //bilang kung gano kahaba
    const a = seriesLength - 1                  // 4
    const b = seriesLength - 2                  // 3
    
    const append = series[a] + series[b]        // 3 + 2 = 5 //number ng bilang ,simula sa one

    series.push(append);                        // [0, 1, 1, 2, 3 ,5] //irereturn
    
    return series;
  }
}

// [0, 1] (2)
// [0, 1, 1] (3)
// [0, 1, 1, 2] (4)
// [0, 1, 1, 2, 3] (5)
// [0, 1,1, 2, 3, 5] (6)



function generateNumber() {
  let countInput = document.getElementById("count")
  let countValue = countInput.value

  document.getElementById("output").innerHTML = fibonacci_series(countValue);

}