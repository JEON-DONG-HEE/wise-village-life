import { useState } from "react";
import type {
  Area,
  ResidentLevel,
  ResidentStatus,
  ReviewStatus,
} from "../types/resident";

function ResidentForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [area, setArea] = useState<Area>("동쪽 마을");
  const [status, setStatus] = useState<ResidentStatus>("활동중");
  const [level, setLevel] = useState<ResidentLevel>("초급");
  const [reviewStatus, setReviewStatus] = useState<ReviewStatus>("확인대기");

  return (
    <div className="resident-form">
      <h2>새 주민 등록</h2>

      <div className="resident-form__field">
        <label htmlFor="resident-name">이름</label>
        <input
          id="resident-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="resident-form__field">
        <label htmlFor="resident-role">역할</label>
        <input
          id="resident-role"
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />
      </div>
      <div className="resident-form__field">
        <label htmlFor="resident-area">구역</label>
        <select
          id="resident-area"
          value={area}
          onChange={(event) => setArea(event.target.value as Area)}
        >
          <option value="동쪽 마을">동쪽 마을</option>
          <option value="서쪽 마을">서쪽 마을</option>
          <option value="남쪽 마을">남쪽 마을</option>
        </select>
      </div>
      <div className="resident-form__field">
        <label htmlFor="resident-status">상태</label>
        <select
          id="resident-status"
          value={status}
          onChange={(event) => setStatus(event.target.value as ResidentStatus)}
        >
          <option value="활동중">활동중</option>
          <option value="휴식중">휴식중</option>
          <option value="대기중">대기중</option>
        </select>
      </div>
      <div className="resident-form__field">
        <label htmlFor="resident-level">숙련도</label>
        <select
          id="resident-level"
          value={level}
          onChange={(event) => setLevel(event.target.value as ResidentLevel)}
        >
          <option value="초급">초급</option>
          <option value="일반">일반</option>
          <option value="숙련">숙련</option>
        </select>
      </div>
      <div className="resident-form__field">
        <label htmlFor="resident-review-status">검토상태</label>
        <select
          id="resident-review-status"
          value={reviewStatus}
          onChange={(event) =>
            setReviewStatus(event.target.value as ReviewStatus)
          }
        >
          <option value="확인대기">확인대기</option>
          <option value="확인완료">확인완료</option>
          <option value="반려">반려</option>
        </select>
      </div>
      <div className="resident-form__preview">
        <p>입력한 이름: {name}</p>
        <p>입력한 역할: {role}</p>
        <p>선택한 구역: {area}</p>
        <p>선택한 상태: {status}</p>
        <p>선택한 숙련도: {level}</p>
        <p>선택한 검토상태: {reviewStatus}</p>
      </div>
    </div>
  );
}

export default ResidentForm;
