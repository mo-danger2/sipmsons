import './ProfileCard.css'

export default function ProfileCard(props) {
    return(
        <div id="single-article-1" className="single-article">
            <div id="card-front-1" className="front-card tb-card">
                <img src={props.pic} className="profile-image" alt='' />
                <div className="single-content">
                    <div className="card-middle">
                        <h1>Bart Simpson</h1>
                        <p className="team-p1">
                        <p>biggest prankster</p>    
                        </p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-email">
                          <p>lbart@simpsons.com</p>  
                        </div>
                        <div className="card-icon profile-trigger" data-id="single-article-1" >
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}