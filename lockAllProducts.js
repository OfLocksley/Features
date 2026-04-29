
function lockAllProducts(){
    document.querySelectorAll('.skuHeaderConfigLock').forEach(lock => {
            document.querySelectorAll('.productConfigTableProductColumn').forEach(product => {

                
                    const lockedSKU = product.dataset.sku;
                    function toggleLockGroup(){
                    if (!product.classList.contains("productConfigProductTableLocked")) {
                        product.classList.toggle('productConfigProductTableLocked');
                        lockedProdList[lockedSKU] = {};
                        console.log(JSON.stringify(lockedProdList));
                    }
                }
                return {
                    run: toggleLockGroup // Exposing the function externally
                };


                    document.querySelectorAll('.productTableEditInputs').forEach(element => {
                        if (element.dataset.sku === lockedSKU && product.classList.contains("productConfigProductTableLocked")) {
                            const lockedAttribute = element.dataset.attribute;
                            const lockedValue = element.value;

                            lockedProdList[lockedSKU][lockedAttribute] = lockedValue;


                            //console.log(`${lockedAttribute}: ${lockedValue}`);
                            sessionStorage.setItem('lockedProdList', JSON.stringify(lockedProdList));
                        }

                    });
                    console.log(JSON.stringify(lockedProdList))

                });

        });
        
    }
