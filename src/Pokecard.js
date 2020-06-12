import React, { Component } from 'react'
import './Pokecard.css'
import './App.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);


class Pokecard extends Component{
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return (
            <div className="Pokecard">
                <div className="Pokecard-title">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
                <div className="Pokecard-data">
                    <strong>Type: </strong>{this.props.type}
                </div>
                <div className="Pokecard-data">
                    <strong>Experience: </strong>{this.props.experience}
                </div>
            </div>
        )
    }
}

export default Pokecard