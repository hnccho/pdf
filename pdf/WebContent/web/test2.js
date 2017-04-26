window.iaaa = (function(){
	return window.requestAnimationFrame ||window.webkitRequestAnimationFrame ||window.mozRequestAnimationFrame ||
		function(ifff){window.setTimeout(ifff,1000/60);
	};
})();
function ree(){  
	zl--;
	if(!zl) iaaa(iloop);
}
function iani(fud6d,nf7db,art,ijf78g,gikd7gfd){  
	var wi=art.width/gikd7gfd; 
	var ho=art.height; 
	var w2=(wi/2)|0;h2=(ho/2)|0;  
	fud6d+=-w2;
	nf7db+=-h2;  
	ibb.drawImage(art,wi*ijf78g,0,wi,ho,fud6d,nf7db,wi,ho); 
}
var idam=-1000, idami = 1;
var idan=-1000, idani = 1;
function iloop(){  
	if(iaktiv==1){    
		ifram++; 
		if(ifram % 100 == 0 && bup < 9) bup++;
		ibb.drawImage(icc,300,50,1200,600,0,0,1200,600);    
		iani(150,165,ihh,bup, 10);    
		ibb.drawImage(igg,100,200);
		for(i=1;i<=ianz;i++){  
			if(ipa[i]==1){    
				if(ipxx[i][ipwp[i]] > -10000){      
					var abst = Math.abs(ipx[i]-ipxx[i][ipwp[i]])+Math.abs(ipy[i]-ipyy[i][ipwp[i]]);      
					if(abst > 20){
						var wz = Math.atan2(-(ipx[i]-ipxx[i][ipwp[i]]),-(ipy[i]-ipyy[i][ipwp[i]]))/3.141592653*-36 + 36;        
						var wabst = Math.min(Math.abs(ipw[i]-wz-72),Math.min(Math.abs(ipw[i]-wz),Math.abs(ipw[i]-wz+72)));
						if(wabst > 1 && ifram % 3 == 0){          
							var dg = 1;          
							var summe1 = (ipw[i] - wz + 108) % 72;          
							var summe2 = (ipw[i] - wz + 72) % 72;
							if (summe1 > summe2) ipw[i]+=-dg; 
							else ipw[i]+= dg;          
							if (ipw[i] < 0) ipw[i]+=72;          
							if (ipw[i] >= 72) ipw[i]-=72;        
						}
						}else{ 
							if(ipxx[i].length > ipwp[i]+1) ipwp[i]++; 
						}      
						if(ipo[i][ipon[i]] == 0){        
							var wabst = Math.min(Math.abs(ipwt[i]-wz-72),Math.min(Math.abs(ipwt[i]-wz),Math.abs(ipwt[i]-wz+72)));        if(wabst > 1 && ifram % 3 == 0){
							var dg = 1;         
							var summe1 = (ipwt[i] - wz + 108) % 72;         
							var summe2 = (ipwt[i] - wz + 72) % 72;          
							if (summe1 > summe2) ipwt[i]+=-dg; 
							else ipwt[i]+= dg;          
							if (ipwt[i] < 0) ipwt[i]+=72;
							if (ipwt[i] >= 72) ipwt[i]-=72;        
						}      
					}
				}
				if(ipxx[i][ipwp[i]] < -10000){      
					if(ifram > -(ipxx[i][ipwp[i]]+10000)) ipwp[i]++;    
				}    
				if(ipo[i][ipon[i]]>0){      
					var j=ipo[i][ipon[i]];      
					var wz = Math.atan2(-(ipx[i]-ipx[j]),-(ipy[i]-ipy[j]))/3.141592653*-36 + 36;
					var wabst = Math.min(Math.abs(ipwt[i]-wz-72),Math.min(Math.abs(ipwt[i]-wz),Math.abs(ipwt[i]-wz+72)));      
					if(wabst > 1  && ifram % 3 == 0){        
						var dg = 1;        
						var summe1 = (ipwt[i] - wz + 108) % 72;
						var summe2 = (ipwt[i] - wz + 72) % 72;        
						if (summe1 > summe2) ipwt[i]+=-dg; 
						else ipwt[i]+= dg;        
						if (ipwt[i] < 0) ipwt[i]+=72;        
						if (ipwt[i] >= 72) ipwt[i]-=72;      
					}
					if(ifram==ipr[i][ipon[i]]){        
						idam = ifram-1; idami = i;       
					}
					if(ifram-1==ipr[i][ipon[i]] || ifram-2==ipr[i][ipon[i]]){        
						if(ifram-2==ipr[i][ipon[i]]) ibb.globalAlpha=0.3;
						ibb.beginPath();        
						ibb.moveTo(ipx[i]+(Math.sin(ipwt[i]/11.459155)*30), (ipy[i]-(Math.cos(ipwt[i]/11.459155)*30))/3);        
						ibb.lineTo(ipx[j], ipy[j]/3);        
						ibb.closePath();
						ibb.lineWidth = 2;        
						ibb.strokeStyle = "#FFFFAA";        
						ibb.stroke();        
						if(ifram-2==ipr[i][ipon[i]]) ibb.globalAlpha=1;      
					}      
					if(ifram-3==ipr[i][ipon[i]]){        
						ipa[j]=2; ipnr[j]=9;ipani[j]=ifram; idan = ifram-1; idani = j;
					}      
					if(ifram-150==ipr[i][ipon[i]]) ipon[i]++;    
				}    
				pggz = ipgz[i];    
				if(ipxx[i][ipwp[i]] < -10000) pggz = 0;    
				if(abst > 40 && ipg[i] < pggz) ipg[i]+=pggz/50;    
				if(abst < 20 && ipg[i] > 0) ipg[i]-=pggz/50;
				if(pggz == 0 && ipg[i] > 0) ipg[i]-=1/50;        
				if(ipg[i] > 1/50){      
					ipx[i]+=Math.sin(ipw[i]/11.459155)*ipg[i];      
					ipy[i]-=Math.cos(ipw[i]/11.459155)*ipg[i];    
				}
				if(ipnr[i]==1) iani(ipx[i],ipy[i]/3,iii,ipw[i],72);    
				if(ipnr[i]==1) iani(ipx[i],ipy[i]/3-10,ijj,ipwt[i],72);    
				if(ipnr[i]==2) iani(ipx[i],ipy[i]/3,ikk,ipw[i],72);    
				if(ipnr[i]==2) iani(ipx[i],ipy[i]/3-10,ill,ipwt[i],72);
			}  
			if(ipa[i]==2){    
				pggz = ipgz[i];    
				if(ipg[i] > 0) ipg[i]-=pggz/40;                
				if(ipg[i] > 1/50){      
					ipx[i]+=Math.sin(ipw[i]/11.459155)*ipg[i];      
					ipy[i]-=Math.cos(ipw[i]/11.459155)*ipg[i];
				}    
				ibb.drawImage(iqq,ipx[i]-30,(ipy[i]/3)-15);    
				var afram = ((ifram-ipani[i])/2)|0;    
				if(afram < 100) iani(ipx[i]+10,(ipy[i]/3)-20,ioo,afram,100);  
			}
		}      
		var tmp = 5 / (ifram-idam), tmp2 = 1.5 / (((ifram-idam)/30)+1);       
		var i= idami;      
		var idamx=ipx[i]+(Math.sin(ipwt[i]/11.459155)*30);      
		var idamy=(ipy[i]-(Math.cos(ipwt[i]/11.459155)*30))/3;
		if(tmp2 > 0.01 && ifram-idam > 0){       
			var tnp = (ifram-idam+35)/2;        
			ibb.globalAlpha = tmp2;        
			ibb.drawImage(iff,idamx-tnp,idamy-tnp,tnp*2,tnp*2);        
			ibb.globalAlpha = 1;
		}      
		if(tmp > 0.01){        
			ibb.globalCompositeOperation = "lighter";        
			ibb.globalAlpha = tmp - Math.floor(tmp);        
			ibb.drawImage(idd,idamx-200,idamy-100,400,200);        
			ibb.globalAlpha = 1;
			if(tmp >= 1) ibb.drawImage(idd,idamx-200,idamy-100,400,200);        
			if(tmp >= 2) ibb.drawImage(idd,idamx-200,idamy-100,400,200);        
			ibb.globalCompositeOperation = "source-over";
		}
		var tmp = 5 / (ifram-idan), tmp2 = 1.5 / (((ifram-idan)/30)+1);       
		var i= idani;      
		var idamx=ipx[i]+(Math.sin(ipwt[i]/11.459155)*30);      
		var idamy=(ipy[i]-(Math.cos(ipwt[i]/11.459155)*30))/3;
		if(tmp > 0.01){        
			ibb.globalCompositeOperation = "lighter";        
			ibb.globalAlpha = tmp - Math.floor(tmp);        
			ibb.drawImage(idd,idamx-300,idamy-150,600,300);
			ibb.globalAlpha = 1;        
			if(tmp >= 1) ibb.drawImage(idd,idamx-300,idamy-150,600,300);        
			if(tmp >= 2) ibb.drawImage(idd,idamx-300,idamy-150,600,300);
			ibb.globalCompositeOperation = "source-over";      
		}    
		ibb.drawImage(imm,100,200);    
		if(ifram > 700 && itsregis == 1){      
			if(ifram > 700 && ifram < 750){
				ibb.globalAlpha = (ifram-700)/50;        
				ibb.drawImage(ipp,130,250);        
				ibb.globalAlpha = 1;
			}      
			if(ifram >= 750 && ifram < 790 && ifram % 20 < 10) ibb.drawImage(ipp,130,250);      
			if(ifram >= 790) ibb.drawImage(ipp,130,250);
		}    
		if(ifram < 800) iaaa(iloop);  
	}
}
var iaa = document.getElementById("inx");
var ibb = iaa.getContext("2d"); 
var zl=14; 
var iwgu="";
var igg = new Image();
igg.onload = function(){
	ree();
	ibb.drawImage(igg,100,200);
};
igg.src = iwgu+"i/garage2a.png";
var icc = new Image();
icc.onload = function(){ree();};
icc.src = "i/startseite3.jpg";
var idd = new Image();
idd.onload = function(){ree();};
idd.src = iwgu+"i/licht.png";
var iee = new Image();
iee.onload = function(){ree();};
iee.src = iwgu+"i/indextank.png";
var iff = new Image();
iff.onload = function(){ree();};
iff.src = iwgu+"i/dampf2.png";
var ihh = new Image();
ihh.onload = function(){ree();};
ihh.src = iwgu+"i/g3.png";
var iii = new Image();
iii.onload = function(){ree();};
iii.src = iwgu+"i/panzer1a.png";
var ijj = new Image();
ijj.onload = function(){ree();};
ijj.src = iwgu+"i/panzer1b.png";
var ikk = new Image();
ikk.onload = function(){ree();};
ikk.src = iwgu+"i/panzer3a.png";
var ill = new Image();
ill.onload = function(){ree();};
ill.src = iwgu+"i/panzer3b.png";
var imm = new Image();
imm.onload = function(){ree();};
imm.src = iwgu+"i/garage2b.png";
var inn = new Image();
inn.onload = function(){ree();};
inn.src = iwgu+"i/licht3.png";
var ioo = new Image();
ioo.onload = function(){ree();};
ioo.src = iwgu+"i/tankexplo1a.png";
var ipp = new Image();
ipp.onload = function(){ree();};
ipp.src = iwgu+"i/indexpfeil"+sprache+".png";
var iqq = new Image();
iqq.onload = function(){ree();};
iqq.src = iwgu+"i/truemmer.png";
var iaktiv=1,ifram=0;
var bup=0;ianz=5;ifram=0;ipnr=[];ipani=[];ipa=[];ipx=[];ipy=[];ipxx=[];ipyy=[];ipw=[];ipwt=[];ipg=[];ipgz=[];ipo=[];ipr=[];ipwp=[];ipon=[];

ipani[1]=0; ipnr[1]=1; ipa[1]=1; ipx[1]= 600; ipy[1]=1750; ipwp[1]=0; 
ipxx[1]=[400,750];                           
ipyy[1]=[1400,1900];            
ipw[1]=8; ipwt[1]=8; ipg[1]=0; ipgz[1]=2; ipo[1]=[0]; ipon[1]=0; ipr[1]=[0];

ipani[2]=0; ipnr[2]=2; ipa[2]=1; ipx[2]= 207; ipy[2]=280*3; ipwp[2]=0; 
ipxx[2]=[-10020,207+90,217+90,-10800,700,600];    
ipyy[2]=[0,280*3+90,280*3+280,600,600,-100]; 
ipw[2]=27; ipwt[2]=36; ipg[2]=0; ipgz[2]=1; ipo[2]=[1,0]; ipon[2]=0; ipr[2]=[350,0];

ipani[3]=0; ipnr[3]=1; ipa[3]=1; ipx[3]= 900; ipy[3]=2250; ipwp[3]=0; 
ipxx[3]=[450,1250];                           
ipyy[3]=[1600,1100];            
ipw[3]=36; ipwt[3]=36; ipg[3]=0; ipgz[3]=2; ipo[3]=[0]; ipon[3]=0; ipr[3]=[0];

ipani[4]=0; ipnr[4]=2; ipa[4]=1; ipx[4]= 207; ipy[4]=280*3; ipwp[4]=0; 
ipxx[4]=[-10250,207+90,217+90+60,-10800,800,700]; 
ipyy[4]=[0,280*3+90,280*3+230,600,600,-100]; 
ipw[4]=27; ipwt[4]=36; ipg[4]=0; ipgz[4]=1; ipo[4]=[3,0]; ipon[4]=0; ipr[4]=[650,0];

ipani[5]=0; ipnr[5]=2; ipa[5]=1; ipx[5]= 207; ipy[5]=280*3; ipwp[5]=0; 
ipxx[5]=[-10400,207+90,217+90+120,-10800,900,800];
ipyy[5]=[0,280*3+90,280*3+180,600,600,-100]; 
ipw[5]=27; ipwt[5]=36; ipg[5]=0; ipgz[5]=1; ipo[5]=[0]; ipon[5]=0; ipr[5]=[0];
