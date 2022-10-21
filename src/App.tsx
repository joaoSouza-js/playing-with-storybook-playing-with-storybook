import { Header } from "./components/Header";
import { PostContextProvider } from "./context/PostContext";
import { Home } from "./pages/Home";

export function App(){
  return (
    <PostContextProvider>
      <Header />
      <Home/>
    </PostContextProvider>
    
  )
}