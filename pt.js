var add_pt = function() {

    let links = [
        'https://www.youtube.com/watch?v=AU7PnM7T9Ag',
        'https://www.youtube.com/watch?v=xx03qQvzbHs',
        'https://www.youtube.com/watch?v=vDIQFQeAr3g',
        'https://www.youtube.com/watch?v=iLGyuoBd_JY',
        'https://www.youtube.com/watch?v=_acPp6fOqm4'
    ];

    let cont = $('<div>');
    let index = 1;
    let sectionCont = $('<div>');
    links.forEach(link=> {
        let aCont = $('<div>')
            .append($(`<a href="${link}" target="_blank">Dzieci trenuja w domu ${index}</a>`));
        sectionCont.append(aCont);
        index++;
    });
    
    cont.append(sectionCont);
    $('#pt').append(cont);
}