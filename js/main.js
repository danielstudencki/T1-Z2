(function($){

    $(function(){

        var elementsA = $('div.grid.grid-12');
        console.log(elementsA);
        var elementsB = $('.nav a[href^="http"]');
        console.log(elementsB);
        var elementsC = $('input:radio:not([checked]), input:checkbox:not([checked])'); // Jeśli istnieje jakiś sposób, by ująć to w jednym selektorze, proszę o request ;)
        console.log(elementsC);
        var elementsD = $('#text p:empty:first');
        console.log(elementsD);
        var elementsE = $('.pagination-item:not(span)');
        console.log(elementsE);

    });

})(jQuery);