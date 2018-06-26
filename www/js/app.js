$("#on").click(function(){
    $.ajax({
        crossDomain: true,
        type: 'GET',
        url:"http://192.168.0.15/?LED=ON",  
        success:function(data) {
         alert('ok'); 
        }
      });
});


$("#off").click(function(){
    $.ajax({
        crossDomain: true,
        type: 'GET',
        url:"http://192.168.0.15/?LED=OFF",   
        success:function(data) {
         alert('ok'); 
        }
      });
});