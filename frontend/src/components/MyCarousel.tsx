'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Swiperの基本スタイルと、ナビゲーション・ページネーション用のスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// カルーセルに表示するサンプルコンポーネント
const SampleComponent1 = () => (
  <div style={{ background: '#ffdddd', padding: '2rem', height: '200px' }}>
    <h2>コンポーネント 1</h2>
    <p>これは最初のサンプルコンポーネントです。</p>
  </div>
);

const SampleComponent2 = () => (
  <div style={{ background: '#ddffdd', padding: '2rem', height: '200px' }}>
    <h2>コンポーネント 2</h2>
    <button onClick={() => alert('Clicked!')}>Click Me!</button>
  </div>
);

const SampleComponent3 = () => (
  <div style={{ background: '#ddddff', padding: '2rem', height: '200px' }}>
    <h2>コンポーネント 3</h2>
    <p>テキストと画像などを自由に配置できます。</p>
  </div>
);


export default function MyCarousel() {
  return (
    <Swiper
      // 使用するモジュールを指定
      modules={[Navigation, Pagination, A11y]}
      // 表示するスライドの数
      slidesPerView={1}
      // 左右のナビゲーションボタンを有効にする
      navigation
      // ページネーション（下の丸いインジケーター）を有効にする
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SampleComponent1 />
      </SwiperSlide>
      <SwiperSlide>
        <SampleComponent2 />
      </SwiperSlide>
      <SwiperSlide>
        <SampleComponent3 />
      </SwiperSlide>
    </Swiper>
  );
};
