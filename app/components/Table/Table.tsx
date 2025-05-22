import type React from "react";
import IconEye from '../../assets/svg/iconEye.svg';
import Pagination from "../Pagination/Pagination";
import styles from './styles.module.scss';

export type itemTable = {
  id: number;
  name: string;
  code: string;
  phone: string;
  region: string;
  role: string;
  email: string;
  status: string;
}
type TableProps = {
  list: itemTable[];
}

const statusColors: Record<string, string> = {
  "Đang hoạt động": "bg-[#ECFDF3] text-[#12B76A]",
  "Chưa kích hoạt": "bg-[#FFF4C5] text-[#FDA712]",
  "Đã khóa tài khoản": "bg-[#D7DAE0] text-[#3D424F]",
};

const Table: React.FC<TableProps> = ({ list }) => {
  return (
    <div className={styles.containerTable}>
      <div className={styles.wrapperTable}>
        <table className="w-full border-t-[#EAECF0] text-sm">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="py-2 px-2">STT</th>
              <th>Họ tên</th>
              <th>Mã nhân viên</th>
              <th>Số điện thoại</th>
              <th>Vùng</th>
              <th>Chức vụ</th>
              <th>Email</th>
              <th>Trạng thái hợp lệ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {list.map((emp, index) => (
              <tr key={emp.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-2">{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.code}</td>
                <td>{emp.phone}</td>
                <td>{emp.region}</td>
                <td>{emp.role}</td>
                <td>{emp.email}</td>
                <td>
                  <span className={`h-[29px] py-[10px] px-[12px] rounded-[24px] text-[14px] font-semibold 
                 ${statusColors[emp.status]}
                  `}>
                    ● {emp.status}
                  </span>
                </td>
                <td>
                  <button><img src={IconEye} alt="IconEye" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div >
      <Pagination />
    </div>
  )
}
export default Table;