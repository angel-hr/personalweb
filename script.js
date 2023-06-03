function Code(evt, codeType){ 
    //declare variables
    var i, tabcontent, tablinks;

    //get all elements w/ class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i =0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //get all elements w/ class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i =0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(codeType).style.display = "block";
    evt.currentTarget.className += " active";

    var hidden = document.querySelectorAll("br ~ *");
    for (i =0; i < hidden.length; i++){
        hidden[i].style.display = "none";
    }
}

