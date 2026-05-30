const { useState } = require("react");

function Pay()
{
    const [amount,setAmount]=useState("");

    const submit=(e)=>{
        var options=
        {
            key:"",
            key_secret:"",
            amount:amount*100,
            currency:"INR",
            name:"basic",
            description:"testing",
            response:function (res)
            {
                    alert(res.razorpay_payment_id);
            },
            prefill:{
                name:"ari",
                email:"",
                contact:""
            },
            notes:{
                address:"razorpay corp off"
            },
            theme:{
                color:""
            }
        };
        var pay=new window.Razorpay();
        pay.open();
    }

    return( 
        <>
        <input type="text" value={amount}></input>
        <button></button>
        </>
    )
}