var assert = require('chai').assert
var object = require('../../mocks/object')


describe('test case for homepage',function()
{
    before(function() {
        browser.url("https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/home");
        
    });

it('should validate Welcome mat',function()
{
 /*let welcomeMat=$('div.modal-lg>div');
 var continueToMovadoBtn = $('button.continue-here');
 let isExisting =welcomeMat.isExisting()
 console.log(isExisting);*/
    if(browser.isExisting(object.welcomeMat)){
        console.log("Welcome Mat exists",browser.isExisting(object.welcomeMat));
    //    object.continueToMovadoBtn.click();
       browser.click(object.continueToMovadoBtn);
        //browser.pause(3000);
        console.log("Continue to movado button is clicked");
        }
        else{
        console.log("Welcome mat is not visible");
    
        }
});
it('should validate homepage banner',function()
{
    browser.pause(5000);

   if(browser.isExisting(object.homepageBanner)){
    console.log("homepage banner exists");}
    else{
    console.log("Homepage banner does not exist");

    }
});
  it('should redirect to PLP and then PDP',function(){
        
      // var addToCartBtn="button.add-to-cart";
       //var addToCartModal=$('div#addToCartModal>div>div>div>a:nth-child(2)');
        browser.url("https://dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/shop-watches/movado-heritage-series-3650060.html");
         browser.pause(10000);
         if(browser.isExisting(object.breadcrumbPDP)){
            console.log("Breadcrumb on PDP exists");
         }
         //var productNamePDP=object.productNamePDP.getText();
         if(browser.isExisting(object.addToCartBtn)){
            console.log("Add to cart button on PDP exists",browser.isExisting(object.addToCartBtn));
            browser.click(object.addToCartBtn);
            browser.pause(3000);
            }
            else{
            console.log("add to cart button is  not visible");
        
            }
        });

        
       
        
        it('should proceed through checkout',function(){
        
            if(browser.isExisting(object.addToCartModal)){
                console.log("user can now checkout to cart page");
                browser.pause(5000);
                browser.click(object.checkoutBtnOnPDP);
            }
            browser.pause(5000);
            //var productNameCart=object.productNameCart.getText();
//assert.equal(object.productNamePDP,object.productNameCart);
            browser.click(object.checkoutBtnOnCart);
            browser.click(object.checkoutAsGuest);
            });
                
            
            it('shipping page ',function(){
         browser.pause(5000);
                    browser.setValue(object.firstName,"Garima") ;
                    browser.setValue(object.lastName,"Negi") ;
                    browser.setValue(object.addressLine1,"House of marley , street 1") ;
                    browser.selectByValue(object.stateDropdown,"AZ")
                    browser.setValue(object.city,"Test") ;
                    browser.setValue(object.zipcode,"90384") ;
                    browser.setValue(object.phoneNumber,"7043498785") ;
               browser.pause(3000);
               browser.click(object.nextPaymentButton);
               console.log("user landed to payment page");
                });
            
           
           
   
});

    
       
 



