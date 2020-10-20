import React, { useState, useEffect } from 'react';
import {
    InputSearch
} from '../../molecules/';
import {
    Table
} from '../../organisms/';
import { mappingToTable} from './mapping';
import { columnsChracter } from '../../../utils/constants';
import api from '../../../services/api';

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
                onClick={e=> console.log('CLICK')}
            />
            <Table
                head={columnsChracter}
                body={mappingToTable(chracterList)}
            />
        </div>
    )
}

export const get = async (i) =>{
    const result = await api.get(`${i}`);
    return result;
}

export const makeList = async(page,limit) => {
  let status = 200;
  let first= page*limit;
  let count= (page*limit)+1;
  let list = [];
  while (status === 200 && count <= first+limit){
    let resolve = await get(count);
    status = resolve.status;
    list.push(resolve.data)
    count++;
  }
  return list
}

export default ChracterList;