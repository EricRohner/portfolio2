import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default class extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">Ceasar's Palace  </Link>
                    <Link to="/canopy">Forest Canopy </Link>
                    <Link to="/burnt">Burnt</Link>
                </header>
            </div>
        )
    }
}