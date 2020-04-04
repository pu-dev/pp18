var add_english = function() {


    let sections = [
        {
            name: 'Body parts',
            pdf: 'english-body-parts.pdf',
            links: [
                {
                    name: 'Head Shoulders Knees And Toes',
                    url: 'https://www.youtube.com/watch?v=RuqvGiZi0qg'
                },
                {
                    name: 'One Little Finger',
                    url: 'https://www.youtube.com/watch?v=eBVqcTEC3zQ'
                },
            ],
        },
        {
            name: 'Animals',
            pdf: 'english-animals.pdf',
            links: [
                {
                    name: 'Farm Animals',
                    url: 'https://www.youtube.com/watch?v=EwIOkOibTgM'
                },
                {
                    name: 'Old MacDonald Had A Farm',
                    url: 'https://www.youtube.com/watch?v=_6HzoUcx3eo'
                },
            ]
        },
        {
            name: 'Emotions',
            pdf: 'english-emotions.pdf',
            links: [
                {
                    name: 'If You\'re Happy',
                    url: 'https://www.youtube.com/watch?v=l4WNrvVjiTw'
                },
                {
                    name: 'How Are You Today?',
                    url: 'https://www.youtube.com/watch?v=teMU8dHLqSI'
                },
            ]
        },
        {
            name: 'Others',
            links: [
                {
                    name: 'Super Simple Songs',
                    url: 'https://www.youtube.com/user/SuperSimpleSongs'
                },
                {
                    name: 'If You\'re Happy and You Know',
                    url: 'https://www.youtube.com/watch?v=gKd58Nfr-dM'
                },
            ]
        }
    ];

    let cont = $('<div>');

    sections.forEach(section => {
        let sectionCont = $('<div>');

        let head = $('<h3>').text(section.name);
        sectionCont.append(head);
        
        cont.append(sectionCont);

        section.links.forEach(link => {
            let aCont = $('<div>')
                .append($(`<a href="${link.url}" target="_blank">${link.name}</a>`));
            sectionCont.append(aCont);
        });

        if (section['pdf'] !== undefined) {
            let aCont = $('<div>')
                .append($(`<a href="data/${section.pdf}" target="_blank">PDF</a>`));
            sectionCont.append(aCont);
        }

    });

    $('#english').append(cont);
}
