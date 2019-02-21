var greenhouseLength;
var totalGreenHouseArea;


var greenhouseWidth;
var bedSize;
var noOfBeds;
var noOf4ftBeds=0;
var noOf8ftBeds=0;
var totalWalkway;
var gapsbwBeds;
var check;
var noOf4ftBedsMaxGreenhouse;
var noOf4ftBeds2;
var totalWalkway2;
var gapsbwBeds2;
var spacebwRightwallandLastbed;
var spacebwLeftwallandFirstbed;
var bedlength;
var growBedArea;
var check2;

//Planks
var plank_size;
var user;

var firebaseref;
// Volume grow bed

var noOfMediaGrowbed;
var waterVolumeInDeepWaterGrowbeds;
var WaterVolumeinMediaGrowbeds;
var totalWaterVolumeinAllGrowBeds;
var abc;


$(document).ready(function () {
     firebaseref=firebase.database().ref();
     user= localStorage.getItem("userid");
    console.log(user);
  
    $('#table10').hide();
    $("#table8").hide(); 
   
   
    $('#material4').hide();
    $("#buttons").hide();
    $("#material").hide();
    $('.drawing').hide();   
   
    $('#output-dropdown').prop('disabled', 'disabled');
    //Input Tab
    $('#home-tab').click(function(){
        $('#output-panel').show();
        $('#table8').show();
        $('#material').hide();
        $('#buttons').hide();
        $('#table10').hide();
    
    });
//Material List
    $('#profile-tab').click(function(){
        $('#output-panel').hide();
        $('#table8').hide();
        $("#buttons").hide();
        $('#table10').hide();
        $('#material_list').show();
        $('#plankSubmit').show();
        
    });

    $('#calculations').click(function(){
        abc=null;
        console.log("Value of abc "+abc);
        $('#output-panel').hide();
        $('#material_list').hide();
        $('#plankSubmit').hide();
        $('#material').hide();
        $('.drawing').hide();
        $('#table8').show();
        $('#buttons').show();
        
        
        var leadsRef = firebaseref.child(user);
        leadsRef.on('value',function(data)
        {  var i=0;
            user_data=data.val();
             abc = Object.values(user_data);
             console.log(abc);
             
             $('#area').text(abc[i].totalGreenHouseArea);
             $('#RecommendedWidthOfGrowBeds').text(abc[i].bedSize);
             $('#number-8ft-bed').text(abc[i].noOf8ftBeds);
             $('#number-4ft-bed').text(abc[i].noOf4ftBeds);
             $('#walkway').text(abc[i].totalWalkway);
             $('#gaps-bed').text(abc[i].totalWalkway);
             $('#right-wall-last-bed').text(abc[i].totalWalkway);
             $('#left-wall-1st-bed').text(abc[i].totalWalkway);
             $('#bed-length').text(abc[i].bedlength);
             $('#8-grow-bed').text(abc[i].growBedArea);
             $('#4-grow-bed').text(abc[i].growBedArea);
             $('#total-grow-bed-area').text(abc[i].growBedArea );
            //  $('#water-grow-beds').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            // $('#leftside4').text(abc[i]._2x6);
            // $('#rightside4').text(abc[i]._2x6);
            // $('#1onebed4').text(abc[i].OneBed1);
            // $('#4total4').text(abc[i].total1);

            // $('#leftside4').text(abc[i]._4x4);
            // $('#rightside4').text(abc[i]._4x4);
            // $('#1onebed4').text(abc[i].OneBed2);
            // $('#4total4').text(abc[i].total2);

            // $('#leftside4').text(abc[i]._1x2);
            // $('#rightside4').text(abc[i]._2x6);
            // $('#1onebed4').text(abc[i].OneBed3);
            // $('#4total4').text(abc[i].total3);
             
            // $('#leftside4').text(abc[i].flathead3);
            // $('#rightside4').text(abc[i].flathead3);
            // $('#1onebed4').text(abc[i].OneBed4);
            // $('#4total4').text(abc[i].total4);

            // $('#leftside4').text(abc[i].flathead2);
            // $('#rightside4').text(abc[i].flathead2);
            // $('#1onebed4').text(abc[i].OneBed5);
            // $('#4total4').text(abc[i].total5);

            // $('#leftside4').text(abc[i].OneBed6);
            // $('#rightside4').text(abc[i].OneBed61);
            // $('#1onebed4').text(abc[i].total6);
           



             $('#next').click(function()
             {
                 
                 if(i>=abc.length-1)
                 {
                     $("#next").prop('disabled',true);
                 }
                 else
                 {
                    $('#back').prop('disabled',false)
                 i++;
                 $('#area').text(abc[i].totalGreenHouseArea);
                 $('#RecommendedWidthOfGrowBeds').text(abc[i].bedSize);
                 $('#number-8ft-bed').text(abc[i].noOf8ftBeds);
                 $('#number-4ft-bed').text(abc[i].noOf4ftBeds);
                 $('#walkway').text(abc[i].totalWalkway);
                 $('#gaps-bed').text(abc[i].totalWalkway);
                 $('#right-wall-last-bed').text(abc[i].totalWalkway);
                 $('#left-wall-1st-bed').text(abc[i].totalWalkway);
                 $('#bed-length').text(abc[i].bedlength);
                 $('#8-grow-bed').text(abc[i].growBedArea);
                 $('#4-grow-bed').text(abc[i].growBedArea);
                 $('#total-grow-bed-area').text(abc[i].growBedArea );
                //  $('#water-grow-beds').text(abc[i].waterVolumeInDeepWaterGrowbeds);
                //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
                //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
                //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
                console.log(i);
                 }
             });
             $('#back').click(function()
             {
                 if(i<=0)
                {
                    
                    $("#back").prop('disabled',true);
                }
                else
                {
                    $("#next").prop('disabled',false);
                i--;
                $('#area').text(abc[i].totalGreenHouseArea);
                $('#RecommendedWidthOfGrowBeds').text(abc[i].bedSize);
                $('#number-8ft-bed').text(abc[i].noOf8ftBeds);
                $('#number-4ft-bed').text(abc[i].noOf4ftBeds);
                $('#walkway').text(abc[i].totalWalkway);
                $('#gaps-bed').text(abc[i].totalWalkway);
                $('#right-wall-last-bed').text(abc[i].totalWalkway);
                $('#left-wall-1st-bed').text(abc[i].totalWalkway);
                $('#bed-length').text(abc[i].bedlength);
                $('#8-grow-bed').text(abc[i].growBedArea);
                $('#4-grow-bed').text(abc[i].growBedArea);
                $('#total-grow-bed-area').text(abc[i].growBedArea );
            //  $('#water-grow-beds').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
            //  $('#media-grow-beds1').text(abc[i].waterVolumeInDeepWaterGrowbeds);
               
                console.log(i);
                }
             });

             
                
        })
      
      
       console.log("The value of i"+i);
        });
});
       

        
  

    $('#unitDropdownItem1').click(function () {
        $("#unitDropDown").text($(this).text());
        changeListItemValue($(this).text())
    });
    $('#unitDropdownItem2').click(function () {
        $("#unitDropDown").text($(this).text());
        changeListItemValue($(this).text())
    });
    $('#media-type').click(function () {
        if ($("#media-type option:selected").text() == 'Sand') {
            $('#SA').val('270 ft');
            $('#void-ratio').val('40 %');
        }
        else if ($("#media-type option:selected").text() == '3/4 Crushed Gravel') {
            $('#SA').val('50');
            $('#void-ratio').val('35');
        }
        else if ($("#media-type option:selected").text() == 'River Rock') {
            $('#SA').val('21');
            $('#void-ratio').val('40');

        }
        else if ($("#media-type option:selected").text() == 'Hydrotone Clay Pebbles') {
            $('#SA').val('21');
            $('#void-ratio').val('40');

        }
        else if ($("#media-type option:selected").text() == 'Zip Grow Matrix') {
            $('#SA').val('275');
            $('#void-ratio').val('91');
        }

    });
    $('#input-submit-btn').click(function() {
        if ($("#unitDropDown").text() == 'Imperial Unit') {
            if ($('#width-greenhouse').val() >= 14 && $('#width-greenhouse').val() <= 21) {
                $('#width-bed').val(4+" ft");
            }
            else if ($('#width-greenhouse').val() > 21 && $('#width-greenhouse').val() <= 60) {
                $('#width-bed').val(8+" ft");
            }


        }
        if ($("#unitDropDown").text() == 'SI Unit') {
            if ($('#width-greenhouse').val() <= 6.5) {
                $('#width-bed').val(4+" m");
            }

            else if ($('#width-greenhouse').val() > 6.5 && $('#width-greenhouse').val() <= 18.3) {
                $('#width-bed').val(8+" m");
            }
        }
        greenhouseWidth = parseFloat($('#width-greenhouse').val());
        console.log('greenhouseWidth = ' + greenhouseWidth);

        greenhouseLength = parseFloat($('#length-greenhouse').val());
        console.log('greenhouseLength = ' + greenhouseLength);

        totalGreenHouseArea = greenhouseWidth * greenhouseLength;
        console.log('totalGreenHouseArea = ' + totalGreenHouseArea);

        bedSize = parseFloat($('#width-bed').val());
        console.log('bedSize = ' + bedSize);

        if (bedSize == 8) {

            noOfBeds = greenhouseWidth / (bedSize + 2);
            console.log('noOfBeds = ' + noOfBeds);

            noOf8ftBeds = Math.floor(noOfBeds);
            // if gap is less than 2ft or 0.6m than it will be something else
            console.log('noOf8ftBeds =  ' + noOf8ftBeds);

            totalWalkway = greenhouseWidth - (noOf8ftBeds * bedSize);
            console.log('totalWalkway = ' + totalWalkway);

            gapsbwBeds = totalWalkway / (noOf8ftBeds + 1);
            console.log('gapsbwBeds: ' + gapsbwBeds);

            check = ((gapsbwBeds * noOf8ftBeds) + gapsbwBeds) + (noOf8ftBeds * bedSize);
            console.log('check: ' + check);

            if ((gapsbwBeds < 2 && $("#unitDropDown").text() == 'Imperial Unit') || ((gapsbwBeds < 0.6 && $("#unitDropDown").text() == 'SI Unit'))) {
                if (gapsbwBeds < 2) {
                    noOf8ftBeds2 = noOf8ftBeds - 1;
                    console.log('noOf8ftBeds2: ' + noOf8ftBeds2);
                }
                else {
                    noOf8ftBeds2 = noOf8ftBeds;
                    console.log('noOf8ftBeds2: ' + noOf8ftBeds2);
                }

                noOf4ftBedsMaxGreenhouse = noOf8ftBeds - noOf8ftBeds2;
                console.log('noOf4ftBedsMaxGreenhouse: ' + noOf4ftBedsMaxGreenhouse);

                totalWalkway2 = greenhouseWidth - ((bedSize * noOf8ftBeds2) + (4 * noOf4ftBedsMaxGreenhouse));
                console.log('totalWalkway2: ' + totalWalkway2);

                gapsbwBeds2 = totalWalkway2 / (noOf8ftBeds + 1);
                console.log('gapsbwBeds2: ' + gapsbwBeds2);

                spacebwRightwallandLastbed = gapsbwBeds2;
                console.log('spacebwRightwallandLastbed: ' + spacebwRightwallandLastbed);

                spacebwLeftwallandFirstbed = gapsbwBeds2;
                console.log('spacebwLeftwallandFirstbed: ' + spacebwLeftwallandFirstbed);

                check2 = ((gapsbwBeds2 + noOf8ftBeds) + gapsbwBeds2) + (bedSize * noOf8ftBeds2) + (4 * noOf4ftBedsMaxGreenhouse);
                console.log('check2: ' + check2);

            }
        } else if (bedSize == 4) {
            noOfBeds = greenhouseWidth / (bedSize + 2);
            console.log('noOfBeds = ' + noOfBeds);

            noOf4ftBeds = Math.floor(noOfBeds);
            // if gap is less than 2ft or 0.6m than it will be something else
            console.log('noOf4ftBeds =  ' + noOf4ftBeds);

            totalWalkway = greenhouseWidth - (noOf4ftBeds * bedSize);
            console.log('totalWalkway = ' + totalWalkway);

            gapsbwBeds = totalWalkway / (noOf4ftBeds + 1);
            console.log('gapsbwBeds: ' + gapsbwBeds);

            check = ((gapsbwBeds * noOf4ftBeds) + gapsbwBeds) + (noOf4ftBeds * bedSize);
            console.log('check: ' + check);

            if ((gapsbwBeds < 2 && $("#unitDropDown").text() == 'Imperial Unit') || ((gapsbwBeds < 0.6 && $("#unitDropDown").text() == 'SI Unit'))) {
                if (gapsbwBeds < 2) {
                    noOf4ftBeds2 = noOf4ftBeds - 1;
                    console.log('noOf4ftBeds2: ' + noOf8ftBeds2);
                }
                else {
                    noOf4ftBeds2 = noOf4ftBeds;
                    console.log('noOf4ftBeds2: ' + noOf4ftBeds2);
                }
                
                totalWalkway2 = greenhouseWidth - ((bedSize * noOf4ftBeds2) );
                console.log('totalWalkway2: ' + totalWalkway2);

                gapsbwBeds2 = totalWalkway2 / (noOf4ftBeds + 1);
                console.log('gapsbwBeds2: ' + gapsbwBeds2);

                spacebwRightwallandLastbed = gapsbwBeds2;
                console.log('spacebwRightwallandLastbed: ' + spacebwRightwallandLastbed);

                spacebwLeftwallandFirstbed = gapsbwBeds2;
                console.log('spacebwLeftwallandFirstbed: ' + spacebwLeftwallandFirstbed);

                check2 = ((gapsbwBeds2 * noOf4ftBeds2) + gapsbwBeds2) + (bedSize * noOf4ftBeds2);
                console.log('check2: ' + check2);

            }

        }
            
                


        // totalWalkway = 
        if(bedSize===8)
        {
        
        $("#material").hide();
        $("#table8").hide();
        $('.drawing').hide();
      $('#area').text(totalGreenHouseArea.toFixed(2)+" ft2");
      $('#RecommendedWidthOfGrowBeds').text(bedSize.toFixed(2)+ " ft");
      $('#number-8ft-bed').text(noOf8ftBeds);
      $('#number-4ft-bed').text(noOf4ftBeds);
      $('#walkway').text(totalWalkway.toFixed(2)+" ft");
      $('#gaps-bed').text((gapsbwBeds.toFixed(1))+" ft");
      $('#right-wall-last-bed').text(gapsbwBeds.toFixed(1)+" ft");
      $('#left-wall-1st-bed').text(gapsbwBeds.toFixed(1)+ " ft");
      bedlength=greenhouseLength-5;
      $('#bed-length').text(bedlength.toFixed(1)+" ft");
        if(bedSize==8)
        {
           growBedArea =bedlength*noOf8ftBeds*8;
           $('#8-grow-bed').text(growBedArea.toFixed(1)+" ft2");
        }
        if(bedSize==4)
        {
            growBedArea=bedlength*noOf4ftBeds*4;
            $('#4-grow-bed').text(growBedArea.toFixed(1)+" ft2");
        }
      $("#total-grow-bed-area").text(growBedArea.toFixed(1)+" ft2");

    }
    $('#output-dropdown').prop('disabled', false);

    
 
    
 

$('#table8').show();
});

$("#output-dropdown").change(function(){
 
    if($("#output-dropdown option:selected").text() == 'Drawing'){
        console.log('Drawing');
    $("#table8").hide();    
    $('.drawing').show(); 
    }
    else
    if($("#output-dropdown option:selected").text() == 'Design Calculations'){
    console.log('Design Calculation');
    $('.drawing').hide();   
    $("#table8").show();    
    
}
else{
    $("#table8").hide();    
        $('.drawing').hide();     
}
   
});
    
    $('#plankSubmit').click(function()
    {
        

        var plank_size = parseInt($('#plank').val());
        
            $('#planks').text(plank_size);
            
            var _2x6 =Math.ceil((bedlength/plank_size)*2)+1;
            $('#2x6').text(_2x6);
            $('.2x61').text(_2x6);
            var OneBed1=_2x6+_2x6;
            $('.OneBed1').text(OneBed1);
            var total1= OneBed1*(noOf8ftBeds+noOf4ftBeds) ;
            $('.total1').text(total1);
            
            var _4x4=Math.ceil(((bedlength/plank_size)/2));
            $('#_4x4').text(_4x4);
            $('._4x41').text(_4x4);
            var OneBed2=_4x4+_4x4;
            $('.OneBed2').text(OneBed2);
            var total2 = OneBed2*(noOf4ftBeds+noOf8ftBeds);
            $('.total2').text(total2);

            
            var _1x2= Math.ceil((bedlength/plank_size));
            $('#treatedStrips').text(_1x2);
            $('.treatedStrips1').text(_1x2);
            var OneBed3=_1x2+_1x2;
            $('.OneBed3').text(OneBed3);
            var total3=OneBed3*(noOf4ftBeds);
            $('.total3').text(total3);
            
            var flathead3= _2x6*3*2;
            $('#3flathead').text(flathead3);
            $('.3flathead1').text(flathead3);
            var OneBed4=flathead3+flathead3;
            $('.OneBed4').text(OneBed4);
            var total4=(OneBed4)*(noOf4ftBeds*noOf8ftBeds);   
            $('.total4').text(total4);

            var flathead2= _1x2*4;
            $('#2flathead').text(flathead2);
            $('.2flathead1').text(flathead2);
            var OneBed5=flathead2+flathead2;
            $('.OneBed5').text(OneBed5);
            var total5=OneBed5*noOf4ftBeds+noOf8ftBeds;
            $('.total5').text(total5);

            var OneBed6=Math.ceil((bedlength/8)*2);
            var OneBed61=Math.ceil((bedlength/8));
            $('#rigid').text(OneBed6);
            $('#rigid1').text(OneBed61);
            var total6=OneBed6+noOf4ftBeds;
            $('.total6').text(total6);

            $('#OneBed7').text('10');
            $('#OneBed71').text('6');

            $('#OneBed8').text(bedlength);
            $('#OneBed81').text(bedlength);

            var Rolls=(noOf4ftBeds+noOf8ftBeds).toFixed(1);
            $('#roll').text(Rolls);

            var footing=Math.round(bedlength/plank_size);
            $('#concfooting').text(footing);
            $('.concfooting1').text(footing);
            var OneBed10=footing+footing;
            $('.Onebed10').text(OneBed10);
            $('.Onebed100').text(OneBed10);
            var total10=OneBed10*(noOf4ftBeds+noOf8ftBeds);
            $('#total10').text(total10);

            var OneBed11=Math.round( (bedlength/2)*2);
            var OneBed111=Math.round( bedlength/2);
            $('#OneBed11').text(OneBed11);
            $('#OneBed111').text(OneBed111);
            var total11= (OneBed11*noOf8ftBeds)+(OneBed111*noOf4ftBeds);
            $('#total11').text(total11);
                
          

            var total12=((totalGreenHouseArea-growBedArea)*.25).toFixed(1);
            $('#total12').text(total12 );
            
            $('#table8').hide();
            $('#material').show();
            $('.drawing').hide();

            firebaseref.child(user).push().set({
                "noOfBeds":noOf4ftBedsMaxGreenhouse,
                "greenhouseLength":  greenhouseLength,
                "totalGreenHouseArea":totalGreenHouseArea,
                "greenhouseWidth":greenhouseWidth,
                "bedSize":bedSize,
                "noOfBeds":noOfBeds,
                "noOf4ftBeds":noOf4ftBeds,
                "noOf8ftBeds": noOf8ftBeds,
                "totalWalkway": totalWalkway,
                "gapsbwBeds": gapsbwBeds,
                 "bedlength": bedlength,
                 "growBedArea":growBedArea,
                 "check":check,
                 "area":area,
                
                 "plankSize":plank_size,
                 "_2x6":_2x6,
                 "OneBed1":OneBed1,
                 "total1":total1,

                 "_4x4":_4x4,
                 "OneBed2":OneBed2,
                 "total2":total2,

                 "_1x2":_1x2,
                 "OneBed3":OneBed3,
                 "total3":total3,

                 "flathead3":flathead3,
                 "OneBed4":OneBed4,
                 "total4":total4,

                 "flathead2":flathead2,
                 "OneBed5":OneBed5,
                 "total5":total5,
                 "OneBed6":OneBed6,
                 "total6":total6,

                 "OneBed7":OneBed7,
                 "OneBed8":bedlength,

                 "Rolls":Rolls,

                 "footing":footing,
                 "OneBed10":OneBed10,
                 "total10":total10,
                 "total12":total12









        
        
            });
            
        
    });

    

    




// $(document.body).on('click', '#ftlist1' ,function(){

//     //  $("#width-bed").text($(this).text());


// });



function changeListItemValue(itemType) {
    var arrayft = [14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60]
    var arraym = [4.5, 5.0, 5.5, 6.5, 7.5, 8.5, 9.0, 10.0, 11.0, 12.2, 15.2, 18.3];

    if (itemType == 'Imperial Unit') {
        $("#width-greenhouse").html('');

        // `<option value="1">1</option>`
        $.each(arrayft, function (key, value) {
            $("#width-greenhouse").append(`<option value="${value}">${value}ft</option>`);
            
        });

    }
    else {
        $("#width-greenhouse").html('');
        $.each(arraym, function (key, value) {
            $("#width-greenhouse").append(`<option value="${(value)}">${(value)}m</option>`);
        });
    }
}
