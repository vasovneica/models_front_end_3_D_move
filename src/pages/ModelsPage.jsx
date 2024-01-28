import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link, useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card/Card.jsx';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import { getOnePage } from '../config';
import { SpinLoader } from '../components/SpinLoader/SpinLoader.jsx';


const ModelsPage = () => {

  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [typeModels, setTypeModels] = useState('')
  // current page
  const [currentPage, setCurrentPage] = useState(pageFromHistory);
  // q pagination pags
  const [pagesCount, setPagesCount] = useState();

  const postQuery = searchParams.get('sort') || 'all';
  const pageFromHistory = searchParams.get('page');

  useEffect(() => {

    fetch(getOnePage(postQuery != undefined ? postQuery : 'all', pageFromHistory))
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setPagesCount(data.totalPages);
        setCurrentPage(data.page)
        setTypeModels(postQuery != undefined ? postQuery : 'all')
      })
  }, [searchParams, currentPage]);

  const pageNumbers = [];
  for (let index = 1; index <= pagesCount; index++) {
    pageNumbers.push(index)
  }
  if (!posts) {
    return <h2>Loading...</h2>
  }
  return (

    <div className='models-page'>
      <label>Sort by type</label>
      <CustomSelect postQuery={postQuery} currantPage={currentPage} setSearchParams={setSearchParams} />
      <hr />
      <div className='list-wrapper'>
        <h1>{typeModels} models</h1>

        <ul className='list-models'>
          {
            !posts[1]
              ? <SpinLoader />
              : posts.map(post => (
                <Link className='card-body' key={post._id} to={`/model/${post._id}`}>
                  <Card props={post} />
                </Link>

              ))
          }

        </ul>
      </div>

      <ul className='ul-pages'>
        {pagesCount > 1 &&
          pageNumbers.map(number => (
            <li key={number}>
              <NavLink className={number === currentPage ? 'active-page' : 'list-page'}
                to={`?sort=${typeModels}&page=${number}`}
                key={number}
                onClick={() => setCurrentPage(number)}
              >{number}
              </NavLink>
            </li>
          ))
        }
      </ul>

    </div >
  )
}
export { ModelsPage }