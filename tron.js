var tronWeb;
var waiting = 0;
var currentAddr;
var time = 0;
var pottime = 0;

 
async function main() {

    if (typeof(window.tronWeb) === 'undefined') {
        console.log('Waiting for tronWeb...');
        waiting += 1;
        if (waiting == 5) {
        alert('please ensure tronlink is installed and connected ');
        }
        setTimeout(main, 1000);
    } else {
        tronWeb = window.tronWeb;
        Decker = await tronWeb.contract().at("TT4uxm3rkiuG2ZB6qNLT9JjbVmwWa2xy6X");
        
        BigNumber = tronWeb.BigNumber;
        currentAddr = tronWeb.defaultAddress['base58'];
        setTimeout(function() {
            

        }, 2000);
        setInterval(function() {
            mainloop();
        }, 2000);
    }
}

function nFormatter(num) {
    isNegative = false
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)
    if (num >= 1000000000) {
        formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (num >= 1000000) {
        formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
        formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formattedNumber = num;
    }
    if (isNegative) {
        formattedNumber = '-' + formattedNumber
    }
    return formattedNumber;
}

 

function mainloop() {
    if (tronWeb.defaultAddress['base58'] !== currentAddr) {
        location.reload();
    }



    var dataRef = window.location.origin + "?ref=" + tronWeb.defaultAddress['base58']
    document.getElementById('intialAccount').textContent = dataRef;

    Decker.investors(currentAddr).call().then(result => {
        var lockbox = (result.lockbox.toNumber());
          document.getElementById('mylbox').textContent =  lockbox/1e6  + ' TRON';
        
    });
    
      Decker.getWithdrawn(currentAddr).call().then(result => {
        var getWithdrawn = (result.toNumber());
          document.getElementById('getWithdrawn').textContent =  getWithdrawn/1e6 + ' TRON';
        
    });
    
    
      Decker.calculateProfit(currentAddr).call().then(result => {
        var calculateProfit = (result.toNumber());
          document.getElementById('calculateProfit').textContent =  calculateProfit/1e6  + ' TRON';
        
    });
      Decker.affiliateCommission(currentAddr).call().then(result => {
        var affiliateCommission = (result.toNumber());
          document.getElementById('affiliateCommission').textContent =  affiliateCommission/1e6  + ' TRON';
        
    });
    
    
     Decker.lockboxTotal().call().then(result => {
        var lockboxTotal = (result.toNumber());
          document.getElementById('lockboxTotal').textContent =  lockboxTotal/1e6  + ' TRON';
        
    });
    
    
      
     Decker.investorsCount().call().then(result => {
        var investorsCount = (result.toNumber());
          document.getElementById('investorsCount').textContent =  investorsCount + ' TRON';
        
    });
    
      
     Decker.getBalance().call().then(result => {
        var getBalance = (result.toNumber());
          document.getElementById('getBalance').textContent =  getBalance/1e6  + ' TRON';
        
    });
    
    
      
     Decker.withdrawnProfitTotal().call().then(result => {
        var withdrawnProfitTotal = (result.toNumber());
          document.getElementById('withdrawnProfitTotal').textContent =  withdrawnProfitTotal/1e6  + ' TRON';
        
    });
    
    
    
    
    
       Decker.guaranteedBalance().call().then(result => {
        var guaranteedBalance = (result.toNumber());
          document.getElementById('guaranteedBalance').textContent =  guaranteedBalance/1e6  + ' TRON';
        
    });
    
    
    
    
    
    
    
    
    

     
    


}


$('#trxEnabled').click(function() {
    document.getElementById("fragEnabled").checked = false;
    document.getElementById("trxEnabled").checked = true;
    document.getElementById("bankrEnabled").checked = false;
    $("#buy").attr("placeholder", "AMOUNT OF TRX TO SPEND");
    
    $('.act').hide();
         $('.buyaction2').show();
         $('.wtab').show();
    
    tronWeb.trx.getUnconfirmedBalance(tronWeb.defaultAddress['base58']).then(result => {
        walletBal = result;
        document.getElementById('walletApx').textContent = (tronWeb.fromSun(result)*1).toFixed(2);
    });
    
     
     document.getElementById("tn").textContent = "TRON" ;
    
     
});
$('#fragEnabled').click(function() {

    document.getElementById("fragEnabled").checked = true;
    document.getElementById("trxEnabled").checked = false;
    document.getElementById("bankrEnabled").checked = false;
    $("#buy").attr("placeholder", "AMOUNT OF FRAG TO SPEND");
     var data = 0 ;
    tokenfrag.allowance(currentAddr,'TPgeitAwsQyW3pYC7nh7riAEGM8wnwT5ew').call().then(result => {
        var amount = ((result));
        var stat1 = amount;
       // document.getElementById("walletApx").textContent = (amount / 1e6).toFixed(5) ;
       //  document.getElementById("tn").textContent = "FRAG" ;
        if(stat1 == 0){
        $('.act').show();
         $('.buyaction2').hide();
         $('.wtab').hide();
        
       }
       else{
           $('.act').hide(); 
            $('.buyaction2').show();
         $('.wtab').show();
       }
    });
     tokenfrag.balanceOf(currentAddr).call().then(result => {
        var amount = ((result));
        var stat1 = amount;
        document.getElementById("walletApx").textContent = (amount / 1e18).toFixed(5) ;
         document.getElementById("tn").textContent = "FRAG" ;
        
    });
    
     

});
$('#bankrEnabled').click(function() {
    document.getElementById("fragEnabled").checked = false;
    document.getElementById("trxEnabled").checked = false;
    document.getElementById("bankrEnabled").checked = true;
    $("#buy").attr("placeholder", "AMOUNT OF BNKR TO SPEND");
   
    
    tokenbankroll.allowance(currentAddr,'TPgeitAwsQyW3pYC7nh7riAEGM8wnwT5ew').call().then(result => {
        var amount = ((result))
        var stat = amount;
        
        if(stat == 0){
        $('.act').show();
         $('.buyaction2').hide();
         $('.wtab').hide();
        
       }
       else{
           $('.act').hide(); 
            $('.buyaction2').show();
         $('.wtab').show();
       }
    });
    
    tokenbankroll.balanceOf(currentAddr).call().then(result => {
        var amount = ((result));
        var stat1 = amount;
        document.getElementById("walletApx").textContent = (amount / 1e6).toFixed(5);
        document.getElementById("tn").textContent = "BNKR" ;
        
    });
    
    
    
    
    
});


$('#trxEnabledW').click(function() {
    document.getElementById("fragEnabledW").checked = false;
    document.getElementById("trxEnabledW").checked = true;
    document.getElementById("bankrEnabledW").checked = false;
    // $("#buy").attr("placeholder", "AMOUNT OF TRX TO SPEND");
    document.getElementById("tokenwithdraw").textContent = 'TRON';
});
$('#fragEnabledW').click(function() {

    document.getElementById("fragEnabledW").checked = true;
    document.getElementById("trxEnabledW").checked = false;
    document.getElementById("bankrEnabledW").checked = false;
    //$("#buy").attr("placeholder", "AMOUNT OF FRAG TO SPEND");
    document.getElementById("tokenwithdraw").innerHTML = 'FRAG';

});
$('#bankrEnabledW').click(function() {
    document.getElementById("fragEnabledW").checked = false;
    document.getElementById("trxEnabledW").checked = false;
    document.getElementById("bankrEnabledW").checked = true;
    // $("#buy").attr("placeholder", "AMOUNT OF BNKR TO SPEND");
    document.getElementById("tokenwithdraw").textContent = 'BANKROLL';

});



function approve(){
    
  if ($('#fragEnabled').is(':checked')) {
       
        tokenfrag.approve('TPgeitAwsQyW3pYC7nh7riAEGM8wnwT5ew', '100000000000000000000000' ).send({

        }).then(result => {
            callback();
            $('.act').hide(); 
            $('.buyaction2').show();
         $('.wtab').show();
        }).catch((err) => {
            console.log(err)
        })

    } else {
        tokenbankroll.approve('TPgeitAwsQyW3pYC7nh7riAEGM8wnwT5ew', 1000000000000).send({

        }).then(result => {
            callback();
           
        }).catch((err) => {
            if(!err){
                 $('.act').hide(); 
            $('.buyaction2').show();
         $('.wtab').show();
            }
            else{
                 console.log(err)
            }
            
           
        })

    }

    
    
    
}





function sell() {

    var _trxneeded = (document.getElementById('sell').value);
    var _amt = _trxneeded * 1e6;
    Decker.sell(_amt).send({

    }).then(result => {


        callback();
    }).catch((err) => {
        console.log(err)
    });

}

function reinvest() {


    Decker.reinvestProfit().send({

    }).then(result => {


        callback();
    }).catch((err) => {
        console.log(err)
    });

}





function withdrawLockBoxAndClose(){
    
    
    
    Decker.withdrawLockBoxAndClose().send({

    }).then(result => {


        callback();
    }).catch((err) => {
        console.log(err)
    });


 

}

function withdraw(){
    
    
    
    Decker.withdrawProfit().send({

    }).then(result => {


        callback();
    }).catch((err) => {
        console.log(err)
    });


 

}

$('#buybtn').click(function() {
     event.preventDefault();
    var _trxneeded = (document.getElementById('buy').value);
    var _amt = _trxneeded * 1e6;
    var data = (document.getElementById('addrs').value);
     
     
    Decker.invest(data).send({callValue : _amt

    }).then(result => {


        callback();
    }).catch((err) => {
        console.log(err)
    });
});

 


$('#buyEggs').on('keyup input', function() {

    var amt = document.getElementById('buyEggs').value;
    var data = amt * 1e6;
    if (data >= 1) {
        Decker.calculateEggBuySimple(data).call().then(result => {
            var calculateEggBuySimple = ((result));
            document.getElementById("calculateEggBuySimple").textContent = calculateEggBuySimple;


            Decker.getHatchCooldown(calculateEggBuySimple).call().then(result => {
                console.log("getHatchCooldown", result);
                var getHatchCooldown = ((result));

                //  console.log("data", data);
                cooldowntimer(getHatchCooldown, 'getHatchCooldown');

            });
        });
    } else {
        document.getElementById("calculateEggBuySimple").textContent = 0;
    }



});




main();