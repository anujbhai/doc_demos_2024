import { Component, For, JSX } from "solid-js";
import { IRestRequest } from "../../interfaces/rest.interfaces";

const Home: Component = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const requests: IRestRequest[] = [
        {
          id: "1",
          name: "Get Scores",
          description: "Getting scores from server",
          request: {
            method: "GET",
            url: "https://scorer-pro3.p.rapidapi.com/score/game123",
            headers: [
              {
                key: "X-RapidAPI-Host",
                value: "API_HOST_FROM_RAPID_API",
              },
              {
                key: "X-RapidAPI-Key",
                value: "API_KEY_FROM_RAPID_API",
              },
            ],
          },
        },
        {
          id: "2",
          name: "Add Score",
          description: "Adding scores to server",
          request: {
            method: "POST",
            url: "https://scorer-pro3.p.rapidapi.com/score",
            headers: [
              {
                key: "X-RapidAPI-Host",
                value: "API_HOST_FROM_RAPID_API",
              },
              {
                key: "X-RapidAPI-Key",
                value: "API_KEY_FROM_RAPID_API",
              },
            ],
            body: JSON.stringify({
              score: 100,
              gameId: "123",
              userId: "test123",
            }),
          },
        },
      ];
    return (
        <div class="flex flex-col md:flex-row gap-4 h-full flex-1">
            <div class="w-full md:w-1/4 bg-gray-200 min-h-full border-gray-300 border p-4 rounded-lg">
                <div class="flex justify-between py-4">
                    <h1 class="text-sm">Rest Requests</h1>
                    
                    <button class="w-6 h-6 flex transition-all ease-in-out duration-100 hover:scale-125 items-center justify-center text-white bg-purple-600 border border-purple-600 rounded-full hover:bg-purple-700 active:text-white focus:outline-none focus:ring">
                        <div>+</div>
                    </button>
                </div>
            </div>

            <div class="list">
                <For each={requests} fallback={<div>Loading...</div>}>
                    {(item) => (
                        <a href={`/${item.id}`} class="relative list__item">
                            <div
                                class="p-2 hover:bg-gray-300 cursor-pointer pr-12 rounded-lg mb-2"
                                classList={{
                                "list__item--active": Boolean(
                                    location.pathname === `/${item.id}`
                                ),
                                }}
                            >
                                <div>{item.name}</div>
                                <div class="text-xs break-all">
                                    {item.request.method} {item.request.url}
                                </div>
                            </div>
                        </a>
                    )}
                </For>
            </div>

            <div class="flex-1 min-h-full">
                {props.children}
            </div>
        </div>
    )
}

export default Home
