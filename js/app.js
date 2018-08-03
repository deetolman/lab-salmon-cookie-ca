'use strict';

(function(module) {
    let html = module.html;
    let StoresTable = module.s
    


    let template = function() {
        return html`
            <header>
                <h1>Stores</h1>
            </header>
        
            <main></main>
         `;

    };
    let someBs = html`<h1>Howdy</h1>`;
    class App { 
        render() {
            let dom = template();

            let main = dom.querySelector('main');

            
            main.appendChild(someBs);
            return dom;
        }
    }
        

    module.App = App;

})(window.module = window.module || {});