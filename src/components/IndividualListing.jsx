function IndividualListing(props) {
    return (
        <div>
        <p> {props.data.price}</p>
        <h1> {props.data.title}</h1>
        <img src = {props.data.imageURL} alt = {props.data.title}/>
        <p> {props.data.description}</p>
        </div>
    )
}
export default IndividualListing