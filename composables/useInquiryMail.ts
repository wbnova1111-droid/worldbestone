export const INQUIRY_EMAIL = 'wbnova@naver.com';

export type InquiryPayload = {
  hospitalName: string;
  applicantName: string;
  phone: string;
  source: string;
  services: string;
};

export const inquirySubject = (payload: Pick<InquiryPayload, 'hospitalName' | 'applicantName'>) =>
  `[월드베스트 문의] ${payload.hospitalName} / ${payload.applicantName}`;

export const inquiryMessage = (payload: InquiryPayload) =>
  [
    `병원명: ${payload.hospitalName}`,
    `성함: ${payload.applicantName}`,
    `휴대전화번호: ${payload.phone}`,
    `관심 서비스: ${payload.services || '선택 없음'}`,
    `알게 된 경로: ${payload.source || '미선택'}`,
  ].join('\n');

export const inquiryMailto = (payload: InquiryPayload) => {
  const subject = inquirySubject(payload);
  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryMessage(payload))}`;
};
