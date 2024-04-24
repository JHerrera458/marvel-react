import "./styles.css";

export const metadata = {
  title: "Marvil React",
  description: "API de Marvel Comics consumida en React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col text-white bg-backgroundColor px-4">
        <header className="self-center font-bold text-2xl">Marvil React</header>
        <main className="flex-grow">{children}</main>
        <footer className="self-center opacity-80">Con 💖 por KimDev</footer>
      </body>
    </html>
  );
}
