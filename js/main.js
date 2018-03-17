//JavaScriptでおみくじを作成: 確率を凶80%,中吉20%,大吉5%にしてます

(function(){
  'use strict';

  var btn = document.getElementById('btn');

/* Math.floorとMath.random: ３をかけることで0~2を表示させる */
  btn.addEventListener('click', function(){
    var n = Math.random();
    if (n < 0.05) {
      this.textContent = '大吉'; //5%
    } else if (n < 0.2) {
      this.textContent = '中吉'; //15%
    } else {
      this.textContent = "凶"; //80%
    }
    // var results = ['大吉', '中吉', '凶', '末吉'];
    // var n = Math.floor(Math.random() * 4);
    // var n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];
    /* ifまたはswith文で0~2の数字を文字に変更していく */
    switch (n) {
      case 0:
        this.textContent = '大吉';
        break;
      case 1:
        this.textContent = '中吉';
        break;
      case 2:
        this.textContent = '凶';
        break;
    }
    // if (n === 0) {
    //   this.textContent = '大吉';
    // } else if (n === 1) {
    //   this.textContent = '中吉';
    // } else {
    //   this.textContent = '凶';
    // }
    // this.textContent = n;
  });

  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function(){
    this.className = ''
  });

})();
