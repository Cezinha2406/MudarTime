function mudarCor(cor){
    let body = document.body;

    switch(cor){
        case 'santos': body.style.backgroundImage = "url(santos.png)";break;
        case 'saopaulo': body.style.backgroundImage = "url(saopaulo.png)";break;
        case 'corinthians': body.style.backgroundImage = "url(corinthians.png)";break;
        case 'palmeiras': body.style.backgroundImage = "url(palmeiras.png)";break;
        default: body.style.backgroundColor = 'black'
    }
}