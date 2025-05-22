'use client'
import SearchBar from "@/components/SearchBar/SearchBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Table, { type itemTable } from "@/components/Table/Table";
import TitlePage from "@/components/TitlePage/TitlePage";
import { listEmployees } from "@/constants";
import { useEffect, useState } from "react";
import type { Route } from "../../+types/home";
import IconFolder from '../../assets/svg/folder.svg';
import styles from './home.module.scss';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [search, setSearch] = useState<string>('')
  const [list, setList] = useState<itemTable[]>(listEmployees)

  useEffect(() => {
    const filtered = listEmployees.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
    setList(filtered);
  }, [search])


  return <div className={styles.app}>
    <Sidebar />
    <div className={styles.content}>
      <TitlePage
        name="Quản lý danh sách ABE"
      />
      <div className={styles.wrapperTable}>
        <SearchBar setInputSearch={setSearch} search={search} />
        <div className={styles.contentTable}>
          {list.length > 0 ? <Table list={search ? list : listEmployees} /> : <div className={styles.tableEmpty}>
            <img src={IconFolder} alt="IconFolder" />
          </div>}
        </div>
      </div>
    </div>
  </div>
}
