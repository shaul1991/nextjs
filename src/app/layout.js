import './globals.css';
import { Inter } from 'next/font/google';
import AppLayout from './components/AppLayout';

// 폰트 설정
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// 메타데이터 설정
export const metadata = {
  title: '모바일 웹 앱',
  description: '최소 360px, 최대 720px 가로 기준 모바일 앱',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <div className="mobile-container">
          <AppLayout>{children}</AppLayout>
        </div>
      </body>
    </html>
  );
}