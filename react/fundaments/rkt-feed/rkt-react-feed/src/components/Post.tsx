import { useState } from "react";
import { Comments } from "./Comments";
import { Avatar } from "./Avatar";

export const Post = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(true);
    };

    return (
        <article className="p-10 bg-gray2-cards rounded-lg mb-8">
            <header className="md:flex items-center justify-between">
                <div className="flex items-center md:mb-0 mb-2">
                    <Avatar hasBorder src="https://avatars.githubusercontent.com/u/54600376?v=4" />
                    <div className="flex flex-col ml-4">
                        <strong className="text-gray7-text-tilte">Bruna Borges</strong>
                        <span className="text-sm text-gray5-apoio">Dev Front-end</span>
                    </div>
                </div>
                <time className=" text-gray5-apoio text-sm" title="13 de maio às 17:41" dateTime="2024-05-13 17:41:00">Publicado há 1h</time>
            </header>

            <div className="text-gray6-text flex flex-col gap-8 mt-6">
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉
                    <a href="#" className="text-orange ml-2 hover:text-light-orange">jane.design/doctorcare</a>
                </p>

                <p className="mb-6">
                    <a href="#" className="text-orange hover:text-light-orange">
                        #novoprojeto
                    </a>
                    <a href="#" className="text-orange ml-2 hover:text-light-orange">
                        #nlw
                    </a>
                    <a href="#" className="text-orange ml-2 hover:text-light-orange">
                        #rocketseat
                    </a>
                </p>
            </div>

            <div className="border-b border-gray3-divider mb-6"></div>

            <strong className="text-gray7-text-tilte ">Deixe seu feedback</strong>
            <textarea onClick={toggleVisibility} className="w-full resize-none mt-4 rounded-lg h-24 outline-none focus:outline-orange bg-gray1-background text-gray6-text px-4 py-3" name="feedback" id="feedback"></textarea>
            <footer className={`focus-within:visible ${isVisible ? '' : 'invisible h-1'}`}>
                <button className={`mt-4 bg-orange rounded-lg px-6 py-4 max-h-none hover:bg-light-orange ${isVisible ? 'visible' : 'invisible'}`} type="submit">Publicar</button>
            </footer>
            <Comments />
            <Comments />
            <Comments />

        </article>
    );
};
