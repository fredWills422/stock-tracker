let shares = [
    {symbol: "PG", name: "P&G", location: "Cincinnati, OH", current: 126.41, 
    paid: 125.11, gainLoss: 1.30, nbrOfShares: 10, value: 1264.10},
    {symbol: "MSFT", name: "Microsoft", location: "Redmond, WA", current: 167.10, 
    paid: 162.34, gainLoss: 4.76, nbrOfShares:100, value: 1264.10},
    {symbol: "AMZN", name: "Amazon", location: "Bellevue, WA", current: 1884.72, 
    paid: 1888.33, gainLoss: -4.21, nbrOfShares: 2, value: 1264.10}
];

$().ready(() => {
        display();
        add();
        remove();
        $("#save").css("color","blue");
        $("#delete").css("color","red");
        
});
    
const display = () => {
    let tbody = $("#tbody");
    tbody.html("");
    for(let share of shares){
        let tr = $("<tr></tr>");
        tr.append(`<td>${share.symbol}</td>`);
        tr.append(`<td>${share.name}</td>`);
        tr.append(`<td>${share.location}</td>`);
        tr.append(`<td>${share.current}</td>`);
        tr.append(`<td>${share.paid}</td>`);
        tr.append(`<td>${share.gainLoss}</td>`);
        tr.append(`<td>${share.nbrOfShares}</td>`);
        tr.append(`<td>${share.value}</td>`);
        tbody.append(tr);
    }
    
}


const add=() => {
    
    $("#save").click(() =>{
        let nSymbol = $("#pSymbol").val();
        let nName = $("#pName").val();
        let nLocation = $("#pLocation").val();
        let nCurrent = $("#pCurrent").val();
        let nPaid = $("#pPaid").val();
        let nGainLoss = $("#pGainLoss").val();
        let nNbrOfShares = $("#pNbrOfShares").val();
        let nValue = $("#pValue").val();
        
        let nShare = {
            symbol: nSymbol, name: nName, location: nLocation, current: nCurrent,
            paid: nPaid, gainLoss: nGainLoss, nbrOfShares: nNbrOfShares, value: nValue
        }
        shares.push(nShare);
        display();
    });
}

const remove=() =>{

    $("#delete").click(() => {
        shares.pop();
        display();
    });
}
