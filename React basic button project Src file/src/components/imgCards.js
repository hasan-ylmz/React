import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {
    return (
        <div id="mainDiv">
            <div className="card-group mx-2 mt-3">
                <div className="card w-100 ">
                    <img src={props.ımage} className="card-img-top" alt="Nature İmg"/>
                        <div className="card-body">
                            <h5 className="card-title my-2">{props.cardTitle}</h5>
                            <p className="card-text">{props.cardText}</p>
                            </div>
                        <div className="card-footer">
                            <small className="text-muted">{props.lastUpdate}</small>
                        </div>
                </div>
            </div>
        </div>
    )
}

// Eğer herhangi bir özelliği default olarak gösterilmesini istiyorsak defaultProps özelliğini kullanırız.
// - ÖR cardTitle bilgisi bir sorun olup gösterilemedi . defaultProps sayesinde cardTitle kısmı  doldurulacaktır.  

Card.defaultProps = {
    cardTitle: "Default Text",
}

Card.propTypes = {
    cardText : PropTypes.string,
}

// Propların türlerini belirlemeye yardımcı olur.
/* Card.propTypes = {
    cardText :PropTypes.string.isRequired
} */
export default Card;