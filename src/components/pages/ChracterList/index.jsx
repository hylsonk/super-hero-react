import React, { useState, useEffect } from 'react';
import {
    InputSearch
} from '../../molecules/';
import {
    Table
} from '../../organisms/';
import { mappingToTable} from './mapping';
import { columnsChracter } from '../../../utils/constants';
import { get } from '../../../services/integrations';

export const ChracterList = () => {

    const [searchValue, setSearchValue] = useState("");
    const [chracterList, setChracterList] = useState([]);

    useEffect(() => {
      (async () => {
        setChracterList( await makeList(0,10))
      })()
    }, []);

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue])

    return(
        <div className='container'>
            <InputSearch
                onChange={e => setSearchValue(e.target.value)}
                id='search'
                value={searchValue}
                label="Search"
                onClick={()=> onClickSearch(searchValue, setChracterList)}
            />
            <Table
                head={columnsChracter}
                body={mappingToTable(chracterList)}
            />
        </div>
    )
}

export const onClickSearch = async (searchValue, set) => {
  let result = [];
  if(searchValue) {
    const resolve = await get(`search/${searchValue}`);
    result = resolve.data.results;
  } else {
    result = makeList(0,10);
  }
   set(result)
}

export const makeList = async(page,limit) => {
  let status = '';
  let first= page*limit;
  let count= (page*limit)+1;
  let list = [];
  do {
    let resolve = await get(`${count}`);
    status = resolve.data.response;
    if(resolve.data.response === "success"){
      list.push(resolve.data)
      count++;
    }
  } while((status === "success" && count <= first+limit))
  return list
}

export default ChracterList;