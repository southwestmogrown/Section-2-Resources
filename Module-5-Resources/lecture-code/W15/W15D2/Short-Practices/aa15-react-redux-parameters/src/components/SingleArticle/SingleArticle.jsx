import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './SingleArticle.css';

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector(state => state.articleState.entries);
  const article = articles.find(article => article.id === id);
  // console.log(article)
  return (
    <div className='singleArticle'>
      {
        article &&
        <h1>{article.title}</h1>
      }
      {
        article &&
        <img
        src={`${article.imageUrl}`}
        alt='home'
        />
      }
      {
        article && 
        <p>
          {article.body}
        </p>
      }
    </div>
  );
};

export default SingleArticle;
