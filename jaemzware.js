/////////////////////////////////////////////////////////////////////////////USED BY index.htm
//write list items for page description (internal function called by setDescription())
function writeunorderedlist(descriptiondiv, listitemarray) {
    var unorderedlist = document.createElement("ul");
    var listitem;

    for (var i = 0; i < listitemarray.length; i++) {
        listitem = document.createElement("li");
        listitem.appendChild(document.createTextNode(listitemarray[i]));
        unorderedlist.appendChild(listitem);
    }
    descriptiondiv.appendChild(unorderedlist);
}

//change description when mouse hovers over link to details.htm (called from index.htm)
function setDescription(paragraph) {
    var listitemarray = new Array();
    var descriptiondiv = document.getElementById("description");

    if (descriptiondiv.hasChildNodes) {
        for (var i = descriptiondiv.childNodes.length - 1; i >= 0; i--) {
            descriptiondiv.removeChild(descriptiondiv.childNodes[i]);
        }
    }

    switch (paragraph) {
        case "default":
            listitemarray.push("Jaemzware: Dynamic Web Solutions utilizing HTML, CSS, JavaScript, Flash, PhP, ASP.NET, MySql, SQL Server, XML, and Ajax.");
            break;
        case "cash4lemons":
            listitemarray.push("Web Database Application for Auto Brokering");
            listitemarray.push("Tracks Towers in Zip Codes Nationwide");
            listitemarray.push("Facilitates Auto Brokering Transactions");
            break;
        case "vinyl":
            listitemarray.push("Web Database Application for displaying Auction Items");
            listitemarray.push("Unique Presentation Page for each User's Items");
            listitemarray.push("Administrative site for Uploading and Titling Groups of Image and Audio items");
            break;
        case "joey":
            listitemarray.push("Web Database Application for displaying Art Images");
            listitemarray.push("Comments Form for Direct Email over SMTP");
            listitemarray.push("Thumbs and Images Dynamically generated from Database");
            listitemarray.push("Slide Show Feature");
            listitemarray.push("Administrative site for Uploading Images");
            listitemarray.push("Thumbnails Auto-Generated on Image Upload");
            break;
        case "dream":
            listitemarray.push("Web Database Application for Setting Goals");
            listitemarray.push("Add, Edit, and Delete goals");
            listitemarray.push("Add, Edit, and Delete sub-goals");
            listitemarray.push("Track goals and sub-goal completion");
            listitemarray.push("Report for printing goals");
            listitemarray.push("User forum for sharing/commenting on goals");
            break;
        case "cell":
            listitemarray.push("Web Application for capturing Email Photos");
            listitemarray.push("Communicate with Email server over IMAP");
            listitemarray.push("Save Email Photo attachments to Web Server");
            listitemarray.push("Serialize (XML) data associated with each Email/Photo");
            listitemarray.push("Dynamically display Email photos captured");
            listitemarray.push("Run as Chron Job to facilitate Cell Photo to Web Page in near real-time");
            listitemarray.push("Auto-Post Photos to PhPBB Forum");
            break;
        case "jacob":
            listitemarray.push("Web Application for displaying Art Images");
            listitemarray.push("Comments Form for Direct Email over SMTP");
            listitemarray.push("Images/Titles/Prices Dynamically generated from XML");
            listitemarray.push("Slide Show Feature");
            listitemarray.push("PayPal Integration for Ordering Prints");
            listitemarray.push("Illustrated Book Reading Feature");
            listitemarray.push("Administrative site for Uploading and Pricing Images");
            listitemarray.push("Page Hit Counter that notes Geographical Location of Client");
            break;
        case "podge":
            listitemarray.push("Web Application for displaying Art Images");
            listitemarray.push("Comments Form for Direct Email over SMTP");
            listitemarray.push("Flash Audio Integration");
            listitemarray.push("Custom Built Flash Video Player");
            break;
        case "bar":
            listitemarray.push("Web Application for displaying Bar Lights");
            listitemarray.push("Comments Form for Direct Email over SMTP");
            listitemarray.push("Detailed Page Hit Counter");
            break;
        case "threeskulls":
            listitemarray.push("Web Component for displaying Event Feed");
            listitemarray.push("Administrative site for Creating Events");
            break;
        case "digitease":
            listitemarray.push("iPhone app for generating words from a phone number");
            break;
        case "couchgame":
            listitemarray.push("iPhone app for shooting household items with a couch");
            break;
        default:
            break;
    }

    //write the array of strings to an unordered list in the description div
    writeunorderedlist(descriptiondiv, listitemarray);
}
/////////////////////////////////////////////////////////////////////////////USED BY details.htm
//draws photos and their titles depending on what value was passed in get of window.location
function drawpage() {
    var photosarray = new Array();
    var locationstring = new String(window.location);
    
    //write title of site and build photos array
    if (locationstring.search("cash4lemons") > -1) {
        document.write("<a class='subtitle' href='http://jaemzware.com/dogside/admin.aspx' target='_blank'>Cash 4 Lemons</a>");
        photosarray["cash4lemons_intakegrid.jpg"] = "Intake Grid"; 
        photosarray["cash4lemons_addintake.jpg"] = "Add Intake Form"; 
        photosarray["cash4lemons_defaultssearch.jpg"] = "Default Search Grid"; 
        photosarray["cash4lemons_towerreport.jpg"] = "Report for Tower"; 
        photosarray["cash4lemons_zipcodelookup.jpg"] = "Zip Code Lookup"; 
    }
    else if (locationstring.search("auctionvinyl") > -1) {
        document.write("<a class='subtitle' href='http://jaemzware.com/auction' target='_blank'>Auction</a>");
        photosarray["auction_presentation.jpg"] = "Presentation Page"; 
        photosarray["auction_presentationdetails.jpg"] = "Presentation Item Details";
        photosarray["auction_admin.jpg"] = "Administration Grid";        
        photosarray["auction_adminedit.jpg"] = "Administration Grid Edit"; 
        photosarray["auction_adminupload.jpg"] = "Administration Upload";  
    }
    else if (locationstring.search("dreamintoaction") > -1) {
        document.write("<a class='subtitle' href='http://jaemzware.com/dreamintoaction' target='_blank'>Dream Into Action</a>");
        photosarray["dreamintoaction_goalsgrid.jpg"] = "Goals and Sub-Goals Grid"; 
        photosarray["dreamintoaction_addgoalform.jpg"] = "Add Goal Form"; 
        photosarray["dreamintoaction_forum.jpg"] = "User Forum";
        photosarray["dreamintoaction_forumdetails.jpg"] = "Forum Thread"; 
        photosarray["dreamintoaction_goalsreport.jpg"] = "Goals Report"; 
    }
    else if (locationstring.search("joeypaintbrush") > -1) {
        document.write("<a class='subtitle' href='http://joeypaintbrush.com' target='_blank'>Joey Paintbrush</a>");
        photosarray["joey_thumbs.jpg"] = "Thumbs Panel";
        photosarray["joey_bio.jpg"] = "Bio Panel";
        photosarray["joey_contact.jpg"] = "Contact Form";
        photosarray["joey_slideshow.jpg"] = "Slideshow Panel";
        photosarray["joey_admin.jpg"] = "Image Administration Grid";
    }
    else if (locationstring.search("jacobjames") > -1) {
        document.write("<a class='subtitle' href='http://jaemzware.com/elnacho' target='_blank'>Jacob's Art</a>");
        photosarray["jacob_biopage.jpg"] = "Bio Page";
        photosarray["jacob_presentationslideshow.jpg"] = "Slideshow Presentation";
        photosarray["jacob_orderform.jpg"] = "Print Image Order Form";
        photosarray["jacob_book.jpg"] = "Illustrated Book Feature";
        photosarray["jacob_message.jpg"] = "Message Form";
        photosarray["jacob_hits.jpg"] = "Detailed Hits Counter";
        photosarray["jacob_admingrid.jpg"] = "Image Administration Grid";
    }
    else if (locationstring.search("podgeelvenstar") > -1) {
        document.write("<a class='subtitle' href='http://jaemzware.com/podgeelvenstar' target='_blank'>Podge's Art</a>");
        photosarray["podge_audioimages.jpg"] = "Flash Audio Images Page";
        photosarray["podge_video.jpg"] = "Flash Video Player";
        photosarray["podge_comments.jpg"] = "Comments Form";
    }
    else if (locationstring.search("bartable") > -1) {
        document.write("<a class='subtitle' href='http://jaemzware.com/bartablelights' target='_blank'>Bar Table Lights</a>");
        photosarray["bartablelights_thumbnails.jpg"] = "Thumbnails Form";
        photosarray["bartablelights_slideshow.jpg"] = "Slideshow Form";
        photosarray["bartablelights_infocomments.jpg"] = "Info and Comments Form";
        photosarray["bartablelights_hits.jpg"] = "Detailed Hits Counter";
    }
    else if (locationstring.search("cellphoto") > -1) {
        document.write("<a class='subtitle' href='http://aspspider.ws/jaemzware' target='_blank'>Cell Photos</a>");
        photosarray["cellphoto_php.jpg"] = "Cell Photo Presentation (PHP Implementation)";
        photosarray["cellphoto_aspspider.jpg"] = "Cell Photo Presentation (ASPX Implementation)";
    }
    else if (locationstring.search("threeskulls") > -1) {
        document.write("<a class='subtitle' href='http://threeskullsales.com' target='_blank'>Three Skulls</a>");
        photosarray["threeskulls_eventfeed.jpg"] = "Events Feed (div with scrollbar)";
        photosarray["threeskulls_admin.jpg"] = "Events Administration";
    }
    else {
        document.write("no match");
    }

    //write photos (key) and their titles (value)
    for (photofile in photosarray) {
        document.write("<br />");
        document.write(photosarray[photofile]);
        document.write("<br />");
        document.write("<div class='detailsimage'><img src='images/" + photofile + "' alt='images/" + photofile + "' /></div>");
        document.write("<br /><br />");
    }
}





