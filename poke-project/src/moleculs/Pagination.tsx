import React from "react";

import { Pagination } from 'antd';

type PropsT = {

	total: number
	setCurrentPage: (url:string) => void;
}

const PaginationElem: React.FC<PropsT> = ({total, setCurrentPage}:PropsT) => {
	
	const handleChange = (page: number, pageSize: number) => {
		const offset = (page - 1) * pageSize;
		setCurrentPage(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`)
	}

    return(
    	<Pagination onChange={handleChange} total={total} pageSize={12} showSizeChanger={false} showQuickJumper={false}/>
    )
}

export default PaginationElem;