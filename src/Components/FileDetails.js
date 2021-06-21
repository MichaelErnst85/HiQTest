import { useHistory, useParams } from "react-router-dom";
import useGetFiles from "../Data/usePostFiles";

const endpoint ="https://localhost:44326/api"
const FileDetails  = () => {

    const { id } = useParams();
    const history = useHistory();
    const {data: fileName, error, isLoading} = useGetFiles(endpoint +"/Files/"+id)

    const styleObj = {
        fontStyle:"italic",
        cursor: "pointer",
        color: "rgb(252,81,1)" 

    }
    const GoBack = () => {
        history.push("/read")
    }
    return ( 
        <div className="filedetails">
            {isLoading && <div id="load">
                        <div>G</div>
                        <div>N</div>
                        <div>I</div>
                        <div>D</div>
                        <div>A</div>
                        <div>O</div>
                        <div>L</div>
                    </div>
            }
            {error && <div>{ error }</div>}
            <h1>Read</h1>
            <article>
                <h2>
                    This is a detail
                </h2>
                <div className="file-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt ipsam assumenda. Necessitatibus exercitationem cupiditate ratione molestiae nesciunt libero, non sed commodi dolores quas laudantium veniam repellat numquam voluptatibus fugiat.
                    { fileName }
                </div>
                <h3
                style={ styleObj }
                onClick={ GoBack }>
                    Go back
                </h3>
            </article>
        </div>
        
     );
}
 
export default FileDetails ;