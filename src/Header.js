import React from 'react'
import './Header.css'

export default class extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a href="/">Ceasar's Palace </a>
                    <a href="/canopy">Forest Canopy </a>
                    <a href="/burnt">Burnt</a>
                </header>
            </div>
        )
    }
}