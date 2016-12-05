var isExistsMob = false;
$("#MobileChange").click(function () {
    $.popupDiv({
        title: "修改手机", url: "http://i.zhaopin.com/usermaster/UsermasterManage/EditUserMobile" + '?t=' + (+new Date()), success: function () {
            $("#newMobel").val(newMob);
            $("#newMobel").validate({
                rules: [{
                    text: "请输入正确的手机号",
                    rule: "empty"
                },
                    {
                        text: "请输入正确的手机号",
                        rule: function (s) {
                            if (/^[1][34578]\d{9}$/.test(s.val())) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    },

                {
                    text: "该手机号已存在，请重新输入",
                    rule: function (s) {
                        if (s.val() == $("#oldMoblie").text()) {
                            return false;
                        }
                        var data = 'userName=' + s.val() + '&t=' + (+new Date());
                        var url = 'http://i.zhaopin.com/Login/LoginApi/VerifyUser'
                        $.ajax({
                            type: "get",
                            async: false,
                            url: url,
                            data: data,
                            dataType: "jsonp", //数据类型为jsonp  
                            jsonp: "jsoncallback", //服务端用于接收callback调用的function名的参数  
                            beforeSend: function (XMLHttpRequest) {
                                
                            },
                            success: function (msg) {
                                var sta = parseInt(msg);
                                if (sta == 1) {
                                    isExistsMob = true;
                                    return true;
                                }
                                if (sta == 5 || sta == 6) {
                                    isExistsMob = false;
                                    return false;
                                }
                            },

                            error: function () {
                                return false;
                            }
                        });
                        return isExistsMob;
                    }
                 
                }
                ],
                validText: "",
                tipTagId: "newMobel_warn"
            });
            $("#code_num").validate({
                rules: [{
                    text: "请输入验证码",
                    rule: "empty"
                }, {
                    text: "验证码为6位数字",
                    rule: "length",
                    min: 6,
                    max: 6
                }
                ],
                validText: "",
                tipTagId: "verify_code_info"
            });
        },
        buttons: {
            "提 交": function () {
                $.validate("frmModifyMobile",
                    function () {
                        var param = "oldMoblie=" + $("#oldMoblie").text() + "&newMobile=" + $("#newMobel").val() + "&verifyCode=" + $("#code_num").val();
                        $.post("http://i.zhaopin.com/usermaster/UsermasterManage/ChangeMobile", param, function (data) {
                            if (data.Code != "0") {
                                var msg = data.Msg;
                                if (data.Msg == "") {
                                    msg = "修改失败！";
                                }
                                var info_yz = $("#verify_code_info");
                                info_yz.addClass("tip-x-validate-error");
                                info_yz.html(msg);
                                info_yz.css('display', 'block');
                            } else {
                                window.clearInterval(interval);
                                tInterval = 60;
                                $("#mob").text($("#newMobel").val());
                                $("#contact_num0").val($("#newMobel").val());
                                $("#ismobbind").removeClass("mobile_nobd");
                                $("#ismobbind").addClass("mobile_bd");
                                $("#ismobbind").text("已绑定")
                                newMob = "";
                                dyweTrackEvent('cuserregister', 'mobileverifiedsubmit');
                                $.popupDiv({
                                    title: "修改手机",
                                    msg: "绑定成功!",
                                    buttons: {
                                        "关 闭": function () {
                                            $.popupClose();
                                        }
                                    }
                                });
                                // $.popupClose();

                            }
                        });
                    }, function () {

                    });
            }
        },
        width: 414
    });
    return false;
});

$("#MobileBind").click(function () {
    $.popupDiv({
        title: "手机绑定", url: "http://i.zhaopin.com/usermaster/UsermasterManage/BindUsermobile" + '?t=' + (+new Date()), success: function () {

            $("#verifyCode").validate({
                rules: [{
                    text: "请输入验证码",
                    rule: "empty"
                }, {
                    text: "验证码为6位数字",
                    rule: "length",
                    min: 6,
                    max: 6
                }
                ],
                validText: "",
                tipTagId: "verify_code_info"
            });
            $("#editPhone").click(function () {
                $("#MobileChange").trigger("click");
            });

        },
        buttons: {
            "提 交": function () {
                //if (($.trim($("#verify_code_info").html()) == "" || $.trim($("#verify_code_info").html()).indexOf("频繁") > 0)) {
                $.validate("frmBindMob", function () {
                    var param = "mobile=" + $.trim($("#mobile").text()) + "&verifyCode=" + $("#verifyCode").val();
                    $.post("http://i.zhaopin.com/usermaster/UsermasterManage/BindMobile", param, function (data) {
                        if (data.Code != "0") {
                            var msg = data.Msg;
                            if (data.Msg == "") {
                                msg = "手机绑定失败！";
                            }
                            $("#verify_code_info").html(data.Msg);
                        } else {
                            window.clearInterval(interval);
                            tInterval = 60;
                            $("#ismobbind").removeClass("mobile_nobd");
                            $("#ismobbind").addClass("mobile_bd");
                            $("#ismobbind").text("已绑定")
                            $.popupDiv({
                                title: "手机绑定",
                                msg: "验证成功!",
                                buttons: {
                                    "关 闭": function () {
                                        $.popupClose();
                                    }
                                }
                            });
                        }
                    });
                },
                function () {
                });
            }
            // }
        }, width: 414
    });
    return false;
});