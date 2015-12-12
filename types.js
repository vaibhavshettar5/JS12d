var inbx=document.querySelector("input[name='ae']");
inbx.addEventListener('keydown',function(e){document.querySelector('p').innerHTML='<b>'+this.value+'</b>';});