import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>

                <div>
                    <form id="search-form" role="search">
                        <input
                            type="text"
                            id="q"
                            name="q"
                            aria-label="Search Contacts"
                            placeholder="Search"
                        />

                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />

                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>

                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>

                <nav>
                    <ul>
                        <li><Link to={`/contacts/1`}>Your name</Link></li>
                        <li><Link to={`/contacts/2`}>Your friend</Link></li>
                    </ul>
                </nav>
            </div>

            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}
