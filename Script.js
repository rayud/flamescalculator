$(document).ready(function(){
  $("button").click(function(){
    var myname = $("#myname").val();
    var partnerName = $("#partnername").val();
    var chara = 0;
    if (myname == partnerName) {
      chara = "it is not possible";
    } else {
    var arrnum1 = [0,0,0,0,0,0,0,0, 0, 0, 0,0, 0, 0, 0, 0, 0,0, 0, 0,0,0,0,0,0,0];
    var chararr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var arrnum2 = [0,0,0,0,0,0,0,0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0,0, 0, 0];
    var chararr2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (i = 0; i < myname.length; i++) {
      for (j = 0; j < 26; j++) {
        if(myname[i] == chararr1[j]) {
          arrnum1[j] = arrnum1[j] + 1;
          break;
        }
      }
    }
    for (i = 0; i < partnerName.length; i++) {
      for (j = 0; j < 26; j++) {
        if(partnerName[i] == chararr2[j]) {
          arrnum2[j] = arrnum2[j] + 1;
          break;
        }
      }
    }
    var diff = [];
    var sum = 0;
    for (i = 0; i < 26; i++){
      diff[i] = Math.abs(arrnum1[i] - arrnum2[i]);
      sum = sum + diff[i];
    }
    //console.log(sum);
    var flames = ["friends","lovers","affection","marriage","enimies","sisters"];
    var count = 0;
    var count1 = 6;
    //console.log(len);
    while (count1 > 1) {
      for (var i = 0; i < flames.length; i++) {
        if (flames[i] != 0) {
          count = count +1;
        }
        if (count == sum) {
          flames[i] = 0;
          count1--;
          count = 0;
          //console.log(flames);
        }
      }
    }
    for (var i = 0; i < 6; i++) {
      if (flames[i] != 0) {
        chara = flames[i];
      }
    }
  }
  document.getElementById("final").innerHTML = chara;
  });
});
