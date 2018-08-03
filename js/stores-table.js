'use strict';

(function(module) {
    let html = module.html;

    let template = function() {
        return html`
            <section>
                <h2>Check out all our store locations!</h2>
                <table></table>
            </section>
        ;
    };

    class StoreTable {

        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores.slice();
        }

        update(props) {


            
        }





    }
