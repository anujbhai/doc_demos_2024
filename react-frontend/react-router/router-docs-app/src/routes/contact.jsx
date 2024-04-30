import { Form, useFetcher, useLoaderData } from "react-router-dom"
import PropTypes from "prop-types"
import { getContact, updateContact } from "../contacts"

export async function loader(props) {
    const {params} = props
    const contact = await getContact(params.contactId)

    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        })
    }

    return {contact}
}
loader.propTypes = {
    params: PropTypes.object
}

export async function action(props) {
    const {request, params} = props

    let formData = await request.formData()

    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true"
    })
}
action.propTypes = {
    req: PropTypes.object,
    params: PropTypes.object,
}

export default function Contact() {
    const {contact} = useLoaderData()

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
    const fetcher = useFetcher()
    let favorite = contact.favorite

    if (fetcher.formData) {
        favorite = fetcher.formData.get("favorite") === "true"
    }

    return (
        <fetcher.Form method="post">
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
        </fetcher.Form>
    )
}

Favorite.propTypes = {
    contact: PropTypes.object
}
