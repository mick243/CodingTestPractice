function solution(n) {
    for( x = 1; x*x<=n; x++)
    if(x*x === n){
        answer = (x+1)*(x+1);
    }else{
        answer = -1;
    }
    return answer;
}

//math.sqrt 사용하는 방법도 있다.
