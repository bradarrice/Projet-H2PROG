var imageToDel =[];
$("#imagesOfAnimal img").on("click",function(event){
   
    if($(this).hasClass("border-danger")){
        $(this).removeClass("border-danger");
        $(this).css("border","");
        var pos = imageToDel.indexOf(event.target.id);
                  imageToDel.splice(pos,1)
    }else{
        $(this).addClass("border-danger");
        $(this).css("border","5px solid");
        imageToDel.push(event.target.id);
       
    }
   var listImage ="";
   for(var i =0; i<imageToDel.length;i++){
    listImage+=imageToDel[i];
    if(i<imageToDel.length-1) listImage+="-"
   }
   $("#imageToDelete").val(listImage);

});

$("#nbImage").on("keyup click",function(){
    var nbImages=$(this).val();
     var input = ""
     for(i=0; i<nbImages; i++){
        input +="<input type='File' name='image"+i+"' id='image"+i+"'/> </br>";
     }
     $("#imageToAdd").html(input);
});
