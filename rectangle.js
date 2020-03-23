/* global $:true*/ 
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  $btnCal.click(function(){
    if(!validate('#width')||!validate('#height')) return;

    var w = Number($width.val()),
        h = Number($height.val());

    var rect = rectangle();
    $perimeter.val(rect.perimeter(w, h));
    $area.val(rect.area(w, h));

  }); 
  function validate(field){
    // det DOM error message
    var $data=$(field),
        $msg=$(field+'-validation-message');
    // null
    if($data.val()===''){
      $msg.html("不能为空");
      $data.select();
      return false;
    }
    // number
    if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val()))){
      $msg.html("必须是数值");
      $data.select();
      return false;
    }
    // validate>0
    if($data.val()<0){
      $msg.html("必须大于0");
      $data.select();
      return false;
    }
    return true;
  }
});