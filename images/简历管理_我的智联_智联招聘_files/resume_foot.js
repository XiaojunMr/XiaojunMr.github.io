
var url = document.location.href;
$("#hd2011mainNav2-Box ul li a").each(function () {
    if (url == "http://i.zhaopin.com/")
        url = "http://i.zhaopin.com/home/index";
    var href = $(this).attr("href");
    if ($(this).attr("href") == "http://i.zhaopin.com")
        href = "http://i.zhaopin.com/home/index";

    if (url.indexOf(href) >= 0) {
        $(this).parent().addClass("hd2011current");
    }
});


if (url.indexOf("resume_list.asp") >= 0 || url.indexOf("resume_hits.asp") >= 0 || url.indexOf("job_letter.asp") >= 0) {
    $("#resume_li_mng").addClass("hd2011current");
}
if (url.toUpperCase().indexOf("jobpostrecord/Index".toUpperCase()) >= 0 || url.indexOf("jobmng_maillist.asp") >= 0 || url.toUpperCase().indexOf("jobpostrecord/JobHistory".toUpperCase()) >= 0) {
    $("#apply_li").addClass("hd2011current");
}



var email = new MZ_REG.formEle(true, "email", null, "email_info", ['', '', '请输入新的注册邮箱', 'E-mail地址长度不能超过100位！', '请输入正确的邮箱', '该邮箱已被注册', '[%%email_regErrShow%%]', '检测到您使用雅虎邮箱注册，此邮箱即将停止服务，请更换为其他'], ['%%email_regerr%%']);

function checkRegForm() {
    var f = document.regform;
    var flag = regForm.checkForm();
    return flag;
}
function idfn(id) { return document.getElementById(id); }
/**邮箱验证**/
idfn("email").onfocus = function () {
    this.parentNode.className = "emailaddrr";
}
idfn("email").onblur = function () {
    email.fnBlur();
    if (email.checkData(this) == "0") { MZ_REG.checkMailByAJAX(this.form.email); } else {
        this.parentNode.className = "inputTexte";
    }
}

/**提交验证**/
idfn("nextstepbtn").onclick = function () {
    if (idfn("email_info").className == "msg_error") { return false; }
    if (checkRegForm()) {
        var newEmail = $("#email").val();
        var oldEmail = $("#emailOld").val();
        $.ajax({
            url: "http://i.zhaopin.com/usermaster/UsermasterManage/ChangeEmail",
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: { "email": newEmail },
            success: function (result) {
                switch (result.Code + "") {
                    case "0":
                        $("#emailOld").val(newEmail);
                        $("#emailshow").val(newEmail);
                        $("#email1").val(newEmail);
                        $("#oldemail").html(newEmail);
                        $("#emailtips a").html(newEmail);
                        $(".u_email").html("邮箱：" + newEmail);
                        $("#newwid2").hide();
                        $("#divMask").remove();
                        $.popupDiv({ title: "邮箱验证", url: "/home/activeEmail?email=" + oldEmail + "&l=" + $("#loginNameOld").val() + "&t=" + Date.parse(new Date()), width: 414, heigth: 300 });
                        $("#email").val("").parent().addClass("cenclebtn");
                        $("#email_info").text("");
                        break;
                    default:
                        $("#email_info").html(result.Msg);
                        break;
                }
            },
            error: function () {
                alert("操作异常，请稍后重试！");
            }
        });
        //$.ajax({
        //    url: "http://my.zhaopin.com/v5/handler/ChangeEmailHandler.ashx",
        //    dataType: 'jsonp',
        //    jsonp: 'jsoncallback',
        //    data: { "emailOld": oldEmail, "email": newEmail },
        //    success: function (json) {
        //        switch (json.status) {
        //            case "0":
        //                $("#emailOld").val(newEmail);
        //                $("#emailshow").val(newEmail);
        //                $("#email1").val(newEmail);
        //                $("#oldemail").html(newEmail);
        //                $("#emailtips a").html(newEmail);
        //                $(".u_email").html("邮箱：" + newEmail);
        //                $("#newwid2").hide();
        //                $("#divMask").remove();
        //                $.popupDiv({ title: "邮箱验证", url: "/home/activeEmail?email=" + oldEmail + "&l=" + $("#loginNameOld").val() + "&t=" + Date.parse(new Date()), width: 414, heigth: 300 });
        //                $("#email").val("").parent().addClass("cenclebtn");
        //                $("#email_info").text("");
        //                break;
        //            case "3":
        //                $("#email_info").html("必填项为空！");
        //                break;
        //            case "4":
        //                $("#email_info").html("email地址未做修改!");
        //                break;
        //            case "10008":
        //            case "10018":
        //                $("#email_info").html("用户不存在!");
        //                break;
        //            case "10028":
        //                $("#email_info").html("email已存在，请重新输入！");
        //                break;
        //            default:
        //                break;
        //        }
        //    },
        //    error: function () {
        //        alert("操作异常，请稍后重试！");
        //    }
        //});
    }
}


/**弹窗方法**/
function newWidfn(id) {
    $.popupBase.init({ div: $("#" + id), maskClose: false, posx: "center", posy: "center" });
}
/**点击出现修改邮箱的弹窗**/
$("#emailChange").click(function () {
    newWidfn("newwid2");
});
$("#newwid2 .close").click(function () {
    $("#email").val("").parent().addClass("cenclebtn");
    $("#email_info").text("");
});
var regForm = new MZ_REG.iniForm('regform');
