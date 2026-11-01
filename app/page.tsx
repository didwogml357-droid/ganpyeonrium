 
"use client";

import { useState } from "react";

const products = [
  { name: "싱크대 슬라이딩 수납장", category: "간편리빙", price: "가격 확인", icon: "🗄️" },
  { name: "전동 청소솔", category: "간편리빙", price: "가격 확인", icon: "🧽" },
  { name: "미니 라벨 프린터", category: "간편테크", price: "가격 확인", icon: "🏷️" },
  { name: "모션센서 LED 조명", category: "간편테크", price: "가격 확인", icon: "💡" },
  { name: "미니 무선 청소기", category: "간편테크", price: "가격 확인", icon: "✨" },
  { name: "접이식 식기 건조대", category: "간편리빙", price: "가격 확인", icon: "🍽️" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");

  const filtered = products.filter((p) =>
    (category === "전체" || p.category === category) &&
    p.name.includes(search)
  );

  return (
    <main style={{ maxWidth: 1100, margin: "auto", padding: 24, color: "#172B35" }}>
      <header style={{ padding: "20px 0", borderBottom: "1px solid #ddd" }}>
        <h1 style={{ fontSize: 30, fontWeight: 800 }}>간편리엄.</h1>
        <p>GANPYEONRIUM | 일상을 간편하게, 생활은 더 프리미엄하게.</p>
      </header>

      <section style={{
        background: "#172B35", color: "white",
        padding: "55px 25px", borderRadius: 18, marginTop: 24
      }}>
        <p style={{ color: "#B9D9D5" }}>CURATED LIFESTYLE</p>
        <h2 style={{ fontSize: 32, margin: "16px 0" }}>
          귀찮음은 줄이고,<br />만족은 높이고.
        </h2>
        <p>매일의 생활을 바꿔주는 똑똑한 아이템을 발견하세요.</p>
      </section>

      <section style={{ marginTop: 35 }}>
        <h2>오늘의 추천 아이템</h2>
        <input
          placeholder="어떤 아이템을 찾으세요?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%", padding: 15, margin: "18px 0",
            border: "1px solid #ccc", borderRadius: 10,
            boxSizing: "border-box"
          }}
        />

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {["전체", "간편리빙", "간편테크"].map((c) => (
            <button key={c} onClick={() => setCategory(c)}
              style={{
                padding: "10px 16px", borderRadius: 25,
                border: "1px solid #B9D9D5",
                background: category === c ? "#172B35" : "white",
                color: category === c ? "white" : "#172B35"
              }}>{c}</button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
          gap: 15
        }}>
          {filtered.map((p) => (
            <article key={p.name} style={{
              background: "white", border: "1px solid #eee",
              borderRadius: 14, padding: 18
            }}>
              <div style={{
                fontSize: 52, background: "#F0F0E9",
                textAlign: "center", padding: 25, borderRadius: 10
              }}>{p.icon}</div>
              <p style={{ color: "#668782", fontSize: 13 }}>{p.category}</p>
              <h3 style={{ fontSize: 16 }}>{p.name}</h3>
              <p>{p.price}</p>
              <span style={{ fontSize: 12, color: "#888" }}>상품 준비 중</span>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 60, padding: "25px 0", borderTop: "1px solid #ddd", fontSize: 12 }}>
        간편리엄은 상품을 큐레이션하는 추천 사이트입니다.
        <p>일부 링크를 통한 구매 시 제휴 수수료를 받을 수 있습니다.</p>
        <p>© GANPYEONRIUM</p>
      </footer>
    </main>
  );
}
