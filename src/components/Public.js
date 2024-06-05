import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Skyzz!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Skyzz notes.</p>
                <address className="public__addr">
                    Skyzz<br />
                    555 Mozella<br />
                    Foo City, CA 400000<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Dan Davidson</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public