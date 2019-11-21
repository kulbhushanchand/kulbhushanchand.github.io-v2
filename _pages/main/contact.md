---
permalink: /contact/
title: "Contact"
last_modified_at: 2018-11-03T12:42:42-05:00
excerpt: "Preferred methods of sending your questions, inquires, messages, and love letters to me."
---

---
Do you have any questions about me, this website, or my projects?

If you have a question, please read my [frequently asked questions section](/faqs/) first ( maybe I've already answered it). For doubt or help related to my projects, it's best to submit an issue on the appropriate GitHub repo[^1].

[^1]: GitHub repo link is provided on the each of projects pages

I am not very active on social media, but still you can also [find me here](/support/#follow-me-on-social-media)

---
For anything else, use the contact form below.

<form id="form1" name="form1" accept-charset="UTF-8" autocomplete="off" method="post" novalidate action="https://kulbhushanchand.wufoo.com/forms/z1t05z0i1wmglxe/">
  <div class="form-group">
    <label class="sr-only" id="title7" for="Field18"><strong>Name</strong></label>
    <input id="Field18" name="Field18" type="text" maxlength="255" placeholder="Name">
  </div>
  <div class="form-group">
    <label class="sr-only" id="title2" for="Field13"><strong>Email address</strong><span id="req_2" class="req">*</span> <small>(will remain private)</small></label>
    <input id="Field13" name="Field13" type="email" spellcheck="false" maxlength="255" required placeholder="Email address* (will remain private)">
  </div>
  <div class="form-group">
    <label class="sr-only" id="title10" for="Field19"><strong>How&rsquo;d you hear about my website?</strong></label>
    <input id="Field19" name="Field19" type="text" maxlength="255" placeholder="How&rsquo;d you hear about my website?">
  </div>
  <div class="form-group">
    <label class="sr-only" id="title1" for="Field14"><strong>Message</strong><span id="req_1" class="req">*</span></label>
    <textarea id="Field14" name="Field14" spellcheck="true" rows="10" cols="50" required placeholder="Message*"></textarea>
  </div>
  <small id="instruction" class="instruct">* required fields</small>

  <div class="form-group g-recaptcha" data-sitekey="{{ site.reCaptcha.siteKey }}" data-callback="correctCaptcha"></div>
   
  <div class="form-group">
    <button id="saveForm" name="saveForm" class="btn btn--info btn--x-large btn--disabled" type="submit" onclick="this.disabled=true; this.form.submit();"> ✉ Send Message</button>
  </div>
  <div class="form-group hidden">
    <label for="comment">Do Not Fill This Out</label>
    <textarea name="comment" id="comment" rows="1" cols="1"></textarea>
    <input type="hidden" id="idstamp" name="idstamp" value="xj10Oa6TbXDisydZEs+qvnkNObdbM0p8GKpBw2XyllY=">
  </div>
</form>



{% if site.reCaptcha.siteKey %}<script async src="https://www.google.com/recaptcha/api.js"></script>{% endif %}
 
<script>
 function correctCaptcha(){
    document.getElementById("g-recaptcha-response").removeAttribute("name");
    document.getElementById("saveForm").classList.remove("btn--disabled");
    } 
</script>


<!-- For debugging of form

1. Remove the attribute - enctype="multipart/form-data" then
2. To test POST - https://www.hashemian.com/tools/form-post-tester.php/kbtest
3. Wufoo url - https://kulbhushanchand.wufoo.com/forms/z1t05z0i1wmglxe/
4. Useful time delay script

<script> 
setTimeout(function(){
    document.getElementById("g-recaptcha-response").removeAttribute("name");
    document.getElementById("saveForm").classList.remove("btn--disabled");
       }, 3000); 
</script>

5. Google recaptcha hack script backup 

<script>
 function correctCaptcha(){
    document.getElementById("g-recaptcha-response").removeAttribute("name");
    document.getElementById("saveForm").classList.remove("btn--disabled");
    } 
</script>


6. Buttom multiple submission solved by adding this attrib to button -  onclick="this.disabled=true; this.form.submit();">

-->

---

### Want to send a secure message?
If you are very serious about privacy then you can send me an encrypted message. My PGP public key details are below. I only have one key at the moment.  
Please feel free to sign my key, if you feel that you’ve verified my identity and that the key is mine.

```
🆔 Key ID: 065AFAF6
👣 Fingerprint: 4089AAAE4C9FDA8C24C9385F3D5410BB065AFAF6
👨 User Name: Kulbhushan <kulbhushan[dot]chand[at]gmail[dot]com> (email address is obfuscated)
🔑 Public Key: 
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBF1mPooBCADNIrsW8k43dzptK4pMbtMjk7gjNsJwZWHJ/3UtlTqOHQE9HUpn
m0GxiDgFm31ri1d3cwZLm7K2nD9BaHLBJi/qyVa0pYkbd6ID5xFXQUkcKAG8GvTa
+P6YVYBcYzMyWBpYPnra6jAXcs/231zUYAK3FROV1u79+dgqzYTd+FLeXtxPJJHk
LMLLFeRpF65OlcjWuHYOoTt8q9WcpJdUgjPO/vRBM+yJt37E0SNvP1UCh5hgiNvF
ugN3LYwg2pG61gRpvrwRDe+ef9yg2bC5B/jOH0POUW0HUSFUrT6lgrFWO9Biz+Hl
gB0MfopewxhlLBF2PMm0EU/MPlSw62YqaqkNABEBAAG0J0t1bGJodXNoYW4gPGt1
bGJodXNoYW4uY2hhbmRAZ21haWwuY29tPokBTgQTAQgAOBYhBECJqq5Mn9qMJMk4
Xz1UELsGWvr2BQJdZj6KAhsDBQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJED1U
ELsGWvr2LlgIAIqefn7hW5/2eodNSwtHoph++3NKuN3EwDPpFee09YPsHX4atk/f
3+lqR7Uk0mXB6AA3D0s/+TYVsiNW9uj6GMOFdDj9r3JyNxR3I7u9s9WYQ43GMhIR
RCVLBaXOiWb/rizKDHO0uMcd0blcqi9Gs2HSOusGqJQ4TOCnlaQ1Bz1MpCTWMWju
EptjhlIt9mcA82kvPhxHHPC4nSheSR9DbQswD3vpzzsV3nRYCzTpHv9MSjwBdKIj
RjlBFrPBs3pNuwd+RxlBW972Jhc6sAUk8qpeOKprBvdrTT0KZGXiQ6qOLaT+qWm5
a4a4AUlGQt4qL793IkHcIDrECTOcy3/h4jC5AQ0EXWY+igEIALcbsUocCCYqKa+I
GbaHvKkDwwxZbf7T/xN0VuGstsq3pdVxshCySOv2huU78Yb58dWGUS/TL4FnrDEO
PJmOV+bUGjhquhv0Fu4qyF0XxWuqtwDAWtZkmyPCsbdflFJK/WVO6jiJJalkkvlf
xepSuFpszgKYTsfcY1owHSElNsmRKIA6HWLjLrPffiWfPPGgNalZm5KzTiurtpU+
CjkFYOn7K6i0WVThSXeH1O56k7rx0KcuO35UbcMK/W/NPTUNp5zZ97MeDu314B9g
9BWZfxiQ0g0bdkItokItppLA9ePnSWqM7iuoCuHPb2/KbE6I8jLJhL/s0DoXuXDg
HhNbGk0AEQEAAYkBNgQYAQgAIBYhBECJqq5Mn9qMJMk4Xz1UELsGWvr2BQJdZj6K
AhsMAAoJED1UELsGWvr2BkYH/0vW4Wl9xe4jr6oKLoqWRuPTb2B7jiBuKMsVkT8U
mYF3MJt2yFHqrVrWGSf1VVt0j47RIt5cwdlnIev+qnoY7pDNuJfyNB/EfGx8+VXK
H6HbeUHdvrYMZdsQiKEYjkGLcDl0OTOhSQZBHIMj4ISgIEPFtwG5LbK8FCoTqwlW
fa2OiaSFQ38OWv2mvwJwH2byDF01Ri7wQrx+9HZ9K1csF6X+bZhXCf1r1jDEgenQ
XVXzcnpPacsbqPBWxuf5hCI21CfvmNwUNenseULuKCkx7c5Jr6YuKIq/XPXzzX2f
3bmFyhkyl2CnCPU4Vsd4+q2lqO3v+6K9b3rrpJc6ZLG+97Q=
=U21g
-----END PGP PUBLIC KEY BLOCK-----
```

