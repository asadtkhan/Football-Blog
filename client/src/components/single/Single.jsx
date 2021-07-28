import "./single.css"
import Sidebar from '../sidebar/Sidebar'
import SinglePost from "../singlepost/SinglePost"

export default function Single() {
    return (
        <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
    )
}
