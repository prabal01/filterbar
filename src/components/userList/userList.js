import react, { useEffect, useState } from "react"
import "./userList.css"
import Users from './images/users.svg';
import Card from "../cards/Cards";
function UserList(props) {
    const [visible, setVisible] = useState(false)
    const [imgsrc, setImgSrc] = useState(props.results[0].picture.medium)
    const showThumbnail = (key) => {
        console.log(key)
        setImgSrc(props.results[key].picture.large)
        setVisible(true)
    }
    const userCards = props.results.map((card, index) => <Card showThumbnail={showThumbnail} id={index} key={index} Name={card.name} Gender={card.gender} Email={card.email} Country={card.location.country} Phone={card.phone} Thumbnail={card.picture.medium} />)
    return (
        <>
            {
                visible ? <div className="bigImage">
                        <img className="big-img" src={imgsrc} alt="" />
                </div> : null
            }
            {
                visible ? <div className="closeButton">
                        <button className="closeBtn" onClick={()=>{
                            setVisible(false)
                        }}>X</button>
                </div> : null
            }

            <div className="userListBody">

                <div className="header">
                    <div className="usersIcon">
                        <img src={Users} ></img>
                    </div>
                    <div className="usersTitle">
                        <h2> Users</h2>
                    </div>

                </div>
                <div className="pageNavigation">
                    <button className="prevButton" onClick={() => props.prevPage()}>Previous Page</button>
                    <p>{props.CurrentPage}</p>
                    <button className="nextButton" onClick={() => props.nextPage()} >Next Page</button>
                </div>
                <div className="users">

                    {userCards}
                </div>

            </div>
        </>)
}

export default UserList