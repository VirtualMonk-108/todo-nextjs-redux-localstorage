import './globals.css';
import ReduxProvider from '../ReduxProvider';

export const metadata = {
  title: 'Todo List App',
  description: 'A simple todo list app using Next.js and Redux Toolkit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
