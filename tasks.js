var add_tasks = function() {

    const TaskCount = 3;
    let cont = $('<div>');


    let sectionCont = $('<div>');
    for (let i=1; i<TaskCount+1; i++) {
        let aCont = $('<div>')
            .append($(`<a href="data/zadania-${i}.pdf" target="_blank">Zadania ${i} </a>`));
        sectionCont.append(aCont);
    }
    
    cont.append(sectionCont);
    $('#tasks').append(cont);
}