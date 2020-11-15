import React from "react";
import Divider from "../Divider/Divider";
import "./AvengerDetails.scss";
import { Data } from "../../data";
import Pic from "../../assets/avengerAppearence/avengers-endgame.jpg";
import {animated, useSpring} from 'react-spring'

const AvengerDetails = () => {

  return (
    <React.Fragment >
      <h4 className="title">AVENGERS</h4>
      <div className="red-line"></div>
      <h1 className="avenger-name">{Data.Thanos.name}</h1>
      <Divider />
      <h4>Background</h4>
      <div className="avenger-background-table">
        <table>
          <tr>
            <td className="question">Height</td>
            <td className="answer">{Data.Thanos.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{Data.Thanos.weight}</td>
          </tr>
          <tr>
            <td>Eyes</td>
            <td>{Data.Thanos.eyes}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{Data.Thanos.gender}</td>
          </tr>
          <tr>
            <td>Origin</td>
            <td>{Data.Thanos.origin}</td>
          </tr>
          <tr>
            <td className="array-field">Powers</td>
            <td>
              {Data.Thanos.powers.reduce(
                (acc, currentValue) => `${currentValue}, ${acc}`,
                ""
              )}
            </td>
          </tr>
          <tr>
            <td className="array-field">Aliases</td>
            <td>
              {Data.Thanos.aliases.reduce(
                (acc, currentValue) => `${currentValue}, ${acc}`,
                ""
              )}
            </td>
          </tr>
        </table>
        <h4>Movies</h4>
        <div className="movies">
          <img className="image" src={Pic} alt="" />
          <img className="image" src={Pic} alt="" />
          <img className="image" src={Pic} alt="" />

        </div>
        {/*   <div className="container">
          <div className="left">Height</div>
          <div className="right">6'7"</div>
        </div>
        <div className="container">
          <div className="left">Height</div>
          <div className="right">6'7"</div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default AvengerDetails;
