export type ResidentStatus = "활동중" | "휴식중" | "대기중"; // 세가지 값만 들어올 수 있다. 유니온 타입이라고 함

export type ReviewStatus = "확인대기" | "확인완료" | "반려";

export type FilterStatus = "전체" | ResidentStatus;

export type Area = "동쪽 마을" | "서쪽 마을" | "남쪽 마을";

export type AreaFilter = "전체" | Area;

export type Resident = {
  id: number; // 목록을 만들 때는 각 데이터마다 고유값이 필요함, map() 으로 반복 출력할 때 필요함
  name: string;
  area: Area;
  role: string;
  level: string;
  status: ResidentStatus;
  reviewStatus: ReviewStatus;
  registeredAt: string;
};
