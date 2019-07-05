var canvases = new Array();
canvases.push(document.getElementById("canvas"));
canvases.push(document.getElementById("canvas2"));
    

for(var j=0;j<canvases.length;j++){ 
    
     var context = canvases[j].getContext("2d");   

    context.beginPath();   
    //设置是个顶点的坐标，根据顶点制定路径 
    for (var i = 0; i < 5; i++) {   
        
        context.lineTo(Math.cos((18+i*72)/180*Math.PI)*12.5/2+15,  
                        -Math.sin((18+i*72)/180*Math.PI)*12.5/2+32.6);   
        /*context.lineTo(Math.cos((18 + i * 72 ) / 180 * Math.PI) * R + x,  //context：canvas画柄，r：小圆半径，R：大圆半径，x：圆心x左边，y：圆心y坐标
        -Math.sin((18 + i * 72 ) / 180 * Math.PI) * R + y);
        context.lineTo(Math.cos((54 + i * 72 ) / 180 * Math.PI) * r + x, 
        -Math.sin((54 + i * 72 ) / 180 * Math.PI) * r + y); */


        context.lineTo(Math.cos((54+i*72)/180*Math.PI)*5/2+15,   
                        -Math.sin((54+i*72)/180*Math.PI)*5/2+32.6);   

    }   

    context.closePath();  
    //设置边框样式以及填充颜色 
    context.lineWidth="1";  
    context.fillStyle = "#ffffff";   
    context.strokeStyle = "#F5270B";   
    context.fill();   
    context.stroke();
}
