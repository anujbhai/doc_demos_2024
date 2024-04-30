import { redirect } from "react-router-dom"
import { deleteContact } from "../contacts"

export async function action(props) {
    const {params} = props

    throw new Error("dang!")

    // await deleteContact(params.contactId)

    // return redirect("/")
}
