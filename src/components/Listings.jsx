import IndividualListing from './IndividualListing'
import Nav from './Nav'
import {postings} from '../postings.js'

function Listings() {
    console.log(postings)
    let postList = postings.map ((data, i ) => <IndividualListing data = 
    {data} key = {i} />)
    return (
        <div>
        <h1> Listing</h1>
        <Nav/>
        <IndividualListing/>
        <IndividualListing/>
        <IndividualListing/>
        <IndividualListing/>
        </div>
    )
}
export default Listings