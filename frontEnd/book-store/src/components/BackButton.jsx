import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackButton({destination='/'}){
    return (
        <div>
            <Link to={destination}>
                <BsArrowLeft/>
            </Link>
        </div>
    )
}
export default BackButton;