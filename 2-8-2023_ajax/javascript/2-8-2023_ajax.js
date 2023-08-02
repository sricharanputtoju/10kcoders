const xml=new XMLHttpRequest();
let array;
xml.open('GET','https://fakestoreapi.com/products',true)
xml.onload=function(){
    if(xml.status===200){
       array=JSON.parse(xml.responseText)
        const card=document.createElement("div");
card.className="parent";
let str="";
for(i=0;i<array.length;i++){
    str+= "<div class=border>"
    str+="<img src="+array[i].image+" class=img>"
    str+="<h1 class=h1>"+array[i].category+" </h1>"
    str+="<h2 class=h2>"+"Price :"+array[i].price+"</h2>"
    str+="<p>"+array[i].description+"</p>"
    str+="</div>"
}
    

card.innerHTML=str
document.body.appendChild(card)
    }
}
xml.send();