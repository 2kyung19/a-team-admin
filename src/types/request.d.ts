export type RequestType = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: 100;
  method: string[];
  material: string[];
  status: '대기중' | '상담중';
};
