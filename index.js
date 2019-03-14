$(function(){
    $('#EstimateResult').hide();

    $('#field1').rangeslider({
        polyfill:false,
        onInit:function(){
        
            $('#input1').val($('input[type="range"]').val());
        },
        onSlide:function(position, value){
            //console.log('onSlide');
            //console.log('position: ' + position, 'value: ' + value);
            $('.content #input1').val(value);
        },
        onSlideEnd:function(position, value){
            //console.log('onSlideEnd');
            //console.log('position: ' + position, 'value: ' + value);
        }
    });
    // Change the value of input field when slider changes
    $('#field1').on('input', function() {
        $('#input1').val(this.value);
        console.log('$'+$('#input1').val());
    });

    // Change the value of slider field when input changes
    $('#input1').on('input', function() {
        if (this.value.length == 0) $('#field1').val(0).change();

        $('#field1').val(this.value).change();
    });
  
  
    $('#field2').rangeslider({
        polyfill:false,
        onInit:function(){
        
            $('#input2').val($('input[type="range"]').val());
        },
        onSlide:function(position, value){
            $('.content #input2').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });
    // Change the value of input field when slider changes
    $('#field2').on('input', function() {
        $('#input2').val(this.value);
        console.log('$'+$('#input2').val());
    });
    // Change the value of slider field when input changes
    $('#input2').on('input', function() {
        if (this.value.length == 0) $('#field2').val(0).change();

        $('#field2').val(this.value).change();
    });
    



    $('#field3').rangeslider({
        polyfill:false,
        onInit:function(){
        
            $('#input3').val($('input[type="range"]').val());
        },
        onSlide:function(position, value){
            $('.content #input3').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });
    // Change the value of input field when slider changes
    $('#field3').on('input', function() {
        $('#input3').val(this.value);
        console.log('$'+$('#input3').val());
    });
    // Change the value of slider field when input changes
    $('#input3').on('input', function() {
        if (this.value.length == 0) $('#field3').val(0).change();

        $('#field3').val(this.value).change();
    });
});

results = [];
TotalBank;

function calculateProfits() {
    BusinessDemand = 100; 
    SchoolDemand = 200; 
    StadiumDemand = 60;

    BusinessSugar = 1.55;
    BusinessLemon = 7.55;
    BusinessLemonadeColor = 1;
    BusinessPrice = 7.55

    SchoolSugar = 9.55;
    SchoolLemon = 1.55;
    SchoolLemonadeColor = 2;
    SchoolPrice = 2.55;

    StadiumSugar = 5.55;
    StadiumLemon = 5.55;
    StadiumLemonadeColor = 1;
    StadiumPrice = 7.55;

    BusinessSugarPenalty = 3;
    BusinessLemonPenalty = 3;
    BusinessLemonadeColorPenalty = 20;
    BusinessPricePenalty = 3;

    SchoolSugarPenalty = 6;
    SchoolLemonPenalty = 6;
    SchoolLemonadeColorPenalty = 60;
    SchoolPricePenalty = 6;

    StadiumSugarPenalty = 0.5;
    StadiumLemonPenalty = 0.5;
    StadiumLemonadeColorPenalty = 0.5;
    StadiumPricePenalty = 0.5;

    Sugar1 = parseFloat($('#field1').val());
    Lemon1 = parseFloat($('#field2').val());
    Price1 = parseFloat($('#field3').val());

    if(document.getElementById('switch_3_left').checked) {
        //Calculate colour penalties
        if (document.getElementById("switch_4_pink").checked) {
            ColorP1 = 20;
            $("#EstimateResult").slideDown();
            $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
        } else if (document.getElementById("switch_4_green").checked) {
            ColorP1 = 0;
            $("#EstimateResult").slideDown();
            $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
        } else {
            alert("Please select a colour")
        }
        //Calculate total penalties
        SugarP1 = Math.abs(BusinessSugar - Sugar1)*BusinessSugarPenalty;
        LemonP1 = Math.abs(BusinessLemon - Lemon1)*BusinessLemonPenalty;
        PriceP1 = Math.abs(BusinessPrice - Price1)*BusinessPricePenalty;
        Penalty1 = SugarP1 + LemonP1 + PriceP1 + ColorP1;

        //Calculate profits
        LemonadeProfit1 = BusinessDemand - Penalty1;
        
        
        RoundBank = LemonadeProfit1;
        results.push(RoundBank);

        TotalBank = results.reduceRight(function(a,b){return a+b;});
        TotalBank = TotalBank.toFixed(2);

        $('#roundbank').text("$"+RoundBank.toLocaleString());
        $('#totalbank').text("$"+TotalBank.toLocaleString());

        //Displays output
        $('#roundbank').text("$"+RoundBank.toLocaleString());
        $('#totalbank').text("$"+TotalBank.toLocaleString());

        //Gets feedback 

        if (Sugar1 < BusinessSugar) {
            ran1 = "Some of your customers told you that the lemonade is not sweet enough"
        } else {
            ran1 = "Some of your customers told you that the lemonade is too sweet."
        }
            
        if (Lemon1 < BusinessLemon) {
            ran2 = "Some of your customers told you that the lemonade is not sour enough."
        } else {
            ran2 = "Some of your customers told you that the lemonade is too sour."
        }

        if (Price1 < BusinessPrice) {
            ran3 = "You have too many customers demanding lemonade. The price may be too low."
        } else {
            ran3 = "You have too few customers demanding lemonade. The price may be too high."
        }

        randomArray = [];
        randomArray.push(ran1);
        randomArray.push(ran2);
        randomArray.push(ran3);
        randomOutput = randomArray[Math.floor(Math.random() * randomArray.length)];
        $('#feedback').text(randomOutput.toLocaleString());


    } else if(document.getElementById('switch_3_center').checked) {
        if (document.getElementById("switch_4_pink").checked) {
                ColorP1 = 20;
                $("#EstimateResult").slideDown();
                $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
        } else if (document.getElementById("switch_4_green").checked) {
                ColorP1 = 0;
                $("#EstimateResult").slideDown();
                $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
        } else {
            alert("Please select a colour")
        }

        SugarP1 = Math.abs(StadiumSugar - Sugar1)*StadiumSugarPenalty;
        LemonP1 = Math.abs(StadiumLemon - Lemon1)*StadiumLemonPenalty;
        PriceP1 = Math.abs(StadiumPrice - Price1)*StadiumPricePenalty;
            
        Penalty1 = SugarP1 + LemonP1 + PriceP1 + ColorP1;
        LemonadeProfit1 = StadiumDemand - Penalty1;
        
        RoundBank = LemonadeProfit1;
        results.push(RoundBank);

        TotalBank = results.reduceRight(function(a,b){return a+b;});
        TotalBank = TotalBank.toFixed(2);

        $('#roundbank').text("$"+RoundBank.toLocaleString());
        $('#totalbank').text("$"+TotalBank.toLocaleString());

        //Displays output
        $('#roundbank').text("$"+RoundBank.toLocaleString());
        $('#totalbank').text("$"+TotalBank.toLocaleString());

        //Gets feedback 

        if (Sugar1 < StadiumSugar) {
            ran1 = "Some of your customers told you that the lemonade is not sweet enough"
        } else {
            ran1 = "Some of your customers told you that the lemonade is too sweet."
        }
            
        if (Lemon1 < StadiumLemon) {
            ran2 = "Some of your customers told you that the lemonade is not sour enough."
        } else {
            ran2 = "Some of your customers told you that the lemonade is too sour."
        }

        if (Price1 < StadiumPrice) {
            ran3 = "You have too many customers demanding lemonade. The price may be too low."
        } else {
            ran3 = "You have too few customers demanding lemonade. The price may be too high."
        }

        randomArray = [];
        randomArray.push(ran1);
        randomArray.push(ran2);
        randomArray.push(ran3);
        randomOutput = randomArray[Math.floor(Math.random() * randomArray.length)];
        $('#feedback').text(randomOutput.toLocaleString());



    } else if(document.getElementById('switch_3_right').checked) {
            if (document.getElementById("switch_4_green").checked) {
                ColorP1 = 20;
                $("#EstimateResult").slideDown();
                $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
            } else if (document.getElementById("switch_4_pink").checked) {
                ColorP1 = 0;
                $("#EstimateResult").slideDown();
                $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
            } else {
                alert("Please select a colour")
            }

    
        SugarP1 = Math.abs(SchoolSugar - Sugar1)*SchoolSugarPenalty;
        LemonP1 = Math.abs(SchoolLemon - Lemon1)*SchoolLemonPenalty;
        PriceP1 = Math.abs(SchoolPrice - Price1)*SchoolPricePenalty;
            
        Penalty1 = SugarP1 + LemonP1 + PriceP1 + ColorP1;
        LemonadeProfit1 = SchoolDemand - Penalty1;
        
        RoundBank = LemonadeProfit1;
        results.push(RoundBank);

        TotalBank = results.reduceRight(function(a,b){return a+b;});
        TotalBank = TotalBank.toFixed(2);

        $('#roundbank').text("$"+RoundBank.toLocaleString());
        $('#totalbank').text("$"+TotalBank.toLocaleString());
        
        //Gets feedback 

        if (Sugar1 < SchoolSugar) {
            ran1 = "Some of your customers told you that the lemonade is not sweet enough"
        } else {
            ran1 = "Some of your customers told you that the lemonade is too sweet."
        }
            
        if (Lemon1 < SchoolLemon) {
            ran2 = "Some of your customers told you that the lemonade is not sour enough."
        } else {
            ran2 = "Some of your customers told you that the lemonade is too sour."
        }

        if (Price1 < SchoolPrice) {
            ran3 = "You have too many customers demanding lemonade. The price may be too low."
        } else {
            ran3 = "You have too few customers demanding lemonade. The price may be too high."
        }

        randomArray = [];
        randomArray.push(ran1);
        randomArray.push(ran2);
        randomArray.push(ran3);
        randomOutput = randomArray[Math.floor(Math.random() * randomArray.length)];
        $('#feedback').text(randomOutput.toLocaleString());
    } else {
        alert("Please select a location");
        return false;
        }  

    if (results.length < 20) {
        document.getElementById("nextround").style.display = "block";
        document.getElementById("cont-variables").style.display = "none"; 
        } else {
        document.getElementById("totalScore").value = TotalBank;
        document.getElementById("nextround").style.display = "none";
        document.getElementById("cont-variables").style.display = "none"; 
        document.getElementById("FinishButton").style.display = "block";   
        }        
}

function showInputs() {
    document.getElementById("nextround").style.display = "none";
    document.getElementById("EstimateResult").style.display = "none";  
    document.getElementById("cont-variables").style.display = "block"; 
    var1 = (results.length + 1);
    if (results.length != 20) {
        $('#roundnumber').text(var1.toLocaleString()); 
    }
}
