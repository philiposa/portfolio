import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold mb-4"> Welcome to my Portfolio</h1>
      <p className="text-lg text-center max-w-xl mb-8"> Hi, my name is Philipos Abrha and I work as a Software/DevOps Engineer. <br/> Explore my work and learn more about me.</p>
      <nav className="flex space-x-6">
        <a href="/about" className="text-blue-600 underline"> About Me</a>
        <a href="/projects" className="text-blue-600 underline"> Projects </a>
        <a href="/contact" className="text-blue-600 underline">Contact</a>
      </nav>
    </main>
  );
}
