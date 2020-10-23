import React, { useState, useEffect } from 'react';
import {
  InputSearch,
  Favorite
} from '../../molecules/';
import {
  Table
} from '../../organisms/';
import { mappingToTable } from './mapping';
import { columnsChracter } from '../../../utils/constants';
import { get } from '../../../services/integrations';
import {
  Spinner
} from '../../atoms/';

export const ChracterList = () => {

  const [searchValue, setSearchValue] = useState("");
  const [chracterList, setChracterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startPage(setChracterList, setIsLoading);
  }, []);

  return (
    <div className='container'>
      <div className="level navbar head">
        <div className='level-left'>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            <InputSearch
              onChange={e => setSearchValue(e.target.value)}
              id='search'
              value={searchValue}
              label="Search"
              onClick={() => onClickSearch(searchValue, setChracterList, setIsLoading)}
              className='input'
              classNameButton='button'
            />
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          {isLoading ? (
            <Spinner />
          ) : (
              <div className='block'>
                <Table
                  head={columnsChracter}
                  body={mappingToTable(chracterList)}
                />
              </div>
            )}
        </div>
      </div>
    </div >
  )
}

export const startPage = async (setChracterList, setIsLoading) => {
  setChracterList(await makeList(0, 5));
  setIsLoading(false)
}

export const onClickSearch = async (searchValue, set, setIsLoading) => {
  let result = [];
  if (searchValue) {
    setIsLoading(true);
    const resolve = await get(`search/${searchValue}`);
    result = resolve.data.results;
  }

  if (result && result.length > 0) {
    set(result)
  }
  setIsLoading(false);
}

export const makeList = async (page, limit) => {
  let status = '';
  const first = page * limit;
  let count = (page * limit) + 1;
  let list = [];
  const limited = (first + limit);
  do {
    let resolve = await get(`${count}`);
    status = resolve.data.response;
    if (resolve.data.response === "success") {
      list.push(resolve.data)
      count++;
    }
  } while ((status === "success" && count <= limited))
  return list
}

export default ChracterList;