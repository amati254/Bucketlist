function additembucket(item){
  $(".bucketlistitems").append("<l1>"+item+"</li>")
}
function addextraitemcart(item){
  var extraitems = $("#textarea").val();
  $(".cartitems").append("<l1>"+extraitems+"</li>")
}
$(document).ready(function(){
});
