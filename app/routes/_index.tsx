import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Q bot Dashboard" },
    { name: "description", content: "Q bot Dashboard" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Hello World
    </div>
  );
}
