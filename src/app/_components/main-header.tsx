import { Sofa } from "lucide-react";

export default function MainHeader() {
  return (
    <nav className="flex flex-col items-center gap-6">
      <h1 className="flex items-center gap-2 text-2xl text-white">
        <Sofa /> Couch Social
      </h1>
    </nav>
  );
}
