(()=>{var e=[[0,0,0],[0,0,0],[0,0,0]],n=document.querySelectorAll(".case"),t=!0;function i(i,r){for(var c=0,d=0,a=0,o=0,s=0,u=e.length-1,w=0;w<e.length;w++){if(d+=e[i][w],a+=e[w][r],o+=e[w][w],s+=e[w][u-w],3==d||3==a||3==o||3==s){for(var f=0;f<3;f++)3==d?n[l(i,f)].classList.add("cellwingreen"):3==a?n[l(f,r)].classList.add("cellwingreen"):3==o?n[l(f,f)].classList.add("cellwingreen"):3==s&&n[l(f,u-f)].classList.add("cellwingreen");return document.getElementById("winner").innerText="Green Win",void(t=!1)}if(-3==d||-3==a||-3==o||-3==s){for(var g=0;g<3;g++)-3==d?n[l(i,g)].classList.add("cellwinpink"):-3==a?n[l(g,r)].classList.add("cellwinpink"):-3==o?n[l(g,g)].classList.add("cellwinpink"):-3==s&&n[l(g,u-g)].classList.add("cellwinpink");return document.getElementById("winner").innerText="Pink Win",void(t=!1)}for(var m=0;m<e[w].length;m++)0==e[w][m]&&(c+=1)}if(0==c)return document.getElementById("winner").innerText="Tie game",void(t=!1)}function l(e,n){return 3*e+n}n.forEach((function(r,c){r.addEventListener("click",(function(){document.getElementById("winner").innerText="who will win ?";var d=c%3,a=(c-d)/3;0==e[a][d]&&0!=t?(e[a][d]=1,r.classList.add("j1couleur"),i(a,d),setTimeout((function(){!function(){for(var r=[],c=0;c<e.length;c++)for(var d=0;d<e[c].length;d++){var a=e[c][d];if(console.log(a),0==a){var o=l(c,d);r.push(o)}}var s=r[Math.floor(Math.random()*r.length)],u=s%3,w=(s-u)/3;0==e[w][u]&&1==t&&(e[w][u]=-1,n[s].classList.add("j2couleur"),i(w,u))}()}),500)):document.getElementById("winner").innerText="Allready cliqued !"}))})),document.getElementById("restart").addEventListener("click",(function(){e=[[0,0,0],[0,0,0],[0,0,0]],t=!0,document.getElementById("winner").innerText="who will win ?",n.forEach((function(e){e.classList.remove("j1couleur","j2couleur","cellwingreen","cellwinpink")}))}))})();