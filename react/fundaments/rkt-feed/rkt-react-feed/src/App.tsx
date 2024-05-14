import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import '../src/index.css'
import { Post } from "./components/Post";

export function App() {

  return (
    <div className='bg-gray1-background h-full text-white font-roboto'>
      <Header />
      <div className="items-start md:max-w-[70rem] grid md:grid-flow-col gap-8 md:grid-cols-[256px,1fr]  mx-auto py-8 md:px-4 px-6">
        <Sidebar />
        <div className="flex flex-col mb-12">
          <Post />
          <Post />
          <Post />
        </div>

      </div>
    </div>
  )
}
