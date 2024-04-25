import { produce } from "immer";
import { create } from "zustand";

// type DeepPartial<T> = {
//     [P in keyof T]?: DeepPartial<T[P]>
// }

type State = {
    deep: {
        nested: {
            obj: { count: number }
            arr: string[]
        }
    }
    normalInc: () => void
    normalSetText: (s: string, i: number) => void
    immerInc: () => void
    immerSetText: (s: string, i: number) => void
}

export const useStore = create<State>((set) => ({
    deep: {
        nested: {
            obj: { count: 0 },
            arr: ["Hello"],
        }
    },
    normalInc: () => set((state) => ({
        ...state,
        deep: {
            ...state.deep,
            nested: {
                ...state.deep.nested,
                obj: {
                    ...state.deep.nested.obj,
                    count: state.deep.nested.obj.count + 1
                },
            },
        }
    })),
    normalSetText: (s: string, i: number) => set((state) => ({
        ...state,
        deep: {
            ...state.deep,
            nested: {
                ...state.deep.nested,
                arr: [
                    ...state.deep.nested.arr.slice(0, i),
                    s,
                    ...state.deep.nested.arr.slice(i + 1),
                ],
            },
        },
    })),
    immerInc: () => set(produce((state: State) => {
        ++state.deep.nested.obj.count
    })),
    immerSetText: (s: string, i: number) => set(produce((state: State) => {
        state.deep.nested.arr[i] = s
    }))
}))
