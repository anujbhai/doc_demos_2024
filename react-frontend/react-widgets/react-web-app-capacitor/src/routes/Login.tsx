import {
    SyntheticEvent,
    useState
} from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        setLoading(true)
        console.log("SUBMIT")

        setTimeout(() => {
            setLoading(false)
            navigate("/app/dashboard")
        }, 1500)
    }

    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                {loading
                    ? <div>Loading . . .</div>
                    : <button type="submit">Login</button>}
            </form>
        </main>
    )
}
