import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import Travel from "./components/travel/Travel";

export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <div className="flex-grow">
        <Home />
      </div>
      
      <div className="flex-grow">
        <Popular />
      </div>
      
      <div className="flex-grow">
        <Travel />
      </div>
      
      <div className="flex-grow">
        <Blog />
      </div>
    </main>
  );
}
