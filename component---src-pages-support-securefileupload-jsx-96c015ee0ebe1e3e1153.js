(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"Wox+":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));t("sPse");var i=t("VbXa"),r=t.n(i),a=t("q1tI"),o=t.n(a),s=t("6uTu"),l=t("qKvR"),d=function(n){function e(){return n.apply(this,arguments)||this}r()(e,n);var t=e.prototype;return t.componentDidMount=function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.innerHTML='function isFormValid() {\nvar isValid = true;\nif (!/(.)@(.){2,}\\.(.+){2,}/.test($("#email").val())) {\nalert("You did not provide a valid email address");\nisValid = false;\nreturn isValid;\n}\n$("#dropzone_form input[type=text]").each(function() {\nif (isValid && this.value.trim() == "") {\nalert("You must complete all input fields");\nisValid = false;\nreturn isValid;\n}\n});\nif (isValid && widget.nbrOfFilesAttached < 1) {\nalert("You did not attach a file");\nisValid = false;\nreturn isValid;\n}\nreturn isValid;\n}\n\nfunction submitHostedDropzone(url) {\nvar postData = {};\npostData["name"] = url_identifer;\npostData["email"] = $("#email").val();\npostData["packageCode"] = widget.packageCode;\npostData["publicApiKey"] = dropzoneId;\n$.post(\nsendSafelyHost + "/auth/json/?action=submitHostedDropzone",\npostData,\nfunction(result) {\nif (result.integrationUrls !== undefined) {\nfor (i = 0; i < result.integrationUrls.length; i++) {\nvar integrationUrl = result.integrationUrls[i];\n//Third party form integration...do post to URL\nvar postData = {};\npostData["digest"] = result.digest;\npostData["data"] = result.data;\npostData["secureLink"] = url;\n$("#dropzone_form input[type=text]").each(function() {\npostData[this.name] = this.value;\n});\n$.post(\nintegrationUrl,\npostData,\nfunction(json) {\nif (json.error != undefined) {\nalert(json.error);\n$("#spinner").hide();\n} else {\n//success\n$("#dropzone_form").hide();\n$("#submit_done").show();\n}\n},\n"json"\n);\n}\n}\n}\n);\n}\n\nfunction submitForm() {\nif (isFormValid()) {\n$("#spinner").show();\nwidget.setUnconfirmedSender(\n$("#email")\n.val()\n.toLowerCase()\n);\nwidget.finalizePackage(\nfunction(url) {\nvar threadRegex = new RegExp("thread=[A-Za-z0-9-]+");\nvar threadId = threadRegex\n.exec(url)\n.toString()\n.substr(7);\n$("#dropzone-thread-id").text(threadId);\nsubmitHostedDropzone(url);\n},\nfunction() {\n$("#spinner").hide();\n}\n);\n}\n}\n\nvar el = document.createElement(\'a\');\nel.href = window.location;\nvar url_identifer = el.pathname.split("/")[el.pathname.split("/").length-1];\nvar widget;\nvar sendSafelyHost = "https://brex.sendsafely.com";\nvar dropzoneId = "1ywP6CAxIRi4hBV4O9aj0PO9HnwpO-BYlap--15bojQ";\n$(document).ready(function() {\nvar placeholderElement = $("#dropzone-placeholder-div");\nvar formField = $("#sendsafely-link");\nwidget = new SendSafelyDropzone(dropzoneId, placeholderElement, formField);\nwidget.url = sendSafelyHost;\nwidget.initialize();\n});\n',this.instance.appendChild(n)},t.render=function(){var n=this,e=this.props.location;return Object(l.e)(s.a,{location:e,whiteContentBackground:!0,whiteGutterBackground:!0},Object(l.e)("div",{ref:function(e){return n.instance=e}}),Object(l.e)("div",{dangerouslySetInnerHTML:{__html:'\n<div align="Center">\n<IMG style="height:61px;margin-top:20px;margin-bottom:10px;" SRC="https://brex.com/logo_dark_250px.png"><br>\n<H4 style="color: #000;">Secure File Upload</H4>\n</div><br>\n<div class="card" style="padding:20px; margin:auto; max-width:440px; color: #000;">\n<form id="dropzone_form" name="dropzone_form">\n<div class="form-group">\n<label for="name" style="color: #000;">Company Name</label> <input class="form-control" id="company-name" name="company-name" placeholder="Enter your company name" type="text">\n</div>\n<div class="form-group">\n<label for="email" style="color: #000;">Brex Email Address</label> <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Brex email address">\n</div>\n<div class="form-group" style="display: none">\n<input type="text" id="reference" name="reference" value="'+(e.search.substring(1)||null)+'"></div>\n<div class="form-group">\n<div id="dropzone-placeholder-div" style="color: #000;"></div>\n</div>\n<div align="center">\n<button class="btn btn-primary" id="sendsafely-submit" onclick="submitForm()" type="button" style=background-color:#ff6938>Submit <i class="fas fa-spinner fa-spin" id="spinner" style="display:none; margin-left:5px;"></i></button>\n</div>\n</form>\n<div id="submit_done" style="padding:10px; display:none">\n<br>\n<div align="center">\n<i style="color:#ff6938; font-size:84px;" class="fas fa-check-circle"></i> </div><br><br>\n<div align="center">\n<b style="color: #000;">Thank you. A Brex Support Team member will be in touch if further action is needed.</b><br>\n<br>\n\n\n<br><b style="color: #000;">Your submission has been recorded. For your personal reference, your submission ID# is</b> <span id="dropzone-thread-id" style="color: #000;">N/A</span><br>\n<br>\n\n\n</div>\n\n\n<br>\n</div>\n</div>\n<div style="padding:50px" align="center"><IMG height="40" width="181" src="https://sendsafely.s3.amazonaws.com/images/secured_with_sendsafely_181x40.png"></div>\n\n        '}}))},e}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-support-securefileupload-jsx-96c015ee0ebe1e3e1153.js.map