import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MiniStateGrid from './components/MiniStateGrid';
import { stateData } from '@/data/stateData';
import Button from '@/components/button/Button';
import CheckTable from './components/CheckTable';
import { tableDataCheck } from '@/data/tableDataCheck';

const HomePage = () => {
  return (
    <div
      id="wrap"
      className="bg-gray-300"
    >
      <Header />
      {/* ministate */}
      <main className="inner flex flex-col gap-10">
        <div className="flex gap-4">
          <Button>확인</Button>
          <Button gray>취소</Button>
        </div>

        <MiniStateGrid stateData={stateData} />

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="grow">
            {/* <CheckTable tableDataCheck={tableDataCheck} /> */}
          </div>
          <div className="grow flex flex-col gap-4">
            <div className="bg-green-100 grow">g</div>
            <div className="bg-green-100 grow">g</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
