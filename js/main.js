const Main = {
    
    init: function(){
       this.cacheSelectors()
       this.bindEvents() 
    },

    cacheSelectors: function() {
        this.checkbuttons = document.querySelectorAll('.check')
    },

    bindEvents: function() {
        this.checkbuttons.forEach( function(button){
            button.onclick = function(){
                
            }
        })
    },





}

Main.init()