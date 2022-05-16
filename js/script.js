function check() {
    var c=0
    var q1=document.choice.q1.value;
    var q2=document.choice.q2.value;
    var q3=document.choice.q3.value;
    var q4=document.choice.q4.value;
    var q5=document.choice.q5.value;
    var result=document.getElementById('result');
    var choices=document.getElementById('choices');
    if (q1=="Hypertext Transfer Protocol") {c++}
    if (q2=="HTML") {c++}
    if (q3=="Styling") {c++}
    if (q4=="question") {c++}
    if (q5=="mkdir") {c++}

    if (c<=4) {
        result.textContent='Your result is ${c}. You can do better'
    }   else {
        result.textContent='Your result is ${c}. Excellent!'
    }

















}