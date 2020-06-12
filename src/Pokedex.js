import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'

class Pokedex extends Component{

    render(){

        let title
        if(this.props.isWinner){
            title = <h2 className="Pokedex-winner">Winning Hand</h2>
        } else {
            title = <h2 className="Pokedex-loser">Losing Hand</h2>
        }
        
        return(
            <div>
                <div className="Pokedex"><strong>{title}</strong></div>
                <div className="Pokedex"><h4>Total experience: {this.props.exp}</h4></div>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map( (p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} experience={p.base_experience}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex
