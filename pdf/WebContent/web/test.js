
var stamm=this;
var indextxt = new Array("Loading...","Connecting...");
var indexpro = new Array("Wrong Login data<br>Is the username correct?<br>Case sensitivity for your password?<br><a href=passlost>Send password via email</a>"
		                ,"Missing Name"
		                ,"Missing Password"
		                ,"Missing e-mail"
		                ,"Please accept the rules"
		                ,"Wrong e-mail","","","",""
		                ,"You are allready a member<br><a href=?>Please login</a>"
		                ,"Name already exists"
		                ,"e-mail already exists"
		                ,"Redirecting...");
var landingp = 0;

function ppdga2(didb){ 
	didb.onreadystatechange=function(){  
		if(didb.readyState==3){   
			document.getElementById("hkmdwa").innerHTML=indextxt[0];  
		}  
		if(didb.readyState==4&&didb.status==200){   
			pvfktz(didb.responseText);  
		} 
	};
}
function pvfktz(darfs){
	var darf=darfs.split("@"); 
	if(darf[0]=="N"){ 
		if(darf[1]==99)location.href='passlost'; 
		document.getElementById("hkmdwa").innerHTML="<font color=FF0000>"+indexpro[darf[1]]+"<br>"; 
		document.getElementById("loginpass").value=""; 
		document.getElementById("bigbutton").style.visibility="visible"; 
		if(darf[1] == 11) document.getElementById("loginname").value = document.getElementById("loginname").value + Math.floor((Math.random()*10));
	}else{  
		document.getElementById("vertikan").innerHTML=darf[1];  
		if(window.execScript){
			window.execScript(darf[2]);
		}else{
			stamm.eval(darf[2]);
		} 
	}
}
function lns2(dida){ 
	dida.onreadystatechange=function(){  
		if(dida.readyState==4&&dida.status==200){
			var darffs=dida.responseText;   
			var darx=darffs.split("@");   
			newsnr = darx[2];   
			nevsnr = darx[3];   
			nezsnr = darx[4];   
			kfo = darx[5];   
			res1 = darx[6];   
			res2 = darx[7];   
			res3 = darx[8];   
			res4 = darx[9];
			credits = darx[10];   
			titanium = darx[11];   
			nezsnra = darx[12];  
			fudsi = darx[13];  
			if(darx[1] != "") qx(darx[1]);   
			if(darx[0] != ""){    
				if (window.execScript){     
					window.execScript(darx[0]);    
				}else{     
					stamm.eval(darx[0]);    
				}
			}   
			staaa();  
		} 
	};
}
function lnsc2(didfa){ 
	didfa.onreadystatechange=function(){  
		if(didfa.readyState==3){
			rcb();
		} 
	};
}
function ppdga(){     
	var didb;
	ifram=1000000;     
	if(window.XMLHttpRequest){       
		didb=new XMLHttpRequest();
    }else{       
    	 didb=new ActiveXObject("Microsoft.XMLHTTP");     
    }     
	ppdga2(didb);
	document.getElementById("bigbutton").style.visibility="hidden";     
	didb.open("POST","?sh=Y");     
	didb.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    didb.send("loginname="+document.getElementById("loginname").value+"&loginpass="+encodeURIComponent(document.getElementById("loginpass").value));     
    document.getElementById("hkmdwa").innerHTML=indextxt[1];     
    document.getElementById("bigbutton").visible = false;
}
function ppdgax(){ 
	if(document.getElementById("loginname").value != ""){   
		if(document.getElementById("loginpass").value != ""){     
			if(document.getElementById("loginemai").value != ""){       
				if(document.getElementById("agb").value == 2 || document.getElementById("agb").checked == 1){
					var didb; 
					ifram=1000000;         
					if(window.XMLHttpRequest){           
						didb=new XMLHttpRequest();         
					}else{           
						didb=new ActiveXObject("Microsoft.XMLHTTP");         
					}
					ppdga2(didb);
					document.getElementById("bigbutton").style.visibility="hidden";         
					didb.open("POST","?qq=Y");         
					didb.setRequestHeader("Content-Type","application/x-www-form-urlencoded");         
					didb.send("loginname="+document.getElementById("loginname").value+"&loginpass="+document.getElementById("loginpass").value+"&loginemai="+document.getElementById("loginemai").value+"&ref22="+document.getElementById("ref22").value+"&landingp=");
					document.getElementById("hkmdwa").innerHTML=indextxt[1];         
					document.getElementById("bigbutton").visible = false;   
    
				}else  document.getElementById("hkmdwa").innerHTML="<font color=FF0000>"+indexpro[4];
			}else  document.getElementById("hkmdwa").innerHTML="<font color=FF0000>"+indexpro[3];   
		}else  document.getElementById("hkmdwa").innerHTML="<font color=FF0000>"+indexpro[2]; 
	}else  document.getElementById("hkmdwa").innerHTML="<font color=FF0000>"+indexpro[1];
}
function ldsdq(lufig){ 
	var scagf=document.createElement("script");
	scagf.setAttribute("type","text/javascript"); 
	scagf.setAttribute("src",lufig);
	document.getElementsByTagName("head")[0].appendChild(snode);
} 