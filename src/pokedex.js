import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm />
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
            {props.items.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <p>{props.description}</p>
        <Items items={props.items} />
    </section>
)

const AppWithoutDescription = () => (
    <Header title="No description here" />
)

const App = () => {
    const appTitle = 'My Pokédex'
    const description = 'List of Pokémon'
    const items = [
        "Abra",
        "Bulbasaur",
        "Dragonair",
        "Rattata",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Squirtle",
        "Wartortle"
    ]
    return (
        <section>
            <Header title={appTitle} />
            <Content
                description={description}
                items={items}
                />
        </section>
    )
}

const element = document.getElementById('pokedex');
ReactDOM.render(<App />, element);