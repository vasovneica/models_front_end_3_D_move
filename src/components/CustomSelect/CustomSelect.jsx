import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
  { value: 'all', label: 'all' },
  { value: 'car', label: 'car' },
  { value: 'air', label: 'air' },
  { value: 'other', label: 'other' },

];

const customStyles = {

  control: (provided) => ({
    ...provided,
    color: 'hsl(200, 15%, 8%)',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
  }),

  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: 'hsl(200, 15%, 8%)',
    backgroundColor: 'var(--colors-bg)',

  }),
};


export const CustomSelect = ({ setSearchParams, postQuery, currantPage }) => {

  const [queryType, setQueryType] = useState(postQuery);
  // type in select
  const [type, setType] = useState({});
  // init value
  const [initType, setInitType] = useState(postQuery);
  // page from search string
  const [page, setPage] = useState(currantPage);

  const selected = options.find(option => option.value === queryType);

  useEffect(() => {
    const selected = options.find(option => option.value === postQuery);
    setType(selected);
  }, [postQuery])

  useEffect(() => {
    setSearchParams(`?sort=${type?.value}&page=${(type?.value === queryType ? currantPage : 1)}`);
    setInitType(selected);
  }, [type])


  return (
    <div className='select-wrapper'>
      <Select
        options={options}
        placeholder='Filter by type...'
        isClearable={false}
        isSearchable={false}
        defaultValue={initType}
        value={type}
        onChange={setType}
      />
    </div>
  )
}
