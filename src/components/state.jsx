function States({name,username,email}) {
    
    return(
        <>

        <div className="box">

            <div className="div-pad">
              <h3>Name: {name}</h3>
              <h3>UserName: {username}</h3>
              <h3>Email: {email}</h3>
              <div className="checkbox">
                <input type="checkbox" className="largerCheckbox"/>
            </div>
            </div>
            
        </div>
       
        </>
    )
}
export default States
