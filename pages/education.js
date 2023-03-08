import React from "react";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const education = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv-sm.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-4xl font-sans text-white uppercase">              
              教育
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1659508110.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8">                
                教育分野
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl mb-8">
              2010年からモンゴルの教育現場を支援し、総生徒数3,500人の校舎ビル建設プロジェクトを実行しました。従って次の段階として2018年にモンゴル初のITカリキュラムを小学校から教えるOlonlog EXE IT学校（オロンログ・エグゼ）を設立し運営をしています。IT以外に数学、英語といった科目を上級レベルまで勉強できるようにしています。現時点では「オロンロゴ・エグゼ」学校で小学校1年生から高校生まで500人近くの優秀な生徒が通い、デジタル時代のモンゴル代表になるため勤勉に勉強を続けています。<br/><br/>
              設立以来、短期間で生徒たちの学習意欲は高まり、その成果は成績で現れています。卒業後カナダ、日本、トルコといった国々の大学から全額奨学金を受け留学をしている生徒たちがいます。またモンゴル国内で大学に進学する生徒たちが全員がモンゴル国立大学、モンゴル国立工業大学といったトップの大学に進学しています。オロンログ・エグゼ学校が2020年度、2022年度の大学進学全国共通試験でトップ15校の中に入っています。また2019年度にはForbes Mongolia雑誌のモンゴル最優秀教育機関賞も受けています。<br/><br/>
              高校卒業後に奨学金生として留学するばかりだけでなく、在学中にはIT、数学、英語の全国大会やウランバートル市の大会などでメダルを獲得する生徒が続出しています。特に生徒たちがIT分野で全国のITオリンピック金、銅メダル、ウランバートル市ITオリンピックの金メダル、Chingeltei区ITオリンピックの金メダルをそれぞれ獲得しました。また全国の大学生や社会人の間で行われるサイバー・セキュリティ全国大会でオロンログ・エグゼ学校の高校生たちのチームは100以上のチームが参加した2020年度大会で優勝し、大きな話題になりました。
              本校の生徒たちは、モンゴルだけでなく、世界をリードする国際的にトップ・レベルのプロフェッショナルになるように教員の皆さんと生徒たちが毎日取り組んでいます。

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default education;
