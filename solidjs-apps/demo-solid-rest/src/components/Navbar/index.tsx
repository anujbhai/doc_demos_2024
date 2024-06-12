import { Component } from "solid-js";

const Navbar: Component = () => {
    return (
        <header class="bg-purple-600 text-white py-2 px-8 h-16 flex items-center justify-between">
            <a href="/" class="hover:opacity-50 hero">REST in peace</a>

            <div class="flex items-center gap-4">
                <a href="/" class="hover:opacity-50">Home</a>
                <a href="/about" class="hover:opacity-50">About</a>
            </div>
        </header>
    )
}

export default Navbar
