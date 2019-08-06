
var fileVM =  new Vue({
    el:'#fileVM',
    data : {data:""},
    beforeCreate:function(){
        var url="http://localhost:8090/getFilesInfo";
        var _self=this;
        $.post("http://localhost:8090/getFilesInfo",function(data){
            _self.data=eval("(" + data +")");
        })
    }
});
