$("#on").click(function(){
    $.ajax({
        type: 'GET',
        url:"https://192.168.0.15/?LED=ON",  
        success:function(data) {
         alert('ok'); 
        }
      });
});


$("#off").click(function(){
    $.ajax({
        type: 'GET',
        url:"https://192.168.0.15/?LED=OFF",   
        success:function(data) {
         alert('ok'); 
        }
      });
});