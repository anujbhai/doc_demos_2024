import { Form } from "react-router-dom"
import PropTypes from "prop-types"

export default function Contact() {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://picsum.photos/id/64/200/300",
        twitter: "iamanuj_me",
        notes: "Some notes",
        favorite: true,
    }

    return (
        <div id="contact">
            <div>
                <img
                    src={contact.avatar || null}
                    key={contact.avatar}
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No name</i>
                    )}{" "}

                    <Favorite contact={contact} />
                </h1>

                {contact.twitter && (
                    <p>
                        <a href={`https://twitter.com/${contact.twitter}`} target="_blank">
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>

                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(e) => {
                            if (!confirm(
                                "Please confirm you want to delete this record."
                            )) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

function Favorite(props) {
    const {contact} = props

    let favorite = contact.favorite

    return (
        <Form method="post">
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
        </Form>
    )
}

Favorite.propTypes = {
    contact: PropTypes.object
}
