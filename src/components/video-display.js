import PropTypes from "prop-types"
import React from "react"
import DisplayButtons from "./display-buttons"
import "./video-display.scss"

// VideoDisplay 
// props:
//     {
//          names; // map of names to links name: <link>      
//               
//     }
class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="display">
                <div className="displayBezel">
                    <div className="displayContent">  
                        <img className="noise-image"
                            src={this.props.image}
                            alt="display">
                        </img> 
                    </div>
                    <div className="displayNames">
                        {
                        [...this.props.names.keys()].map((name) => {
                            console.log(name)
                            return (
                                <a href={this.props.names.get(name)}
                                className="displayBezel__names">{name}
                                </a>
                            )
                            })
                        }
                    </div>
                </div>
                <div className="displayStand">
                </div>
            </div>
        )
    }

}

VideoDisplay.propTypes = {
    names: PropTypes.object,
}
  

export default VideoDisplay;
