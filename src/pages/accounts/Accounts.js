import './Accounts.css';

export default function Accounts() {
    return (
    <div className='Accounts'>
        <div className='Accounts-Content'>
            
            <button id="logoutButton"> Logout </button>
            <br/> <br/>
            

            <div className = "AccountInformation-Content">
                <h2> Account Information </h2>   

                <text>Name: </text>
                <p> First Name and Last Name </p>
                <br/> <br/>

                <text>Password: </text> 
                <p> Password (*************) </p>
                <button> Show Password </button>
                <br/> <br/>
                <br/> <br/>

                <text>Email: </text>
                <p> Email </p>
                <br/> <br/>

                <text>Phone Number: </text>
                <p> Phone Number </p>
                <br/> <br/>
        
                <text>Date of Birth: </text>
                <p> Date of Birth </p>
                <br/> <br/>
        
                <text>Address: </text>
                <p> Address </p>
                <br/> <br/>
        
                <button id="editButton"> Edit </button>
            </div>
            <br/> <br/>

            <div className = "LoyaltyPoints-Content">
                <h2> Loyalty Points </h2>

                <text>Loyalty Points: </text>
                <p> Points </p>
            </div>
            <br/> <br/>

            <div className = "PurchaseHistory-Content">
                <h2> Purchase History </h2>

                <text>Purchase History: </text>
                <p> History </p>
            </div>
        </div>
    </div>
    )  
}