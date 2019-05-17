(function(w, h) {
    var p1map = ['~ss~~~~s~~','~~~~~~~~~~','~~~~s~~~~s','~s~~~~s~~s','~s~~~~s~~s','~s~~~~~~~~','~~~~~~~~s~','~~~~ss~~~~','~s~~~~~~~~','~~~~ssss~~'];
    var p2map = ['~~~s~~~~ss','~s~s~~~~~~','~~~s~~~~~~','~~~s~~~s~~','~~~~~~~s~~','~s~~s~~s~~','~s~~~~~~~~','~s~s~~~~~~','~~~~~ss~~~','ss~~~~~~s~'];
    var p1 = document.querySelector('#p1'), p2 = document.querySelector('#p2');
    for (i=0;i<w;i++) for (j=0;j<h;j++) {
        div1 = document.createElement('div');
        div1.id = i+'_'+j, div1.className = p1map[i][j] == 's' ? 's' : 'w';
        p1.appendChild(div1);
        div2 = document.createElement('div');
        div2.className = p2map[i][j] == 's' ? 's' : 'w';
        div2.onclick = function () { if (fire(this)) backfire(); };
        p2.appendChild(div2);
     }
    function fire(el) {
        if (el.className == 'd' || el.className == 'm') return false;
        el.className = el.className == 's' ? 'd' : 'm';
        if (document.querySelectorAll('#p2 .s').length === 0) {
            alert('You have won!'); 
            return false;
        }
        if (el.className == 'm') return true;
    }
    function backfire() {
        for (i=w*h;i>0;i--) {
            var targets = document.querySelectorAll('#p1 .s, #p1 .w');
            if (targets.length === 0 || fire(targets[Math.floor(Math.random() * targets.length)])) break;
        }
        if (document.querySelectorAll('#p1 .s').length === 0) alert('You have lost!');
    }
})(10, 10);
