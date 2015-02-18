/* put in themes js folder */
document.addEventListener('DOMContentLoaded', function () {
                          SetupEvents();
                          });

var videoPlayerWidth="640";
var videoPlayerHeight="480";

function SetupEvents(){
    
    //INSERT VIDEOS
    if($('span[id*="jaemzwarevideo"]').length>0){
        
        
        //get all the video ids
        var multiGroup=[];
        $('span[id*="jaemzwarevideo"]').each(function(index, element){
                                             multiGroup[index]=$(element).attr('id');
                                             });
        
        MultiVideoJquery(multiGroup);
    }
    
    
    
}

var jaemzwarevideotennis20150212 = [
                                    ["https://blackmarketskates.com/media/tenniscourts/tompeha-tenniscourts-20150212","Tom Peha"],
                                    ["https://blackmarketskates.com/media/tenniscourts/jimarasim-tenniscourts-20150212","Jim"],
                                    ["https://blackmarketskates.com/media/tenniscourts/jimarasim-tenniscourts-20150212b","Jim"],
                                    ["https://blackmarketskates.com/media/tenniscourts/brent-tenniscourts-20150212","Brent"],
                                    ["https://blackmarketskates.com/media/tenniscourts/brent-tenniscourts-20150212b","Brent"],
                                    ["https://blackmarketskates.com/media/tenniscourts/brent-tenniscourts-20150212c","Brent Slo Mo"]
                                    ];


/* this function writes the video player and individual videos from jquery */
function MultiVideoJquery(multiGroup){
    
    console.log("MULTI GROUP LENGTH:"+multiGroup.length);
    
    //write out all the ids found
    for(i=0;i<multiGroup.length;i++){
        
        
        console.log('WRITING VIDEO PLAYER FOR GROUP:'+multiGroup[i]);
        
        
        if(multiGroup[i]==="jaemzwarevideotennis20150212"){
            filePathsNoExtensionArray = jaemzwarevideotennis20150212;
        }
        else{
            console.log("error: unexpected group");
            
        }
        
        
        console.log("NUMBER OF VIDEOS:"+filePathsNoExtensionArray.length);
        
        
        //write out the video player
        if(filePathsNoExtensionArray.length>0)
        {
            //write the video player
            $("#"+multiGroup[i]).after("<video width='"+videoPlayerWidth+"' height='"+videoPlayerHeight+"' controls='controls' preload='metadata' poster='"+filePathsNoExtensionArray[0][0]+".png' title='"+filePathsNoExtensionArray[0][1]+"' id='"+multiGroup[i]+"Video'>browser doesn't support video</video>");
            
            
            console.log('CHECK VIDEO PLAYER');
            
            
            //add the different file format clips
            $("#"+multiGroup[i]+"Video").append("<source src='"+filePathsNoExtensionArray[0][0]+".mp4' type='video/mp4' id='"+multiGroup[i]+"Videomp4'/>");
            $("#"+multiGroup[i]+"Video").append("<source src='"+filePathsNoExtensionArray[0][0]+".ogv' type='video/ogg' id='"+multiGroup[i]+"Videoogv'/>");
            
            
            console.log('CHECK VIDEO PLAYER SOURCE ELEMENTS');
            
            
            //write out the video strip
            $("#"+multiGroup[i]+"Video").before("<span class='videolinktext' id='"+multiGroup[i]+"VideoTitle'>"+filePathsNoExtensionArray[0][1]+"</span>");
            $("#"+multiGroup[i]+"VideoTitle").after("<div class='videostrip' id='"+multiGroup[i]+"VideoStripDiv' class='videostrip'></div>");
            $("#"+multiGroup[i]+"VideoStripDiv").append("<table id='"+multiGroup[i]+"VideoStripTable'></table>");
            $("#"+multiGroup[i]+"VideoStripTable").append("<tr id='"+multiGroup[i]+"VideoStripTR'></tr>");
            
            
            //WRITE OUT THE FIRST VIDEO
            $("#"+multiGroup[i]+"VideoStripTR").append("<td id='"+multiGroup[i]+"VideoStripTD0'></td>");
            $("#"+multiGroup[i]+"VideoStripTD0").append("<img class='videolink' id='"+multiGroup[i]+"VideoStripIMG0' \
                                                        title='"+filePathsNoExtensionArray[0][1]+"' \
                                                        alt='"+filePathsNoExtensionArray[0][1]+"' \
                                                        src='"+filePathsNoExtensionArray[0][0]+".png' \
                                                        onclick='MultiVideoJqueryChanger(\""+filePathsNoExtensionArray[0][0]+".png\",\""+
                                                        filePathsNoExtensionArray[0][0]+".mp4\",\""+
                                                        filePathsNoExtensionArray[0][0]+".ogv\",\""+
                                                        multiGroup[i]+"\",\""+
                                                        filePathsNoExtensionArray[0][1]+"\")' \
                                                        />");
            
            
            console.log('CHECK STRIP WITH ONE VIDEO');
            
            
            //WRITE OUT THE REST OF THE VIDEOS
            for (var j=1;j<filePathsNoExtensionArray.length;j++)
            {
                $("#"+multiGroup[i]+"VideoStripTR").append("<td id='"+multiGroup[i]+"VideoStripTD"+j+"'></td>");
                $("#"+multiGroup[i]+"VideoStripTD"+j).append("<img class='videolink' id='"+multiGroup[i]+"VideoStripIMG"+j+"' \
                                                             title='"+filePathsNoExtensionArray[j][1]+"' \
                                                             alt='"+filePathsNoExtensionArray[j][1]+"' \
                                                             src='"+filePathsNoExtensionArray[j][0]+".png' \
                                                             onclick='MultiVideoJqueryChanger(\""+filePathsNoExtensionArray[j][0]+".png\",\""+filePathsNoExtensionArray[j][0]+".mp4\",\""+filePathsNoExtensionArray[j][0]+".ogv\",\""+multiGroup[i]+"\",\""+filePathsNoExtensionArray[j][1]+"\")' \
                                                             />");
                
            }
            
            console.log('CHECK STRIP WITH ALL VIDEOS');
            
            
        }
        else{
            $("#"+multiGroup[i]).text("unexpected no filePathsNoExtensionArray, or no entries:"+filePathsNoExtensionArray);
        }
        
    }
}

/**
 * This function changes the video loaded in the video player for video pages
 
 * @param {type} png - full path to the png image
 * @param {type} mp4 - full path to the mp4 file
 * @param {type} ogv - full path to the ogv file
 group
 fileNameOnly
 title
 * of the video images and video, so there could be more than one on a page
 * @returns {undefined}
 */
function MultiVideoJqueryChanger(png,mp4,ogv,group,title)
{
    //set elements of the video
    document.getElementById(group+"Video").setAttribute("poster",png);
    document.getElementById(group+"Video").setAttribute("title",title);
    document.getElementById(group+"Videomp4").setAttribute("src",mp4);
    document.getElementById(group+"Videoogv").setAttribute("src",ogv);
    
    //set element of the video title
    document.getElementById(group+"VideoTitle").innerHTML=title;
    
    //reload the video
    document.getElementById(group+"Video").load();
}