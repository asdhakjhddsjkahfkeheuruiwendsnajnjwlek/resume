import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        💼 我的工作经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          // 在此处修改或新增工作经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "experience1.jpg",
            role: "仓库分类员、服务员、食品包装苑、搬运工",
            title: "广州有限公司",
            time: "2021年7月 - 2021年8月",
            descriptions: [
              "如果非得给几个形容词来描绘这些工作，就是开始兴致勃勃、后来逐渐枯燥、最终麻木化"
            ],
          },
          {
            img: "experience2.jpg",
            role: "平面设计实习生助手",
            title: "爱美工作室",
            time: "2021年7月 - 2021年8月",
            descriptions: [
              "调研了自身设计思想、设计规划的优势和具体业务需求，用ps和ai进行了电商网站的界面设计和界面搭建，实现了总体网站的构成。",
              "基于孟菲斯风格设计了独特的孟菲斯风格的网站风格，独具一格，涉及ps、cad、ui、cad技术栈，将系统的美化提升做到了极致。",
            ],
          },
        ].map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              role={item.role}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
