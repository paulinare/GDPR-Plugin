var createGdprDivObject = {
    createGdprDiv: function() {
        var div = document.createElement("div"); // creating GDPR div
        div.setAttribute("id", "gdprDiv");
        document.body.appendChild(div);
        var title = document.createElement("h1");
        title.innerHTML = "<span>GDPR</span><br>Consent";
        div.appendChild(title);  
        var buttonAccept = document.createElement("button"); // creating Accept button 
        buttonAccept.setAttribute("id", "btnAccept");
        buttonAccept.innerHTML = "Accept";
        div.appendChild(buttonAccept);  
        var buttonCancel = document.createElement("button"); //creating Cancel button 
        buttonCancel.setAttribute("id", "btnCancel");
        buttonCancel.innerHTML = "Cancel";
        div.appendChild(buttonCancel);  
        window.addEventListener('scroll', this.disableScroll); // disable scrolling
    },
    disableScroll: function() {
        window.scrollTo(0 , 0);
    },
    hideGdprDiv: function() {
         conDiv.style.display = "none"; 
    },
    checkConsentAndShowIfNotDeclared: function() {
        if(Cookies.get("consent") == undefined) {
            document.getElementById("gdprDiv").style.display = "visible";
        } else {
            document.getElementById("gdprDiv").style.display = "none";
        }
    },
    bindButtonEvents: function() {
        document.getElementById("btnAccept").onclick = function() {
            Cookies.set("consent", "accept", { expires: 1 }); // set consent "accept" for 1 day
            this.hideGdprDiv();
            window.removeEventListener('scroll', this.disableScroll); // enable scrolling
        }
        document.getElementById("btnCancel").onclick = function() {
            Cookies.set("consent", "cancel", { expires: 1 }); // set consent "cancel" for 1 day
            this.hideGdprDiv();
            window.removeEventListener('scroll', this.disableScroll);  // enable scrolling
        }
    },
    init: function() {
        this.createGdprDiv();
        this.checkConsentAndShowIfNotDeclared();
        this.bindButtonEvents();
    }
}

window.onload = function(){ 
    createGdprDivObject.init;
} 



//function createGdprDiv() {
//    var div = document.createElement("div");// creating GDPR div
//    div.setAttribute("id", "gdprDiv");
//    document.body.appendChild(div);
//    var title = document.createElement("h1");
//    title.innerHTML = "<span>GDPR</span><br>Consent";
//    div.appendChild(title);  
//    var buttonAccept = document.createElement("button");// creating Accept button 
//    buttonAccept.setAttribute("id", "btnAccept");
//    buttonAccept.innerHTML = "Accept";
//    div.appendChild(buttonAccept);  
//    var buttonCancel = document.createElement("button"); //creating Cancel button 
//    buttonCancel.setAttribute("id", "btnCancel");
//    buttonCancel.innerHTML = "Cancel";
//    div.appendChild(buttonCancel);  
//    window.addEventListener('scroll', disableScroll); // disable scrolling
//} 
//function disableScroll() {
//    window.scrollTo(0 , 0); 
//}  
//function hideGdprDiv() { // hiding GDPR div if consent is set
//    var conDiv = document.getElementById("gdprDiv"); 
//    conDiv.style.display = "none"; 
//}
//function checkConsentAndShowIfNotDeclared() { // checking consent and seting visibility 
//    if(Cookies.get("consent") == undefined) {
//        document.getElementById("gdprDiv").style.display = "visible";
//    } else {
//        document.getElementById("gdprDiv").style.display = "none";
//    }
//}
//function bindButtonEvents() { // setting cookies on button click
//    document.getElementById("btnAccept").onclick = function() {
//        Cookies.set("consent", "accept", { expires: 1 }); // set consent "accept" for 1 day
//        hideGdprDiv();
//        window.removeEventListener('scroll', disableScroll); // enable scrolling
//    }
//    document.getElementById("btnCancel").onclick = function() {
//        Cookies.set("consent", "cancel", { expires: 1 }); // // set consent "cancel" for 1 day
//        hideGdprDiv();
//        window.removeEventListener('scroll', disableScroll);  // enable scrolling
//    }
//}
//window.onload = function() {
//    createGdprDiv();
//    checkConsentAndShowIfNotDeclared();
//    bindButtonEvents();
//}
