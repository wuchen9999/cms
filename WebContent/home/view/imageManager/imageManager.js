new Vue({
    el: '#fileVM',
    data: {
        fileList: [],
        file: {
            id: '',
            empName: '',
            email: '',
            gender: '',
            birth: '',
            dept_id: ''
        }
    },
    created: function () {
        var _this = this;
        axios.post('http://localhost:8090/getFilesInfo')
            .then(function (res) {
                console.log(res);
                _this.fileList = res.data;
            })
            .catch(function (error) {
                alert(error)
            })
    },
    methods: {
        delFile: function (id) {
            // var _this=this;
            axios.get('/delFile/' + id)
                .then(function () {
                    alert("删除成功");
                    window.location.reload();
                })
                .catch(function (error) {
                    alert(error)
                })
        },
        queryByFileId:function (id) {
            var _this = this;
            axios.get('/queryByFileId/'+id)
                .then(function(res) {
                    emp.emp = res.data;
                })
                .catch(function(error) {
                    alert(error)
                })
        }
    }
})