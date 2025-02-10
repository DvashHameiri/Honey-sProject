function getCustomers()
{
    fetch('http://localhost:3001/members',
        {
            method:'GET'
        }
    )
    .then((dataFromAPI)=>{ return dataFromAPI.json()})
    .then((dataAsObj)=>{

        console.log(dataAsObj);

        let myStr = "";

        
        // myStr = myStr + `<div class="personCard"> 
        // <h2> ${dataAsObj.recordset[1].customerName} </h2>
        // <h5> customers name: ${dataAsObj.recordset[1].phoneNo} </h5>
        // </div>`;

        for (const curr of dataAsObj.recordset) {
             myStr = myStr + 
             `<div class="personCard"> 
                <h2> ${curr.FullName} </h2> 
                <h5> ID Number: ${curr.MemberIDNumber} </h5> 
                <h5> Department Name: ${curr.ParentDepartment} </h5>
                <h5> Admin Name: ${curr.AdminFullName} </h5> 
                <h5> Wallet: ${curr.WalletName} </h5> 
                <h5> Balance: ${curr.TotalBalance} </h5> 
             </div>`;
        }


        document.querySelector("#myDiv").innerHTML = myStr;

    })
}