function eatapp_ShowWidget (event) { 
    event.preventDefault(); 
    var url = event.target.href; 
    var widget = document.createElement('div'); 
    widget.id = 'eatapp-widget'; 
    widget.onclick = eatapp_CloseWidget;
    widget.innerHTML = '<style>#eatapp-widget{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1000;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center}.eatapp-container{position:relative;width:100%;max-width:450px;height:80%;background-color:#fff;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:2px}.eatapp-iframe-wrapper{border-radius:5px;box-sizing:border-box;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.eatapp-iframe{display:block;height:100%;width:100%;border:none}.eatapp-close-button{position:absolute;top:-12px;right:-12px;width:24px;height:24px;float:right;cursor:pointer;background-color:#fff;border-radius:100px;border:1px solid rgba(0,0,0,.4);box-sizing:border-box}@media (max-width:479px){.eatapp-iframe-wrapper{margin:0;border-radius:0}.eatapp-container{height:100%;max-width:none;border-radius:0}.eatapp-iframe{border-radius:0;padding:0;box-shadow:none}.eatapp-close-button{position:absolute;top:10px;right:10px;width:24px;height:24px;float:right;cursor:pointer;background-color:transparent;box-shadow:none;border-radius:0;border:none}}</style><div class=eatapp-container><div class=eatapp-iframe-wrapper><iframe class=eatapp-iframe src="' + url + '"></iframe></div><img class=eatapp-close-button onclick=eatapp_CloseWidget.apply(this,arguments) src="https://d183cnjuwjcs99.cloudfront.net/assets/widget/widget-iframe-close-button.png"></div>';
    document.body.appendChild(widget) 
} 

function eatapp_CloseWidget (event) { 
    event.stopPropagation(); 
    var widget = document.getElementById('eatapp-widget'); 
    document.body.removeChild(widget) 
}