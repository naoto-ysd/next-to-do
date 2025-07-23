'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useTheme } from '@/contexts/ThemeContext';

// Swiperの基本スタイルと、ナビゲーション・ページネーション用のスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// カルーセルに表示するサンプルコンポーネント
const SampleComponent1 = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className={`p-8 h-48 rounded-lg transition-colors duration-300 ${
    theme === 'dark' ? 'bg-red-900 text-white' : 'bg-red-100 text-gray-900'
  }`}>
    <h2 className="text-xl font-bold mb-2">コンポーネント 1</h2>
    <p>これは最初のサンプルコンポーネントです。</p>
  </div>
);

const SampleComponent2 = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className={`p-8 h-48 rounded-lg transition-colors duration-300 ${
    theme === 'dark' ? 'bg-green-900 text-white' : 'bg-green-100 text-gray-900'
  }`}>
    <h2 className="text-xl font-bold mb-2">コンポーネント 2</h2>
    <button 
      onClick={() => alert('Clicked!')}
      className={`px-4 py-2 rounded transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-green-700 hover:bg-green-600 text-white' 
          : 'bg-green-500 hover:bg-green-600 text-white'
      }`}
    >
      Click Me!
    </button>
  </div>
);

const SampleComponent3 = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className={`p-8 h-48 rounded-lg transition-colors duration-300 ${
    theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-blue-100 text-gray-900'
  }`}>
    <h2 className="text-xl font-bold mb-2">コンポーネント 3</h2>
    <p>テキストと画像などを自由に配置できます。</p>
  </div>
);


export default function MyCarousel() {
  const { theme } = useTheme();
  
  return (
    <div className="mt-8">
      <h2 className={`text-xl font-bold mb-4 text-center transition-colors duration-300 ${
        theme === 'dark' ? 'text-white' : 'text-gray-800'
      }`}>
        カルーセルサンプル
      </h2>
      <Swiper
        // 使用するモジュールを指定
        modules={[Navigation, Pagination, A11y]}
        // 表示するスライドの数
        slidesPerView={1}
        // 左右のナビゲーションボタンを有効にする
        navigation
        // ページネーション（下の丸いインジケーター）を有効にする
        pagination={{ clickable: true }}
        className={theme === 'dark' ? 'dark-swiper' : ''}
      >
        <SwiperSlide>
          <SampleComponent1 theme={theme} />
        </SwiperSlide>
        <SwiperSlide>
          <SampleComponent2 theme={theme} />
        </SwiperSlide>
        <SwiperSlide>
          <SampleComponent3 theme={theme} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
