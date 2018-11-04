---
permalink: /contact/
title: "Contact"
last_modified_at: 2018-11-03T12:42:42-05:00
excerpt: "Preferred methods of sending your questions, inquires, messages, and love letters to me."
---

---
Have questions about me, this website, or my projects?

I am not very active on social media. However short and succinct messages [via Twitter](https://twitter.com/ChandKulbhushan) is the way to ask. You can also find me [elsewhere on the web](/support/#follow-me-on-social-media)

If you have a question, please read my [frequently asked questions section](/faqs/) first ( maybe I've already answered it). For doubt or help related to my projects, it's best to submit an issue on the appropriate GitHub repo:

- [Personal website](https://github.com/Kulbhushan-Chand/Kulbhushan-Chand.github.io)
- [Ramayan hymns](https://github.com/Kulbhushan-Chand/ramayan-hymns)
- [Arduino workshop for kids](https://github.com/Kulbhushan-Chand/arduino-workshop-for-kids)

---
For anything else, use the contact form below.

<form id="form1" name="form1" accept-charset="UTF-8" autocomplete="off" enctype="multipart/form-data" method="post" novalidate action="https://kulbhushanchand.wufoo.com/forms/z1t05z0i1wmglxe/">
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


  <div class="form-group">
    <button id="saveForm" name="saveForm" class="btn btn--primary btn--large btn--disabled" type="submit"> ✉ Send Message</button>
  </div>
  <div class="form-group hidden">
    <label for="comment">Do Not Fill This Out</label>
    <textarea name="comment" id="comment" rows="1" cols="1"></textarea>
    <input type="hidden" id="idstamp" name="idstamp" value="xj10Oa6TbXDisydZEs+qvnkNObdbM0p8GKpBw2XyllY=">
  </div>
</form>


 {% if site.reCaptcha.siteKey %}<script async src="https://www.google.com/recaptcha/api.js"></script>{% endif %}

 
  <div class="form-group">
   <div class="g-recaptcha" data-sitekey="{{ site.reCaptcha.siteKey }}" data-callback="correctCaptcha"></div>
  </div>


<script> function correctCaptcha() {document.getElementById("saveForm").classList.remove("btn--disabled");} </script>

<!--
  <script> 
  $("form").each(function() {
    document.getElementById("saveForm").classList.add("btn--disabled");
    });
  function correctCaptcha() {
    $("form").each(function() {
       document.getElementById("saveForm").classList.remove("btn--disabled");
    });
}
</script>
-->
