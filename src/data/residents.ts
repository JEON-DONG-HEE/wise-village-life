import type { Resident } from "../types/resident";

// residents 는 Resident 타입 객체들이 들어있는 배열이다
export const residents: Resident[] = [
  {
    id: 1,
    name: "모리",
    area: "동쪽 마을",
    role: "정원 관리",
    level: "숙련",
    status: "활동중",
    reviewStatus: "확인대기",
    registeredAt: "2026-05-28",
  },
  {
    id: 2,
    name: "루나",
    area: "서쪽 마을",
    role: "도서 관리",
    level: "일반",
    status: "휴식중",
    reviewStatus: "확인완료",
    registeredAt: "2026-05-21",
  },
  {
    id: 3,
    name: "토리",
    area: "남쪽 마을",
    role: "창고 정리",
    level: "초급",
    status: "대기중",
    reviewStatus: "반려",
    registeredAt: "2026-05-18",
  },
];
