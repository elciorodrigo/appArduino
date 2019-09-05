$("#on").click(function(){
    $.ajax({
        crossDomain: true,
        type: 'GET',
        url:"http://192.168.137.232/5/off",  
        success:function(data) {
        
        }
      });
});


$("#off").click(function(){
    $.ajax({
        crossDomain: true,
        type: 'GET',
        url:"http://192.168.137.232/5/on",   
        success:function(data) {
        
        }
      });
});
