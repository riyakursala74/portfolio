import Body from "./Components/Body";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-yellow-500 text-blue-950 bg-gradient-to-t from-white">
        <Header></Header>
        <Body></Body>
      </div>
      <h3 className="text-center md:my-8 font-extrabold text-blue-950 text-2xl">
        Projects
      </h3>
      <Projects></Projects>
      <br />
      <br />
    </div>
  );
}
