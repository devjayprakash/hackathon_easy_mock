import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ClerkProvider } from '@clerk/nextjs';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Easy Papers',
  description: 'Easy papers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-50`}>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#6D28D9',
                },
              }}
            >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
