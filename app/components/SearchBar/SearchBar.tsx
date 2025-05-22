import IconDownload from '../../assets/svg/download.svg';
import IconDown from '../../assets/svg/iconDown.svg';
import IconSearch from '../../assets/svg/iconSearch.svg';
import IconPlus from '../../assets/svg/plus.svg';
import IconUpload from '../../assets/svg/upload.svg';
import styles from './styles.module.scss';
type SearchBarProps = {
  search: string;
  setInputSearch: (value: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ setInputSearch, search }) => {
  return (
    <div className={styles.containerSearch}>
      <div className={styles.wrapperSearchBar}>
        <div className="border border-[#D7DAE0] px-[6px] py-[6px] h-[36px] rounded-[8px] w-full flex gap-2 items-center">
          <img src={IconSearch} alt="IconSearch" className='h-[24px]' />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full h-[24px] focus-within:outline-0"
            value={search}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.actionSearch}>
          <button><span>Tải lên nhân viên</span> <img src={IconUpload} alt='IconUpload' /></button>
          <button><span>Xuất danh sách tài khoản</span> <img src={IconDownload} alt='IconDownload' /></button>
          <button><span>Tạo mới</span> <img src={IconPlus} alt='IconPlus' /></button>
        </div>

      </div>
      <div className={styles.searchKit}>
        <span>Bộ lộc:</span>
        <button><span>Trạng thái</span> <img src={IconDown} alt="IconDown" /></button>
        <button><span>Vùng</span> <img src={IconDown} alt="IconDown" /></button>
      </div>
    </div>
  )
}

export default SearchBar