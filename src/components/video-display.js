import PropTypes from "prop-types"
import React from "react"
import DisplayButtons from "./display-buttons"
import containerStyles from "./video-display.module.css"

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
            <div className={containerStyles.display}>
                <div className={containerStyles.displayBezel}>
                    <div> {this.props.children} </div>
                    <div class="flex-container" className={containerStyles.displayBezel__namesContainer}>
                        {
                        [...this.props.names.keys()].map((name) => {
                            console.log(name)
                            return (
                                <a href={this.props.names.get(name)}
                                   style={{padding: `0 1.0875rem 1.45rem`}}
                                className={containerStyles.displayBezel__names}>{name}
                                </a>
                            )
                            })
                        }
                    </div>
                </div>
                <div className={containerStyles.displayStand}>
                </div>
            </div>
        )
    }

}

VideoDisplay.propTypes = {
    names: PropTypes.object,
  }
  

export default VideoDisplay;
