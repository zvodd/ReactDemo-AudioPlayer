// import Link from "next/link";
import Main from "../components/main";
import { TracksProvider } from "../components/tracksProvider";

export default function IndexPage() {
  return (
    <div>
      <TracksProvider>
        <Main />
      </TracksProvider>
    </div>
  );
}
