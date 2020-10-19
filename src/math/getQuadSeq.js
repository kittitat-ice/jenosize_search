
export default function getQuadSeq(arr, numOfAns) {
  var first = [];
  var second = new Set();
  var difference = '';
  var count = 1;
  var _numOfAns = numOfAns || 1;
  var ans = [];
  var linear = [];
  var linearDif = '';

  while (count <= arr.length) {

    if (count === 1) {
      first.push(arr[count] - arr[count-1])
    } else if (count < arr.length) {
      first.push(arr[count] - arr[count-1])
      second.add(first[count-1] - first[count-2])
    } else if (count === arr.length && second.size === 1) {
      difference = second.values().next().value;
    } else {
      console.log('Invalid Quadratic Sequences')
      return 'Invalid Quadratic Sequences';
    }
    count++;
  }
  
  let a = difference * 0.5;

  for (let i = 1; i <= arr.length; i++) {
    linear.push((arr[i - 1]) - (a * Math.pow(i, 2)));
  }
  linearDif = linear[1] - linear[0];

  let b = linearDif;
  let c = arr[0] - (a + b);

  //console.log(first)
  //console.log(second)
  //console.log(linear)
  //console.log(difference)
  //console.log(linearDif)

  for (let i = 1; i <= _numOfAns; i++) {
    ans.push(a * Math.pow(arr.length + i, 2) + (b * (arr.length + i)) + (c))
    console.log("Ans"+ i + ": " + a * Math.pow(arr.length + i, 2) + ' + ' + (b * (arr.length + i)) + ' + ' + (c))
  }
  console.log("INPUT:",arr)
  console.log("ANS:",ans)
  return ans;
}