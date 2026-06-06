export const metadata = {
  title: "Sanity Studio",
  description: "Sanity Studio Content Management System",
};

/**
 * Root layout specifically for Sanity Studio.
 * Ensures the Studio renders full-screen with its own HTML/body elements,
 * bypassing the global site layout (Navbar, Footer, etc.).
 */
export default function StudioLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
