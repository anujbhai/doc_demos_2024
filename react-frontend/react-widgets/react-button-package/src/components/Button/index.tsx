import {
  useCallback,
} from 'react'

export const Button = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={
        useCallback(() => {
          console.log("vite + react + ts + tailwindcss = ❤️")
        }, [])
      }
    >
      Click me
    </button>
  )
}

