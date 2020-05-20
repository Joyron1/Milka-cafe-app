import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import MainCarousel from './MainCarousel';

import SecretBar from '../Home/secret_banner.jpg';


import './home.css'



class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="row no-gutters Carousel">
                    <div className="col-sm-12 col-xl-4 col-md-4">
                        <Link to="/milkabar"> <img src={SecretBar} style={{ width: "100%", height: "100%", opacity: "0.9" }} /> </Link>
                    </div>
                    <div className="col-sm-12 col-xl-8 col-md-8">
                        <MainCarousel></MainCarousel>
                    </div>
                </div>

            </div>


        )
    }
}

export default Home;
// const mapStateToProps = state => {
//     return {
//         shows: state.Shows
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         SetShows(value) {
//             dispatch({
//                 type: 'ShowsInfo',
//                 payload: value
//             })
//         }
//     }
// }

//         SetFavorits(value) {
//             dispatch({
//                 type: 'ShowsIFavoritesInfonfo',
//                 payload: value
//             })
//         },

//         SetHistory(value) {
//             dispatch({
//                 type: 'HistoryInfo',
//                 payload: value
//             })
//         }
//     }
// }


