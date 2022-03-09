import PropTypes from "prop-types"

function Profil(props){
    const strat=()=> alert(`this is strat${props.FullName}`) 
    return(
    <div>
        {props.children}
    <h1>{props.FullName}</h1>
     <h1>{props.Bio}</h1>
     <h3>{props.Profession}</h3>
     <button onClick={strat}>Clic on Me</button>
     
    </div> 
    
    )
}
Profil.defaultProps={
    FullName:1234
}
Profil.propTypes={
    FullName:PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,
}
export default Profil