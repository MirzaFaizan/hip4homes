// Input
var unitofMeasure;
var greenhouseWidth;
var greenhouseLength;
var typeofMedia;
var surfaceArea;
var voidRatio;

//Design Calculations
var totalGreenHouseArea;
var growBedWidth;

var noOfBedsHidden =0 ;
var noOf8ftBedsHidden = 0;
var totalWalkwaybwbedsHidden = 0;
var walkwaybwbedHidden = 0;
var noOf8ftBedsHiddenlessthan2 = 0;
var noOf4ftBedsHiddenlessthan2 = 0;
var walkwaybwbedHiddenlessthan2 = 0;
var walkwaybwRightwallandLastbedHiddenlessthan2 = 0;
var walkwaybwLeftwallandFirstbedHiddenlessthan2 = 0;
var noOf8ftBeds = 0;
var noOf4ftBeds = 0;


var noOf8ftBeds = 0;
var noOf4ftBeds = 0;
var totalnoOfbeds = 1;
var totalWalkwaybwbeds;
var walkwaybwbed;
var walkwaybwRightwallandLastbed;
var walkwaybwLeftwallandFirstbed;
var bedlength;
var bedArea8ft;
var bedArea4ft;
var totalGrowBedArea;
var noofDeepWaterGrowBeds;
var noofMediaGrowBeds;
var waterVolumeInDeepWaterGrowbeds;
var waterVolumeInMediaGrowbeds;
var totalwaterVolumeinAllGrowBeds;

//Material List
var BedLeftsidelumberLength2x6plank;

var BedLeftsidelumberplanks2x6;
var BedRightsidelumberplanks2x6;
var OneBedCompletelumberplanks2x6;
var TwoBedCompletelumberplanks2x6;
var Totallumberplanks2x6;
var unitslumberplanks2x6 = 'pcs';

var BedLeftsidelumbercolumns4x4;
var BedRightsidelumbercolumns4x4;
var OneBedCompletelumbercolumns4x4;
var TwoBedCompletelumbercolumns4x4;
var Totallumbercolumns4x4;
var unitslumbercolumns4x4 = 'pcs';

var BedLeftsidelumberstrips8ft1x2;
var BedRightsidelumberstrips8ft1x2;
var OneBedCompletelumberstrips8ft1x2;
var TwoBedCompletelumberstrips8ft1x2;
var Totallumberstrips8ft1x2;
var unitslumberstrips8ft1x2 = 'pcs';

var BedLeftsidelumberdeckscrews3;
var BedRightsidelumberdeckscrews3;
var OneBedCompletelumberdeckscrews3;
var TwoBedCompletelumberdeckscrews3;
var Totallumberdeckscrews3;
var unitslumberdeckscrews3 = 'pcs';

var BedLeftsidelumberdeckscrews2;
var BedRightsidelumberdeckscrews2;
var OneBedCompletelumberdeckscrews2;
var TwoBedCompletelumberdeckscrews2;
var Totallumberdeckscrews2;
var unitslumberdeckscrews2 = 'pcs';

var BedLeftsideStyrofoambottominsulation4x8;
var BedRightsideStyrofoambottominsulation4x8;
var OneBedCompleteStyrofoambottominsulation4x8;
var TwoBedCompleteStyrofoambottominsulation4x8;
var TotalStyrofoambottominsulation4x8;
var unitsStyrofoambottominsulation4x8 = 'sheets';

var BedLeftsideDuraskrimWidth;
var BedRightsideDuraskrimWidth;
var OneBedCompleteDuraskrimWidth;
var TwoBedCompleteDuraskrimWidth;
var TotalDuraskrimWidth;
var unitsDuraskrimWidth = '6 ft roll';

var BedLeftsideDuraskrimLength;
var BedRightsideDuraskrimLength;
var OneBedCompleteDuraskrimLength;
var TwoBedCompleteDuraskrimLength;
var TotalDuraskrimLength;
var unitsDuraskrimLength = '10 ft roll';

var BedLeftsideDuraskrimTotalRolls;
var BedRightsideDuraskrimTotalRolls;
var OneBedCompleteDuraskrimTotalRolls;
var TwoBedCompleteDuraskrimTotalRolls;
var TotalDuraskrimTotalRolls;
var unitsDuraskrimTotalRolls = 'rolls';

var BedLeftsideDuraskrimConcreteFooting4x4;
var BedRightsideDuraskrimConcreteFooting4x4;
var OneBedCompleteDuraskrimConcreteFooting4x4;
var TwoBedCompleteDuraskrimConcreteFooting4x4;
var TotalDuraskrimConcreteFooting4x4;
var unitsDuraskrimConcreteFooting4x4 = 'pcs';

var BedLeftsideStyrofoamRaftsgrowrafts2x4;
var BedRightsideStyrofoamRaftsgrowrafts2x4;
var OneBedCompleteStyrofoamRaftsgrowrafts2x4;
var TwoBedCompleteStyrofoamRaftsgrowrafts2x4;
var TotalStyrofoamRaftsgrowrafts2x4;
var unitsStyrofoamRaftsgrowrafts2x4 = 'rafts';

var BedLeftsideGravelRiverRock;
var BedRightsideGravelRiverRock;
var OneBedCompleteGravelRiverRock;
var TwoBedCompleteGravelRiverRock;
var TotalGravelRiverRock;
var unitsGravelRiverRock = 'ft3';

var BedLeftsideGravelQuantityofMedia;
var BedRightsideGravelQuantityofMedia;
var OneBedCompleteGravelQuantityofMedia;
var TwoBedCompleteGravelQuantityofMedia;
var TotalGravelQuantityofMedia;
var unitsGravelQuantityofMedia = 'ft3';




// var growBedWidth;
// var noOfBeds;

// var walkwaybwbed;
// var check;
// var noOf4ftBedsMaxGreenhouse;
// var noOf4ftBeds2;
// var totalWalkwaybwbeds2;
// var walkwaybwbed2;

// var check2;

// //Planks

// var plank_size;

// // Volume grow bed






$(document).ready(function () {


    $("#material").hide();
    $("#material4").hide();
    $('.drawing').hide();
    $("#table8").hide();
    $("#table10").hide();
    $("#buttons").hide();
    $('#output-dropdown').prop('disabled', 'disabled');
    //Input Tab
    $('#home-tab').click(function () {
        $('#output-panel').show();
        $('#material').hide();
    });
    //Material List
    $('#profile-tab').click(function () {
        $('#output-panel').hide();
        $('#table8').hide();
        $('#table10').hide();

    });

    $('#unitDropdownItem1').click(function () {
        $("#unitDropDown").text($(this).text());
        changeListItemValue($(this).text())
    });
    $('#unitDropdownItem2').click(function () {
        $("#unitDropDown").text($(this).text());
        changeListItemValue($(this).text())
    });
    $('#media-type').change(function () {
        if ($("#media-type option:selected").text() == 'Sand' && $("#unitDropDown").text() == 'Imperial Unit') {
            surfaceArea = 270;
            voidRatio = 40;
            $('#SA').val(surfaceArea + ' ft');
            $('#void-ratio').val(voidRatio + ' %');
            console.log(voidRatio);
        }
        else if ($("#media-type option:selected").text() == '3/4 Crushed Gravel' && $("#unitDropDown").text() == 'Imperial Unit') {
            surfaceArea = 50;
            voidRatio = 35;
            $('#SA').val(surfaceArea + ' ft');
            $('#void-ratio').val(voidRatio + ' %');
        }
        else if ($("#media-type option:selected").text() == 'River Rock' && $("#unitDropDown").text() == 'Imperial Unit') {
            surfaceArea = 21;
            voidRatio = 40;
            $('#SA').val(surfaceArea + ' ft');
            $('#void-ratio').val(voidRatio + ' %');

        }
        else if ($("#media-type option:selected").text() == 'Hydrotone Clay Pebbles' && $("#unitDropDown").text() == 'Imperial Unit') {
            surfaceArea = 21;
            voidRatio = 40;
            $('#SA').val(surfaceArea + ' ft');
            $('#void-ratio').val(voidRatio + ' %');

        }
        else if ($("#media-type option:selected").text() == 'Zip Grow Matrix' && $("#unitDropDown").text() == 'Imperial Unit') {
            surfaceArea = 275;
            voidRatio = 91;
            $('#SA').val(surfaceArea + ' ft');
            $('#void-ratio').val(voidRatio + ' %');
        }


        // For SI Unit
        if ($("#media-type option:selected").text() == 'Sand' && $("#unitDropDown").text() == 'SI Unit') {
            surfaceArea = 885.87;
            voidRatio = 40;
            $('#SA').val(surfaceArea + ' m');
            $('#void-ratio').val(voidRatio + ' %');
        }
        else if ($("#media-type option:selected").text() == '3/4 Crushed Gravel' && $("#unitDropDown").text() == 'SI Unit') {
            surfaceArea = 164.05;
            voidRatio = 35;
            $('#SA').val(surfaceArea + ' m');
            $('#void-ratio').val(voidRatio + ' %');
        }
        else if ($("#media-type option:selected").text() == 'River Rock' && $("#unitDropDown").text() == 'SI Unit') {
            surfaceArea = 68.901;
            voidRatio = 40;
            $('#SA').val(surfaceArea + ' m');
            $('#void-ratio').val(voidRatio + ' %');

        }
        else if ($("#media-type option:selected").text() == 'Hydrotone Clay Pebbles' && $("#unitDropDown").text() == 'SI Unit') {
            surfaceArea = 68.901;
            voidRatio = 40;
            $('#SA').val(surfaceArea + ' m');
            $('#void-ratio').val(voidRatio + ' %');

        }
        else if ($("#media-type option:selected").text() == 'Zip Grow Matrix' && $("#unitDropDown").text() == 'SI Unit') {
            surfaceArea = 902.275;
            voidRatio = 91;
            $('#SA').val(surfaceArea + ' m');
            $('#void-ratio').val(voidRatio + ' %');
        }


    });
    $('#input-submit-btn').click(function () {
        greenhouseWidth = parseFloat($('#width-greenhouse').val());
        console.log('greenhouseWidth = ' + greenhouseWidth);

        greenhouseLength = parseFloat($('#length-greenhouse').val());
        console.log('greenhouseLength = ' + greenhouseLength);

        totalGreenHouseArea = greenhouseWidth * greenhouseLength;
        console.log('totalGreenHouseArea = ' + totalGreenHouseArea);


        if ($("#unitDropDown").text() == 'Imperial Unit') {
            if (greenhouseWidth >= 14 && greenhouseWidth <= 21) {
                growBedWidth = 4;
                $('#width-bed').val(growBedWidth + " ft");
            }
            else if (greenhouseWidth > 21 && greenhouseWidth <= 60) {
                growBedWidth = 8;
                $('#width-bed').val(growBedWidth + " ft");
            }
            if (growBedWidth == 8) {

                noOfBedsHidden = greenhouseWidth / (growBedWidth+2);
                console.log('noOfBedsHidden: ' + noOfBedsHidden);

                noOf8ftBedsHidden = Math.floor(noOfBedsHidden);
                console.log('noOf8ftBedsHidden: ' + noOf8ftBedsHidden);

                totalWalkwaybwbedsHidden = greenhouseWidth - (noOf8ftBedsHidden * growBedWidth);
                console.log('totalWalkwaybwbedsHidden = ' + totalWalkwaybwbedsHidden);

                walkwaybwbedHidden = totalWalkwaybwbedsHidden / (noOf8ftBedsHidden + 1);
                console.log('walkwaybwbedHidden: ' + walkwaybwbedHidden);

                if(walkwaybwbedHidden<2)
                    noOf8ftBedsHiddenlessthan2 = noOf8ftBedsHidden -1;
                else
                    noOf8ftBedsHiddenlessthan2 = noOf8ftBedsHidden;
                console.log('noOf8ftBedsHiddenlessthan2: '+noOf8ftBedsHiddenlessthan2);

                noOf4ftBedsHiddenlessthan2 = noOf8ftBedsHidden - noOf8ftBedsHiddenlessthan2;
                console.log('noOf4ftBedsHiddenlessthan2: '+noOf4ftBedsHiddenlessthan2);

                totalWalkwaybwbedsHiddenlessthan2 = greenhouseWidth - ((growBedWidth * noOf8ftBedsHiddenlessthan2) + (4 * noOf4ftBedsHiddenlessthan2));
                console.log('totalWalkwaybwbedsHiddenlessthan2: '+totalWalkwaybwbedsHiddenlessthan2 );

                walkwaybwbedHiddenlessthan2 = totalWalkwaybwbedsHiddenlessthan2 / (noOf8ftBedsHidden + 1);
                console.log('walkwaybwbedHiddenlessthan2: '+walkwaybwbedHiddenlessthan2);

                walkwaybwRightwallandLastbedHiddenlessthan2 = walkwaybwbedHiddenlessthan2;
                console.log('walkwaybwRightwallandLastbedHiddenlessthan2: '+walkwaybwRightwallandLastbedHiddenlessthan2);

                walkwaybwLeftwallandFirstbedHiddenlessthan2 = walkwaybwbedHiddenlessthan2;
                console.log('walkwaybwLeftwallandFirstbedHiddenlessthan2: '+walkwaybwLeftwallandFirstbedHiddenlessthan2);

                
                if(walkwaybwbedHidden>2){
                    noOf8ftBeds = noOf8ftBedsHidden;
                    noOf4ftBeds = 0;
                    totalWalkwaybwbeds = totalWalkwaybwbedsHidden;
                    walkwaybwbed = walkwaybwbedHidden;
                }else{
                    noOf8ftBeds = noOf8ftBedsHiddenlessthan2;
                    noOf4ftBeds = noOf4ftBedsHiddenlessthan2;
                    totalWalkwaybwbeds = totalWalkwaybwbedsHiddenlessthan2;
                    walkwaybwbed = walkwaybwbedHiddenlessthan2;
                }
                console.log('noOf8ftBeds: '+ noOf8ftBeds);
                console.log('noOf4ftBeds: ' + noOf4ftBeds );
                console.log('totalWalkwaybwbeds: ' +totalWalkwaybwbeds);
                console.log('walkwaybwbed: '+walkwaybwbed);

                walkwaybwRightwallandLastbed = walkwaybwbed;
                console.log('walkwaybwRightwallandLastbed: ' + walkwaybwRightwallandLastbed);

                walkwaybwLeftwallandFirstbed = walkwaybwbed;
                console.log('walkwaybwLeftwallandFirstbed: ' + walkwaybwLeftwallandFirstbed);

                bedlength = greenhouseLength - 5;
                console.log('bedlength: ' + bedlength);

                
                if (noOf8ftBeds == 0)
                    bedArea8ft = 0;
                else
                    bedArea8ft = bedlength * 8;
                console.log('bedArea8ft: ' + bedArea8ft);

                if (noOf4ftBeds == 0)
                    bedArea4ft = 0;
                else
                    bedArea4ft = bedlength * 4;
                console.log('bedArea4ft: ' + bedArea4ft);

                totalGrowBedArea = (bedArea8ft * noOf8ftBeds) + (bedArea4ft * noOf4ftBeds);
                console.log('totalGrowBedArea: ' + totalGrowBedArea);


                totalnoOfbeds = noOf8ftBeds + noOf4ftBeds;
                console.log('totalnoOfbeds: ' + totalnoOfbeds);
                
                $('#grow-bed').children().remove();

                for (var i = 1; i <= totalnoOfbeds; i++) {
                    
                    $('#grow-bed').append($('<option>', { value: (i) }).text(i));
                }
                
                $("#grow-bed").change(function(){
                    noofDeepWaterGrowBeds = parseInt($("#grow-bed").val());
                });
                //let
                
                console.log('noofDeepWaterGrowBeds: '+noofDeepWaterGrowBeds);
                console.log(typeof(noofDeepWaterGrowBeds));


                noofMediaGrowBeds = (noOf8ftBeds + noOf4ftBeds) - noofDeepWaterGrowBeds;
                console.log('noofMediaGrowBeds: ' + noofMediaGrowBeds);

                waterVolumeInDeepWaterGrowbeds = noofDeepWaterGrowBeds * bedArea8ft * 7.48052;
                console.log('waterVolumeInDeepWaterGrowbeds: ' + waterVolumeInDeepWaterGrowbeds);

                if (noofMediaGrowBeds == 0)
                    {waterVolumeInMediaGrowbeds = 0;
                    alert}
                else if (noofDeepWaterGrowBeds == 0)
                    {waterVolumeInMediaGrowbeds = totalGrowBedArea * 7.48052 * voidRatio/100;}
                else if (bedArea4ft == 0)
                    {waterVolumeInMediaGrowbeds = noofMediaGrowBeds * bedArea8ft * 7.48052 * voidRatio/100;}
                else if (noofMediaGrowBeds == 1)
                    {waterVolumeInMediaGrowbeds = noofMediaGrowBeds * bedArea4ft * 7.48052 * voidRatio/100;}
                else
                    {waterVolumeInMediaGrowbeds = ((noofMediaGrowBeds - noOf4ftBeds) * bedArea8ft * 7.48052 * voidRatio/100) + (noOf4ftBeds * bedArea4ft * 7.48052 * voidRatio/100);}

                console.log('waterVolumeInMediaGrowbeds: ' + waterVolumeInMediaGrowbeds);



                totalwaterVolumeinAllGrowBeds = waterVolumeInDeepWaterGrowbeds + waterVolumeInMediaGrowbeds;
                console.log('totalwaterVolumeinAllGrowBeds: ' + totalwaterVolumeinAllGrowBeds);

             ///////////////////////////////////////////////////////////////////////////////////////////           
            } if (growBedWidth == 4) {
                noOfBedsHidden = greenhouseWidth / (growBedWidth + 2);
                console.log('noOfBedsHidden: ' + noOfBedsHidden);

                noOf4ftBedsHidden = Math.floor(noOfBedsHidden);
                console.log('noOf4ftBedsHidden: ' + noOf4ftBedsHidden);

                totalWalkwaybwbedsHidden = greenhouseWidth - (noOf4ftBedsHidden * growBedWidth);
                console.log('totalWalkwaybwbedsHidden = ' + totalWalkwaybwbedsHidden);

                walkwaybwbedHidden = totalWalkwaybwbedsHidden / (noOf4ftBedsHidden + 1);
                console.log('walkwaybwbedHidden: ' + walkwaybwbedHidden);

                if (walkwaybwbedHidden < 2){
                    noOf4ftBedsHiddenlessthan2 = noOf4ftBedsHidden - 1;
                    noOf4ftBeds = noOf4ftBedsHidden -1;
                }else{
                    noOf4ftBedsHiddenlessthan2 = noOf4ftBedsHidden;
                    noOf4ftBeds = noOf4ftBedsHidden;
                }
                console.log('noOf4ftBedsHiddenlessthan2: ' + noOf4ftBedsHiddenlessthan2);

                totalWalkwaybwbedsHiddenlessthan2 = greenhouseWidth-((growBedWidth*noOf4ftBedsHiddenlessthan2));
                console.log('totalWalkwaybwbedsHiddenlessthan2: ' + totalWalkwaybwbedsHiddenlessthan2);

                walkwaybwbedHiddenlessthan2 = totalWalkwaybwbedsHiddenlessthan2 / (noOf4ftBedsHidden + 1);
                console.log('walkwaybwbedHiddenlessthan2: ' + walkwaybwbedHiddenlessthan2);

                walkwaybwRightwallandLastbedHiddenlessthan2 = walkwaybwbedHiddenlessthan2;
                console.log('walkwaybwRightwallandLastbedHiddenlessthan2: ' + walkwaybwRightwallandLastbedHiddenlessthan2);

                walkwaybwLeftwallandFirstbedHiddenlessthan2 = walkwaybwbedHiddenlessthan2;
                console.log('walkwaybwLeftwallandFirstbedHiddenlessthan2: ' + walkwaybwLeftwallandFirstbedHiddenlessthan2);

                walkwaybwbed = walkwaybwbedHidden;
                console.log('walkwaybwbed: '+walkwaybwbed);

                walkwaybwRightwallandLastbed = walkwaybwbed;
                console.log('walkwaybwRightwallandLastbed: ' + walkwaybwRightwallandLastbed);

                walkwaybwLeftwallandFirstbed = walkwaybwbed;
                console.log('walkwaybwLeftwallandFirstbed: ' + walkwaybwLeftwallandFirstbed);

                bedlength = greenhouseLength - 5;
                console.log('bedlength: ' + bedlength);

                bedArea4ft = bedlength * 4;
                console.log('bedArea4ft: ' + bedArea4ft);

                totalGrowBedArea = bedArea4ft * noOf4ftBeds;
                console.log('totalGrowBedArea: ' + totalGrowBedArea);


                totalnoOfbeds = noOf8ftBeds + noOf4ftBeds;
                console.log('totalnoOfbeds: ' + totalnoOfbeds);

                for (var i = 1; i <= totalnoOfbeds; i++) {
                    $('#mySelect').append($('<option>', { value: i }).text(i));
                }
                $("#mySelect").change(function () {
                    noofDeepWaterGrowBeds = $("#mySelect").text();
                });
                //let
                noofDeepWaterGrowBeds = 2;
                console.log('noofDeepWaterGrowBeds: ' + noofDeepWaterGrowBeds);


                noofMediaGrowBeds = noOf4ftBeds - noofDeepWaterGrowBeds;
                console.log('noofMediaGrowBeds: ' + noofMediaGrowBeds);

                waterVolumeInDeepWaterGrowbeds = noofDeepWaterGrowBeds * bedArea4ft * 7.48052;
                console.log('waterVolumeInDeepWaterGrowbeds: ' + waterVolumeInDeepWaterGrowbeds);

                waterVolumeInMediaGrowbeds = noofMediaGrowBeds*bedArea4ft*7.48052*voidRatio/100;
                console.log('waterVolumeInMediaGrowbeds: ' + waterVolumeInMediaGrowbeds);

                totalwaterVolumeinAllGrowBeds = waterVolumeInDeepWaterGrowbeds + waterVolumeInMediaGrowbeds;
                console.log('totalwaterVolumeinAllGrowBeds: ' + totalwaterVolumeinAllGrowBeds);


            }

        }
        if ($("#unitDropDown").text() == 'SI Unit') {
            if (greenhouseWidth <= 6.5) {
                growBedWidth = 4;
                $('#width-bed').val(growBedWidth + " ft");
                growBedWidth = 1.22;
            }

            else if (greenhouseWidth > 6.5 && greenhouseWidth <= 18.3) {
                growBedWidth = 8;
                $('#width-bed').val(growBedWidth + " ft");
                growBedWidth = 2.44;
            }
            //growBedWidth == 8
            if (growBedWidth == 2.44) {
            }
            //growBedWidth == 4
            if (growBedWidth == 1.22) {
            }
        }
        
        if(growBedWidth==8)
            {
                $('#table8').show();
        $('#area').text(totalGreenHouseArea.toFixed(2) + " ft2");
        $('#RecommendedWidthOfGrowBeds').text(growBedWidth.toFixed(2) + " ft");
        $('#number-8ft-bed').text(noOf8ftBeds);
        $('#number-4ft-bed').text(noOf4ftBeds);
        $('#walkway').text(totalWalkwaybwbeds.toFixed(2) + " ft");
        $('#gaps-bed').text((walkwaybwbed.toFixed(1)) + " ft");
        $('#right-wall-last-bed').text(walkwaybwbed.toFixed(1) + " ft");
        $('#left-wall-1st-bed').text(walkwaybwbed.toFixed(1) + " ft");
        $('#bed-length').text(bedlength + " ft");
        $('#8-grow-bed').text(bedArea8ft + " ft2");
        $('#4-grow-bed').text(bedArea4ft+" ft2");
        $('#total-grow-bed-area').text(totalGrowBedArea+" ft2");
        $('#media-grow-beds').text(noofMediaGrowBeds);
        $('#total-water-deep-beds').text(waterVolumeInDeepWaterGrowbeds.toFixed(2)+ " gal");
        $('#water-volume-media-grow').text(waterVolumeInMediaGrowbeds+ " gal");
        $('#total-water-volume-all').text(totalwaterVolumeinAllGrowBeds+ " gal");
        
       
    }
        else
        {
            $('#table10').show();
            $('#area4').text(totalGreenHouseArea.toFixed(2) + " ft2");
            $('#numberofbeds4').text(noOf4ftBeds.toFixed(2) + " ft");
            
            $('#access_space4').text(walkwaybwbed.toFixed(2) + " ft");
            $('#access_space41').text((walkwaybwbed.toFixed(1)) + " ft");
            $('#access_space42').text(walkwaybwbed.toFixed(1) + " ft");
            $('#access_space422').text(walkwaybwbed.toFixed(1) + " ft");
            $('#bedlength4').text(bedlength + " ft");
            $('#per4ftgrowbed').text(bedArea4ft + " ft2");
            
            $('#TotalGrowBedArea').text(totalGrowBedArea+" ft2");
            $('#grow-bed').text(totalnoOfbeds);
            
            $('#number_of_media_grow_beds').text(noofMediaGrowBeds);

            $('#TotalVolumeinDeepWater').text(waterVolumeInDeepWaterGrowbeds.toFixed(2)+ " gal");
            $('#TotalVolumeinMediaGrowBeds').text(waterVolumeInMediaGrowbeds+ " gal");
            $('#TotalVolumeinAllGrowbeds').text(totalwaterVolumeinAllGrowBeds+ " gal");  
            
        }
        
       
    });
 
    $('#output-dropdown').prop('disabled', false);


});

$("#output-dropdown").change(function () {

    if ($("#output-dropdown option:selected").text() == 'Drawing') {
        console.log('Drawing');
        $("#table8").hide();
        $('.drawing').show();
    }
    else
        if ($("#output-dropdown option:selected").text() == 'Design Calculations') {
            console.log('Design Calculation');
            $('.drawing').hide();
            $("#table8").show();

        }
        else {
            $("#table8").hide();
            $('.drawing').hide();
        }

});

$('#plankSubmit').click(function()
{
    alert('planks');
    
    if(growBedWidth==8)
    {
        
    var plank_size = parseInt($('#plank').val());
    
        $('#planks').text(plank_size);
        alert(plank_size);

        var _2x6 =Math.ceil((bedlength/plank_size)*2)+1;
            $('#2x6').text(_2x6);
            $('.2x61').text(_2x6);
            var OneBed1=_2x6+_2x6;
            $('.OneBedright1').text(OneBed1);
            var total1= OneBed1*(noOf8ftBeds+noOf4ftBeds) ;
            $('.total1').text(total1);
            
            var _4x4=Math.ceil(((bedlength/plank_size)/2));
            $('#_4x4').text(_4x4);
            $('._4x41').text(_4x4);
            var OneBed2=_4x4+_4x4;
            $('.OneBedright2').text(OneBed2);
            var total2 = OneBed2*(noOf4ftBeds+noOf8ftBeds);
            $('.total2').text(total2);

            
            var _1x2= Math.ceil((bedlength/plank_size));
            $('#treatedStrips').text(_1x2);
            $('.treatedStrips1').text(_1x2);
            var OneBed3=_1x2+_1x2;
            $('.OneBedright3').text(OneBed3);
            var total3=OneBed3*(noOf8ftBeds+noOf4ftBeds);
            $('.total3').text(total3);
            
            var flathead3= _2x6*3*2;
            $('#3flathead').text(flathead3);
            $('.3flathead1').text(flathead3);
            var OneBed4=flathead3+flathead3;
            $('.OneBedright4').text(OneBed4);
            var total4=(OneBed4)*(noOf4ftBeds+noOf8ftBeds);   
            $('.total4').text(total4);

            var flathead2= _1x2*4;
            $('#2flathead').text(flathead2);
            $('.2flathead1').text(flathead2);
            var OneBed5=flathead2+flathead2;
            $('.OneBedright5').text(OneBed5);
            var total5=OneBed5*(noOf4ftBeds+noOf8ftBeds);
            $('.total5').text(total5);

            var OneBed6=Math.ceil((bedlength/8)*2);
            var OneBed61=Math.ceil((bedlength/8));
            $('#rigid').text(OneBed6);
            $('#rigid1').text(OneBed61);
            var total6=(OneBed6*noOf8ftBeds)+(OneBed61*noOf4ftBeds);
            $('.total6').text(total6);

            $('#OneBed7').text('10');
            $('#OneBed71').text('6');
            $('#total7').text(noOf4ftBeds);

            $('#OneBed8').text(bedlength);
            $('#OneBed81').text(bedlength);
            $('#total8').text(noOf8ftBeds);


            var Rolls=(noOf4ftBeds+noOf8ftBeds).toFixed(1);
            $('#roll').text(Rolls);

            var footing=Math.ceil(bedlength/plank_size);
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
                
          

            var total12=((totalGreenHouseArea-totalGrowBedArea)*.25).toFixed(1);
            $('#total12').text(total12);
            alert(voidRatio);
            var total13=(waterVolumeInMediaGrowbeds*.134)*((100-voidRatio)/100);
            $('#total13').text(total13.toFixed(1));
        
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
    }

    if(growBedWidth==4)
    {
        
        alert("If main hon");
        var plank_size = parseInt($('#plank').val());
    
        $('#planks').text(plank_size);
        
        $('#material4').show();

        var leftside4=((bedlength/plank_size)*2)+1;
        var righside4=leftside4;
        $('#leftside4').text(leftside4.toFixed(2));
        $('#rightside4').text(righside4.toFixed(2));
        var _1onebed4=leftside4+righside4;
        $('#1onebed4').text(_1onebed4.toFixed(2));
        var _4total4=_1onebed4*noOf4ftBeds;
        $("#4total4").text(_4total4.toFixed(2));
        
        var leftside41=Math.ceil(((bedlength/8)/2));
        var rightside41=leftside41;
        $('#leftside41').text(leftside41.toFixed(2));
        $('#rightside41').text(rightside41.toFixed(2));
        var _1onebed41=leftside41+rightside41;
        $('#1onebed41').text(_1onebed41);
        var _4total41=_1onebed41*noOf4ftBeds;
        $('#4total41').text(_4total41);

        var leftside42=Math.ceil((bedlength/plank_size));
        $('#leftside42').text(leftside42);
        $('#rightside42').text(leftside42);
        var _1onebed42= leftside42+leftside42;
        $('#1onebed42').text(_1onebed42);
        var _4total42=_1onebed42*noOf4ftBeds;
        $('#4total42').text(_4total42);

        var leftside43=Math.ceil((leftside4*3*2));
        $('#leftside43').text(leftside43);
        $('#rightside43').text(leftside43);
        _1onebed43=leftside43+leftside43;
        $('#1onebed43').text(_1onebed43);
        _4total43=_1onebed43*noOf4ftBeds;
        $('#4total43').text(_4total43);

        var leftside44=leftside42*4;
        $('#leftside44').text(leftside44);
        $('#rightside44').text(leftside44);
        var _1onebed44=leftside44+leftside44;
        $('#1onebed44').text(_1onebed44);
        var _4total44=_1onebed44*noOf4ftBeds;
        $('#4total44').text(_4total44);

        var _1onebed45=Math.ceil(bedlength/8);
        $('#1onebed45').text(_1onebed45);
        var _4total45=_1onebed45*noOf4ftBeds;
        $('#4total45').text(_1onebed45);

        var _1onebed49=noOf4ftBeds;
        $('#1onebed49').text(_1onebed49);

        var leftside48=Math.ceil(bedlength/plank_size);
        
        $('#leftside48').text(leftside48);
        $('#rightside48').text(leftside48);
        var _1onebed48=leftside48+leftside48;
        $('#1onebed488').text(_1onebed48);
        var total8=Math.ceil(_1onebed48+noOf4ftBeds);
        $('#total8').text(total8);

        var _1onebed489=bedlength/2;
        $('#1onebed489').text(_1onebed489);
        var total89=_1onebed489*noOf4ftBeds;
        $('#total89').text(total89);

        var total810=(totalGreenHouseArea-totalGrowBedArea)*.25;
        $('#total810').text(total810);

        var total811= waterVolumeInMediaGrowbeds*.134*((100-voidRatio)/100);
        $('#total811').text(total811);



        
    }

    
});







// });
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
