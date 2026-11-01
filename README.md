# 간편리엄 홈페이지 스타터

## 현재 포함된 것
- 반응형 고객용 쇼핑몰 디자인
- 상품 검색, 카테고리 필터, 가격 정렬, 상세 팝업
- 쿠팡 파트너스 고지 문구
- 관리자 화면 시안(아직 인증/DB 연결 전)

## 실행
1. Node.js 20 이상 설치
2. 압축 해제 후 프로젝트 폴더에서 `npm install`
3. `npm run dev`
4. 브라우저에서 http://localhost:3000 열기

## 실제 운영 전 반드시 해야 할 것
- `app/page.tsx`의 샘플 상품을 실제 상품으로 교체
- 각 상품의 `affiliateUrl`에 본인이 쿠팡 파트너스에서 발급한 링크 입력
- 관리자 페이지를 Supabase Auth + DB + Storage에 연결하고 RLS 정책 설정
- 개인정보처리방침/이용약관/운영자 정보 등 필요한 고지 검토
- 상품 이미지의 사용 권한 확인
- 테스트 후 Vercel 배포 및 `ganpyeonrium.com`, `www.ganpyeonrium.com` 연결

## 배포 권장 구조
GitHub(소스 저장) → Vercel(Next.js 호스팅) → Supabase(상품 DB, 관리자 인증, 이미지 저장)

`.env.example`을 `.env.local`로 복사한 뒤 Supabase 프로젝트 URL과 publishable/anon key를 입력하세요. 비밀키(service_role)는 브라우저 코드나 공개 저장소에 절대 넣지 마세요.

현재 `/admin`은 시안일 뿐 보안 인증이 아닙니다. 실제 운영 상품 관리에 사용하지 마세요.
