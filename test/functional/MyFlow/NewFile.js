var assert = require('chai').assert
describe('first test',function()
{

it('should open the PDP',function()
{
 
    browser.url("https://www.amazon.in");
    browser.pause(10000);
    let bestSeller=$('//a[@tabindex=\'20\']');
    bestSeller.click();
/*var array1=['dog','cat','cow'] 
,array2=['apple','mango','orange','grapes'] ;

var i=0;
for(i=0; i< array1.length ; i++){
    assert.notEqual(array1[i],array2[i],"result true:arrays are not equal");
}


});
it('should switch to another window and add to cat the item', () => {
    browser.switchWindow('https://www.amazon.in/gp/product/B06Y5H8MXW?pf_rd_p=f2b20090-067d-415f-953d-b8dcecc9109f&pf_rd_r=G6SE3HN4YC75BMVHYZZB')
 let addToCartButton=$('#add-to-cart-button');
 addToCartButton.click();

})
*/
});
})
