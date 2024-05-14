import { PiThumbsUp, PiTrash } from "react-icons/pi"
import { Avatar } from "./Avatar"

export const Comments = () => {
    return (
        <>
            <div className="flex w-full mt-8">

                <Avatar hasBorder={false} className="boxSizing-initial rounded-lg w-14 h-14" src="https://avatars.githubusercontent.com/u/54600376?v=4" />

                <div className="flex-1 flex-col ml-4">

                    <div className="flex bg-gray3-divider p-4 rounded-lg  justify-between">

                        <div className="flex flex-col">
                            <strong className="text-gray7-text-tilte">Bruna Borges <span className="text-gray5-apoio">(você)</span></strong>
                            <time className="text-gray5-apoio text-sm mb-4" dateTime="2024-05-13 22:49:00" title="13 de maio de 2024 às 22:49">Cerca de 2h</time>
                            <p className="text-gray6-text">Muito bom Devon, parabéns!! 👏👏</p>
                        </div>
                        <button type="button" className="flex">
                            <PiTrash className="text-gray5-apoio w-6 h-6 hover:text-red-danger " />
                        </button>
                    </div>
                    <button type="button" className="hover:text-orange flex items-center text-gray5-apoio text-sm mt-2">
                        <PiThumbsUp className="mr-2" />
                        Aplaudir <span className="ml-1"> • 03</span>

                    </button>
                </div>
            </div>
        </>
    )
}
