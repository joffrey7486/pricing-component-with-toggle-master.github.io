document.getElementById('toggle').addEventListener('click', (e) => {
    const monthly = ['$19.99', "$24.99", "$39.99"] 
    const annual = ['$199.99', "$249.99", "$399.99"]
    if(e.target.checked){
        return document.getElementById('price_basic').innerHTML = monthly[0],
        document.getElementById('price_pro').innerHTML = monthly[1],
        document.getElementById('price_master').innerHTML = monthly[2]
    } else{ 
        return document.getElementById('price_basic').innerHTML = annual[0],
        document.getElementById('price_pro').innerHTML = annual[1],
        document.getElementById('price_master').innerHTML = annual[2]       
    }
})

