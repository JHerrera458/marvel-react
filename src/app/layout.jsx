export const metadata = {
  title: "Marvel React",
  description: "API de Marvel Comics consumida en React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
