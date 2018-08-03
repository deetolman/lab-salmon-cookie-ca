'use strict';

(function(module) {
    let html = module.html;
    let StoresTable = module.StoreTable;

    


    let template = function() {
        return html`
            <header>
                <h1>Salmon Cookie Stores</h1>
            </header>
        
            <main></main>
         `;

    };

    class App { 
        render() {
            let dom = template();

            let main = dom.querySelector('main');

            let storesTable = new StoresTable({

            });

            
            return dom;
        }
    }
        

    module.App = App;

})(window.module = window.module || {});